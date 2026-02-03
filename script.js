document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const timeElapsedEl = document.getElementById('time-elapsed');
    const timeHoursEl = document.getElementById('time-hours');
    const totalDistanceEl = document.getElementById('total-distance');
    const currentSpeedEl = document.getElementById('current-speed');
    const averageSpeedEl = document.getElementById('average-speed');
    const statusEl = document.getElementById('status');
    const historyList = document.getElementById('history-list');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const progressFill = document.getElementById('progress-fill');
    
    let tracking = false;
    let startTime = null;
    let lastPosition = null;
    let lastUpdateTime = null;
    let totalDistance = 0;
    let intervalId = null;
    let watchId = null;
    let history = JSON.parse(localStorage.getItem('history')) || [];
    const minSpeedThreshold = 0.05; // km/min (about 3 km/h) - adjust if needed
    
    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('darkMode', document.body.classList.contains('dark'));
    });
    if (localStorage.getItem('darkMode') === 'true') document.body.classList.add('dark');
    
    function loadUserData() {
        history = JSON.parse(localStorage.getItem('history')) || [];
        displayHistory();
    }
    
    // Haversine formula
    function calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLng = (lng2 - lng1) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLng/2) * Math.sin(dLng/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }
    
    function updateStats() {
        const now = Date.now();
        const elapsedMs = now - startTime;
        const elapsedMin = elapsedMs / (1000 * 60);
        const hours = Math.floor(elapsedMin / 60);
        const minutes = (elapsedMin % 60).toFixed(1);
        
        timeElapsedEl.textContent = elapsedMin.toFixed(1);
        timeHoursEl.textContent = `${hours} hr ${minutes} min`;
        
        if (totalDistance > 0 && elapsedMin > 0) {
            averageSpeedEl.textContent = (totalDistance / elapsedMin).toFixed(4);
        }
        
        // Update progress bar (simulate based on time, e.g., 100% in 60 min)
        const progress = Math.min((elapsedMin / 60) * 100, 100);
        progressFill.style.width = `${progress}%`;
    }
    
    function displayHistory() {
        historyList.innerHTML = '';
        history.forEach((run, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${run.date}: ${run.distance} km in ${run.time} min (Avg: ${run.avgSpeed} km/min)</span>
                <button onclick="deleteHistory(${index})"><i class="fas fa-trash"></i></button>
            `;
            historyList.appendChild(li);
        });
    }
    
    window.deleteHistory = function(index) {
        history.splice(index, 1);
        localStorage.setItem('history', JSON.stringify(history));
        displayHistory();
    };
    
    function startTracking() {
        if (navigator.geolocation) {
            tracking = true;
            startTime = Date.now();
            lastUpdateTime = startTime;
            totalDistance = 0;
            statusEl.textContent = 'Tracking... Start walking/running!';
            
            watchId = navigator.geolocation.watchPosition((position) => {
                const { latitude, longitude } = position.coords;
                const currentPosition = { lat: latitude, lng: longitude };
                const currentTime = Date.now();
                
                if (lastPosition) {
                    const distance = calculateDistance(lastPosition.lat, lastPosition.lng, currentPosition.lat, currentPosition.lng);
                    const timeDiffMs = currentTime - lastUpdateTime;
                    const timeDiffMin = timeDiffMs / (1000 * 60);
                    const currentSpeed = timeDiffMin > 0 ? (distance / timeDiffMin) : 0;
                    
                    currentSpeedEl.textContent = currentSpeed.toFixed(4);
                    
                    // Only track distance if moving above threshold
                    if (currentSpeed > minSpeedThreshold) {
                        totalDistance += distance;
                        totalDistanceEl.textContent = totalDistance.toFixed(2);
                        statusEl.textContent = 'Tracking... Moving!';
                        lastUpdateTime = currentTime; // Update for next speed calc
                        updateStats();
                    } else {
                        statusEl.textContent = 'Paused (no movement). Start walking/running!';
                    }
                }
                lastPosition = currentPosition;
            }, (error) => {
                let msg = 'Unknown error.';
                if (error.code === 1) msg = 'Location access denied. Enable permissions in browser settings.';
                else if (error.code === 2) msg = 'Location unavailable. Check GPS and try outdoors.';
                else if (error.code === 3) msg = 'Timeout. Try outdoors or wait longer for GPS lock.';
                statusEl.textContent = `Error: ${msg}`;
            }, { enableHighAccuracy: false, maximumAge: 1000, timeout: 10000 });
            
            intervalId = setInterval(updateStats, 1000); // Keep time updating
            startBtn.disabled = true;
            stopBtn.disabled = false;
        } else {
            statusEl.textContent = 'Geolocation not supported.';
        }
    }
    
    function stopTracking() {
        tracking = false;
        if (watchId) navigator.geolocation.clearWatch(watchId);
        if (intervalId) clearInterval(intervalId);
        
        const now = new Date();
        const runData = {
            date: now.toLocaleDateString(),
            distance: totalDistance.toFixed(2),
            time: timeElapsedEl.textContent,
            avgSpeed: averageSpeedEl.textContent
        };
        history.push(runData);
        localStorage.setItem('history', JSON.stringify(history));
        displayHistory();
        
        statusEl.textContent = 'Stopped. Run saved locally.';
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
    
    startBtn.addEventListener('click', startTracking);
    stopBtn.addEventListener('click', stopTracking);
    
    loadUserData(); // Load history on page load
});

:root {
    --primary: linear-gradient(45deg, #4CAF50, #66BB6A);
    --secondary: linear-gradient(45deg, #FF5722, #FF7043);
    --bg-light: #f4f4f4;
    --bg-dark: #121212;
    --text-light: #333;
    --text-dark: #fff;
    --card-bg: #fff;
    --card-shadow: rgba(0,0,0,0.1);
    --glow: 0 0 20px rgba(76, 175, 80, 0.5);
}

body {
    font-family: 'Roboto', Arial, sans-serif;
    background: var(--bg-light);
    color: var(--text-light);
    margin: 0;
    padding: 10px;
    transition: background 0.5s ease, color 0.5s ease;
    overflow-x: hidden;
}

body.dark {
    --bg-light: var(--bg-dark);
    --text-light: var(--text-dark);
    --card-bg: #1e1e1e;
    --card-shadow: rgba(255,255,255,0.1);
    --glow: 0 0 20px rgba(255, 87, 34, 0.5);
}

.background-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(76,175,80,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: particle-float 20s infinite linear;
    z-index: -1;
}

@keyframes particle-float {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50px); }
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: var(--card-bg);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px var(--card-shadow);
    animation: container-appear 1s ease-out;
    position: relative;
}

@keyframes container-appear {
    0% { opacity: 0; transform: scale(0.9) rotate(-2deg); }
    100% { opacity: 1; transform: scale(1) rotate(0); }
}

.slide-in {
    animation: slideIn 0.8s ease-out;
}

@keyframes slideIn {
    0% { opacity: 0; transform: translateX(-50px); }
    100% { opacity: 1; transform: translateX(0); }
}

.flip-in {
    animation: flipIn 1s ease-out;
}

@keyframes flipIn {
    0% { opacity: 0; transform: rotateY(90deg); }
    100% { opacity: 1; transform: rotateY(0); }
}

.fade-in {
    animation: fadeIn 1.2s ease-out;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

.bounce {
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
}

.spin {
    animation: spin 3s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.glow {
    box-shadow: var(--glow);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.glow:hover {
    box-shadow: 0 0 30px rgba(76, 175, 80, 0.8);
    transform: scale(1.05);
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

h1 {
    background: var(--primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    font-size: 1.5em;
}

#dark-mode-toggle {
    background: none;
    border: none;
    color: var(--text-light);
    font-size: 1.5em;
    cursor: pointer;
    padding: 5px;
    transition: transform 0.3s ease;
}

#dark-mode-toggle:hover {
    transform: rotate(180deg);
}

.controls {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

button {
    background: var(--primary);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1em;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 5px;
}

button:hover {
    background: var(--secondary);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

button:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
}

.stat-card {
    background: var(--card-bg);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 10px var(--card-shadow);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-10px) rotate(2deg);
    box-shadow: 0 8px 25px var(--card-shadow);
}

.stat-card i {
    font-size: 2em;
    color: #4CAF50;
    margin-bottom: 10px;
    transition: color 0.3s ease;
}

.stat-card:hover i {
    color: #FF5722;
}

#status {
    text-align: center;
    color: #FF5722;
    font-weight: bold;
    margin-bottom: 20px;
    transition: color 0.5s ease;
}

.progress-bar {
    width: 100%;
    height: 10px;
    background: #ddd;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 20px;
}

#progress-fill {
    height: 100%;
    background: var(--primary);
    width: 0%;
    transition: width 0.5s ease;
}

.history {
    text-align: left;
}

.history h2 {
    color: #4CAF50;
    margin-bottom: 10px;
}

.history ul {
    list-style-type: none;
    padding: 0;
}

.history li {
    background: var(--card-bg);
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 10px var(--card-shadow);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    transition: transform 0.3s ease;
}

.history li:hover {
    transform: scale(1.02);
}

.history button {
    background: var(--secondary);
    padding: 5px 10px;
    font-size: 0.8em;
    transition: background 0.3s ease;
}

.history button:hover {
    background: #e64a19;
    transform: scale(1.1);
}

.help-contact {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid var(--card-shadow);
    text-align: center;
}

.help-contact h2 {
    color: #4CAF50;
    margin-bottom: 15px;
}

.help-contact p {
    margin: 10px 0;
    font-size: 1em;
    transition: transform 0.3s ease;
}

.help-contact p:hover {
    transform: translateX(5px);
}

.help-contact a {
    color: #FF5722;
    text-decoration: none;
    transition: color 0.3s ease;
}

.help-contact a:hover {
    color: #4CAF50;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .container {
        padding: 15px;
    }
    header {
        flex-direction: column;
        text-align: center;
    }
    .stats {
        grid-template-columns: 1fr;
    }
    .stat-card {
        padding: 10px;
    }
    button {
        padding: 10px 15px;
        font-size: 0.9em;
    }
    .history li {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    .help-contact {
        margin-top: 20px;
        padding-top: 15px;
    }
    .help-contact p {
        font-size: 0.9em;
    }
}

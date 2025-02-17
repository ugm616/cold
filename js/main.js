import { EARTH_COUNTRIES_1985 } from '../data/earthCountries.js';
import EarthMap from '../map/earthMap.js';

class GameLoader {
    constructor() {
        this.loadingScreen = document.getElementById('loadingScreen');
        this.progressBar = this.loadingScreen.querySelector('.progress-bar');
        this.loadingText = this.loadingScreen.querySelector('.loading-text');
        this.progress = 0;
        this.isLoaded = false;
        this.processedEvents = new Set();
        
        // Game state
        this.currentUser = 'ugm616';
        this.gameTime = new Date('1985-01-01T00:00:00Z');
        this.realTime = new Date('2025-02-17 15:19:03Z');
        this.timeScale = 1; // 1 real second = 1 game hour
        this.isPaused = false;

        // Game systems
        this.gameUI = null;
        this.gameConsole = null;
        this.earthMap = null;
    }

    async initializeGame() {
        try {
            // Update loading text and progress
            const loadingSteps = [
                { text: 'INITIALIZING CORE SYSTEMS...', weight: 10 },
                { text: 'LOADING USER INTERFACE...', weight: 15 },
                { text: 'CONFIGURING MAP SYSTEM...', weight: 20 },
                { text: 'LOADING HISTORICAL DATA...', weight: 20 },
                { text: 'ESTABLISHING COMMAND CONSOLE...', weight: 15 },
                { text: 'CONFIGURING TIME SYSTEMS...', weight: 10 },
                { text: 'FINALIZING SETUP...', weight: 10 }
            ];

            // Initialize each system
            for (const step of loadingSteps) {
                await this.loadingStep(step);
            }

            // Initialize core game systems
            this.gameUI = new GameUI(this.currentUser, this.gameTime);
            this.gameConsole = new GameConsole();
            this.earthMap = new EarthMap('gameCanvas');

            // Start game systems
            this.startGameSystems();

            // Complete loading
            this.setProgress(100, 'INITIALIZATION COMPLETE');
            await this.delay(500);

            // Remove loading screen and start game
            this.hideLoadingScreen();
            this.startGame();

        } catch (error) {
            console.error('Failed to initialize game:', error);
            this.handleInitializationError(error);
        }
    }

    async loadingStep(step) {
        this.setProgress(this.progress + step.weight, step.text);
        await this.delay(300);
    }

    setProgress(value, text) {
        this.progress = Math.min(value, 100);
        this.progressBar.style.width = `${this.progress}%`;
        if (text) {
            this.loadingText.textContent = text;
        }
    }

    hideLoadingScreen() {
        this.loadingScreen.style.opacity = '0';
        setTimeout(() => {
            this.loadingScreen.style.display = 'none';
        }, 500);
    }

    startGameSystems() {
        // Initialize UI controls
        this.initializeUI();

        // Start time management
        this.startTimeSystem();

        // Initialize event handlers
        this.initializeEventHandlers();

        // Start autosave system
        this.startAutosave();
    }

    initializeUI() {
        // Map controls
        document.getElementById('zoomInBtn').addEventListener('click', () => {
            this.earthMap.handleZoom({ preventDefault: () => {}, deltaY: -100 });
        });
        
        document.getElementById('zoomOutBtn').addEventListener('click', () => {
            this.earthMap.handleZoom({ preventDefault: () => {}, deltaY: 100 });
        });
        
        document.getElementById('pauseBtn').addEventListener('click', () => {
            this.togglePause();
        });
        
        document.getElementById('slowDownBtn').addEventListener('click', () => {
            this.decreaseTimeScale();
        });
        
        document.getElementById('speedUpBtn').addEventListener('click', () => {
            this.increaseTimeScale();
        });
        
        document.getElementById('clearConsoleBtn').addEventListener('click', () => {
            this.gameConsole.clear();
        });

        // Help button
        document.getElementById('helpBtn').addEventListener('click', () => {
            this.toggleHelp();
        });

        // Region filters
        document.querySelectorAll('.region-item').forEach(item => {
            item.addEventListener('click', (e) => {
                this.filterByRegion(e.target.dataset.region);
            });
        });

        // Initialize country selection handler
        this.earthMap.canvas.addEventListener('countrySelect', (e) => {
            this.updateCountryInfo(e.detail.country);
        });
    }

    updateCountryInfo(country) {
        const detailsElement = document.getElementById('countryDetails');
        const nameElement = document.getElementById('countryName');
        const statsElement = document.getElementById('countryStats');

        if (country) {
            nameElement.textContent = country.name;
            statsElement.innerHTML = `
                <div class="stat-row">Population: ${this.formatNumber(country.population)}</div>
                <div class="stat-row">Military Tech: ${country.technology}</div>
                <div class="stat-row">Economy: ${country.economy}</div>
                <div class="stat-row">Stability: ${country.stability}</div>
                <div class="stat-row">Resources: ${country.resources.join(', ')}</div>
                ${country.military.nuclear ? '<div class="stat-row nuclear">NUCLEAR CAPABLE</div>' : ''}
            `;
        } else {
            nameElement.textContent = 'Select a country';
            statsElement.innerHTML = '';
        }
    }

    startTimeSystem() {
        // Update game time every second
        this.timeInterval = setInterval(() => {
            if (!this.isPaused) {
                // Advance game time by timeScale hours
                this.gameTime.setHours(this.gameTime.getHours() + this.timeScale);
                this.gameUI.updateGameTime(this.gameTime);
                
                // Update real time
                this.updateRealTime();
                
                // Check for historical events
                this.checkHistoricalEvents();
            }
        }, 1000);
    }

    updateRealTime() {
        const realTimeElement = document.getElementById('realTimeDisplay');
        if (realTimeElement) {
            const now = new Date();
            realTimeElement.textContent = `REAL: ${now.toISOString().replace('T', ' ').split('.')[0]}`;
        }
    }

    initializeEventHandlers() {
        // Global keyboard handlers
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case ' ':
                    e.preventDefault();
                    this.togglePause();
                    break;
                case 'h':
                case 'H':
                    this.toggleHelp();
                    break;
                case 'm':
                case 'M':
                    this.toggleMapMode();
                    break;
                case 'r':
                case 'R':
                    this.resetView();
                    break;
                case 's':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.saveGame();
                    }
                    break;
            }
        });
    }

    toggleHelp() {
        const helpModal = document.getElementById('helpModal');
        helpModal.classList.toggle('hidden');
    }

    toggleMapMode() {
        // Implement different map visualization modes
        this.earthMap.toggleMapMode();
    }

    resetView() {
        this.earthMap.resetView();
    }

    startGame() {
        // Initialize with Earth map
        this.earthMap.render();

        // Log initial status
        this.gameConsole.system('GLOBAL COMMAND AND CONTROL SYSTEM - 1985');
        this.gameConsole.system(`Commander ${this.currentUser} logged in`);
        this.gameConsole.system(`Session start: ${this.realTime.toISOString()}`);
        this.gameConsole.system('COLD WAR SCENARIO LOADED');
        this.gameConsole.system('AWAITING ORDERS...');

        // Initial game state setup
        this.initializeGameState();
    }

    initializeGameState() {
        // Initialize with existing data from earthCountries.js
        this.countryData = EARTH_COUNTRIES_1985;
        
        // Initialize countries and alliances
        this.initializeCountries();

        // Initialize player's starting condition
        this.initializePlayerState();
    }

    initializeCountries() {
        try {
            Object.entries(this.countryData).forEach(([key, data]) => {
                this.earthMap.countries.set(key, data);
            });
            this.gameConsole.system('Countries initialized');
        } catch (error) {
            this.gameConsole.error('Error initializing countries');
            console.error('Country initialization error:', error);
        }
    }

    initializePlayerState() {
        this.playerState = {
            selectedCountry: null,
            resources: {
                money: 1000,
                influence: 50,
                technology: 1
            },
            notifications: []
        };
        this.updateResourceDisplay();
    }

    updateResourceDisplay() {
        document.getElementById('moneyValue').textContent = this.playerState.resources.money;
        document.getElementById('influenceValue').textContent = this.playerState.resources.influence;
        document.getElementById('techValue').textContent = this.playerState.resources.technology;
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        const pauseBtn = document.getElementById('pauseBtn');
        pauseBtn.textContent = this.isPaused ? '▶️' : '⏸️';
        this.gameConsole.system(this.isPaused ? 'GAME PAUSED' : 'GAME RESUMED');
    }

    increaseTimeScale() {
        if (this.timeScale < 24) {
            this.timeScale *= 2;
            this.gameConsole.system(`Game speed: ${this.timeScale}x`);
        }
    }

    decreaseTimeScale() {
        if (this.timeScale > 1) {
            this.timeScale /= 2;
            this.gameConsole.system(`Game speed: ${this.timeScale}x`);
        }
    }

    saveGame() {
        try {
            const saveData = {
                gameTime: this.gameTime,
                playerState: this.playerState,
                countries: Array.from(this.earthMap.countries.entries()),
                version: '1.0'
            };
            localStorage.setItem('gameState', JSON.stringify(saveData));
            this.gameConsole.success('Game saved successfully');
        } catch (error) {
            this.gameConsole.error('Failed to save game');
            console.error('Save game error:', error);
        }
    }

    startAutosave() {
        // Autosave every 5 minutes
        setInterval(() => {
            this.saveGame();
        }, 300000);
    }

    checkHistoricalEvents() {
        // Check for events based on game time
        const currentDate = this.gameTime.toISOString().split('T')[0];
        Object.entries(this.countryData).forEach(([key, country]) => {
            if (country.historicalContext && !this.processedEvents.has(`${key}-${currentDate}`)) {
                this.gameConsole.info(`${country.name}: ${country.historicalContext}`);
                this.processedEvents.add(`${key}-${currentDate}`);
            }
        });
    }

    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    handleInitializationError(error) {
        this.loadingText.textContent = 'ERROR: INITIALIZATION FAILED';
        this.loadingText.style.color = '#ff0000';
        this.gameConsole?.error('Game initialization failed: ' + error.message);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    filterByRegion(region) {
        this.earthMap.highlightRegion(region);
    }
}

class GameUI {
    constructor(currentUser, gameTime) {
        this.currentUser = currentUser;
        this.gameTime = gameTime;
        this.timeDisplay = document.getElementById('timeDisplay');
        this.updateGameTime(gameTime);
    }

    updateGameTime(time) {
        if (this.timeDisplay) {
            this.timeDisplay.textContent = `TIME: ${time.toISOString().replace('T', ' ').split('.')[0]}`;
        }
    }
}

class GameConsole {
    constructor() {
        this.console = document.getElementById('gameConsole');
        this.maxLines = 100;
    }

    log(message, type = 'info') {
        const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
        const line = document.createElement('div');
        line.className = `console-line ${type}`;
        line.textContent = `[${timestamp}] ${message}`;
        this.console.appendChild(line);
        this.console.scrollTop = this.console.scrollHeight;

        // Trim old messages if needed
        while (this.console.children.length > this.maxLines) {
            this.console.removeChild(this.console.firstChild);
        }
    }

    system(message) { this.log(message, 'system'); }
    info(message) { this.log(message, 'info'); }
    warning(message) { this.log(message, 'warning'); }
    error(message) { this.log(message, 'error'); }
    success(message) { this.log(message, 'success'); }

    clear() {
        while (this.console.firstChild) {
            this.console.removeChild(this.console.firstChild);
        }
    }
}

// Start the game when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    const gameLoader = new GameLoader();
    gameLoader.initializeGame().catch(error => {
        console.error('Critical error during game initialization:', error);
        document.querySelector('.loading-text').textContent = 'CRITICAL ERROR: GAME FAILED TO START';
    });
});

import { HISTORICAL_EVENTS_1985 } from './data/historicalEvents.js';
import { EARTH_COUNTRIES_1985 } from './data/countries.js';
import { COUNTRY_BORDERS_1985 } from './data/countryBorders.js';
import { REGION_GROUPS } from './data/regionGroups.js';
import { ALLIANCE_STYLES } from './data/allianceStyles.js';
import EarthMap from './earthMap.js';

class GameLoader {
    constructor() {
        this.loadingScreen = document.getElementById('loadingScreen');
        this.progressBar = this.loadingScreen.querySelector('.progress-bar');
        this.loadingText = this.loadingScreen.querySelector('.loading-text');
        this.progress = 0;
        this.isLoaded = false;
        
        // Game state
        this.currentUser = 'ugm616';
        this.gameTime = new Date('1985-01-01T00:00:00Z');
        this.realTime = new Date('2025-02-17T14:22:15Z');
        this.timeScale = 1; // 1 real second = 1 game hour
        this.isPaused = false;

        // Game systems
        this.gameUI = null;
        this.gameConsole = null;
        this.earthMap = null;
        this.historicalEvents = HISTORICAL_EVENTS_1985;
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
        // Start time management
        this.startTimeSystem();

        // Initialize event handlers
        this.initializeEventHandlers();

        // Start autosave system
        this.startAutosave();
    }

    startTimeSystem() {
        // Update game time every second
        this.timeInterval = setInterval(() => {
            if (!this.isPaused) {
                // Advance game time by one hour
                this.gameTime.setHours(this.gameTime.getHours() + this.timeScale);
                this.gameUI.updateGameTime(this.gameTime);
                
                // Check for historical events
                this.checkHistoricalEvents();
            }
        }, 1000);
    }

    initializeEventHandlers() {
        // Pause/Resume handler
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ') { // Space bar
                this.togglePause();
            }
        });

        // Time control handlers
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case '+':
                    this.increaseTimeScale();
                    break;
                case '-':
                    this.decreaseTimeScale();
                    break;
            }
        });

        // Save game handler
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                this.saveGame();
            }
        });
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
        // Initialize countries and alliances
        this.initializeCountries();

        // Set up initial diplomatic relations
        this.initializeDiplomacy();

        // Initialize player's starting condition
        this.initializePlayerState();
    }

    initializeCountries() {
        try {
            Object.entries(EARTH_COUNTRIES_1985).forEach(([key, data]) => {
                this.earthMap.countries.set(key, data);
            });
            this.gameConsole.system('Countries initialized');
        } catch (error) {
            this.gameConsole.error('Error initializing countries');
            console.error('Country initialization error:', error);
        }
    }

    initializeDiplomacy() {
        try {
            // Set up initial alliances based on REGION_GROUPS
            Object.entries(REGION_GROUPS).forEach(([alliance, members]) => {
                members.forEach(country => {
                    if (this.earthMap.countries.has(country)) {
                        this.earthMap.countries.get(country).alliance = alliance;
                    }
                });
            });
            this.gameConsole.system('Diplomatic relations established');
        } catch (error) {
            this.gameConsole.error('Error initializing diplomatic relations');
            console.error('Diplomacy initialization error:', error);
        }
    }

    initializePlayerState() {
        // Set up initial player resources and status
        this.playerState = {
            selectedCountry: null,
            resources: {
                money: 1000,
                influence: 50,
                technology: 1
            },
            notifications: []
        };
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        this.gameConsole.system(this.isPaused ? 'GAME PAUSED' : 'GAME RESUMED');
    }

    increaseTimeScale() {
        if (this.timeScale < 24) {  // Max 24 hours per second
            this.timeScale *= 2;
            this.gameConsole.system(`Time scale increased to ${this.timeScale}x`);
        }
    }

    decreaseTimeScale() {
        if (this.timeScale > 1) {  // Min 1 hour per second
            this.timeScale /= 2;
            this.gameConsole.system(`Time scale decreased to ${this.timeScale}x`);
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
        try {
            // Check for events based on game time
            const currentDate = this.gameTime.toISOString().split('T')[0];
            if (this.historicalEvents && this.historicalEvents[currentDate]) {
                const event = this.historicalEvents[currentDate];
                this.gameConsole.system(`HISTORICAL EVENT: ${event.name}`);
                this.handleHistoricalEvent(event);
            }
        } catch (error) {
            console.error('Error checking historical events:', error);
            this.gameConsole.error('Error processing historical events');
        }
    }

    handleHistoricalEvent(event) {
        // Process event effects
        if (event.effects && Array.isArray(event.effects)) {
            event.effects.forEach(effect => {
                this.applyEventEffect(effect);
            });
        }
        
        // Display event description
        this.gameConsole.info(event.description);
    }

    applyEventEffect(effect) {
        switch (effect.type) {
            case 'TENSION':
                this.adjustTension(effect.regions, effect.value);
                break;
            case 'DIPLOMATIC':
                this.adjustDiplomaticRelations(effect.country, effect.value);
                break;
            default:
                console.warn('Unknown effect type:', effect.type);
        }
    }

    adjustTension(regions, value) {
        regions.forEach(region => {
            // Implement tension adjustment logic
            this.gameConsole.system(`${region} tension adjusted by ${value}`);
        });
    }

    adjustDiplomaticRelations(country, value) {
        // Implement diplomatic relations adjustment logic
        this.gameConsole.system(`${country} diplomatic relations adjusted by ${value}`);
    }

    handleInitializationError(error) {
        this.loadingText.textContent = 'ERROR: INITIALIZATION FAILED';
        this.loadingText.style.color = '#ff0000';
        this.gameConsole?.error('Game initialization failed: ' + error.message);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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
            this.timeDisplay.textContent = time.toISOString().replace('T', ' ').split('.')[0];
        }
    }
}

class GameConsole {
    constructor() {
        this.console = document.getElementById('gameConsole');
    }

    log(message, type = 'info') {
        const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
        const line = document.createElement('div');
        line.className = `console-line ${type}`;
        line.textContent = `[${timestamp}] ${message}`;
        this.console.appendChild(line);
        this.console.scrollTop = this.console.scrollHeight;
    }

    system(message) { this.log(message, 'system'); }
    info(message) { this.log(message, 'info'); }
    warning(message) { this.log(message, 'warning'); }
    error(message) { this.log(message, 'error'); }
    success(message) { this.log(message, 'success'); }
}

// Start the game when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    const gameLoader = new GameLoader();
    gameLoader.initializeGame().catch(error => {
        console.error('Critical error during game initialization:', error);
        document.querySelector('.loading-text').textContent = 'CRITICAL ERROR: GAME FAILED TO START';
    });
});

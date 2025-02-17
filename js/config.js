const GAME_CONFIG = {
    // Game settings
    startYear: 1985,
    maxPlayers: 4,
    mapSize: {
        width: 800,
        height: 600
    },
    
    // Movement speeds (tiles per turn)
    baseMovementSpeeds: {
        land: 1,
        sea: 1,
        air: 2
    },
    
    // Military bonuses
    militaryBonuses: {
        airforce: {
            movementBonus: 0.5,
            combatBonus: 0.2
        },
        navy: {
            seaMovementBonus: 1,
            seaCombatBonus: 0.3
        }
    },
    
    // Alliance settings
    allianceBonusMultiplier: 0.5,
    
    // Country base stats
    countryBaseStats: {
        populationToTroops: 5000000, // 5 million population = 1 troop
        baseIncome: 100,
        baseTechnology: 1,
        baseDefense: 1
    },
    
    // UI settings
    consoleMsgLimit: 100,
    updateInterval: 1000, // milliseconds
};

// Color palette
const COLORS = {
    text: '#33ff33',
    background: '#000000',
    highlight: '#00ff00',
    error: '#ff0000',
    warning: '#ffff00'
};

// Game states
const GAME_STATES = {
    MENU: 'menu',
    PLAYING: 'playing',
    PAUSED: 'paused',
    DIPLOMATIC: 'diplomatic',
    COMBAT: 'combat',
    GAMEOVER: 'gameover'
};
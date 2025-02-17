const HISTORICAL_EVENTS_1985 = {
    COLD_WAR: {
        name: "Cold War Tension",
        description: "Global tension between NATO and Warsaw Pact reaches new heights.",
        effects: {
            "USA": { militaryReadiness: 1.2 },
            "USSR": { militaryReadiness: 1.2 },
            "EUROPE": { diplomaticTension: 1.5 }
        }
    },
    
    ARMS_RACE: {
        name: "Nuclear Arms Race",
        description: "Continued development of nuclear weapons and delivery systems.",
        effects: {
            "GLOBAL": { warRisk: 1.3 },
            "NUCLEAR_POWERS": { militaryStrength: 1.4 }
        }
    },

    ECONOMIC_FACTORS: {
        name: "Global Economic Conditions",
        description: "Oil prices stabilizing after 1970s crisis, but debt issues in developing nations.",
        effects: {
            "OPEC": { economy: 1.2 },
            "DEVELOPING": { economy: 0.8 }
        }
    }
};
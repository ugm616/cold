class Country {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.population = data.population;
        this.technology = data.technology || 1;
        this.economy = data.economy || 1;
        
        // Military capabilities
        this.military = {
            troops: Math.floor(this.population / GAME_CONFIG.countryBaseStats.populationToTroops),
            airforce: data.airforce || 1,
            navy: data.navy || 1,
            army: data.army || 1
        };
        
        // Resources and bonuses
        this.resources = {
            money: data.startingMoney || 1000,
            technology: data.startingTech || 0,
            influence: data.startingInfluence || 0
        };
        
        // Diplomatic relations
        this.allies = new Set();
        this.enemies = new Set();
        this.treaties = new Map();
        
        // Upgrades and skills
        this.upgrades = new Map();
        this.skillTree = new Map();
        
        // Movement and combat modifiers
        this.modifiers = {
            movementSpeed: 1,
            combatStrength: 1,
            defenseBonus: 1,
            economyBonus: 1
        };
    }

    // Alliance methods
    formAlliance(country) {
        if (this.allies.has(country.id)) return false;
        this.allies.add(country.id);
        this.calculateAllianceBonuses();
        return true;
    }

    breakAlliance(country) {
        if (!this.allies.has(country.id)) return false;
        this.allies.delete(country.id);
        this.calculateAllianceBonuses();
        return true;
    }

    // Resource management
    updateResources() {
        this.resources.money += this.calculateIncome();
        this.resources.technology += this.calculateTechGrowth();
        this.resources.influence += this.calculateInfluence();
    }

    // Movement calculations
    getMovementSpeed(terrain) {
        let speed = GAME_CONFIG.baseMovementSpeeds[terrain];
        speed *= this.modifiers.movementSpeed;
        
        // Apply military bonuses
        if (terrain === 'air') {
            speed *= (1 + this.military.airforce * GAME_CONFIG.militaryBonuses.airforce.movementBonus);
        } else if (terrain === 'sea') {
            speed *= (1 + this.military.navy * GAME_CONFIG.militaryBonuses.navy.seaMovementBonus);
        }
        
        return speed;
    }

    // Combat methods
    calculateCombatStrength() {
        return this.military.troops * 
               this.modifiers.combatStrength * 
               (1 + this.technology * 0.1);
    }

    // Upgrade system
    canAffordUpgrade(upgrade) {
        return this.resources.money >= upgrade.cost &&
               this.resources.technology >= upgrade.techRequirement;
    }

    purchaseUpgrade(upgrade) {
        if (!this.canAffordUpgrade(upgrade)) return false;
        
        this.resources.money -= upgrade.cost;
        this.resources.technology -= upgrade.techRequirement;
        this.upgrades.set(upgrade.id, upgrade);
        this.applyUpgradeEffects(upgrade);
        
        return true;
    }

    // Helper methods
    calculateIncome() {
        return this.economy * 
               GAME_CONFIG.countryBaseStats.baseIncome * 
               this.modifiers.economyBonus;
    }

    calculateTechGrowth() {
        return this.technology * 0.1;
    }

    calculateInfluence() {
        return (this.allies.size * 2) + 
               (this.military.troops * 0.1) +
               (this.economy * 0.2);
    }

    calculateAllianceBonuses() {
        // Reset modifiers
        this.modifiers = {
            movementSpeed: 1,
            combatStrength: 1,
            defenseBonus: 1,
            economyBonus: 1
        };
        
        // Apply alliance bonuses
        this.allies.forEach(allyId => {
            const ally = gameState.countries.get(allyId);
            if (!ally) return;
            
            // Share bonuses at 50% effectiveness
            this.modifiers.movementSpeed += 
                (ally.modifiers.movementSpeed - 1) * 
                GAME_CONFIG.allianceBonusMultiplier;
            
            this.modifiers.combatStrength +=
                (ally.modifiers.combatStrength - 1) *
                GAME_CONFIG.allianceBonusMultiplier;
        });
    }
}
class GameUI {
    constructor() {
        this.currentUser = 'ugm616';
        this.gameTime = new Date('2025-02-17T10:29:23Z');
        this.timeSpeed = 1; // 1 second real time = 1 hour game time
        this.isPaused = false;

        // Initialize UI elements
        this.initializeUI();
        this.startGameClock();
    }

    initializeUI() {
        // Update user info
        document.querySelector('.user-login').textContent = `CMDR: ${this.currentUser}`;
        
        // Initialize menu handlers
        document.querySelectorAll('.menu-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleMenuClick(e));
        });

        // Initialize modal close buttons
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', () => this.closeModal());
        });

        // Update initial time
        this.updateGameTime();
    }

    startGameClock() {
        setInterval(() => {
            if (!this.isPaused) {
                // Advance game time by 1 hour for each real second
                this.gameTime.setHours(this.gameTime.getHours() + this.timeSpeed);
                this.updateGameTime();
            }
        }, 1000);
    }

    updateGameTime() {
        const timeString = this.gameTime.toISOString()
            .replace('T', ' ')
            .replace('.000Z', '');
        document.querySelector('.game-time').textContent = `TIME: ${timeString}`;
    }

    handleMenuClick(event) {
        const menuType = event.target.getAttribute('onclick')
            .replace('openMenu(\'', '')
            .replace('\')', '');
        
        switch(menuType) {
            case 'allies':
                this.showAlliesMenu();
                break;
            case 'upgrades':
                this.showUpgradesMenu();
                break;
            case 'stats':
                this.showStatsMenu();
                break;
            case 'help':
                this.showHelpMenu();
                break;
        }
    }

    showAlliesMenu() {
        const modalContent = `
            <div class="allies-menu">
                <h3>CURRENT ALLIANCES</h3>
                <div class="allies-list">
                    ${this.getAlliancesList()}
                </div>
                <h3>POTENTIAL ALLIES</h3>
                <div class="potential-allies-list">
                    ${this.getPotentialAlliesList()}
                </div>
            </div>
        `;
        this.openModal('DIPLOMATIC RELATIONS', modalContent);
    }

    showUpgradesMenu() {
        const modalContent = `
            <div class="upgrades-menu">
                <h3>AVAILABLE UPGRADES</h3>
                <div class="upgrades-list">
                    ${this.getUpgradesList()}
                </div>
                <div class="resources-info">
                    ${this.getResourcesInfo()}
                </div>
            </div>
        `;
        this.openModal('UPGRADES AND RESEARCH', modalContent);
    }

    showStatsMenu() {
        const modalContent = `
            <div class="stats-menu">
                <h3>EMPIRE STATISTICS</h3>
                <div class="stats-list">
                    ${this.getStatsList()}
                </div>
                <h3>GLOBAL RANKINGS</h3>
                <div class="rankings-list">
                    ${this.getRankingsList()}
                </div>
            </div>
        `;
        this.openModal('EMPIRE STATISTICS', modalContent);
    }

    showHelpMenu() {
        document.getElementById('helpModal').classList.remove('hidden');
    }

    openModal(title, content) {
        const modal = document.getElementById('modalOverlay');
        modal.querySelector('.modal-title').textContent = title;
        modal.querySelector('.modal-body').innerHTML = content;
        modal.classList.remove('hidden');
    }

    closeModal() {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.classList.add('hidden');
        });
    }

    // Helper methods for generating menu content
    getAlliancesList() {
        // This would be populated with actual alliance data
        return `<div class="no-allies">NO CURRENT ALLIANCES</div>`;
    }

    getPotentialAlliesList() {
        // This would be populated with potential allies
        return `<div class="potential-ally">SCANNING FOR POTENTIAL ALLIES...</div>`;
    }

    getUpgradesList() {
        // This would be populated with available upgrades
        return `<div class="no-upgrades">NO UPGRADES AVAILABLE</div>`;
    }

    getResourcesInfo() {
        // This would show current resources
        return `<div class="resources">CALCULATING RESOURCES...</div>`;
    }

    getStatsList() {
        // This would show empire statistics
        return `<div class="stats">COMPILING STATISTICS...</div>`;
    }

    getRankingsList() {
        // This would show global rankings
        return `<div class="rankings">RETRIEVING RANKINGS...</div>`;
    }

    updateCountryInfo(country) {
        if (!country) return;

        const countryDetails = document.getElementById('countryDetails');
        countryDetails.innerHTML = `
            <div class="country-header">
                <h3>${country.name}</h3>
            </div>
            <div class="country-stats">
                <div class="country-stat">
                    <span>Population:</span>
                    <span>${country.population.toLocaleString()}</span>
                </div>
                <div class="country-stat">
                    <span>Technology:</span>
                    <span>Level ${country.technology}</span>
                </div>
                <div class="country-stat">
                    <span>Military Power:</span>
                    <span>${country.calculateCombatStrength()}</span>
                </div>
            </div>
        `;
    }
}
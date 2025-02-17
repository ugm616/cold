class EarthMap {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.countries = new Map();
        this.selectedCountry = null;
        this.zoomLevel = 1;
        this.mapOffset = { x: 0, y: 0 };
        
        // Load country data
        this.initializeCountries();
        
        // Set up event listeners
        this.setupEventListeners();
    }

    initializeCountries() {
        // Load country data from EARTH_COUNTRIES_1985
        Object.entries(EARTH_COUNTRIES_1985).forEach(([key, data]) => {
            this.countries.set(key, {
                ...data,
                borders: this.getCountryBorders(key),
                path: this.getCountryPath(key)
            });
        });

        // Initialize alliances
        this.initializeAlliances();
    }

    initializeAlliances() {
        Object.entries(INITIAL_ALLIANCES).forEach(([alliance, members]) => {
            members.forEach(countryKey => {
                const country = this.countries.get(countryKey);
                if (country) {
                    country.alliance = alliance;
                }
            });
        });
    }

    setupEventListeners() {
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('wheel', (e) => this.handleZoom(e));
    }

    render() {
        // Clear canvas
        this.ctx.fillStyle = '#001133';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Apply transformations
        this.ctx.save();
        this.ctx.translate(this.mapOffset.x, this.mapOffset.y);
        this.ctx.scale(this.zoomLevel, this.zoomLevel);

        // Render each country
        this.countries.forEach(country => {
            this.renderCountry(country);
        });

        this.ctx.restore();
    }

    renderCountry(country) {
        // Draw country shape
        const path = new Path2D(country.path);
        
        // Fill country
        this.ctx.fillStyle = country === this.selectedCountry ? 
            this.lightenColor(country.color) : country.color;
        this.ctx.fill(path);
        
        // Draw borders
        this.ctx.strokeStyle = '#FFFFFF';
        this.ctx.lineWidth = 0.5;
        this.ctx.stroke(path);
    }

    handleClick(event) {
        const rect = this.canvas.getBoundingClientRect();
        const x = (event.clientX - rect.left - this.mapOffset.x) / this.zoomLevel;
        const y = (event.clientY - rect.top - this.mapOffset.y) / this.zoomLevel;

        // Find clicked country
        this.countries.forEach(country => {
            if (this.ctx.isPointInPath(country.path, x, y)) {
                this.selectCountry(country);
            }
        });
    }

    selectCountry(country) {
        this.selectedCountry = country;
        this.render();
        
        // Update UI with country info
        if (gameUI) {
            gameUI.updateCountryInfo(country);
        }
        
        // Log to console
        if (gameConsole) {
            gameConsole.log(`Selected ${country.name}`);
        }
    }

    // Helper methods
    lightenColor(color) {
        // Implementation of color lightening for hover effect
    }

    getCountryBorders(countryKey) {
        // Implementation to get country border coordinates
    }

    getCountryPath(countryKey) {
        // Implementation to get country SVG path
    }
}
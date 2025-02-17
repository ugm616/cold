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
        // Convert hex to RGB, lighten, then convert back to hex
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        
        // Lighten by 20%
        const lightenAmount = 0.2;
        const newR = Math.min(Math.round(r + (255 - r) * lightenAmount), 255);
        const newG = Math.min(Math.round(g + (255 - g) * lightenAmount), 255);
        const newB = Math.min(Math.round(b + (255 - b) * lightenAmount), 255);
        
        // Convert back to hex
        return `#${(newR).toString(16).padStart(2, '0')}${
            (newG).toString(16).padStart(2, '0')}${
            (newB).toString(16).padStart(2, '0')}`;
    }

    getCountryBorders(countryKey) {
        // Get country border data from the EARTH_COUNTRIES_1985 data
        const country = EARTH_COUNTRIES_1985[countryKey];
        if (!country || !country.borders) {
            // Return default placeholder borders if none defined
            return [
                { x: 0, y: 0 },
                { x: 50, y: 0 },
                { x: 50, y: 50 },
                { x: 0, y: 50 }
            ];
        }
        
        // Transform coordinates based on map projection and scale
        return country.borders.map(point => ({
            x: this.transformLongitude(point.longitude),
            y: this.transformLatitude(point.latitude)
        }));
    }

    getCountryPath(countryKey) {
        const borders = this.getCountryBorders(countryKey);
        if (!borders || borders.length < 3) {
            return ''; // Return empty path if invalid borders
        }

        // Create SVG path
        let path = `M ${borders[0].x} ${borders[0].y}`;
        
        // Add line segments for each point
        for (let i = 1; i < borders.length; i++) {
            path += ` L ${borders[i].x} ${borders[i].y}`;
        }
        
        // Close the path
        path += ' Z';
        
        return path;
    }

    // Additional helper methods for coordinate transformation
    transformLongitude(longitude) {
        // Convert longitude to x coordinate
        // Map from -180...180 to 0...canvas.width
        const scale = this.canvas.width / 360;
        return (longitude + 180) * scale;
    }

    transformLatitude(latitude) {
        // Convert latitude to y coordinate using Mercator projection
        // Map from -90...90 to canvas.height...0
        const latRad = (latitude * Math.PI) / 180;
        const mercN = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));
        const scale = this.canvas.height / (2 * Math.PI);
        return this.canvas.height / 2 - mercN * scale;
    }

    // Add methods for inverse transformations (screen coordinates to lat/long)
    screenToLongitude(x) {
        const scale = 360 / this.canvas.width;
        return (x * scale) - 180;
    }

    screenToLatitude(y) {
        const scale = (2 * Math.PI) / this.canvas.height;
        const mercN = (this.canvas.height / 2 - y) * scale;
        const latRad = 2 * (Math.atan(Math.exp(mercN)) - Math.PI / 4);
        return (latRad * 180) / Math.PI;
    }
}

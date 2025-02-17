class MapSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.currentPlanet = null;
        this.planets = new Map();
        this.selectedCountry = null;
        this.zoomLevel = 1;
        this.mapOffset = { x: 0, y: 0 };
        
        // Initialize event listeners
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.canvas.addEventListener('click', (e) => this.handleMapClick(e));
        this.canvas.addEventListener('wheel', (e) => this.handleZoom(e));
        this.canvas.addEventListener('mousedown', (e) => this.handleDragStart(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleDragMove(e));
        this.canvas.addEventListener('mouseup', (e) => this.handleDragEnd(e));
    }

    createPlanet(planetData) {
        const planet = new Planet(planetData);
        this.planets.set(planet.id, planet);
        return planet;
    }

    switchToPlanet(planetId) {
        const planet = this.planets.get(planetId);
        if (planet) {
            this.currentPlanet = planet;
            this.zoomLevel = 1;
            this.mapOffset = { x: 0, y: 0 };
            this.render();
        }
    }

    render() {
        if (!this.currentPlanet) return;

        // Clear canvas
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Apply zoom and offset
        this.ctx.save();
        this.ctx.translate(this.mapOffset.x, this.mapOffset.y);
        this.ctx.scale(this.zoomLevel, this.zoomLevel);

        // Render planet background
        this.currentPlanet.render(this.ctx);

        // Render country borders
        this.currentPlanet.countries.forEach(country => {
            this.renderCountry(country);
        });

        this.ctx.restore();

        // Render UI overlays
        this.renderUI();
    }

    renderCountry(country) {
        const path = new Path2D(country.borderPath);
        
        // Fill country
        this.ctx.fillStyle = country === this.selectedCountry ? 
            COLORS.highlight : country.color;
        this.ctx.fill(path);
        
        // Draw border
        this.ctx.strokeStyle = COLORS.text;
        this.ctx.lineWidth = 1;
        this.ctx.stroke(path);
        
        // Draw capital
        if (country.capital) {
            this.ctx.fillStyle = COLORS.text;
            this.ctx.beginPath();
            this.ctx.arc(country.capital.x, country.capital.y, 3, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    renderUI() {
        // Render planet name
        this.ctx.fillStyle = COLORS.text;
        this.ctx.font = '20px "Courier New"';
        this.ctx.fillText(this.currentPlanet.name, 10, 30);

        // Render selected country info
        if (this.selectedCountry) {
            const info = [
                this.selectedCountry.name,
                `Population: ${this.selectedCountry.population.toLocaleString()}`,
                `Military: ${this.selectedCountry.military.troops}`,
                `Technology: ${this.selectedCountry.technology}`
            ];

            info.forEach((text, i) => {
                this.ctx.fillText(text, 10, 60 + (i * 25));
            });
        }
    }

    handleMapClick(event) {
        const rect = this.canvas.getBoundingClientRect();
        const x = (event.clientX - rect.left - this.mapOffset.x) / this.zoomLevel;
        const y = (event.clientY - rect.top - this.mapOffset.y) / this.zoomLevel;

        this.selectedCountry = this.currentPlanet.getCountryAt(x, y);
        this.render();
    }

    handleZoom(event) {
        event.preventDefault();
        const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1;
        this.zoomLevel *= zoomFactor;
        this.zoomLevel = Math.max(0.5, Math.min(4, this.zoomLevel));
        this.render();
    }

    // Implement drag functionality for map panning
    handleDragStart(event) {
        this.isDragging = true;
        this.dragStart = {
            x: event.clientX - this.mapOffset.x,
            y: event.clientY - this.mapOffset.y
        };
    }

    handleDragMove(event) {
        if (!this.isDragging) return;
        this.mapOffset = {
            x: event.clientX - this.dragStart.x,
            y: event.clientY - this.dragStart.y
        };
        this.render();
    }

    handleDragEnd() {
        this.isDragging = false;
    }
}
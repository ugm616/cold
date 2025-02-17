class EarthMap {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.countries = new Map();
        this.selectedCountry = null;
        this.zoomLevel = 1;
        this.mapOffset = { x: 0, y: 0 };
        
        // Set canvas size to match container
        this.canvas.width = this.canvas.parentElement.clientWidth;
        this.canvas.height = this.canvas.parentElement.clientHeight;
        
        // Initialize borders and styles
        this.borders = COUNTRY_BORDERS_1985;
        this.regionGroups = REGION_GROUPS;
        this.allianceStyles = ALLIANCE_STYLES;
        
        // Load country data
        this.initializeCountries();
        
        // Set up event listeners
        this.setupEventListeners();

        // Initialize pan and zoom state
        this.isDragging = false;
        this.lastMousePos = { x: 0, y: 0 };
        this.minZoom = 0.5;
        this.maxZoom = 4;
    }

    initializeCountries() {
        // Load country data from EARTH_COUNTRIES_1985
        Object.entries(EARTH_COUNTRIES_1985).forEach(([key, data]) => {
            this.countries.set(key, {
                ...data,
                id: key,
                borders: this.getCountryBorders(key),
                path: this.getCountryPath(key)
            });
        });

        // Initialize alliances
        this.initializeAlliances();
    }

    initializeAlliances() {
        Object.entries(this.regionGroups).forEach(([alliance, members]) => {
            members.forEach(countryKey => {
                const country = this.countries.get(countryKey);
                if (country) {
                    country.alliance = alliance;
                }
            });
        });
    }

    setupEventListeners() {
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mouseup', () => this.handleMouseUp());
        this.canvas.addEventListener('wheel', (e) => this.handleZoom(e));
        this.canvas.addEventListener('mouseleave', () => this.handleMouseLeave());
    }

    render() {
        // Clear canvas
        this.ctx.fillStyle = '#001133';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Apply transformations
        this.ctx.save();
        this.ctx.translate(this.mapOffset.x, this.mapOffset.y);
        this.ctx.scale(this.zoomLevel, this.zoomLevel);

        // Draw map grid
        this.drawGrid();

        // Render each country
        this.countries.forEach(country => {
            this.renderCountry(country);
        });

        this.ctx.restore();
    }

    renderCountry(country) {
        const borders = this.getCountryBorders(country.id);
        if (borders.length === 0) return;

        this.ctx.beginPath();
        
        // Move to first point
        const start = this.transformCoordinates(borders[0]);
        this.ctx.moveTo(start.x, start.y);
        
        // Draw lines to each subsequent point
        for (let i = 1; i < borders.length; i++) {
            const point = this.transformCoordinates(borders[i]);
            this.ctx.lineTo(point.x, point.y);
        }
        
        // Close the path
        this.ctx.closePath();

        // Fill with country color
        const alliance = this.getCountryAlliance(country.id);
        const style = this.allianceStyles[alliance] || this.allianceStyles.NEUTRAL;
        
        this.ctx.fillStyle = country === this.selectedCountry ? 
            style.highlightColor : style.color;
        this.ctx.fill();
        
        // Draw borders
        this.ctx.strokeStyle = style.borderColor;
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
    }

    drawGrid() {
        const gridSize = 30; // Size of grid cells in degrees
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        this.ctx.lineWidth = 0.5;

        // Draw longitude lines
        for (let lon = -180; lon <= 180; lon += gridSize) {
            const x = this.transformLongitude(lon);
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }

        // Draw latitude lines
        for (let lat = -90; lat <= 90; lat += gridSize) {
            const y = this.transformLatitude(lat);
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }
    }

    handleMouseDown(event) {
        this.isDragging = true;
        this.lastMousePos = {
            x: event.clientX,
            y: event.clientY
        };
    }

    handleMouseMove(event) {
        if (this.isDragging) {
            const deltaX = event.clientX - this.lastMousePos.x;
            const deltaY = event.clientY - this.lastMousePos.y;

            this.mapOffset.x += deltaX;
            this.mapOffset.y += deltaY;

            this.lastMousePos = {
                x: event.clientX,
                y: event.clientY
            };

            this.render();
        } else {
            // Hover effect
            const pos = this.getMousePosition(event);
            const hoveredCountry = this.getCountryAt(pos.x, pos.y);
            if (hoveredCountry !== this.hoveredCountry) {
                this.hoveredCountry = hoveredCountry;
                this.render();
            }
        }
    }

    handleMouseUp() {
        this.isDragging = false;
    }

    handleMouseLeave() {
        this.isDragging = false;
        this.hoveredCountry = null;
        this.render();
    }

    handleZoom(event) {
        event.preventDefault();
        
        const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1;
        const newZoom = this.zoomLevel * zoomFactor;

        if (newZoom >= this.minZoom && newZoom <= this.maxZoom) {
            // Get mouse position before zoom
            const mousePos = this.getMousePosition(event);
            
            // Apply zoom
            this.zoomLevel = newZoom;
            
            // Adjust offset to zoom toward mouse position
            this.mapOffset.x = mousePos.x - (mousePos.x - this.mapOffset.x) * zoomFactor;
            this.mapOffset.y = mousePos.y - (mousePos.y - this.mapOffset.y) * zoomFactor;
            
            this.render();
        }
    }

    getMousePosition(event) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    getCountryAt(x, y) {
        // Convert screen coordinates to map coordinates
        const mapX = (x - this.mapOffset.x) / this.zoomLevel;
        const mapY = (y - this.mapOffset.y) / this.zoomLevel;

        // Convert to longitude/latitude
        const lon = this.screenToLongitude(mapX);
        const lat = this.screenToLatitude(mapY); ▋

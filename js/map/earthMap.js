import { COUNTRY_BORDERS_1985 } from '../data/countryBorders.js';
import { EARTH_COUNTRIES_1985 } from '../data/earthCountries.js';
import { REGION_GROUPS } from '../data/regionGroups.js';
import { ALLIANCE_STYLES } from '../data/allianceStyles.js';

class EarthMap {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.countries = new Map();
        this.selectedCountry = null;
        this.hoveredCountry = null;
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

        // Initial render
        this.render();
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
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        
        // Add resize listener to handle window resizing
        window.addEventListener('resize', () => this.handleResize());
    }

    handleClick(event) {
        const pos = this.getMousePosition(event);
        const clickedCountry = this.getCountryAt(pos.x, pos.y);
        if (clickedCountry) {
            this.selectedCountry = clickedCountry;
            this.render();
            // Dispatch custom event for country selection
            const selectEvent = new CustomEvent('countrySelect', { 
                detail: { country: clickedCountry }
            });
            this.canvas.dispatchEvent(selectEvent);
        }
    }

    handleResize() {
        this.canvas.width = this.canvas.parentElement.clientWidth;
        this.canvas.height = this.canvas.parentElement.clientHeight;
        this.render();
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

        // Draw hover effect if needed
        if (this.hoveredCountry && this.hoveredCountry !== this.selectedCountry) {
            this.drawHoverEffect(this.hoveredCountry);
        }

        this.ctx.restore();
    }

    drawHoverEffect(country) {
        const borders = this.getCountryBorders(country.id);
        if (borders.length === 0) return;

        this.ctx.beginPath();
        const start = this.transformCoordinates(borders[0]);
        this.ctx.moveTo(start.x, start.y);
        
        for (let i = 1; i < borders.length; i++) {
            const point = this.transformCoordinates(borders[i]);
            this.ctx.lineTo(point.x, point.y);
        }
        
        this.ctx.closePath();
        
        // Draw hover effect
        this.ctx.strokeStyle = '#FFFFFF';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
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

        // Draw country label if zoomed in enough
        if (this.zoomLevel > 2) {
            this.drawCountryLabel(country);
        }
    }

    drawCountryLabel(country) {
        const borders = this.getCountryBorders(country.id);
        if (borders.length === 0) return;

        // Calculate center point of country
        let centerX = 0, centerY = 0;
        borders.forEach(point => {
            const transformed = this.transformCoordinates(point);
            centerX += transformed.x;
            centerY += transformed.y;
        });
        centerX /= borders.length;
        centerY /= borders.length;

        // Draw country name
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = `${Math.max(10, 10 * this.zoomLevel / 2)}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(country.name || country.id, centerX, centerY);
    }

    drawGrid() {
        const lonGridSize = 30; // Size of longitude grid cells in degrees
        const latGridSize = 15; // Size of latitude grid cells in degrees
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        this.ctx.lineWidth = 0.5;

        // Draw longitude lines
        for (let lon = -180; lon <= 180; lon += lonGridSize) {
            const x = this.transformLongitude(lon);
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();

            // Draw longitude labels
            if (this.zoomLevel > 1.5) {
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                this.ctx.font = '10px Arial';
                this.ctx.fillText(`${lon}°`, x, this.canvas.height - 5);
            }
        }

        // Draw latitude lines
        for (let lat = -90; lat <= 90; lat += latGridSize) {
            const y = this.transformLatitude(lat);
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();

            // Draw latitude labels
            if (this.zoomLevel > 1.5) {
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                this.ctx.font = '10px Arial';
                this.ctx.fillText(`${lat}°`, 5, y);
            }
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
        const lat = this.screenToLatitude(mapY);

        // Check each country
        for (const [id, country] of this.countries) {
            if (this.isPointInCountry(lon, lat, country)) {
                return country;
            }
        }
        return null;
    }

    isPointInCountry(lon, lat, country) {
        const borders = this.getCountryBorders(country.id);
        if (!borders || borders.length < 3) return false;

        let inside = false;
        for (let i = 0, j = borders.length - 1; i < borders.length; j = i++) {
            const xi = borders[i].longitude, yi = borders[i].latitude;
            const xj = borders[j].longitude, yj = borders[j].latitude;

            const intersect = ((yi > lat) !== (yj > lat)) &&
                (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }

        return inside;
    }

    transformCoordinates(point) {
        return {
            x: this.transformLongitude(point.longitude),
            y: this.transformLatitude(point.latitude)
        };
    }

    transformLongitude(longitude) {
        // Convert longitude to x coordinate
        // Map from -180...180 to 0...canvas.width
        const scale = this.canvas.width / 360;
        return (longitude + 180) * scale;
    }

    transformLatitude(latitude) {
        // Use Web Mercator projection for better proportions
        const latRad = (latitude * Math.PI) / 180;
        if (latitude === 90) return 0;
        if (latitude === -90) return this.canvas.height;
        const mercN = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));
        const scale = this.canvas.height / (2 * Math.PI);
        return this.canvas.height / 2 - mercN * scale;
    }

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

    getCountryBorders(countryKey) {
        const countryData = this.borders[countryKey];
        if (!countryData || !countryData.borders) {
            console.warn(`No border data found for country: ${countryKey}`);
            return [];
        }
        return countryData.borders;
    }

    getCountryPath(countryKey) {
        const borders = this.getCountryBorders(countryKey);
        if (!borders || borders.length < 3) {
            return ''; // Return empty path if invalid borders
        }

        // Create SVG path
        const points = borders.map(point => {
            const transformed = this.transformCoordinates(point);
            return `${transformed.x},${transformed.y}`;
        });
        
        return `M ${points.join(' L ')} Z`;
    }

    getCountryAlliance(countryId) {
        for (const [alliance, countries] of Object.entries(this.regionGroups)) {
            if (countries.includes(countryId)) {
                return alliance;
            }
        }
        return 'NEUTRAL';
    }

    setZoom(zoomLevel) {
    const newZoom = Math.min(Math.max(zoomLevel, this.minZoom), this.maxZoom);
    this.zoomLevel = newZoom;
    this.render();
}
waitForElement(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

class PlanetCreator {
    constructor(mapSystem) {
        this.mapSystem = mapSystem;
        this.currentPlanet = null;
        this.isDrawingBorders = false;
        this.currentBorderPoints = [];
        this.drawingCountryForm = null;
    }

    showCreatorInterface() {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <span class="modal-title">PLANET CREATOR</span>
                    <button class="close-btn" onclick="this.closest('.modal-overlay').remove()">X</button>
                </div>
                <div class="modal-body">
                    <div class="creator-form">
                        <div class="form-group">
                            <label>Planet Name:</label>
                            <input type="text" id="planetName" class="retro-input">
                        </div>
                        <div class="form-group">
                            <label>Size:</label>
                            <select id="planetSize" class="retro-input">
                                <option value="small">Small (600x400)</option>
                                <option value="medium">Medium (800x600)</option>
                                <option value="large">Large (1200x800)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Climate Type:</label>
                            <select id="climateType" class="retro-input">
                                <option value="earthlike">Earth-like</option>
                                <option value="desert">Desert</option>
                                <option value="ice">Ice World</option>
                                <option value="jungle">Jungle</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <button class="retro-btn" onclick="planetCreator.createPlanet()">
                                CREATE PLANET
                            </button>
                        </div>
                    </div>
                    <div id="countryCreator" class="hidden">
                        <h3>CREATE COUNTRIES</h3>
                        <div class="country-list" id="countryList"></div>
                        <button class="retro-btn" onclick="planetCreator.addCountry()">
                            ADD COUNTRY
                        </button>
                        <button class="retro-btn" onclick="planetCreator.finalizePlanet()">
                            FINALIZE PLANET
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    createPlanet() {
        const name = document.getElementById('planetName').value;
        const sizeSelect = document.getElementById('planetSize').value;
        const climate = document.getElementById('climateType').value;

        const sizes = {
            small: { width: 600, height: 400 },
            medium: { width: 800, height: 600 },
            large: { width: 1200, height: 800 }
        };

        this.currentPlanet = this.mapSystem.createPlanet({
            id: `planet_${Date.now()}`,
            name,
            type: 'custom',
            size: sizes[sizeSelect],
            climate: this.getClimateSettings(climate)
        });

        document.getElementById('countryCreator').classList.remove('hidden');
    }

    getClimateSettings(climate) {
        const settings = {
            earthlike: {
                baseColor: '#001133',
                terrainTypes: [
                    { color: '#006633', density: 20, maxSize: 50 }, // Forests
                    { color: '#666666', density: 10, maxSize: 40 }  // Mountains
                ]
            },
            desert: {
                baseColor: '#996633',
                terrainTypes: [
                    { color: '#cc9966', density: 30, maxSize: 40 }, // Dunes
                    { color: '#663300', density: 5, maxSize: 20 }   // Rocky areas
                ]
            },
            ice: {
                baseColor: '#99ccff',
                terrainTypes: [
                    { color: '#ffffff', density: 25, maxSize: 60 }, // Ice sheets
                    { color: '#cceeff', density: 15, maxSize: 30 }  // Glaciers
                ]
            },
            jungle: {
                baseColor: '#003300',
                terrainTypes: [
                    { color: '#006600', density: 35, maxSize: 45 }, // Dense forests
                    { color: '#009900', density: 20, maxSize: 25 }  // Clearings
                ]
            }
        };
        return settings[climate];
    }

    addCountry() {
        const countryForm = document.createElement('div');
        countryForm.className = 'country-form';
        countryForm.innerHTML = `
            <div class="form-group">
                <label>Country Name:</label>
                <input type="text" class="country-name retro-input">
            </div>
            <div class="form-group">
                <label>Population (millions):</label>
                <input type="number" class="country-population retro-input" min="1" value="10">
            </div>
            <div class="form-group">
                <label>Technology Level (1-10):</label>
                <input type="number" class="country-tech retro-input" min="1" max="10" value="1">
            </div>
            <div class="form-group">
                <label>Military:</label>
                <div class="military-stats">
                    <div>
                        <label>Army (1-10):</label>
                        <input type="number" class="country-army retro-input" min="1" max="10" value="1">
                    </div>
                    <div>
                        <label>Navy (1-10):</label>
                        <input type="number" class="country-navy retro-input" min="1" max="10" value="1">
                    </div>
                    <div>
                        <label>Air Force (1-10):</label>
                        <input type="number" class="country-airforce retro-input" min="1" max="10" value="1">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button class="retro-btn" onclick="planetCreator.defineCountryBorders(this.parentElement.parentElement)">
                    DEFINE BORDERS
                </button>
            </div>
        `;
        document.getElementById('countryList').appendChild(countryForm);
    }

    defineCountryBorders(countryForm) {
        this.isDrawingBorders = true;
        this.currentBorderPoints = [];
        this.drawingCountryForm = countryForm;
        
        // Show drawing instructions
        const instructions = document.createElement('div');
        instructions.className = 'drawing-instructions';
        instructions.innerHTML = `
            <div class="instructions-overlay">
                <p>CLICK TO PLACE BORDER POINTS</p>
                <p>PRESS ENTER TO COMPLETE</p>
                <p>PRESS ESC TO CANCEL</p>
            </div>
        `;
        document.body.appendChild(instructions);

        // Add temporary event listeners
        this.addBorderDrawingListeners();
    }

    addBorderDrawingListeners() {
        this.handleMapClick = (e) => {
            if (!this.isDrawingBorders) return;
            
            const rect = this.mapSystem.canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left - this.mapSystem.mapOffset.x) / this.mapSystem.zoomLevel;
            const y = (e.clientY - rect.top - this.mapSystem.mapOffset.y) / this.mapSystem.zoomLevel;
            
            this.currentBorderPoints.push({ x, y });
            this.drawBorderPreview();
        };

        this.handleKeyPress = (e) => {
            if (!this.isDrawingBorders) return;
            
            if (e.key === 'Enter') {
                this.completeBorderDrawing();
            } else if (e.key === 'Escape') {
                this.cancelBorderDrawing();
            }
        };

        this.mapSystem.canvas.addEventListener('click', this.handleMapClick);
        document.addEventListener('keydown', this.handleKeyPress);
    }

    drawBorderPreview() {
        const ctx = this.mapSystem.ctx;
        this.mapSystem.render(); // Redraw the base map
        
        // Draw the border points and lines
        if (this.currentBorderPoints.length > 0) {
            ctx.beginPath();
            ctx.moveTo(this.currentBorderPoints[0].x, this.currentBorderPoints[0].y);
            
            for (let i = 1; i < this.currentBorderPoints.length; i++) {
                ctx.lineTo(this.currentBorderPoints[i].x, this.currentBorderPoints[i].y);
            }
            
            ctx.strokeStyle = COLORS.highlight;
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Draw points
            this.currentBorderPoints.forEach(point => {
                ctx.beginPath();
                ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = COLORS.highlight;
                ctx.fill();
            });
        }
    }

    completeBorderDrawing() {
        if (this.currentBorderPoints.length < 3) {
            alert('Please define at least 3 points for the border');
            return;
        }

        // Create the country with the drawn borders
        const countryData = {
            id: `country_${Date.now()}`,
            name: this.drawingCountryForm.querySelector('.country-name').value,
            population: parseFloat(this.drawingCountryForm.querySelector('.country-population').value) * 1000000,
            technology: parseInt(this.drawingCountryForm.querySelector('.country-tech').value),
            military: {
                army: parseInt(this.drawingCountryForm.querySelector('.country-army').value),
                navy: parseInt(this.drawingCountryForm.querySelector('.country-navy').value),
                airforce: parseInt(this.drawingCountryForm.querySelector('.country-airforce').value)
            },
            borderPath: this.generateCountryPath(this.currentBorderPoints),
            color: this.generateRandomColor()
        };

        this.currentPlanet.addCountry(new Country(countryData));
        this.cleanupBorderDrawing();
        this.mapSystem.render();
    }

    cancelBorderDrawing() {
        this.cleanupBorderDrawing();
        this.mapSystem.render();
    }

    cleanupBorderDrawing() {
        this.isDrawingBorders = false;
        this.currentBorderPoints = [];
        this.drawingCountryForm = null;
        
        // Remove event listeners
        this.mapSystem.canvas.removeEventListener('click', this.handleMapClick);
        document.removeEventListener('keydown', this.handleKeyPress);
        
        // Remove instructions
        const instructions = document.querySelector('.drawing-instructions');
        if (instructions) {
            instructions.remove();
        }
    }

    generateCountryPath(points) {
        return points.reduce((path, point, i) => {
            const command = i === 0 ? 'M' : 'L';
            return `${path} ${command} ${point.x} ${point.y}`;
        }, '') + ' Z';
    }

    generateRandomColor() {
        const colors = [
            '#4444ff', '#44ff44', '#ff4444', '#44ffff', 
            '#ff44ff', '#ffff44', '#ff8844', '#44ff88'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    finalizePlanet() {
        if (this.currentPlanet.countries.size === 0) {
            alert('Please create at least one country');
            return;
        }

        this.mapSystem.switchToPlanet(this.currentPlanet.id);
        document.querySelector('.modal-overlay').remove();
    }
}
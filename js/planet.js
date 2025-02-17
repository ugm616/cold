class Planet {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.type = data.type; // 'earth' or 'custom'
        this.size = data.size || { width: 800, height: 600 };
        this.countries = new Map();
        this.countryPaths = new Map(); // Store path data for hit detection
        this.resources = data.resources || {};
        this.climate = data.climate || {};
        
        if (data.type === 'earth') {
            this.loadEarthData();
        }
    }

    loadEarthData() {
        // Load real Earth country data
        fetch('data/earth-countries.json')
            .then(response => response.json())
            .then(data => {
                data.countries.forEach(countryData => {
                    this.addCountry(new Country({
                        ...countryData,
                        borderPath: this.generateCountryPath(countryData.borders)
                    }));
                });
            });
    }

    addCountry(country) {
        this.countries.set(country.id, country);
        this.countryPaths.set(country.id, new Path2D(country.borderPath));
    }

    removeCountry(countryId) {
        this.countries.delete(countryId);
        this.countryPaths.delete(countryId);
    }

    getCountryAt(x, y) {
        for (const [id, path] of this.countryPaths) {
            if (this.ctx.isPointInPath(path, x, y)) {
                return this.countries.get(id);
            }
        }
        return null;
    }

    render(ctx) {
        this.ctx = ctx; // Store context for hit detection
        
        // Draw planet background
        if (this.type === 'earth') {
            this.renderEarthBackground(ctx);
        } else {
            this.renderCustomPlanetBackground(ctx);
        }
    }

    renderEarthBackground(ctx) {
        // Draw simplified Earth continents
        ctx.fillStyle = '#001133';
        ctx.fillRect(0, 0, this.size.width, this.size.height);
        
        // Draw basic continent outlines
        ctx.strokeStyle = '#003366';
        ctx.lineWidth = 2;
        // ... continent path drawing would go here
    }

    renderCustomPlanetBackground(ctx) {
        // Draw custom planet background with generated terrain
        ctx.fillStyle = this.climate.baseColor || '#000033';
        ctx.fillRect(0, 0, this.size.width, this.size.height);
        
        // Generate and draw terrain features
        this.renderTerrain(ctx);
    }

    renderTerrain(ctx) {
        // Implement Perlin noise or similar algorithm for terrain generation
        // This is a simplified version
        const terrainTypes = this.climate.terrainTypes || [];
        
        terrainTypes.forEach(terrain => {
            ctx.fillStyle = terrain.color;
            // Generate random terrain shapes
            for (let i = 0; i < terrain.density; i++) {
                const x = Math.random() * this.size.width;
                const y = Math.random() * this.size.height;
                const size = Math.random() * terrain.maxSize;
                
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
        });
    }

    generateCountryPath(borders) {
        // Convert border coordinates to SVG path
        return borders.reduce((path, point, i) => {
            const command = i === 0 ? 'M' : 'L';
            return `${path} ${command} ${point.x} ${point.y}`;
        }, '') + ' Z';
    }
}
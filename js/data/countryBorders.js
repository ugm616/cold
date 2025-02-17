// Country border coordinates for 1985 map
// Coordinates are in [longitude, latitude] format
const COUNTRY_BORDERS_1985 = {
    USA: {
        name: "United States of America",
        borders: [
            // Main continental US
            { longitude: -124.7844, latitude: 48.3937 },  // Northwest point
            { longitude: -123.2207, latitude: 48.2951 },  // Seattle area
            { longitude: -122.4194, latitude: 37.7749 },  // San Francisco
            { longitude: -118.2437, latitude: 34.0522 },  // Los Angeles
            { longitude: -117.1611, latitude: 32.7157 },  // San Diego
            { longitude: -106.4509, latitude: 31.7619 },  // El Paso
            { longitude: -97.7431, latitude: 30.2672 },   // Austin
            { longitude: -90.0715, latitude: 29.9511 },   // New Orleans
            { longitude: -80.1918, latitude: 25.7617 },   // Miami
            { longitude: -77.0369, latitude: 38.9072 },   // Washington DC
            { longitude: -74.0060, latitude: 40.7128 },   // New York
            { longitude: -71.0589, latitude: 42.3601 },   // Boston
            { longitude: -67.0011, latitude: 44.9012 },   // Maine
            { longitude: -83.0458, latitude: 42.3314 },   // Detroit
            { longitude: -87.6298, latitude: 41.8781 },   // Chicago
            { longitude: -93.2650, latitude: 44.9778 },   // Minneapolis
            { longitude: -103.2310, latitude: 44.0805 },  // South Dakota
            { longitude: -111.8910, latitude: 40.7608 },  // Salt Lake City
            { longitude: -122.6784, latitude: 45.5155 }   // Portland
        ],
        // Alaska borders would be separate
        alaskaBorders: [
            { longitude: -165.4064, latitude: 64.2008 },
            { longitude: -151.0728, latitude: 63.8168 },
            { longitude: -149.9003, latitude: 61.2181 },
            { longitude: -134.4197, latitude: 58.3019 }
        ]
    },
    
    CANADA: {
        name: "Canada",
        borders: [
            { longitude: -140.9927, latitude: 69.6492 },  // Yukon
            { longitude: -134.3167, latitude: 69.0451 },
            { longitude: -123.1207, latitude: 54.7246 },  // British Columbia
            { longitude: -119.4960, latitude: 49.8880 },
            { longitude: -110.3952, latitude: 53.9333 },  // Alberta
            { longitude: -102.4617, latitude: 58.7684 },  // Saskatchewan
            { longitude: -97.1384, latitude: 49.8951 },   // Manitoba
            { longitude: -89.2477, latitude: 48.3809 },   // Ontario
            { longitude: -79.3832, latitude: 43.6532 },   // Toronto
            { longitude: -73.5673, latitude: 45.5017 },   // Montreal
            { longitude: -66.6431, latitude: 45.9636 },   // New Brunswick
            { longitude: -63.5753, latitude: 44.6488 },   // Nova Scotia
            { longitude: -52.7128, latitude: 47.5615 }    // Newfoundland
        ]
    },

    MEXICO: {
        name: "Mexico",
        borders: [
            { longitude: -117.1611, latitude: 32.5149 },  // Tijuana
            { longitude: -106.4245, latitude: 31.6904 },  // Ciudad Juarez
            { longitude: -99.1332, latitude: 19.4326 },   // Mexico City
            { longitude: -98.1980, latitude: 19.0414 },   // Puebla
            { longitude: -89.6176, latitude: 20.9674 },   // Merida
            { longitude: -86.8515, latitude: 21.1619 },   // Cancun
            { longitude: -99.1332, latitude: 23.7369 },   // Tampico
            { longitude: -103.3496, latitude: 20.6597 },  // Guadalajara
            { longitude: -106.4111, latitude: 23.2494 },  // Mazatlan
            { longitude: -110.9265, latitude: 27.9389 },  // Guaymas
            { longitude: -114.8719, latitude: 27.9769 },  // Santa Rosalia
            { longitude: -116.6002, latitude: 31.8667 }   // Ensenada
        ]
    }
};

// Additional regions can be added as needed
const REGION_GROUPS = {
    NATO: ['USA', 'CANADA', 'UK', 'FRANCE', 'WEST_GERMANY'],
    WARSAW_PACT: ['USSR', 'EAST_GERMANY', 'POLAND', 'CZECHOSLOVAKIA', 'HUNGARY', 'ROMANIA', 'BULGARIA'],
    NEUTRAL: ['SWITZERLAND', 'AUSTRIA', 'SWEDEN', 'FINLAND']
};

// Border styling for different alliances
const ALLIANCE_STYLES = {
    NATO: {
        color: '#0052A5',
        borderColor: '#FFFFFF',
        highlightColor: '#0066CC'
    },
    WARSAW_PACT: {
        color: '#CC0000',
        borderColor: '#FFFFFF',
        highlightColor: '#FF0000'
    },
    NEUTRAL: {
        color: '#888888',
        borderColor: '#FFFFFF',
        highlightColor: '#AAAAAA'
    }
};

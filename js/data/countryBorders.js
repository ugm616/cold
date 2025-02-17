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
    },

        // Western Europe
    UK: {
        name: "United Kingdom",
        borders: [
            // Great Britain
            { longitude: -5.2770, latitude: 51.6928 },   // Cornwall
            { longitude: -4.1426, latitude: 53.1355 },   // Wales
            { longitude: -3.1883, latitude: 55.9533 },   // Edinburgh
            { longitude: -0.1278, latitude: 51.5074 },   // London
            { longitude: 1.7417, latitude: 52.6140 },    // East Anglia
            { longitude: -2.9915, latitude: 53.4084 },   // Liverpool
            { longitude: -4.2026, latitude: 57.4778 },   // Northern Scotland
            // Northern Ireland
            { longitude: -6.5115, latitude: 54.6088 }
        ]
    },

    FRANCE: {
        name: "France",
        borders: [
            { longitude: -4.7950, latitude: 48.3904 },   // Brest
            { longitude: -1.5534, latitude: 47.2184 },   // Nantes
            { longitude: -0.5792, latitude: 44.8378 },   // Bordeaux
            { longitude: 1.4442, latitude: 43.6047 },    // Toulouse
            { longitude: 3.8767, latitude: 43.6108 },    // Montpellier
            { longitude: 5.3698, latitude: 43.2965 },    // Marseille
            { longitude: 7.2620, latitude: 43.7102 },    // Nice
            { longitude: 7.7521, latitude: 48.5734 },    // Strasbourg
            { longitude: 2.3522, latitude: 48.8566 },    // Paris
            { longitude: 3.0573, latitude: 50.6292 }     // Lille
        ]
    },

    WEST_GERMANY: {
        name: "West Germany",
        borders: [
            { longitude: 9.9937, latitude: 53.5511 },    // Hamburg
            { longitude: 8.6821, latitude: 50.1109 },    // Frankfurt
            { longitude: 11.5820, latitude: 48.1351 },   // Munich
            { longitude: 13.3777, latitude: 52.5163 },   // West Berlin
            { longitude: 6.7735, latitude: 51.2277 },    // Düsseldorf
            { longitude: 8.8017, latitude: 53.0793 }     // Bremen
        ]
    },

    // Eastern Bloc
    USSR: {
        name: "Soviet Union",
        borders: [
            // European part
            { longitude: 31.7754, latitude: 52.4345 },   // Belarus region
            { longitude: 37.6173, latitude: 55.7558 },   // Moscow
            { longitude: 30.3350, latitude: 59.9343 },   // Leningrad
            { longitude: 34.3615, latitude: 61.7870 },   // Karelia
            { longitude: 44.5018, latitude: 48.7193 },   // Stalingrad region
            { longitude: 37.9627, latitude: 44.6978 },   // Black Sea coast
            // Central Asian part
            { longitude: 69.2401, latitude: 41.2995 },   // Tashkent
            { longitude: 76.9286, latitude: 43.2567 },   // Almaty
            // Siberian part
            { longitude: 104.3188, latitude: 52.2978 },  // Irkutsk
            { longitude: 131.8735, latitude: 43.1056 },  // Vladivostok
            { longitude: 150.8083, latitude: 59.5613 }   // Magadan
        ]
    },

    EAST_GERMANY: {
        name: "East Germany",
        borders: [
            { longitude: 13.4050, latitude: 52.5200 },   // East Berlin
            { longitude: 12.3731, latitude: 51.3397 },   // Leipzig
            { longitude: 13.7373, latitude: 51.0504 },   // Dresden
            { longitude: 11.6276, latitude: 52.1205 },   // Magdeburg
            { longitude: 12.9137, latitude: 50.8278 }    // Chemnitz
        ]
    },

    POLAND: {
        name: "Poland",
        borders: [
            { longitude: 21.0122, latitude: 52.2297 },   // Warsaw
            { longitude: 19.9449, latitude: 50.0647 },   // Krakow
            { longitude: 17.0385, latitude: 51.1079 },   // Wroclaw
            { longitude: 18.6466, latitude: 54.3520 },   // Gdansk
            { longitude: 22.5684, latitude: 51.2465 }    // Lublin
        ]
    },

    // Mediterranean
    ITALY: {
        name: "Italy",
        borders: [
            { longitude: 12.4964, latitude: 41.9028 },   // Rome
            { longitude: 9.1900, latitude: 45.4642 },    // Milan
            { longitude: 12.3155, latitude: 45.4408 },   // Venice
            { longitude: 14.2681, latitude: 40.8518 },   // Naples
            { longitude: 13.3614, latitude: 38.1157 },   // Sicily
            { longitude: 9.1153, latitude: 39.2167 }     // Sardinia
        ]
    },

    SPAIN: {
        name: "Spain",
        borders: [
            { longitude: -3.7038, latitude: 40.4168 },   // Madrid
            { longitude: 2.1734, latitude: 41.3851 },    // Barcelona
            { longitude: -5.9845, latitude: 37.3891 },   // Seville
            { longitude: -3.6902, latitude: 37.1773 },   // Granada
            { longitude: -8.3959, latitude: 43.3708 },   // La Coruña
            { longitude: -2.9188, latitude: 43.2627 }    // Bilbao
        ]
    },

// Additional regions can be added as needed
const REGION_GROUPS = {
    NATO: [
        'USA', 'CANADA', 'UK', 'FRANCE', 'WEST_GERMANY', 
        'ITALY', 'SPAIN', 'PORTUGAL', 'NORWAY', 'DENMARK', 
        'BELGIUM', 'NETHERLANDS', 'GREECE', 'TURKEY'
    ],
    WARSAW_PACT: [
        'USSR', 'EAST_GERMANY', 'POLAND', 'CZECHOSLOVAKIA', 
        'HUNGARY', 'ROMANIA', 'BULGARIA', 'ALBANIA'
    ],
    NEUTRAL: [
        'SWITZERLAND', 'AUSTRIA', 'SWEDEN', 'FINLAND', 
        'YUGOSLAVIA', 'IRELAND'
    ],
    OTHER: [
        'MEXICO', 'CUBA', 'CHINA', 'JAPAN', 'INDIA'
    ]
};

// Border styling for different alliances
const ALLIANCE_STYLES = {
    NATO: {
        color: '#0052A5',
        borderColor: '#FFFFFF',
        highlightColor: '#0066CC',
        fillPattern: 'solid'
    },
    WARSAW_PACT: {
        color: '#CC0000',
        borderColor: '#FFFFFF',
        highlightColor: '#FF0000',
        fillPattern: 'solid'
    },
    NEUTRAL: {
        color: '#888888',
        borderColor: '#FFFFFF',
        highlightColor: '#AAAAAA',
        fillPattern: 'solid'
    },
    OTHER: {
        color: '#556B2F',
        borderColor: '#FFFFFF',
        highlightColor: '#6B8E23',
        fillPattern: 'solid'
    }
};

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

    // Benelux Countries
    NETHERLANDS: {
        name: "Netherlands",
        borders: [
            { longitude: 4.8897, latitude: 52.3740 },    // Amsterdam
            { longitude: 4.4777, latitude: 51.9244 },    // Rotterdam
            { longitude: 5.1214, latitude: 52.0907 },    // Utrecht
            { longitude: 6.5665, latitude: 53.2194 },    // Groningen
            { longitude: 5.2913, latitude: 51.6991 },    // Eindhoven
            { longitude: 3.8196, latitude: 51.4940 }     // Middelburg
        ]
    },

    BELGIUM: {
        name: "Belgium",
        borders: [
            { longitude: 4.3517, latitude: 50.8503 },    // Brussels
            { longitude: 3.7174, latitude: 51.0543 },    // Ghent
            { longitude: 4.4024, latitude: 51.2194 },    // Antwerp
            { longitude: 5.5719, latitude: 50.6326 },    // Liège
            { longitude: 4.4126, latitude: 50.4666 },    // Charleroi
            { longitude: 2.9125, latitude: 51.2247 }     // Bruges
        ]
    },

    LUXEMBOURG: {
        name: "Luxembourg",
        borders: [
            { longitude: 6.1296, latitude: 49.8153 },    // Luxembourg City
            { longitude: 6.3692, latitude: 49.8729 },    // Echternach
            { longitude: 5.9807, latitude: 49.4964 },    // Esch-sur-Alzette
            { longitude: 6.1417, latitude: 49.6233 }     // Diekirch
        ]
    },

    // Scandinavian Countries
    NORWAY: {
        name: "Norway",
        borders: [
            { longitude: 10.7522, latitude: 59.9139 },   // Oslo
            { longitude: 5.3221, latitude: 60.3913 },    // Bergen
            { longitude: 10.3951, latitude: 63.4305 },   // Trondheim
            { longitude: 18.9553, latitude: 69.6492 },   // Tromsø
            { longitude: 25.7836, latitude: 71.1721 },   // North Cape
            { longitude: 12.6392, latitude: 66.3133 }    // Mo i Rana
        ]
    },

    SWEDEN: {
        name: "Sweden",
        borders: [
            { longitude: 18.0686, latitude: 59.3293 },   // Stockholm
            { longitude: 11.9746, latitude: 57.7089 },   // Gothenburg
            { longitude: 13.0007, latitude: 55.6050 },   // Malmö
            { longitude: 17.6389, latitude: 62.3908 },   // Sundsvall
            { longitude: 20.2639, latitude: 67.8558 },   // Kiruna
            { longitude: 15.2066, latitude: 63.1792 }    // Östersund
        ]
    },

    DENMARK: {
        name: "Denmark",
        borders: [
            { longitude: 12.5683, latitude: 55.6761 },   // Copenhagen
            { longitude: 10.4036, latitude: 55.4038 },   // Odense
            { longitude: 9.9187, latitude: 57.0488 },    // Aalborg
            { longitude: 8.4494, latitude: 55.4651 },    // Esbjerg
            { longitude: 12.1006, latitude: 54.8186 }    // Nykøbing
        ]
    },

    FINLAND: {
        name: "Finland",
        borders: [
            { longitude: 24.9384, latitude: 60.1695 },   // Helsinki
            { longitude: 22.2666, latitude: 60.4518 },   // Turku
            { longitude: 25.7482, latitude: 62.2426 },   // Jyväskylä
            { longitude: 28.1894, latitude: 61.0583 },   // Lappeenranta
            { longitude: 25.4667, latitude: 65.0121 },   // Oulu
            { longitude: 26.9294, latitude: 67.9019 }    // Rovaniemi
        ]
    },

    // Eastern European Countries
    CZECHOSLOVAKIA: {
        name: "Czechoslovakia",
        borders: [
            { longitude: 14.4378, latitude: 50.0755 },   // Prague
            { longitude: 17.1077, latitude: 48.1486 },   // Bratislava
            { longitude: 21.2611, latitude: 48.7164 },   // Košice
            { longitude: 18.2843, latitude: 49.8209 },   // Ostrava
            { longitude: 15.5834, latitude: 49.3961 },   // Jihlava
            { longitude: 12.9377, latitude: 49.7384 }    // Plzeň
        ]
    },

    HUNGARY: {
        name: "Hungary",
        borders: [
            { longitude: 19.0402, latitude: 47.4979 },   // Budapest
            { longitude: 20.1414, latitude: 46.2530 },   // Szeged
            { longitude: 21.6254, latitude: 47.5316 },   // Debrecen
            { longitude: 18.4086, latitude: 47.1028 },   // Székesfehérvár
            { longitude: 16.6186, latitude: 47.6875 },   // Győr
            { longitude: 20.7828, latitude: 48.1025 }    // Miskolc
        ]
    },

    ROMANIA: {
        name: "Romania",
        borders: [
            { longitude: 26.1025, latitude: 44.4268 },   // Bucharest
            { longitude: 23.5889, latitude: 46.7712 },   // Cluj-Napoca
            { longitude: 21.2267, latitude: 45.7489 },   // Timișoara
            { longitude: 28.6348, latitude: 44.1598 },   // Constanța
            { longitude: 27.6014, latitude: 47.1585 },   // Iași
            { longitude: 24.1500, latitude: 45.7875 }    // Sibiu
        ]
    },

    BULGARIA: {
        name: "Bulgaria",
        borders: [
            { longitude: 23.3219, latitude: 42.6977 },   // Sofia
            { longitude: 27.4626, latitude: 42.5047 },   // Burgas
            { longitude: 25.6172, latitude: 43.0757 },   // Veliko Tarnovo
            { longitude: 24.7453, latitude: 42.1354 },   // Plovdiv
            { longitude: 27.9147, latitude: 43.2141 },   // Varna
            { longitude: 23.0949, latitude: 42.0116 }    // Blagoevgrad
        ]
    },

    // Balkan Countries
    YUGOSLAVIA: {
        name: "Yugoslavia",
        borders: [
            { longitude: 20.4651, latitude: 44.8125 },   // Belgrade
            { longitude: 15.9819, latitude: 45.8150 },   // Zagreb
            { longitude: 14.5058, latitude: 46.0569 },   // Ljubljana
            { longitude: 18.4131, latitude: 43.8563 },   // Sarajevo
            { longitude: 21.1622, latitude: 42.6629 },   // Skopje
            { longitude: 19.2595, latitude: 42.4415 }    // Podgorica
        ]
    },

    ALBANIA: {
        name: "Albania",
        borders: [
            { longitude: 19.8187, latitude: 41.3275 },   // Tirana
            { longitude: 19.4547, latitude: 40.7239 },   // Vlore
            { longitude: 20.0044, latitude: 39.8748 },   // Sarande
            { longitude: 20.7675, latitude: 40.6253 },   // Korce
            { longitude: 19.9556, latitude: 41.7003 },   // Shkoder
            { longitude: 20.4275, latitude: 42.0678 }    // Kukes
        ]
    },

    // Alpine Countries
    SWITZERLAND: {
        name: "Switzerland",
        borders: [
            { longitude: 7.4474, latitude: 46.9480 },    // Bern
            { longitude: 8.5417, latitude: 47.3769 },    // Zurich
            { longitude: 6.1466, latitude: 46.2044 },    // Geneva
            { longitude: 8.9646, latitude: 46.0336 },    // Lugano
            { longitude: 9.8282, latitude: 46.8182 },    // Davos
            { longitude: 7.7491, latitude: 46.0207 }     // Zermatt
        ]
    },

    AUSTRIA: {
        name: "Austria",
        borders: [
            { longitude: 16.3738, latitude: 48.2082 },   // Vienna
            { longitude: 14.2858, latitude: 48.3069 },   // Linz
            { longitude: 13.0550, latitude: 47.8095 },   // Salzburg
            { longitude: 11.3927, latitude: 47.2692 },   // Innsbruck
            { longitude: 15.4395, latitude: 47.0707 },   // Graz
            { longitude: 14.3081, latitude: 46.6247 }    // Klagenfurt
        ]
    },

    // Major Asian Powers
    CHINA: {
        name: "People's Republic of China",
        borders: [
            { longitude: 116.4074, latitude: 39.9042 },  // Beijing
            { longitude: 121.4737, latitude: 31.2304 },  // Shanghai
            { longitude: 113.2644, latitude: 23.1291 },  // Guangzhou
            { longitude: 104.0665, latitude: 30.5723 },  // Chengdu
            { longitude: 108.9402, latitude: 34.3416 },  // Xi'an
            { longitude: 126.6424, latitude: 45.7563 },  // Harbin
            { longitude: 87.6168, latitude: 43.8256 },   // Urumqi
            { longitude: 91.1119, latitude: 29.9711 },   // Lhasa
            { longitude: 114.2641, latitude: 30.5928 },  // Wuhan
            { longitude: 120.1551, latitude: 30.2741 }   // Hangzhou
        ]
    },

    JAPAN: {
        name: "Japan",
        borders: [
            // Main Island (Honshu)
            { longitude: 139.6917, latitude: 35.6895 },  // Tokyo
            { longitude: 135.5023, latitude: 34.6937 },  // Osaka
            { longitude: 136.9066, latitude: 35.1815 },  // Nagoya
            { longitude: 130.4017, latitude: 33.5902 },  // Fukuoka
            // Hokkaido
            { longitude: 141.3469, latitude: 43.0621 },  // Sapporo
            // Kyushu
            { longitude: 130.4017, latitude: 33.5902 },  // Fukuoka
            // Shikoku
            { longitude: 134.5086, latitude: 33.8416 }   // Matsuyama
        ]
    },

    NORTH_KOREA: {
        name: "Democratic People's Republic of Korea",
        borders: [
            { longitude: 125.7625, latitude: 39.0392 },  // Pyongyang
            { longitude: 127.4380, latitude: 39.9396 },  // Wonsan
            { longitude: 129.7004, latitude: 42.3369 },  // Rason
            { longitude: 125.7456, latitude: 40.6596 },  // Sinuiju
            { longitude: 128.1978, latitude: 41.7956 }   // Chongjin
        ]
    },

    SOUTH_KOREA: {
        name: "Republic of Korea",
        borders: [
            { longitude: 126.9780, latitude: 37.5665 },  // Seoul
            { longitude: 129.0756, latitude: 35.1796 },  // Busan
            { longitude: 126.7052, latitude: 37.4563 },  // Incheon
            { longitude: 128.6014, latitude: 35.8714 },  // Daegu
            { longitude: 127.3845, latitude: 36.3504 }   // Daejeon
        ]
    },

    // Southeast Asian Nations
    VIETNAM: {
        name: "Vietnam",
        borders: [
            { longitude: 105.8342, latitude: 21.0285 },  // Hanoi
            { longitude: 106.6297, latitude: 10.8231 },  // Ho Chi Minh City
            { longitude: 108.2772, latitude: 16.0544 },  // Da Nang
            { longitude: 103.8310, latitude: 22.3364 },  // Lao Cai
            { longitude: 109.1762, latitude: 12.2388 }   // Nha Trang
        ]
    },

    THAILAND: {
        name: "Thailand",
        borders: [
            { longitude: 100.5018, latitude: 13.7563 },  // Bangkok
            { longitude: 98.9853, latitude: 18.7883 },   // Chiang Mai
            { longitude: 102.8359, latitude: 16.4322 },  // Khon Kaen
            { longitude: 100.8872, latitude: 12.9236 },  // Pattaya
            { longitude: 98.3981, latitude: 7.8804 }     // Phuket
        ]
    },

    // Middle East
    IRAN: {
        name: "Iran",
        borders: [
            { longitude: 51.3890, latitude: 35.6892 },   // Tehran
            { longitude: 51.6680, latitude: 32.6539 },   // Isfahan
            { longitude: 59.6062, latitude: 36.2972 },   // Mashhad
            { longitude: 48.6842, latitude: 31.3189 },   // Ahvaz
            { longitude: 54.3675, latitude: 31.8974 },   // Yazd
            { longitude: 52.5318, latitude: 29.6100 }    // Shiraz
        ]
    },

    IRAQ: {
        name: "Iraq",
        borders: [
            { longitude: 44.3661, latitude: 33.3152 },   // Baghdad
            { longitude: 44.0193, latitude: 36.1911 },   // Erbil
            { longitude: 47.1593, latitude: 30.5081 },   // Basra
            { longitude: 43.1185, latitude: 36.3350 },   // Mosul
            { longitude: 44.4009, latitude: 32.0317 }    // Najaf
        ]
    },

    SAUDI_ARABIA: {
        name: "Saudi Arabia",
        borders: [
            { longitude: 46.7219, latitude: 24.6877 },   // Riyadh
            { longitude: 39.8579, latitude: 21.3891 },   // Mecca
            { longitude: 50.1013, latitude: 26.2172 },   // Dammam
            { longitude: 49.5937, latitude: 25.3548 },   // Al-Hofuf
            { longitude: 45.0337, latitude: 23.8859 },   // Al-Kharj
            { longitude: 40.4197, latitude: 21.2634 }    // Jeddah
        ]
    },

    SYRIA: {
        name: "Syria",
        borders: [
            { longitude: 36.2765, latitude: 33.5138 },   // Damascus
            { longitude: 37.1285, latitude: 36.2021 },   // Aleppo
            { longitude: 40.7595, latitude: 35.0209 },   // Al-Hasakah
            { longitude: 38.9968, latitude: 34.8021 },   // Homs
            { longitude: 35.8969, latitude: 34.8959 }    // Latakia
        ]
    },

    ISRAEL: {
        name: "Israel",
        borders: [
            { longitude: 35.2137, latitude: 31.7683 },   // Jerusalem
            { longitude: 34.7818, latitude: 32.0853 },   // Tel Aviv
            { longitude: 34.9896, latitude: 29.5581 },   // Eilat
            { longitude: 35.0218, latitude: 32.7940 },   // Haifa
            { longitude: 35.2956, latitude: 32.9194 }    // Tiberias
        ]
    },

    // South Asian Powers
    INDIA: {
        name: "India",
        borders: [
            { longitude: 77.2090, latitude: 28.6139 },   // New Delhi
            { longitude: 72.8777, latitude: 19.0760 },   // Mumbai
            { longitude: 80.2707, latitude: 13.0827 },   // Chennai
            { longitude: 88.3639, latitude: 22.5726 },   // Kolkata
            { longitude: 78.4867, latitude: 17.3850 },   // Hyderabad
            { longitude: 77.5946, latitude: 12.9716 },   // Bangalore
            { longitude: 73.8567, latitude: 18.5204 },   // Pune
            { longitude: 75.8577, latitude: 22.7196 },   // Indore
            { longitude: 85.8245, latitude: 20.2961 },   // Bhubaneswar
            { longitude: 76.9366, latitude: 8.5241 }     // Thiruvananthapuram
        ]
    },

    PAKISTAN: {
        name: "Pakistan",
        borders: [
            { longitude: 73.0479, latitude: 33.6844 },   // Islamabad
            { longitude: 67.0011, latitude: 24.8607 },   // Karachi
            { longitude: 74.3587, latitude: 31.5204 },   // Lahore
            { longitude: 71.5249, latitude: 34.0151 },   // Peshawar
            { longitude: 66.9750, latitude: 30.1830 }    // Quetta
        ]
    },

    // Northern Africa
    EGYPT: {
        name: "Egypt",
        borders: [
            { longitude: 31.2357, latitude: 30.0444 },   // Cairo
            { longitude: 29.9187, latitude: 31.2001 },   // Alexandria
            { longitude: 32.2829, latitude: 31.2652 },   // Port Said
            { longitude: 33.8116, latitude: 27.2579 },   // Hurghada
            { longitude: 32.8989, latitude: 24.0889 },   // Luxor
            { longitude: 31.3260, latitude: 27.1783 }    // Asyut
        ]
    },

    LIBYA: {
        name: "Libya",
        borders: [
            { longitude: 13.1875, latitude: 32.8872 },   // Tripoli
            { longitude: 20.0686, latitude: 32.1167 },   // Benghazi
            { longitude: 21.8598, latitude: 31.1637 },   // Ajdabiya
            { longitude: 15.9942, latitude: 31.4048 },   // Misrata
            { longitude: 16.5851, latitude: 27.5429 }    // Sabha
        ]
    },

    ALGERIA: {
        name: "Algeria",
        borders: [
            { longitude: 3.0588, latitude: 36.7538 },    // Algiers
            { longitude: 7.7669, latitude: 36.8892 },    // Annaba
            { longitude: 5.4141, latitude: 36.1921 },    // Bejaia
            { longitude: -0.6417, latitude: 35.6987 },   // Oran
            { longitude: 2.8174, latitude: 33.8083 }     // Ghardaia
        ]
    },

    // Sub-Saharan Africa
    NIGERIA: {
        name: "Nigeria",
        borders: [
            { longitude: 3.3792, latitude: 6.5244 },     // Lagos
            { longitude: 7.3986, latitude: 9.0765 },     // Abuja
            { longitude: 8.5377, latitude: 12.0000 },    // Kano
            { longitude: 7.4898, latitude: 10.5222 },    // Kaduna
            { longitude: 3.9205, latitude: 7.3775 }      // Ibadan
        ]
    },

    SOUTH_AFRICA: {
        name: "South Africa",
        borders: [
            { longitude: 28.0473, latitude: -26.2041 },  // Johannesburg
            { longitude: 18.4241, latitude: -33.9249 },  // Cape Town
            { longitude: 31.0218, latitude: -29.8587 },  // Durban
            { longitude: 25.5707, latitude: -33.9608 },  // Port Elizabeth
            { longitude: 26.2041, latitude: -29.0852 }   // Bloemfontein
        ]
    },

    // South America
    BRAZIL: {
        name: "Brazil",
        borders: [
            { longitude: -47.9297, latitude: -15.7801 }, // Brasília
            { longitude: -46.6333, latitude: -23.5505 }, // São Paulo
            { longitude: -43.1729, latitude: -22.9068 }, // Rio de Janeiro
            { longitude: -34.8811, latitude: -8.0476 },  // Recife
            { longitude: -48.5044, latitude: -27.5969 }, // Florianópolis
            { longitude: -60.0217, latitude: -3.1190 },  // Manaus
            { longitude: -38.5434, latitude: -3.7319 },  // Fortaleza
            { longitude: -49.2731, latitude: -25.4290 }  // Curitiba
        ]
    },

    ARGENTINA: {
        name: "Argentina",
        borders: [
            { longitude: -58.3816, latitude: -34.6037 }, // Buenos Aires
            { longitude: -64.1888, latitude: -31.4201 }, // Córdoba
            { longitude: -68.8272, latitude: -32.8908 }, // Mendoza
            { longitude: -65.2226, latitude: -26.8083 }, // Tucumán
            { longitude: -60.6394, latitude: -31.6187 }, // Santa Fe
            { longitude: -68.3029, latitude: -54.8019 }  // Ushuaia
        ]
    },

    CHILE: {
        name: "Chile",
        borders: [
            { longitude: -70.6483, latitude: -33.4489 }, // Santiago
            { longitude: -71.6127, latitude: -33.0472 }, // Valparaíso
            { longitude: -73.0498, latitude: -36.8201 }, // Concepción
            { longitude: -70.3126, latitude: -18.4783 }, // Arica
            { longitude: -72.9403, latitude: -41.4718 }, // Puerto Montt
            { longitude: -70.9421, latitude: -53.1638 }  // Punta Arenas
        ]
    },

    PERU: {
        name: "Peru",
        borders: [
            { longitude: -77.0428, latitude: -12.0464 }, // Lima
            { longitude: -71.5375, latitude: -16.4090 }, // Arequipa
            { longitude: -73.2457, latitude: -3.7437 },  // Iquitos
            { longitude: -79.0300, latitude: -8.1092 },  // Trujillo
            { longitude: -71.9675, latitude: -13.5319 }  // Cusco
        ]
    },

    COLOMBIA: {
        name: "Colombia",
        borders: [
            { longitude: -74.0721, latitude: 4.7110 },   // Bogotá
            { longitude: -75.5636, latitude: 6.2442 },   // Medellín
            { longitude: -76.5225, latitude: 3.4516 },   // Cali
            { longitude: -74.7813, latitude: 10.9639 },  // Barranquilla
            { longitude: -75.5144, latitude: 10.3910 }   // Cartagena
        ]
    },

    VENEZUELA: {
        name: "Venezuela",
        borders: [
            { longitude: -66.9036, latitude: 10.4806 },  // Caracas
            { longitude: -71.6125, latitude: 10.6317 },  // Maracaibo
            { longitude: -67.9476, latitude: 10.2317 },  // Valencia
            { longitude: -63.1763, latitude: 10.4603 },  // Barcelona
            { longitude: -68.0018, latitude: 10.1579 }   // Maracay
        ]
    },

    // Central America
    CUBA: {
        name: "Cuba",
        borders: [
            { longitude: -82.3666, latitude: 23.1136 },  // Havana
            { longitude: -76.2513, latitude: 20.0211 },  // Santiago de Cuba
            { longitude: -79.9647, latitude: 22.1546 },  // Santa Clara
            { longitude: -82.8000, latitude: 23.0841 },  // Pinar del Río
            { longitude: -77.9236, latitude: 21.3926 }   // Camagüey
        ]
    },

    // More African Countries
    ETHIOPIA: {
        name: "Ethiopia",
        borders: [
            { longitude: 38.7578, latitude: 9.0320 },    // Addis Ababa
            { longitude: 39.2676, latitude: 8.5500 },    // Adama
            { longitude: 42.1157, latitude: 9.3137 },    // Dire Dawa
            { longitude: 37.4613, latitude: 11.5784 },   // Gondar
            { longitude: 39.4719, latitude: 13.4923 }    // Mekelle
        ]
    },

    KENYA: {
        name: "Kenya",
        borders: [
            { longitude: 36.8219, latitude: -1.2921 },   // Nairobi
            { longitude: 39.6682, latitude: -4.0435 },   // Mombasa
            { longitude: 34.7523, latitude: -0.1022 },   // Kisumu
            { longitude: 35.2697, latitude: 0.5167 },    // Eldoret
            { longitude: 40.9020, latitude: -2.2717 }    // Lamu
        ]
    },

    TANZANIA: {
        name: "Tanzania",
        borders: [
            { longitude: 39.2083, latitude: -6.7924 },   // Dar es Salaam
            { longitude: 32.8994, latitude: -2.5146 },   // Mwanza
            { longitude: 35.7382, latitude: -6.1722 },   // Dodoma
            { longitude: 33.4449, latitude: -8.9067 },   // Mbeya
            { longitude: 39.2889, latitude: -7.3699 }    // Morogoro
        ]
    },

    UGANDA: {
        name: "Uganda",
        borders: [
            { longitude: 32.5899, latitude: 0.3476 },    // Kampala
            { longitude: 32.4707, latitude: 0.4478 },    // Entebbe
            { longitude: 33.6139, latitude: 0.4547 },    // Jinja
            { longitude: 32.9081, latitude: 2.7746 },    // Gulu
            { longitude: 30.6549, latitude: 0.1871 }     // Fort Portal
        ]
    },

    MOROCCO: {
        name: "Morocco",
        borders: [
            { longitude: -6.8498, latitude: 34.0209 },   // Rabat
            { longitude: -7.5898, latitude: 33.5731 },   // Casablanca
            { longitude: -8.0083, latitude: 31.6295 },   // Marrakesh
            { longitude: -5.0033, latitude: 34.0333 },   // Fez
            { longitude: -9.5982, latitude: 30.4272 }    // Agadir
        ]
    },

    TUNISIA: {
        name: "Tunisia",
        borders: [
            { longitude: 10.1815, latitude: 36.8065 },   // Tunis
            { longitude: 10.8387, latitude: 35.7643 },   // Sousse
            { longitude: 10.7577, latitude: 34.7397 },   // Sfax
            { longitude: 8.7870, latitude: 34.4311 },    // Gafsa
            { longitude: 10.0982, latitude: 33.8881 }    // Gabès
        ]
    },

    // More Asian Countries
    AFGHANISTAN: {
        name: "Afghanistan",
        borders: [
            { longitude: 69.1776, latitude: 34.5553 },   // Kabul
            { longitude: 67.2769, latitude: 36.7080 },   // Mazar-i-Sharif
            { longitude: 61.8672, latitude: 34.3520 },   // Herat
            { longitude: 65.7158, latitude: 31.6133 },   // Kandahar
            { longitude: 70.5792, latitude: 34.4263 }    // Jalalabad
        ]
    },

    MONGOLIA: {
        name: "Mongolia",
        borders: [
            { longitude: 106.9057, latitude: 47.8864 },  // Ulaanbaatar
            { longitude: 104.0454, latitude: 49.0357 },  // Erdenet
            { longitude: 106.2077, latitude: 49.9935 },  // Darkhan
            { longitude: 112.1526, latitude: 47.7409 },  // Choibalsan
            { longitude: 100.1542, latitude: 49.6342 }   // Mörön
        ]
    },

    CAMBODIA: {
        name: "Cambodia",
        borders: [
            { longitude: 104.9210, latitude: 11.5626 },  // Phnom Penh
            { longitude: 103.8606, latitude: 13.3622 },  // Siem Reap
            { longitude: 103.5156, latitude: 10.6167 },  // Sihanoukville
            { longitude: 104.1817, latitude: 12.0012 },  // Kampong Cham
            { longitude: 102.9909, latitude: 12.8496 }   // Battambang
        ]
    },

    LAOS: {
        name: "Laos",
        borders: [
            { longitude: 102.6331, latitude: 17.9757 },  // Vientiane
            { longitude: 102.1347, latitude: 19.8847 },  // Luang Prabang
            { longitude: 105.7837, latitude: 15.1202 },  // Savannakhet
            { longitude: 106.8256, latitude: 17.9616 },  // Thakhek
            { longitude: 101.4042, latitude: 20.9547 }   // Luang Namtha
        ]
    },

    MALAYSIA: {
        name: "Malaysia",
        borders: [
            { longitude: 101.6869, latitude: 3.1390 },   // Kuala Lumpur
            { longitude: 100.3327, latitude: 5.4141 },   // Penang
            { longitude: 103.7618, latitude: 1.4927 },   // Johor Bahru
            { longitude: 110.3592, latitude: 1.5533 },   // Kuching
            { longitude: 116.0722, latitude: 5.9749 }    // Kota Kinabalu
        ]
    },

    PHILIPPINES: {
        name: "Philippines",
        borders: [
            { longitude: 120.9842, latitude: 14.5995 },  // Manila
            { longitude: 122.5644, latitude: 10.6840 },  // Cebu
            { longitude: 125.6127, latitude: 7.0707 },   // Davao
            { longitude: 124.6319, latitude: 8.4542 },   // Cagayan de Oro
            { longitude: 123.8854, latitude: 10.3157 }   // Bacolod
        ]
    },

    INDONESIA: {
        name: "Indonesia",
        borders: [
            { longitude: 106.8456, latitude: -6.2088 },  // Jakarta
            { longitude: 112.7508, latitude: -7.2575 },  // Surabaya
            { longitude: 98.6722, latitude: 3.5952 },    // Medan
            { longitude: 110.4203, latitude: -7.7956 },  // Yogyakarta
            { longitude: 115.2167, latitude: -8.6500 }   // Denpasar
        ]
    },

    // Oceania
    AUSTRALIA: {
        name: "Australia",
        borders: [
            { longitude: 151.2093, latitude: -33.8688 }, // Sydney
            { longitude: 144.9631, latitude: -37.8136 }, // Melbourne
            { longitude: 153.0281, latitude: -27.4698 }, // Brisbane
            { longitude: 115.8605, latitude: -31.9505 }, // Perth
            { longitude: 138.6007, latitude: -34.9285 }, // Adelaide
            { longitude: 130.8456, latitude: -12.4634 }, // Darwin
            { longitude: 147.3272, latitude: -42.8821 }  // Hobart
        ]
    },

    NEW_ZEALAND: {
        name: "New Zealand",
        borders: [
            { longitude: 174.7645, latitude: -36.8485 }, // Auckland
            { longitude: 174.7762, latitude: -41.2866 }, // Wellington
            { longitude: 172.6362, latitude: -43.5320 }, // Christchurch
            { longitude: 170.5027, latitude: -45.8788 }, // Dunedin
            { longitude: 175.2793, latitude: -37.7870 }  // Hamilton
        ]
    },

    // More South American Countries
    BOLIVIA: {
        name: "Bolivia",
        borders: [
            { longitude: -68.1193, latitude: -16.4897 }, // La Paz
            { longitude: -63.1887, latitude: -17.7833 }, // Santa Cruz
            { longitude: -66.1568, latitude: -19.0368 }, // Potosí
            { longitude: -65.2595, latitude: -17.3895 }, // Cochabamba
            { longitude: -63.9449, latitude: -16.5000 }  // Trinidad
        ]
    },

    PARAGUAY: {
        name: "Paraguay",
        borders: [
            { longitude: -57.3333, latitude: -25.2867 }, // Asunción
            { longitude: -54.6167, latitude: -25.5167 }, // Ciudad del Este
            { longitude: -57.4667, latitude: -23.4167 }, // Concepción
            { longitude: -55.7333, latitude: -27.3333 }, // Encarnación
            { longitude: -56.4333, latitude: -25.4000 }  // Villarrica
        ]
    },

    URUGUAY: {
        name: "Uruguay",
        borders: [
            { longitude: -56.1645, latitude: -34.9011 }, // Montevideo
            { longitude: -56.2167, latitude: -34.3375 }, // Las Piedras
            { longitude: -55.9500, latitude: -31.3833 }, // Rivera
            { longitude: -57.8407, latitude: -32.3167 }, // Paysandú
            { longitude: -54.9667, latitude: -34.9000 }  // Maldonado
        ]
    },

    ECUADOR: {
        name: "Ecuador",
        borders: [
            { longitude: -78.5249, latitude: -0.2295 },  // Quito
            { longitude: -79.9024, latitude: -2.1894 },  // Guayaquil
            { longitude: -78.9909, latitude: -2.8988 },  // Cuenca
            { longitude: -79.2042, latitude: -4.0079 },  // Loja
            { longitude: -76.9920, latitude: -0.9594 }   // Tena
        ]
    },

    // Central America
    PANAMA: {
        name: "Panama",
        borders: [
            { longitude: -79.5342, latitude: 8.9824 },   // Panama City
            { longitude: -79.9000, latitude: 9.3500 },   // Colón
            { longitude: -82.4308, latitude: 8.4241 },   // David
            { longitude: -80.9773, latitude: 8.0883 },   // Santiago
            { longitude: -79.3832, latitude: 9.3417 }    // Chagres
        ]
    },

    COSTA_RICA: {
        name: "Costa Rica",
        borders: [
            { longitude: -84.0913, latitude: 9.9281 },   // San José
            { longitude: -83.9126, latitude: 9.8644 },   // Cartago
            { longitude: -84.8167, latitude: 10.0167 },  // Puntarenas
            { longitude: -83.7147, latitude: 9.9981 },   // Limón
            { longitude: -84.6717, latitude: 10.6267 }   // Liberia
        ]
    },

    NICARAGUA: {
        name: "Nicaragua",
        borders: [
            { longitude: -86.2504, latitude: 12.1328 },  // Managua
            { longitude: -86.3833, latitude: 12.4333 },  // León
            { longitude: -85.3667, latitude: 12.1333 },  // Granada
            { longitude: -86.3452, latitude: 13.0973 },  // Chinandega
            { longitude: -83.7667, latitude: 12.1167 }   // Bluefields
        ]
    },

    HONDURAS: {
        name: "Honduras",
        borders: [
            { longitude: -87.2068, latitude: 14.0723 },  // Tegucigalpa
            { longitude: -87.6543, latitude: 15.7835 },  // San Pedro Sula
            { longitude: -86.7833, latitude: 15.7833 },  // La Ceiba
            { longitude: -88.0399, latitude: 15.4742 },  // Santa Rosa de Copán
            { longitude: -86.4853, latitude: 15.9989 }   // Trujillo
        ]
    },

    EL_SALVADOR: {
        name: "El Salvador",
        borders: [
            { longitude: -89.2182, latitude: 13.6929 },  // San Salvador
            { longitude: -89.5667, latitude: 13.9833 },  // Santa Ana
            { longitude: -88.1833, latitude: 13.4833 },  // San Miguel
            { longitude: -89.8167, latitude: 13.7167 },  // Sonsonate
            { longitude: -88.9333, latitude: 14.0333 }   // Chalatenango
        ]
    },

    GUATEMALA: {
        name: "Guatemala",
        borders: [
            { longitude: -90.5328, latitude: 14.6248 },  // Guatemala City
            { longitude: -90.7875, latitude: 14.5547 },  // Antigua
            { longitude: -91.5167, latitude: 14.8333 },  // Quetzaltenango
            { longitude: -89.0431, latitude: 15.4667 },  // Flores
            { longitude: -91.1500, latitude: 14.9667 }   // Cobán
        ]
    },

    // More African Countries
    SUDAN: {
        name: "Sudan",
        borders: [
            { longitude: 32.5599, latitude: 15.5007 },   // Khartoum
            { longitude: 36.3000, latitude: 19.6167 },   // Port Sudan
            { longitude: 32.5363, latitude: 19.1833 },   // Atbara
            { longitude: 34.4000, latitude: 13.1833 },   // Kassala
            { longitude: 30.2167, latitude: 13.1833 }    // El Obeid
        ]
    },

    SOMALIA: {
        name: "Somalia",
        borders: [
            { longitude: 45.3438, latitude: 2.0469 },    // Mogadishu
            { longitude: 45.0167, latitude: 4.7833 },    // Hargeisa
            { longitude: 42.5500, latitude: 3.7833 },    // Berbera
            { longitude: 45.3333, latitude: 9.5000 },    // Kismayo
            { longitude: 47.4167, latitude: 10.2833 }    // Bosaso
        ]
    },

    ZAIRE: {  // Democratic Republic of the Congo in 1985
        name: "Zaire",
        borders: [
            { longitude: 15.3222, latitude: -4.3250 },   // Kinshasa
            { longitude: 27.4794, latitude: -11.6609 },  // Lubumbashi
            { longitude: 25.2054, latitude: -10.7167 },  // Kolwezi
            { longitude: 29.2333, latitude: -1.6833 },   // Goma
            { longitude: 23.6167, latitude: -6.1333 }    // Mbuji-Mayi
        ]
    },

    ZAMBIA: {
        name: "Zambia",
        borders: [
            { longitude: 28.2833, latitude: -15.4167 },  // Lusaka
            { longitude: 28.4500, latitude: -12.8000 },  // Ndola
            { longitude: 27.8333, latitude: -13.0000 },  // Kitwe
            { longitude: 25.8577, latitude: -17.8419 },  // Livingstone
            { longitude: 31.3333, latitude: -10.9667 }   // Kasama
        ]
    },

    ZIMBABWE: {
        name: "Zimbabwe",
        borders: [
            { longitude: 31.0333, latitude: -17.8333 },  // Harare
            { longitude: 28.5833, latitude: -20.1500 },  // Bulawayo
            { longitude: 30.9333, latitude: -20.0667 },  // Mutare
            { longitude: 29.8167, latitude: -19.4500 },  // Gweru
            { longitude: 31.3500, latitude: -19.0500 }   // Chinhoyi
        ]
    },

    // Middle East Continued
    JORDAN: {
        name: "Jordan",
        borders: [
            { longitude: 35.9106, latitude: 31.9497 },   // Amman
            { longitude: 35.9333, latitude: 31.7167 },   // Zarqa
            { longitude: 35.7333, latitude: 32.5500 },   // Irbid
            { longitude: 35.4833, latitude: 30.1833 },   // Aqaba
            { longitude: 35.6167, latitude: 31.1833 }    // Karak
        ]
    },

    LEBANON: {
        name: "Lebanon",
        borders: [
            { longitude: 35.5018, latitude: 33.8938 },   // Beirut
            { longitude: 35.3667, latitude: 33.9333 },   // Tripoli
            { longitude: 35.4833, latitude: 33.3667 },   // Sidon
            { longitude: 35.3750, latitude: 33.2750 },   // Tyre
            { longitude: 35.9000, latitude: 33.8500 }    // Baalbek
        ]
    },

    KUWAIT: {
        name: "Kuwait",
        borders: [
            { longitude: 47.9783, latitude: 29.3759 },   // Kuwait City
            { longitude: 48.1000, latitude: 29.3333 },   // Al Ahmadi
            { longitude: 47.7500, latitude: 29.1667 },   // Al Jahra
            { longitude: 48.1333, latitude: 30.0583 },   // Bubiyan Island
            { longitude: 47.9167, latitude: 29.1667 }    // Mina Al Ahmadi
        ]
    },

    // Caribbean Nations
    JAMAICA: {
        name: "Jamaica",
        borders: [
            { longitude: -76.7936, latitude: 17.9714 },  // Kingston
            { longitude: -77.9188, latitude: 18.4762 },  // Montego Bay
            { longitude: -76.9674, latitude: 18.4167 },  // Port Antonio
            { longitude: -77.2333, latitude: 18.0333 },  // Spanish Town
            { longitude: -77.6500, latitude: 18.2833 }   // Ocho Rios
        ]
    },

    HAITI: {
        name: "Haiti",
        borders: [
            { longitude: -72.3350, latitude: 18.5391 },  // Port-au-Prince
            { longitude: -72.2000, latitude: 19.7500 },  // Cap-Haïtien
            { longitude: -72.6833, latitude: 19.4500 },  // Gonaïves
            { longitude: -74.1167, latitude: 18.6333 },  // Les Cayes
            { longitude: -72.1000, latitude: 18.8333 }   // Jacmel
        ]
    },

    DOMINICAN_REPUBLIC: {
        name: "Dominican Republic",
        borders: [
            { longitude: -69.9312, latitude: 18.4861 },  // Santo Domingo
            { longitude: -70.6667, latitude: 19.4500 },  // Santiago
            { longitude: -68.9667, latitude: 18.4500 },  // La Romana
            { longitude: -70.1000, latitude: 19.2000 },  // San Francisco de Macorís
            { longitude: -68.3333, latitude: 18.7167 }   // Punta Cana
        ]
    },

    // More African Countries
    GHANA: {
        name: "Ghana",
        borders: [
            { longitude: -0.1869, latitude: 5.6037 },    // Accra
            { longitude: -1.6333, latitude: 6.6833 },    // Kumasi
            { longitude: -0.8500, latitude: 9.4000 },    // Tamale
            { longitude: -2.0833, latitude: 4.9167 },    // Takoradi
            { longitude: -0.0167, latitude: 5.8833 }     // Tema
        ]
    },

    SENEGAL: {
        name: "Senegal",
        borders: [
            { longitude: -17.4441, latitude: 14.6937 },  // Dakar
            { longitude: -16.2667, latitude: 12.5500 },  // Ziguinchor
            { longitude: -16.4833, latitude: 14.7667 },  // Thiès
            { longitude: -15.1167, latitude: 12.5500 },  // Kolda
            { longitude: -16.0667, latitude: 14.1667 }   // Kaolack
        ]
    },

    IVORY_COAST: {
        name: "Ivory Coast",
        borders: [
            { longitude: -4.0083, latitude: 5.3151 },    // Abidjan
            { longitude: -5.2833, latitude: 6.8167 },    // Yamoussoukro
            { longitude: -7.6833, latitude: 7.7000 },    // Man
            { longitude: -5.0333, latitude: 7.6833 },    // Bouaké
            { longitude: -3.5000, latitude: 7.2167 }     // Bondoukou
        ]
    },

    // Middle East Continued
    UAE: {
        name: "United Arab Emirates",
        borders: [
            { longitude: 54.3667, latitude: 24.4667 },   // Abu Dhabi
            { longitude: 55.3167, latitude: 25.2667 },   // Dubai
            { longitude: 55.4000, latitude: 25.4000 },   // Sharjah
            { longitude: 56.3167, latitude: 25.4000 },   // Fujairah
            { longitude: 55.7500, latitude: 24.2167 }    // Al Ain
        ]
    },

    QATAR: {
        name: "Qatar",
        borders: [
            { longitude: 51.5333, latitude: 25.2867 },   // Doha
            { longitude: 51.5000, latitude: 25.6833 },   // Al Khor
            { longitude: 51.4333, latitude: 25.4167 },   // Al Wakrah
            { longitude: 51.2167, latitude: 24.7500 },   // Dukhan
            { longitude: 51.5167, latitude: 25.8167 }    // Al Ruwais
        ]
    },

    OMAN: {
        name: "Oman",
        borders: [
            { longitude: 58.5933, latitude: 23.6139 },   // Muscat
            { longitude: 57.1500, latitude: 23.6333 },   // Sohar
            { longitude: 56.2500, latitude: 24.3500 },   // Al Buraimi
            { longitude: 54.0917, latitude: 17.0175 },   // Salalah
            { longitude: 58.1833, latitude: 23.3833 }    // Sur
        ]
    },

    // Remaining Asian Countries
    NEPAL: {
        name: "Nepal",
        borders: [
            { longitude: 85.3240, latitude: 27.7172 },   // Kathmandu
            { longitude: 83.9833, latitude: 28.2333 },   // Pokhara
            { longitude: 87.2833, latitude: 26.4833 },   // Biratnagar
            { longitude: 80.5833, latitude: 28.7000 },   // Dhangadhi
            { longitude: 84.4333, latitude: 27.7000 }    // Hetauda
        ]
    },

    SRI_LANKA: {
        name: "Sri Lanka",
        borders: [
            { longitude: 79.8528, latitude: 6.9271 },    // Colombo
            { longitude: 80.6333, latitude: 7.2833 },    // Kandy
            { longitude: 81.2333, latitude: 6.9167 },    // Batticaloa
            { longitude: 80.2167, latitude: 7.3000 },    // Negombo
            { longitude: 80.4167, latitude: 8.3500 }     // Anuradhapura
        ]
    },

    BURMA: {  // Myanmar in 1985
        name: "Burma",
        borders: [
            { longitude: 96.1561, latitude: 16.8661 },   // Rangoon (Yangon)
            { longitude: 96.0833, latitude: 21.9750 },   // Mandalay
            { longitude: 97.4000, latitude: 22.9333 },   // Lashio
            { longitude: 94.9167, latitude: 21.1333 },   // Sittwe
            { longitude: 97.7333, latitude: 16.4833 }    // Moulmein
        ]
    },

    // Pacific Island Nations
    FIJI: {
        name: "Fiji",
        borders: [
            { longitude: 178.4417, latitude: -18.1416 }, // Suva
            { longitude: 177.4500, latitude: -17.8000 }, // Lautoka
            { longitude: 178.1667, latitude: -17.6167 }, // Labasa
            { longitude: 177.9667, latitude: -17.7500 }, // Ba
            { longitude: 178.5833, latitude: -18.0833 }  // Nausori
        ]
    },

    PAPUA_NEW_GUINEA: {
        name: "Papua New Guinea",
        borders: [
            { longitude: 147.1803, latitude: -9.4438 },  // Port Moresby
            { longitude: 146.9833, latitude: -6.7333 },  // Lae
            { longitude: 145.3833, latitude: -5.2333 },  // Madang
            { longitude: 152.1667, latitude: -4.2000 },  // Rabaul
            { longitude: 143.2167, latitude: -9.0833 }   // Daru
        ]
    },

    // More African Countries
    CAMEROON: {
        name: "Cameroon",
        borders: [
            { longitude: 11.5021, latitude: 3.8480 },    // Yaoundé
            { longitude: 9.7000, latitude: 4.0500 },     // Douala
            { longitude: 13.3833, latitude: 10.5833 },   // Maroua
            { longitude: 10.0500, latitude: 5.9500 },    // Bamenda
            { longitude: 14.3167, latitude: 12.3667 }    // Kousseri
        ]
    },

    ANGOLA: {
        name: "Angola",
        borders: [
            { longitude: 13.2343, latitude: -8.8383 },   // Luanda
            { longitude: 13.4000, latitude: -12.5833 },  // Benguela
            { longitude: 15.7333, latitude: -4.7833 },   // Uíge
            { longitude: 20.3833, latitude: -9.6500 },   // Luena
            { longitude: 12.2000, latitude: -6.1333 }    // Mbanza Congo
        ]
    },

    MOZAMBIQUE: {
        name: "Mozambique",
        borders: [
            { longitude: 32.5892, latitude: -25.9692 },  // Maputo
            { longitude: 34.8383, latitude: -19.8436 },  // Beira
            { longitude: 40.6714, latitude: -15.0333 },  // Nampula
            { longitude: 39.2667, latitude: -12.9667 },  // Pemba
            { longitude: 33.6000, latitude: -19.1167 }   // Tete
        ]
    },

    // More Asian Countries
    BANGLADESH: {
        name: "Bangladesh",
        borders: [
            { longitude: 90.4125, latitude: 23.8103 },   // Dhaka
            { longitude: 91.8333, latitude: 22.3333 },   // Chittagong
            { longitude: 89.5333, latitude: 22.8000 },   // Khulna
            { longitude: 88.6000, latitude: 24.3667 },   // Rajshahi
            { longitude: 91.1000, latitude: 23.4667 }    // Comilla
        ]
    },

    BHUTAN: {
        name: "Bhutan",
        borders: [
            { longitude: 89.6419, latitude: 27.4712 },   // Thimphu
            { longitude: 89.8667, latitude: 27.5833 },   // Paro
            { longitude: 91.5167, latitude: 27.3333 },   // Bumthang
            { longitude: 90.1667, latitude: 27.0000 },   // Phuntsholing
            { longitude: 91.1333, latitude: 27.1000 }    // Samdrup Jongkhar
        ]
    },

    // Caribbean Nations
    TRINIDAD_AND_TOBAGO: {
        name: "Trinidad and Tobago",
        borders: [
            { longitude: -61.5167, latitude: 10.6667 },  // Port of Spain
            { longitude: -61.4000, latitude: 10.3500 },  // San Fernando
            { longitude: -61.2333, latitude: 10.5833 },  // Arima
            { longitude: -60.7333, latitude: 11.1833 },  // Scarborough
            { longitude: -61.0667, latitude: 10.6500 }   // Chaguanas
        ]
    },

    BARBADOS: {
        name: "Barbados",
        borders: [
            { longitude: -59.6167, latitude: 13.1000 },  // Bridgetown
            { longitude: -59.5333, latitude: 13.1833 },  // Speightstown
            { longitude: -59.5500, latitude: 13.0667 },  // Oistins
            { longitude: -59.6333, latitude: 13.2167 },  // Holetown
            { longitude: -59.5167, latitude: 13.1167 }   // St. George
        ]
    },

    // More Pacific Island Nations
    SOLOMON_ISLANDS: {
        name: "Solomon Islands",
        borders: [
            { longitude: 159.9500, latitude: -9.4333 },  // Honiara
            { longitude: 160.6833, latitude: -8.1000 },  // Auki
            { longitude: 157.1333, latitude: -8.3333 },  // Gizo
            { longitude: 161.9000, latitude: -9.8667 },  // Kirakira
            { longitude: 156.7167, latitude: -7.8500 }   // Choiseul
        ]
    },

    VANUATU: {
        name: "Vanuatu",
        borders: [
            { longitude: 168.3167, latitude: -17.7333 }, // Port Vila
            { longitude: 167.1667, latitude: -15.5167 }, // Luganville
            { longitude: 168.1833, latitude: -17.7500 }, // Isangel
            { longitude: 169.2833, latitude: -16.5000 }, // Lakatoro
            { longitude: 167.4000, latitude: -16.0667 }  // Sola
        ]
    },

    // Additional Middle Eastern Countries
    BAHRAIN: {
        name: "Bahrain",
        borders: [
            { longitude: 50.5833, latitude: 26.2167 },   // Manama
            { longitude: 50.6167, latitude: 26.1667 },   // Riffa
            { longitude: 50.6167, latitude: 26.0500 },   // Isa Town
            { longitude: 50.5500, latitude: 26.1333 },   // Jidd Hafs
            { longitude: 50.6167, latitude: 25.9833 }    // Sitra
        ]
    },

    // More African Countries
    MALI: {
        name: "Mali",
        borders: [
            { longitude: -8.0000, latitude: 12.6500 },   // Bamako
            { longitude: -5.6667, latitude: 11.3333 },   // Sikasso
            { longitude: -4.3000, latitude: 13.5000 },   // Ségou
            { longitude: -3.0000, latitude: 16.7667 },   // Timbuktu
            { longitude: -7.9500, latitude: 13.5833 }    // Koulikoro
        ]
    },

    CHAD: {
        name: "Chad",
        borders: [
            { longitude: 15.0500, latitude: 12.1000 },   // N'Djamena
            { longitude: 20.8500, latitude: 13.8333 },   // Abéché
            { longitude: 18.3833, latitude: 9.1500 },    // Moundou
            { longitude: 16.0667, latitude: 8.5667 },    // Sarh
            { longitude: 14.9000, latitude: 13.3167 }    // Mongo
        ]
    },

    NIGER: {
        name: "Niger",
        borders: [
            { longitude: 2.1167, latitude: 13.5167 },    // Niamey
            { longitude: 7.9833, latitude: 13.8000 },    // Zinder
            { longitude: 5.2667, latitude: 14.8833 },    // Agadez
            { longitude: 13.1167, latitude: 13.3167 },   // Diffa
            { longitude: 3.4500, latitude: 13.7000 }     // Dosso
        ]
    },

    BURKINA_FASO: {
        name: "Burkina Faso",
        borders: [
            { longitude: -1.5167, latitude: 12.3667 },   // Ouagadougou
            { longitude: -4.3000, latitude: 11.2000 },   // Bobo-Dioulasso
            { longitude: -0.0333, latitude: 12.2500 },   // Koupéla
            { longitude: -2.4167, latitude: 13.5833 },   // Ouahigouya
            { longitude: -0.3667, latitude: 12.0667 }    // Tenkodogo
        ]
    },

    // More Caribbean Nations
    BAHAMAS: {
        name: "The Bahamas",
        borders: [
            { longitude: -77.3333, latitude: 25.0833 },  // Nassau
            { longitude: -78.6500, latitude: 26.5333 },  // Freeport
            { longitude: -76.1333, latitude: 24.7500 },  // Alice Town
            { longitude: -75.9667, latitude: 23.5833 },  // Governor's Harbour
            { longitude: -77.1000, latitude: 26.5500 }   // Marsh Harbour
        ]
    },

    GRENADA: {
        name: "Grenada",
        borders: [
            { longitude: -61.7500, latitude: 12.0500 },  // St. George's
            { longitude: -61.6833, latitude: 12.1833 },  // Grenville
            { longitude: -61.7333, latitude: 12.2333 },  // Gouyave
            { longitude: -61.6250, latitude: 12.1500 },  // Sauteurs
            { longitude: -61.7000, latitude: 12.0167 }   // Victoria
        ]
    },

    // Pacific Island Nations
    TONGA: {
        name: "Tonga",
        borders: [
            { longitude: -175.2000, latitude: -21.1333 },// Nuku'alofa
            { longitude: -174.3500, latitude: -19.8333 },// Neiafu
            { longitude: -175.3333, latitude: -21.2000 },// Mu'a
            { longitude: -175.1500, latitude: -21.1667 },// Pangai
            { longitude: -174.5500, latitude: -19.7500 } // 'Ohonua
        ]
    },

    SAMOA: {
        name: "Western Samoa",  // Name in 1985
        borders: [
            { longitude: -171.7667, latitude: -13.8333 },// Apia
            { longitude: -172.2000, latitude: -13.7333 },// Asau
            { longitude: -171.8500, latitude: -13.7500 },// Mulifanua
            { longitude: -171.9667, latitude: -13.8333 },// Safotu
            { longitude: -172.0333, latitude: -13.7500 } // Fagamalo
        ]
    },

    // Additional Asian Countries
    NORTH_YEMEN: {  // Yemen Arab Republic in 1985
        name: "Yemen Arab Republic",
        borders: [
            { longitude: 44.2067, latitude: 15.3547 },   // Sana'a
            { longitude: 43.9500, latitude: 13.5833 },   // Taiz
            { longitude: 42.9500, latitude: 14.7833 },   // Hodeidah
            { longitude: 44.0167, latitude: 13.9667 },   // Ibb
            { longitude: 44.4000, latitude: 14.5333 }    // Dhamar
        ]
    },

    SOUTH_YEMEN: {  // People's Democratic Republic of Yemen in 1985
        name: "People's Democratic Republic of Yemen",
        borders: [
            { longitude: 45.0167, latitude: 12.7667 },   // Aden
            { longitude: 48.7933, latitude: 14.0833 },   // Al Mukalla
            { longitude: 49.6667, latitude: 14.5333 },   // Ash Shihr
            { longitude: 45.3667, latitude: 13.0333 },   // Zinjibar
            { longitude: 47.3667, latitude: 14.5333 }    // Seiyun
        ]
    },

    // Final African Nations
    GUINEA: {
        name: "Guinea",
        borders: [
            { longitude: -13.7000, latitude: 9.5092 },   // Conakry
            { longitude: -9.3000, latitude: 10.3833 },   // Kankan
            { longitude: -12.8667, latitude: 10.9333 },  // Labé
            { longitude: -13.5833, latitude: 11.3167 },  // Mamou
            { longitude: -10.7833, latitude: 10.0500 }   // Faranah
        ]
    },

    SIERRA_LEONE: {
        name: "Sierra Leone",
        borders: [
            { longitude: -13.2317, latitude: 8.4900 },   // Freetown
            { longitude: -11.9333, latitude: 8.6333 },   // Bo
            { longitude: -11.7333, latitude: 9.0333 },   // Makeni
            { longitude: -12.5000, latitude: 8.2167 },   // Kenema
            { longitude: -11.8500, latitude: 7.8667 }    // Koidu
        ]
    },

    LIBERIA: {
        name: "Liberia",
        borders: [
            { longitude: -10.7969, latitude: 6.3005 },   // Monrovia
            { longitude: -10.0500, latitude: 8.1333 },   // Gbarnga
            { longitude: -7.7167, latitude: 4.3500 },    // Harper
            { longitude: -9.4500, latitude: 5.8833 },    // Buchanan
            { longitude: -8.5333, latitude: 6.3000 }     // Zwedru
        ]
    },

    MAURITANIA: {
        name: "Mauritania",
        borders: [
            { longitude: -15.9785, latitude: 18.0858 },  // Nouakchott
            { longitude: -17.0333, latitude: 20.9333 },  // Nouadhibou
            { longitude: -13.0500, latitude: 16.1500 },  // Kiffa
            { longitude: -7.2500, latitude: 22.6833 },   // Zouérat
            { longitude: -12.4000, latitude: 16.6167 }   // Kaédi
        ]
    },

    CENTRAL_AFRICAN_REPUBLIC: {
        name: "Central African Republic",
        borders: [
            { longitude: 18.5500, latitude: 4.3667 },    // Bangui
            { longitude: 15.2833, latitude: 4.2167 },    // Berbérati
            { longitude: 21.9833, latitude: 6.5333 },    // Bambari
            { longitude: 20.6667, latitude: 5.7667 },    // Bossangoa
            { longitude: 16.3667, latitude: 7.1833 }     // Bouar
        ]
    },

    // Remaining Caribbean Nations
    ANTIGUA_AND_BARBUDA: {
        name: "Antigua and Barbuda",
        borders: [
            { longitude: -61.8456, latitude: 17.1175 },  // St. John's
            { longitude: -61.7833, latitude: 17.0333 },  // English Harbour
            { longitude: -61.8833, latitude: 17.1500 },  // Codrington
            { longitude: -61.8167, latitude: 17.1667 },  // All Saints
            { longitude: -61.7333, latitude: 17.0833 }   // Parham
        ]
    },

    SAINT_LUCIA: {
        name: "Saint Lucia",
        borders: [
            { longitude: -61.0000, latitude: 14.0167 },  // Castries
            { longitude: -60.9500, latitude: 13.8500 },  // Vieux Fort
            { longitude: -61.0500, latitude: 14.1000 },  // Gros Islet
            { longitude: -61.0333, latitude: 13.7167 },  // Soufrière
            { longitude: -60.9333, latitude: 13.9167 }   // Dennery
        ]
    },

    // Final Pacific Island Nations
    KIRIBATI: {
        name: "Kiribati",
        borders: [
            { longitude: 172.9778, latitude: 1.3290 },   // South Tarawa
            { longitude: 169.5333, latitude: -0.5333 },  // Christmas Island
            { longitude: 173.0333, latitude: 1.3500 },   // Betio
            { longitude: 176.4500, latitude: -1.3500 },  // Tabuaeran
            { longitude: 173.1500, latitude: 1.4333 }    // Bikenibeu
        ]
    },

    NAURU: {
        name: "Nauru",
        borders: [
            { longitude: 166.9206, latitude: -0.5477 },  // Yaren
            { longitude: 166.9167, latitude: -0.5333 },  // Aiwo
            { longitude: 166.9500, latitude: -0.5167 },  // Denigomodu
            { longitude: 166.9333, latitude: -0.5000 },  // Anibare
            { longitude: 166.9167, latitude: -0.5167 }   // Boe
        ]
    },

    // Final Asian Nations
    BRUNEI: {
        name: "Brunei",
        borders: [
            { longitude: 114.9486, latitude: 4.9031 },   // Bandar Seri Begawan
            { longitude: 114.6667, latitude: 4.5833 },   // Kuala Belait
            { longitude: 115.0667, latitude: 4.7833 },   // Tutong
            { longitude: 115.1333, latitude: 4.9333 },   // Bangar
            { longitude: 114.8167, latitude: 4.8833 }    // Muara
        ]
    },

    MALDIVES: {
        name: "Maldives",
        borders: [
            { longitude: 73.5093, latitude: 4.1755 },    // Male
            { longitude: 73.1667, latitude: 6.6167 },    // Kulhudhuffushi
            { longitude: 73.4333, latitude: 0.5333 },    // Addu City
            { longitude: 73.0333, latitude: 5.6667 },    // Thinadhoo
            { longitude: 72.9967, latitude: 3.7870 }     // Fuvahmulah
        ]
    },

    // Additional Small States and Territories
    MALTA: {
        name: "Malta",
        borders: [
            { longitude: 14.5147, latitude: 35.8997 },   // Valletta
            { longitude: 14.4833, latitude: 35.9000 },   // Birkirkara
            { longitude: 14.2167, latitude: 36.0500 },   // Gozo (Victoria)
            { longitude: 14.5333, latitude: 35.8667 },   // Qormi
            { longitude: 14.4333, latitude: 35.8833 }    // Mosta
        ]
    },

    CYPRUS: {
        name: "Cyprus",
        borders: [
            { longitude: 33.3642, latitude: 35.1856 },   // Nicosia
            { longitude: 33.6233, latitude: 34.9250 },   // Larnaca
            { longitude: 32.4278, latitude: 34.7722 },   // Paphos
            { longitude: 33.0333, latitude: 34.6750 },   // Limassol
            { longitude: 33.9167, latitude: 35.1167 }    // Famagusta
        ]
    },

    SEYCHELLES: {
        name: "Seychelles",
        borders: [
            { longitude: 55.4500, latitude: -4.6167 },   // Victoria
            { longitude: 55.5167, latitude: -4.7500 },   // Anse Boileau
            { longitude: 55.5333, latitude: -4.6167 },   // Anse Royale
            { longitude: 55.4167, latitude: -4.6333 },   // Beau Vallon
            { longitude: 55.7333, latitude: -4.3167 }    // La Digue
        ]
    },

    CAPE_VERDE: {
        name: "Cape Verde",
        borders: [
            { longitude: -23.5167, latitude: 14.9167 },  // Praia
            { longitude: -24.5167, latitude: 16.8833 },  // Mindelo
            { longitude: -23.6000, latitude: 15.1333 },  // Assomada
            { longitude: -24.7167, latitude: 15.0333 },  // Tarrafal
            { longitude: -24.2833, latitude: 16.1500 }   // Porto Novo
        ]
    },

    SAO_TOME_AND_PRINCIPE: {
        name: "São Tomé and Príncipe",
        borders: [
            { longitude: 6.7333, latitude: 0.3333 },     // São Tomé
            { longitude: 7.4167, latitude: 1.6333 },     // Santo António
            { longitude: 6.7167, latitude: 0.3833 },     // Neves
            { longitude: 6.7333, latitude: 0.2833 },     // Santana
            { longitude: 6.6500, latitude: 0.3000 }      // Guadalupe
        ]
    },

    COMOROS: {
        name: "Comoros",
        borders: [
            { longitude: 43.2667, latitude: -11.7000 },  // Moroni
            { longitude: 43.3333, latitude: -11.4000 },  // Mutsamudu
            { longitude: 43.7833, latitude: -12.2833 },  // Fomboni
            { longitude: 43.2500, latitude: -11.7333 },  // Iconi
            { longitude: 43.3833, latitude: -11.7000 }   // Mitsamiouli
        ]
    },

    DJIBOUTI: {
        name: "Djibouti",
        borders: [
            { longitude: 43.1453, latitude: 11.5883 },   // Djibouti City
            { longitude: 42.7167, latitude: 11.7833 },   // Tadjoura
            { longitude: 43.2833, latitude: 11.9500 },   // Obock
            { longitude: 42.6667, latitude: 11.5833 },   // Ali Sabieh
            { longitude: 42.4833, latitude: 11.1000 }    // Dikhil
        ]
    },

    GAMBIA: {
        name: "The Gambia",
        borders: [
            { longitude: -16.5775, latitude: 13.4531 },  // Banjul
            { longitude: -16.6667, latitude: 13.4000 },  // Serekunda
            { longitude: -14.6500, latitude: 13.4333 },  // Basse Santa Su
            { longitude: -15.5333, latitude: 13.4667 },  // Georgetown
            { longitude: -16.0833, latitude: 13.4833 }   // Brikama
        ]
    },

    EQUATORIAL_GUINEA: {
        name: "Equatorial Guinea",
        borders: [
            { longitude: 8.7833, latitude: 3.7500 },     // Malabo
            { longitude: 10.2667, latitude: 1.8500 },    // Bata
            { longitude: 9.7500, latitude: 2.3333 },     // Ebebiyín
            { longitude: 11.3333, latitude: 1.5833 },    // Mongomo
            { longitude: 10.1167, latitude: 2.0667 }     // Evinayong
        ]
    },

    BELIZE: {
        name: "Belize",
        borders: [
            { longitude: -88.7667, latitude: 17.2500 },  // Belize City
            { longitude: -88.7667, latitude: 17.5000 },  // Belmopan
            { longitude: -88.3833, latitude: 18.0833 },  // Corozal
            { longitude: -88.5667, latitude: 16.1000 },  // Punta Gorda
            { longitude: -89.0667, latitude: 17.1500 }   // San Ignacio
        ]
    },

    SURINAME: {
        name: "Suriname",
        borders: [
            { longitude: -55.1667, latitude: 5.8333 },   // Paramaribo
            { longitude: -55.4833, latitude: 5.7167 },   // Lelydorp
            { longitude: -54.4000, latitude: 5.5000 },   // Albina
            { longitude: -56.3333, latitude: 5.8333 },   // Nieuw Nickerie
            { longitude: -55.0500, latitude: 5.5000 }    // Marienburg
        ]
    },

    GUYANA: {
        name: "Guyana",
        borders: [
            { longitude: -58.1667, latitude: 6.8000 },   // Georgetown
            { longitude: -58.3000, latitude: 6.4000 },   // Linden
            { longitude: -58.6167, latitude: 7.2333 },   // Anna Regina
            { longitude: -57.5167, latitude: 5.8667 },   // New Amsterdam
            { longitude: -59.7833, latitude: 8.2000 }    // Lethem
        ]
    },

    // Additional Small States and Territories
    MALTA: {
        name: "Malta",
        borders: [
            { longitude: 14.5147, latitude: 35.8997 },   // Valletta
            { longitude: 14.4833, latitude: 35.9000 },   // Birkirkara
            { longitude: 14.2167, latitude: 36.0500 },   // Gozo (Victoria)
            { longitude: 14.5333, latitude: 35.8667 },   // Qormi
            { longitude: 14.4333, latitude: 35.8833 }    // Mosta
        ]
    },

    CYPRUS: {
        name: "Cyprus",
        borders: [
            { longitude: 33.3642, latitude: 35.1856 },   // Nicosia
            { longitude: 33.6233, latitude: 34.9250 },   // Larnaca
            { longitude: 32.4278, latitude: 34.7722 },   // Paphos
            { longitude: 33.0333, latitude: 34.6750 },   // Limassol
            { longitude: 33.9167, latitude: 35.1167 }    // Famagusta
        ]
    },

    SEYCHELLES: {
        name: "Seychelles",
        borders: [
            { longitude: 55.4500, latitude: -4.6167 },   // Victoria
            { longitude: 55.5167, latitude: -4.7500 },   // Anse Boileau
            { longitude: 55.5333, latitude: -4.6167 },   // Anse Royale
            { longitude: 55.4167, latitude: -4.6333 },   // Beau Vallon
            { longitude: 55.7333, latitude: -4.3167 }    // La Digue
        ]
    },

    CAPE_VERDE: {
        name: "Cape Verde",
        borders: [
            { longitude: -23.5167, latitude: 14.9167 },  // Praia
            { longitude: -24.5167, latitude: 16.8833 },  // Mindelo
            { longitude: -23.6000, latitude: 15.1333 },  // Assomada
            { longitude: -24.7167, latitude: 15.0333 },  // Tarrafal
            { longitude: -24.2833, latitude: 16.1500 }   // Porto Novo
        ]
    },

    SAO_TOME_AND_PRINCIPE: {
        name: "São Tomé and Príncipe",
        borders: [
            { longitude: 6.7333, latitude: 0.3333 },     // São Tomé
            { longitude: 7.4167, latitude: 1.6333 },     // Santo António
            { longitude: 6.7167, latitude: 0.3833 },     // Neves
            { longitude: 6.7333, latitude: 0.2833 },     // Santana
            { longitude: 6.6500, latitude: 0.3000 }      // Guadalupe
        ]
    },

    COMOROS: {
        name: "Comoros",
        borders: [
            { longitude: 43.2667, latitude: -11.7000 },  // Moroni
            { longitude: 43.3333, latitude: -11.4000 },  // Mutsamudu
            { longitude: 43.7833, latitude: -12.2833 },  // Fomboni
            { longitude: 43.2500, latitude: -11.7333 },  // Iconi
            { longitude: 43.3833, latitude: -11.7000 }   // Mitsamiouli
        ]
    },

    DJIBOUTI: {
        name: "Djibouti",
        borders: [
            { longitude: 43.1453, latitude: 11.5883 },   // Djibouti City
            { longitude: 42.7167, latitude: 11.7833 },   // Tadjoura
            { longitude: 43.2833, latitude: 11.9500 },   // Obock
            { longitude: 42.6667, latitude: 11.5833 },   // Ali Sabieh
            { longitude: 42.4833, latitude: 11.1000 }    // Dikhil
        ]
    },

    GAMBIA: {
        name: "The Gambia",
        borders: [
            { longitude: -16.5775, latitude: 13.4531 },  // Banjul
            { longitude: -16.6667, latitude: 13.4000 },  // Serekunda
            { longitude: -14.6500, latitude: 13.4333 },  // Basse Santa Su
            { longitude: -15.5333, latitude: 13.4667 },  // Georgetown
            { longitude: -16.0833, latitude: 13.4833 }   // Brikama
        ]
    },

    EQUATORIAL_GUINEA: {
        name: "Equatorial Guinea",
        borders: [
            { longitude: 8.7833, latitude: 3.7500 },     // Malabo
            { longitude: 10.2667, latitude: 1.8500 },    // Bata
            { longitude: 9.7500, latitude: 2.3333 },     // Ebebiyín
            { longitude: 11.3333, latitude: 1.5833 },    // Mongomo
            { longitude: 10.1167, latitude: 2.0667 }     // Evinayong
        ]
    },

    BELIZE: {
        name: "Belize",
        borders: [
            { longitude: -88.7667, latitude: 17.2500 },  // Belize City
            { longitude: -88.7667, latitude: 17.5000 },  // Belmopan
            { longitude: -88.3833, latitude: 18.0833 },  // Corozal
            { longitude: -88.5667, latitude: 16.1000 },  // Punta Gorda
            { longitude: -89.0667, latitude: 17.1500 }   // San Ignacio
        ]
    },

    SURINAME: {
        name: "Suriname",
        borders: [
            { longitude: -55.1667, latitude: 5.8333 },   // Paramaribo
            { longitude: -55.4833, latitude: 5.7167 },   // Lelydorp
            { longitude: -54.4000, latitude: 5.5000 },   // Albina
            { longitude: -56.3333, latitude: 5.8333 },   // Nieuw Nickerie
            { longitude: -55.0500, latitude: 5.5000 }    // Marienburg
        ]
    },

    GUYANA: {
        name: "Guyana",
        borders: [
            { longitude: -58.1667, latitude: 6.8000 },   // Georgetown
            { longitude: -58.3000, latitude: 6.4000 },   // Linden
            { longitude: -58.6167, latitude: 7.2333 },   // Anna Regina
            { longitude: -57.5167, latitude: 5.8667 },   // New Amsterdam
            { longitude: -59.7833, latitude: 8.2000 }    // Lethem
        ]
    },

    // Special Administrative Regions and Disputed Territories (1985)
    EAST_TIMOR: {  // Under Indonesian occupation in 1985
        name: "East Timor",
        borders: [
            { longitude: 125.5667, latitude: -8.5583 },  // Dili
            { longitude: 124.3333, latitude: -9.2000 },  // Suai
            { longitude: 126.3667, latitude: -8.5333 },  // Lospalos
            { longitude: 125.2333, latitude: -8.8833 },  // Same
            { longitude: 125.4000, latitude: -8.7833 }   // Aileu
        ]
    },

    HONG_KONG: {   // British Colony in 1985
        name: "Hong Kong",
        borders: [
            { longitude: 114.1694, latitude: 22.3193 },  // Central
            { longitude: 114.1833, latitude: 22.2783 },  // Kowloon
            { longitude: 113.9422, latitude: 22.2783 },  // Lantau
            { longitude: 114.2333, latitude: 22.3833 },  // New Territories
            { longitude: 114.1500, latitude: 22.2167 }   // Aberdeen
        ]
    },

    MACAU: {       // Portuguese Territory in 1985
        name: "Macau",
        borders: [
            { longitude: 113.5439, latitude: 22.1987 },  // Macau Peninsula
            { longitude: 113.5667, latitude: 22.1500 },  // Taipa
            { longitude: 113.5667, latitude: 22.1167 },  // Coloane
            { longitude: 113.5500, latitude: 22.2000 },  // Porto Interior
            { longitude: 113.5333, latitude: 22.1833 }   // Ilha Verde
        ]
    },

    WEST_BERLIN: {  // Western Sectors of Berlin in 1985
        name: "West Berlin",
        borders: [
            { longitude: 13.3833, latitude: 52.5167 },   // Charlottenburg
            { longitude: 13.3250, latitude: 52.4833 },   // Zehlendorf
            { longitude: 13.4500, latitude: 52.4500 },   // Tempelhof
            { longitude: 13.2833, latitude: 52.5333 },   // Spandau
            { longitude: 13.3500, latitude: 52.4333 }    // Steglitz
        ]
    },

    EAST_BERLIN: {  // Soviet Sector of Berlin in 1985
        name: "East Berlin",
        borders: [
            { longitude: 13.4167, latitude: 52.5167 },   // Mitte
            { longitude: 13.4833, latitude: 52.5333 },   // Friedrichshain
            { longitude: 13.4667, latitude: 52.5500 },   // Prenzlauer Berg
            { longitude: 13.5167, latitude: 52.5167 },   // Lichtenberg
            { longitude: 13.5500, latitude: 52.4833 }    // Köpenick
        ]
    },

    WEST_BANK: {    // Occupied Territory in 1985
        name: "West Bank",
        borders: [
            { longitude: 35.2333, latitude: 31.9500 },   // Ramallah
            { longitude: 35.3000, latitude: 31.7167 },   // Jericho
            { longitude: 35.2017, latitude: 31.5333 },   // Bethlehem
            { longitude: 35.1667, latitude: 31.5333 },   // Hebron
            { longitude: 35.2933, latitude: 32.2233 }    // Nablus
        ]
    },

    GAZA_STRIP: {   // Occupied Territory in 1985
        name: "Gaza Strip",
        borders: [
            { longitude: 34.4667, latitude: 31.5000 },   // Gaza City
            { longitude: 34.3500, latitude: 31.3500 },   // Khan Yunis
            { longitude: 34.3000, latitude: 31.2833 },   // Rafah
            { longitude: 34.5333, latitude: 31.5333 },   // Jabalia
            { longitude: 34.4000, latitude: 31.4167 }    // Deir al-Balah
        ]
    },

    WESTERN_SAHARA: { // Disputed Territory in 1985
        name: "Western Sahara",
        borders: [
            { longitude: -13.2033, latitude: 27.1536 },  // El Aaiún
            { longitude: -13.4167, latitude: 26.3667 },  // Boujdour
            { longitude: -14.1333, latitude: 22.7333 },  // Dakhla
            { longitude: -11.6667, latitude: 25.2333 },  // Smara
            { longitude: -13.1833, latitude: 24.4833 }   // Bir Lehlou
        ]
    },

    ANTARCTICA: {    // International Territory under Antarctic Treaty
        name: "Antarctica",
        borders: [
            { longitude: -58.4633, latitude: -63.3000 }, // Palmer Station (US)
            { longitude: 166.6683, latitude: -77.8500 }, // McMurdo Station (US)
            { longitude: 2.8383, latitude: -71.6733 },   // SANAE IV (South Africa)
            { longitude: 39.5897, latitude: -69.0078 },  // Mawson Station (Australia)
            { longitude: -67.5667, latitude: -67.5667 }  // Rothera Station (UK)
        ]
    }
};

// Additional regions can be added as needed
const REGION_GROUPS = {
    NATO: [
        'USA', 'CANADA', 'UK', 'FRANCE', 'WEST_GERMANY', 
        'ITALY', 'SPAIN', 'PORTUGAL', 'NORWAY', 'DENMARK', 
        'BELGIUM', 'NETHERLANDS', 'GREECE', 'TURKEY', 
        'ICELAND', 'LUXEMBOURG'
    ],
    
    WARSAW_PACT: [
        'USSR', 'EAST_GERMANY', 'POLAND', 'CZECHOSLOVAKIA', 
        'HUNGARY', 'ROMANIA', 'BULGARIA'
    ],
    
    NEUTRAL_EUROPEAN: [
        'SWITZERLAND', 'AUSTRIA', 'SWEDEN', 'FINLAND', 
        'YUGOSLAVIA', 'IRELAND', 'MALTA', 'CYPRUS'
    ],
    
    WESTERN_ALIGNED: [
        'JAPAN', 'SOUTH_KOREA', 'AUSTRALIA', 'NEW_ZEALAND',
        'ISRAEL', 'EGYPT', 'SAUDI_ARABIA', 'KUWAIT',
        'UAE', 'OMAN', 'BAHRAIN', 'QATAR', 'MOROCCO',
        'TUNISIA', 'PAKISTAN', 'THAILAND', 'PHILIPPINES'
    ],
    
    EASTERN_ALIGNED: [
        'NORTH_KOREA', 'VIETNAM', 'LAOS', 'CAMBODIA',
        'MONGOLIA', 'SOUTH_YEMEN', 'SYRIA', 'LIBYA',
        'ALGERIA', 'ETHIOPIA', 'ANGOLA', 'MOZAMBIQUE',
        'AFGHANISTAN', 'CUBA', 'NICARAGUA'
    ],
    
    NON_ALIGNED_MOVEMENT: [
        'INDIA', 'INDONESIA', 'MALAYSIA', 'SINGAPORE',
        'BURMA', 'BANGLADESH', 'SRI_LANKA', 'NEPAL',
        'IRAN', 'IRAQ', 'NORTH_YEMEN', 'JORDAN', 'LEBANON',
        'NIGERIA', 'GHANA', 'KENYA', 'TANZANIA', 'UGANDA',
        'ZAMBIA', 'ZIMBABWE', 'MALI', 'SUDAN', 'SOMALIA',
        'ZAIRE', 'CAMEROON', 'SENEGAL', 'IVORY_COAST'
    ],
    
    LATIN_AMERICAN: [
        'BRAZIL', 'ARGENTINA', 'CHILE', 'PERU', 'COLOMBIA',
        'VENEZUELA', 'ECUADOR', 'BOLIVIA', 'PARAGUAY',
        'URUGUAY', 'GUYANA', 'SURINAME'
    ],
    
    SMALL_STATES: [
        'BRUNEI', 'MALDIVES', 'BHUTAN', 'FIJI', 
        'PAPUA_NEW_GUINEA', 'SOLOMON_ISLANDS', 'VANUATU',
        'KIRIBATI', 'NAURU', 'TONGA', 'SAMOA',
        'BAHAMAS', 'BARBADOS', 'TRINIDAD_AND_TOBAGO',
        'JAMAICA', 'HAITI', 'DOMINICAN_REPUBLIC',
        'ANTIGUA_AND_BARBUDA', 'SAINT_LUCIA', 'GRENADA',
        'BELIZE', 'CAPE_VERDE', 'COMOROS', 'DJIBOUTI',
        'EQUATORIAL_GUINEA', 'GAMBIA', 'GUINEA',
        'SIERRA_LEONE', 'LIBERIA', 'BURKINA_FASO',
        'NIGER', 'CHAD', 'CENTRAL_AFRICAN_REPUBLIC',
        'SAO_TOME_AND_PRINCIPE', 'SEYCHELLES', 'MAURITANIA'
    ],
    
    DISPUTED_TERRITORIES: [
        'WEST_BERLIN', 'EAST_BERLIN', 'HONG_KONG', 'MACAU',
        'EAST_TIMOR', 'WEST_BANK', 'GAZA_STRIP',
        'WESTERN_SAHARA', 'ANTARCTICA'
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

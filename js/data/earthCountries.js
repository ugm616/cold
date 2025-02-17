// Constants for military power calculation
const MILITARY_TECH_LEVELS = {
    SUPER_POWER: 9,
    GREAT_POWER: 8,
    REGIONAL_POWER: 7,
    DEVELOPED: 6,
    DEVELOPING: 5,
    LIMITED: 4,
    BASIC: 3
};

const EARTH_COUNTRIES_1985 = {
    // NORTH AMERICA
    USA: {
        name: "United States of America",
        population: 237900000,
        technology: MILITARY_TECH_LEVELS.SUPER_POWER,
        military: {
            army: 9,
            navy: 9,
            airforce: 9,
            nuclear: true,
            nuclearlevel: 9 // Multiple warheads, advanced delivery
        },
        economy: 9,
        stability: 8,
        resources: ["oil", "technology", "agriculture", "minerals"],
        description: `Superpower leading NATO alliance. Economy is largest in world. 
                     Strong conventional and nuclear forces. Advanced technology in all sectors.
                     Currently in arms race with Soviet Union. Strong allies in Europe and Asia.
                     Maintains global military presence through bases and carrier groups.`,
        specialAbilities: ["Nuclear Deterrence", "Power Projection", "Technology Leadership"],
        color: "#0052A5",
        startingTroops: 47,
        influence: 10,
        historicalContext: `1980s marked by Reagan presidency, massive military buildup,
                          and increasing technological edge over Soviet Union. SDI program
                          announced 1983. Economy recovering from 1970s stagflation.`
    },

    CANADA: {
        name: "Canada",
        population: 25500000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 6,
            navy: 6,
            airforce: 7,
            nuclear: false
        },
        economy: 7,
        stability: 9,
        resources: ["oil", "minerals", "timber", "agriculture"],
        description: `NATO member with close US ties. Strong economy based on natural resources.
                     Professional but limited military focused on territorial defense and NATO commitments.
                     Leader in UN peacekeeping operations.`,
        specialAbilities: ["Arctic Operations", "Peacekeeping"],
        color: "#FF0000",
        startingTroops: 5,
        influence: 6,
        historicalContext: `Strong ally of US but maintains distinct foreign policy.
                          Leadership in international peacekeeping. Economic integration
                          with US increasing. Constitutional independence from UK achieved 1982.`
    },

    MEXICO: {
        name: "Mexico",
        population: 75800000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 5,
            navy: 4,
            airforce: 4,
            nuclear: false
        },
        economy: 5,
        stability: 6,
        resources: ["oil", "minerals", "agriculture"],
        description: `Regional power facing economic challenges. Oil exporter but struggling
                     with debt crisis. Military focused on internal security. Close economic
                     ties with US but maintaining independent foreign policy.`,
        specialAbilities: ["Oil Production"],
        color: "#006847",
        startingTroops: 15,
        influence: 4,
        historicalContext: `Dealing with aftermath of 1982 debt crisis. One-party rule
                          under PRI continues. Oil wealth diminished by price decline.
                          Beginning of economic liberalization.`
    },

    // WESTERN EUROPE
    UK: {
        name: "United Kingdom",
        population: 56550000,
        technology: MILITARY_TECH_LEVELS.GREAT_POWER,
        military: {
            army: 7,
            navy: 8,
            airforce: 8,
            nuclear: true,
            nuclearlevel: 7
        },
        economy: 7,
        stability: 7,
        resources: ["oil", "technology", "finance"],
        description: `Key NATO member with independent nuclear deterrent. Close US ally.
                     Professional military with global reach. North Sea oil producer.
                     Thatcher government implementing major economic reforms.`,
        specialAbilities: ["Nuclear Deterrent", "Naval Tradition", "Financial Center"],
        color: "#012169",
        startingTroops: 11,
        influence: 8,
        historicalContext: `Thatcher era reforms transforming economy. Falklands War victory
                          (1982) restored military prestige. Special relationship with US
                          strengthened under Reagan-Thatcher leadership.`
    },

    FRANCE: {
        name: "France",
        population: 55170000,
        technology: MILITARY_TECH_LEVELS.GREAT_POWER,
        military: {
            army: 7,
            navy: 7,
            airforce: 7,
            nuclear: true,
            nuclearlevel: 7
        },
        economy: 7,
        stability: 8,
        resources: ["technology", "agriculture", "nuclear"],
        description: `Independent nuclear power with autonomous military policy within NATO.
                     Force de frappe provides independent deterrent. Leader in European
                     integration. Significant influence in former African colonies.`,
        specialAbilities: ["Nuclear Force", "Diplomatic Influence", "Technical Innovation"],
        color: "#0055A4",
        startingTroops: 11,
        influence: 7,
        historicalContext: `Under Mitterrand presidency since 1981. Independent foreign
                          policy within NATO framework. Leading role in European
                          integration. Strong influence in Francophone Africa.`
    },

    WESTGERMANY: {
        name: "West Germany",
        population: 61020000,
        technology: MILITARY_TECH_LEVELS.GREAT_POWER,
        military: {
            army: 8,
            navy: 6,
            airforce: 7,
            nuclear: false
        },
        economy: 8,
        stability: 9,
        resources: ["technology", "industry", "finance"],
        description: `Economic powerhouse of Western Europe. Large, well-equipped military
                     under NATO command. Constitutional restrictions on military deployment.
                     Key battlefield in potential NATO-Warsaw Pact conflict.`,
        specialAbilities: ["Economic Power", "Industrial Base"],
        color: "#000000",
        startingTroops: 12,
        influence: 7,
        historicalContext: `Frontline NATO state. Economic miracle continues under
                          Kohl government. Ostpolitik maintaining dialogue with East.
                          Growing influence in European Community.`
    },

    ITALY: {
        name: "Italy",
        population: 56600000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 6,
            navy: 6,
            airforce: 6,
            nuclear: false
        },
        economy: 7,
        stability: 6,
        resources: ["industry", "tourism", "agriculture"],
        description: `NATO member with strategic Mediterranean position. Economic growth
                     but political instability common. Modern military forces focused
                     on NATO southern flank. Dealing with domestic terrorism.`,
        specialAbilities: ["Mediterranean Power", "Industrial Base"],
        color: "#009246",
        startingTroops: 11,
        influence: 6,
        historicalContext: `Period of economic growth despite political instability.
                          Combating Red Brigades terrorism. Strong NATO commitment
                          despite large communist party influence.`
    },

    SPAIN: {
        name: "Spain",
        population: 38500000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 6,
            navy: 5,
            airforce: 5,
            nuclear: false
        },
        economy: 6,
        stability: 7,
        resources: ["tourism", "agriculture", "industry"],
        description: `Recently joined NATO (1982). Consolidating democracy after Franco era.
                     Military modernizing with NATO support. Strategic location controlling
                     Gibraltar Strait. Growing European integration.`,
        specialAbilities: ["Strategic Location", "Rapid Development"],
        color: "#AA151B",
        startingTroops: 8,
        influence: 5,
        historicalContext: `Post-Franco democratic transition successful. Socialist
                          government under González. NATO membership controversial.
                          Preparing for EC membership (1986).`
    },

    NETHERLANDS: {
        name: "Netherlands",
        population: 14490000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 6,
            navy: 6,
            airforce: 6,
            nuclear: false
        },
        economy: 7,
        stability: 9,
        resources: ["technology", "agriculture", "finance"],
        description: `Key NATO member with modern military. Strong economy with global
                     trading links. Important port facilities. US nuclear weapons
                     stationed in country. Advanced technology sector.`,
        specialAbilities: ["Trade Hub", "Water Management"],
        color: "#AE1C28",
        startingTroops: 3,
        influence: 5,
        historicalContext: `Strong NATO ally hosting nuclear weapons. Major anti-nuclear
                          protests. Economic recovery from 1970s oil crisis. Important
                          European Community member.`
    },

    BELGIUM: {
        name: "Belgium",
        population: 9858000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 6,
            navy: 4,
            airforce: 6,
            nuclear: false
        },
        economy: 7,
        stability: 7,
        resources: ["industry", "technology", "finance"],
        description: `NATO and EC headquarters host. Modern military integrated in NATO.
                     Industrial economy with linguistic divisions. US nuclear weapons
                     present. Strategic location in Western Europe.`,
        specialAbilities: ["Diplomatic Hub", "Industrial Center"],
        color: "#000000",
        startingTroops: 2,
        influence: 5,
        historicalContext: `Hosting key NATO infrastructure. Dealing with linguistic
                          tensions. Economic restructuring ongoing. Important role
                          in European integration.`
    },

    SWEDEN: {
        name: "Sweden",
        population: 8350000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 6,
            navy: 6,
            airforce: 7,
            nuclear: false
        },
        economy: 8,
        stability: 9,
        resources: ["technology", "minerals", "timber"],
        description: `Neutral but Western-aligned. Strong domestic defense industry.
                     Advanced air force and coastal defense. Extensive civil defense
                     system. High-tech economy with strong social welfare.`,
        specialAbilities: ["Armed Neutrality", "Defense Industry"],
        color: "#006AA7",
        startingTroops: 2,
        influence: 5,
        historicalContext: `Maintaining armed neutrality policy. Secret Western cooperation.
                          Leading social democratic model. Advanced military technology
                          development.`
    },

    NORWAY: {
        name: "Norway",
        population: 4153000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 6,
            navy: 7,
            airforce: 6,
            nuclear: false
        },
        economy: 8,
        stability: 9,
        resources: ["oil", "fish", "hydropower"],
        description: `NATO member controlling North Atlantic access. Growing oil wealth.
                     Military focused on territorial defense and NATO northern flank.
                     Extensive civil defense system.`,
        specialAbilities: ["Arctic Operations", "Maritime Control"],
        color: "#BA0C2F",
        startingTroops: 1,
        influence: 4,
        historicalContext: `Key NATO northern flank. Growing oil economy. Strong
                          social democratic system. Important maritime surveillance
                          role against Soviet forces.`
    },

    DENMARK: {
        name: "Denmark",
        population: 5114000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 5,
            navy: 6,
            airforce: 6,
            nuclear: false
        },
        economy: 7,
        stability: 9,
        resources: ["agriculture", "shipping", "renewable_energy"],
        description: `NATO member controlling Baltic access. Modern military focused
                     on territorial defense. Strong social welfare system. Important
                     strategic location.`,
        specialAbilities: ["Baltic Control", "Social Welfare"],
        color: "#C60C30",
        startingTroops: 1,
        influence: 4,
        historicalContext: `Controlling Baltic approaches. Alternative security policies
                          within NATO. Strong welfare state. Growing environmental
                          consciousness.`
    },

    USSR: {
        name: "Soviet Union",
        population: 278800000,
        technology: MILITARY_TECH_LEVELS.SUPER_POWER,
        military: {
            army: 9,
            navy: 8,
            airforce: 8,
            nuclear: true,
            nuclearlevel: 9
        },
        economy: 7,
        stability: 6,
        resources: ["oil", "gas", "minerals", "agriculture", "industrial"],
        description: `Superpower leading Warsaw Pact. Massive conventional forces in
                     Eastern Europe. Nuclear arsenal matching US. Economy showing
                     strain from military spending and central planning. New leadership
                     under Gorbachev (March 1985) beginning reforms.`,
        specialAbilities: ["Nuclear Deterrence", "Military Production", "Resource Rich"],
        color: "#CC0000",
        startingTroops: 55,
        influence: 10,
        historicalContext: `Gorbachev assumes power 1985, initiating reforms.
                          Military in Afghanistan since 1979. Economy stagnating.
                          Arms race straining resources. Control over Eastern Europe
                          increasingly costly.`
    },

    EASTGERMANY: {
        name: "German Democratic Republic",
        population: 16640000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 8,
            navy: 5,
            airforce: 7,
            nuclear: false
        },
        economy: 7,
        stability: 6,
        resources: ["industry", "technology", "coal"],
        description: `Most advanced Warsaw Pact member after USSR. Large, well-equipped
                     military. Significant industrial base. Key frontier with NATO.
                     Extensive security apparatus maintaining control.`,
        specialAbilities: ["Industrial Base", "Security State"],
        color: "#000000",
        startingTroops: 3,
        influence: 6,
        historicalContext: `Most developed Eastern Bloc economy. Honecker leadership
                          resistant to reform. Berlin Wall dividing city. Growing
                          environmental and peace movements despite repression.`
    },

    POLAND: {
        name: "Poland",
        population: 37203000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 7,
            navy: 5,
            airforce: 6,
            nuclear: false
        },
        economy: 5,
        stability: 4,
        resources: ["coal", "agriculture", "industry"],
        description: `Large Warsaw Pact military force. Political instability following
                     Solidarity movement suppression. Economic difficulties despite
                     Western debt relief. Strategic depth against NATO.`,
        specialAbilities: ["Military Industry", "Resource Production"],
        color: "#DC143C",
        startingTroops: 7,
        influence: 5,
        historicalContext: `Martial law lifted 1983 but Solidarity still suppressed.
                          Severe economic problems and Western sanctions. Church
                          maintains influence. Growing opposition movement.`
    },

    CZECHOSLOVAKIA: {
        name: "Czechoslovakia",
        population: 15500000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 7,
            navy: 0,
            airforce: 6,
            nuclear: false
        },
        economy: 6,
        stability: 7,
        resources: ["industry", "engineering", "uranium"],
        description: `Industrialized Warsaw Pact member. Significant arms industry.
                     Military focused on containing NATO forces. Post-1968 normalization
                     maintaining strict Communist control.`,
        specialAbilities: ["Arms Production", "Industrial Base"],
        color: "#11457E",
        startingTroops: 3,
        influence: 5,
        historicalContext: `'Normalization' continues after 1968 invasion. Limited
                          economic reforms. Arms industry significant. Underground
                          opposition movements growing.`
    },

    HUNGARY: {
        name: "Hungary",
        population: 10657000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 6,
            navy: 0,
            airforce: 5,
            nuclear: false
        },
        economy: 6,
        stability: 7,
        resources: ["agriculture", "industry", "bauxite"],
        description: `Most liberal Warsaw Pact economy. 'Goulash Communism' maintaining
                     social peace. Modern but limited military. Experimenting with
                     market reforms while maintaining party control.`,
        specialAbilities: ["Economic Reform", "Agricultural Production"],
        color: "#436F4D",
        startingTroops: 2,
        influence: 4,
        historicalContext: `'Goulash Communism' model of limited reforms. Most liberal
                          Eastern Bloc economy. Growing ties with West. Maintaining
                          balance between reform and orthodoxy.`
    },

    ROMANIA: {
        name: "Romania",
        population: 22725000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 6,
            navy: 4,
            airforce: 5,
            nuclear: false
        },
        economy: 5,
        stability: 5,
        resources: ["oil", "agriculture", "industry"],
        description: `Independent foreign policy within Warsaw Pact. Ceaușescu's
                     personality cult and harsh internal control. Struggling economy
                     due to debt repayment policy. Domestic arms industry.`,
        specialAbilities: ["Independent Policy", "Oil Production"],
        color: "#002B7F",
        startingTroops: 4,
        influence: 4,
        historicalContext: `Ceaușescu's personality cult at peak. Harsh austerity
                          paying foreign debt. Independent foreign policy irritating
                          USSR. Growing popular discontent.`
    },

    BULGARIA: {
        name: "Bulgaria",
        population: 8948000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 6,
            navy: 4,
            airforce: 5,
            nuclear: false
        },
        economy: 5,
        stability: 7,
        resources: ["agriculture", "industry", "tourism"],
        description: `Most loyal Soviet ally. Stable Communist rule under Zhivkov.
                     Modernizing military with Soviet support. Computer industry
                     developing. Black Sea strategic position.`,
        specialAbilities: ["Soviet Alignment", "Black Sea Access"],
        color: "#00966E",
        startingTroops: 2,
        influence: 4,
        historicalContext: `Closest Soviet ally. Zhivkov's long rule continues.
                          Developing computer industry. Some economic experiments
                          but maintaining orthodox line.`
    },

    ALBANIA: {
        name: "Albania",
        population: 2957000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 2,
            airforce: 3,
            nuclear: false
        },
        economy: 3,
        stability: 6,
        resources: ["minerals", "agriculture", "hydropower"],
        description: `Isolated Stalinist state after breaking with USSR and China.
                     Extensive bunker system for territorial defense. Self-reliance
                     policy limiting economic development.`,
        specialAbilities: ["Fortress State", "Self Reliance"],
        color: "#E41E20",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Isolated Stalinist regime under Hoxha. Extensive
                          bunker construction. Self-reliance policy. Breaking
                          with both USSR and China.`
    },

    YUGOSLAVIA: {
        name: "Yugoslavia",
        population: 23274000,
        technology: MILITARY_TECH_LEVELS.REGIONAL_POWER,
        military: {
            army: 7,
            navy: 5,
            airforce: 6,
            nuclear: false
        },
        economy: 5,
        stability: 5,
        resources: ["industry", "tourism", "minerals"],
        description: `Non-aligned but modernized military. Federal system showing strain.
                     Economic crisis and high inflation. Significant arms industry
                     exporting globally. Post-Tito collective leadership.`,
        specialAbilities: ["Non-Aligned", "Arms Export", "Federal System"],
        color: "#0C4076",
        startingTroops: 5,
        influence: 5,
        historicalContext: `Post-Tito era showing federal strains. Severe economic
                          crisis and IMF programs. Non-aligned leadership role.
                          Growing nationalist tensions.`
    },

    CHINA: {
        name: "People's Republic of China",
        population: 1051000000,
        technology: MILITARY_TECH_LEVELS.REGIONAL_POWER,
        military: {
            army: 8,
            navy: 4,
            airforce: 5,
            nuclear: true,
            nuclearlevel: 6
        },
        economy: 5,
        stability: 7,
        resources: ["population", "minerals", "agriculture", "coal"],
        description: `World's largest population. Early stages of Deng's economic reforms.
                     Large but modernizing military. Nuclear power with regional reach.
                     Sino-Soviet split creates strategic opportunities with West.`,
        specialAbilities: ["Massive Manpower", "Nuclear Deterrent", "Economic Reform"],
        color: "#DE2910",
        startingTroops: 210,
        influence: 8,
        historicalContext: `Deng Xiaoping's reforms gaining momentum. Opening to West
                          while maintaining Communist system. Military modernization
                          beginning. One-child policy in effect.`
    },

    JAPAN: {
        name: "Japan",
        population: 121050000,
        technology: MILITARY_TECH_LEVELS.GREAT_POWER,
        military: {
            army: 6,
            navy: 7,
            airforce: 7,
            nuclear: false
        },
        economy: 9,
        stability: 9,
        resources: ["technology", "industry", "finance"],
        description: `Economic superpower with constitutional military limitations.
                     Advanced technology and industrial base. Close US alliance.
                     Self-Defense Forces well-equipped but restricted. Major aid donor.`,
        specialAbilities: ["Economic Power", "Technology Leader", "Industrial Base"],
        color: "#BC002D",
        startingTroops: 24,
        influence: 8,
        historicalContext: `Economic boom period. Trading tensions with US. Defense
                          spending at 1% GDP limit. Growing technological leadership.
                          Nakasone pursuing more active foreign policy.`
    },

    SOUTHKOREA: {
        name: "South Korea",
        population: 41056000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 7,
            navy: 5,
            airforce: 6,
            nuclear: false
        },
        economy: 7,
        stability: 6,
        resources: ["technology", "industry", "electronics"],
        description: `Rapid industrialization under authoritarian rule. Large, modern
                     military facing North Korean threat. US forces present. Growing
                     electronics and heavy industry base. Political liberalization
                     pressure increasing.`,
        specialAbilities: ["Industrial Growth", "US Alliance"],
        color: "#003478",
        startingTroops: 8,
        influence: 5,
        historicalContext: `Chun regime facing democracy protests. Economic miracle
                          continuing. Olympic preparation (1988). Heavy investment
                          in industry and defense.`
    },

    NORTHKOREA: {
        name: "North Korea",
        population: 19211000,
        technology: MILITARY_TECH_LEVELS.REGIONAL_POWER,
        military: {
            army: 7,
            navy: 4,
            airforce: 5,
            nuclear: false // Nuclear program in early stages
        },
        economy: 4,
        stability: 8,
        resources: ["minerals", "military_industry"],
        description: `Heavily militarized society under Kim Il-sung. Large conventional
                     forces with offensive capability. Juche ideology of self-reliance.
                     Close ties with USSR and China. Early nuclear ambitions.`,
        specialAbilities: ["Mass Mobilization", "Underground Facilities"],
        color: "#024FA2",
        startingTroops: 4,
        influence: 3,
        historicalContext: `Kim Il-sung's personality cult absolute. Military-first
                          policy. Beginning nuclear program. Economy increasingly
                          stagnant. Dependent on Soviet aid.`
    },

    TAIWAN: {
        name: "Republic of China (Taiwan)",
        population: 19135000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 6,
            navy: 5,
            airforce: 6,
            nuclear: false
        },
        economy: 7,
        stability: 7,
        resources: ["technology", "electronics", "industry"],
        description: `De facto independent under US protection. Modern military focused
                     on preventing PRC invasion. Growing democracy movement. Strong
                     electronics and technology sectors. One of 'Asian Tigers'.`,
        specialAbilities: ["Economic Growth", "US Protection"],
        color: "#000095",
        startingTroops: 4,
        influence: 4,
        historicalContext: `Martial law ending under Chiang Ching-kuo. Economic
                          miracle continues. Diplomatic isolation but strong US
                          support. Democracy movement growing.`
    },

    MONGOLIA: {
        name: "Mongolian People's Republic",
        population: 1850000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 0,
            airforce: 3,
            nuclear: false
        },
        economy: 3,
        stability: 7,
        resources: ["minerals", "livestock", "copper"],
        description: `Soviet-aligned buffer state. Soviet troops stationed in country.
                     Economy dependent on USSR. Traditional nomadic lifestyle being
                     collectivized. Mineral resources developing.`,
        specialAbilities: ["Soviet Alliance", "Mineral Wealth"],
        color: "#C4272F",
        startingTroops: 0,
        influence: 2,
        historicalContext: `Strong Soviet ally. Batmönkh becoming leader. Economic
                          integration with USSR. Traditional lifestyle declining.
                          Early signs of reform interest.`
    },

    VIETNAM: {
        name: "Socialist Republic of Vietnam",
        population: 59720000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 7,
            navy: 4,
            airforce: 5,
            nuclear: false
        },
        economy: 4,
        stability: 6,
        resources: ["agriculture", "oil", "minerals"],
        description: `Unified under communist rule since 1975. Large, battle-experienced
                     military. Soviet ally with bases at Cam Ranh Bay. Occupying
                     Cambodia since 1979. Economic struggles despite reforms beginning.`,
        specialAbilities: ["Combat Experience", "Soviet Base Access"],
        color: "#DA251D",
        startingTroops: 12,
        influence: 5,
        historicalContext: `Post-reunification reconstruction continuing. Doi Moi
                          reforms beginning. Conflict with China (1979). Maintaining
                          forces in Cambodia against Khmer Rouge.`
    },

    THAILAND: {
        name: "Thailand",
        population: 51800000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 6,
            navy: 5,
            airforce: 5,
            nuclear: false
        },
        economy: 6,
        stability: 7,
        resources: ["agriculture", "tourism", "manufacturing"],
        description: `US ally and ASEAN member. Constitutional monarchy with military
                     influence. Modern military forces. Growing economy. Frontend
                     state against Vietnamese expansion.`,
        specialAbilities: ["US Alliance", "Strategic Location"],
        color: "#00247D",
        startingTroops: 10,
        influence: 5,
        historicalContext: `Prem government maintaining stability. Economic boom
                          beginning. Supporting anti-Vietnamese resistance in Cambodia.
                          Strong US military ties.`
    },

    INDONESIA: {
        name: "Indonesia",
        population: 164630000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 6,
            navy: 5,
            airforce: 5,
            nuclear: false
        },
        economy: 5,
        stability: 7,
        resources: ["oil", "gas", "timber", "minerals"],
        description: `World's largest Muslim country. Suharto's New Order regime.
                     Strategic location controlling key maritime straits. Rich in
                     natural resources. Regional power in ASEAN.`,
        specialAbilities: ["Maritime Control", "Resource Wealth"],
        color: "#FF0000",
        startingTroops: 33,
        influence: 6,
        historicalContext: `Suharto's New Order at height. Oil boom benefits.
                          Military dominating politics. Occupying East Timor.
                          Non-aligned but Western-leaning.`
    },

    MALAYSIA: {
        name: "Malaysia",
        population: 15680000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 5,
            navy: 4,
            airforce: 5,
            nuclear: false
        },
        economy: 6,
        stability: 8,
        resources: ["rubber", "tin", "palm_oil", "electronics"],
        description: `Developing industrial economy. Ethnic-based politics under
                     NEP policy. Modern military focused on territorial defense.
                     Growing electronics sector. ASEAN founding member.`,
        specialAbilities: ["Economic Growth", "Resource Export"],
        color: "#010066",
        startingTroops: 3,
        influence: 4,
        historicalContext: `Mahathir's industrialization drive. Look East policy.
                          Ethnic preferences continuing. Growing manufacturing
                          sector. Regional stability focus.`
    },

    SINGAPORE: {
        name: "Singapore",
        population: 2558000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 5,
            navy: 4,
            airforce: 5,
            nuclear: false
        },
        economy: 8,
        stability: 9,
        resources: ["finance", "technology", "trade"],
        description: `Advanced economy with strong military. Strategic port location.
                     High-tech manufacturing and financial center. Authoritarian
                     democracy under PAP. Close US military ties.`,
        specialAbilities: ["Financial Hub", "Strategic Port"],
        color: "#EE1C25",
        startingTroops: 1,
        influence: 4,
        historicalContext: `Lee Kuan Yew's leadership continuing. Economic success
                          model. High technology focus. US military facilities
                          access. Strict social controls.`
    },

    PHILIPPINES: {
        name: "Philippines",
        population: 54668000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 5,
            navy: 4,
            airforce: 4,
            nuclear: false
        },
        economy: 4,
        stability: 4,
        resources: ["agriculture", "minerals", "labor"],
        description: `US ally hosting major bases. Marcos dictatorship facing
                     growing opposition. Communist and Muslim insurgencies active.
                     Economic crisis and heavy debt burden.`,
        specialAbilities: ["US Bases", "Island Defense"],
        color: "#0038A8",
        startingTroops: 11,
        influence: 4,
        historicalContext: `Marcos regime weakening. Ninoy Aquino assassination
                          aftermath. Growing opposition movement. Economic crisis
                          deepening. US base agreements controversial.`
    },

    CAMBODIA: {
        name: "People's Republic of Kampuchea",
        population: 7900000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 2,
            airforce: 2,
            nuclear: false
        },
        economy: 2,
        stability: 4,
        resources: ["agriculture", "rubber"],
        description: `Vietnamese-installed government fighting Khmer Rouge insurgency.
                     Recovering from genocide. Heavy Vietnamese military presence.
                     Limited international recognition.`,
        specialAbilities: ["Vietnamese Support"],
        color: "#032EA1",
        startingTroops: 2,
        influence: 2,
        historicalContext: `Vietnamese occupation continuing. Heng Samrin regime.
                          Reconstruction from Khmer Rouge period. Three-faction
                          civil war ongoing.`
    },

    LAOS: {
        name: "Lao People's Democratic Republic",
        population: 3470000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 0,
            airforce: 2,
            nuclear: false
        },
        economy: 3,
        stability: 6,
        resources: ["timber", "hydropower", "minerals"],
        description: `Communist state aligned with Vietnam and USSR. Limited
                     military capacity. Heavy Vietnamese influence. Beginning
                     limited market reforms. Mountainous terrain.`,
        specialAbilities: ["Soviet Alliance"],
        color: "#CE1126",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Communist consolidation complete. Vietnamese influence
                          strong. Some economic reforms starting. Heavy dependence
                          on Soviet aid.`
    },

    BRUNEI: {
        name: "Brunei Darussalam",
        population: 190000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 3,
            navy: 2,
            airforce: 2,
            nuclear: false
        },
        economy: 8,
        stability: 8,
        resources: ["oil", "gas"],
        description: `Newly independent oil-rich sultanate. British military
                     protection continuing. Small but modern military. Conservative
                     Islamic monarchy. High living standards.`,
        specialAbilities: ["Oil Wealth", "British Protection"],
        color: "#F7E017",
        startingTroops: 0,
        influence: 2,
        historicalContext: `Recently independent (1984). Sultan Hassanal Bolkiah.
                          Oil wealth providing stability. British forces remaining.
                          Conservative Islamic state.`
    },

    IRAN: {
        name: "Islamic Republic of Iran",
        population: 44212000,
        technology: MILITARY_TECH_LEVELS.REGIONAL_POWER,
        military: {
            army: 6,
            navy: 4,
            airforce: 4,
            nuclear: false
        },
        economy: 4,
        stability: 6,
        resources: ["oil", "gas", "minerals"],
        description: `Revolutionary Islamic state. Fighting Iraq since 1980.
                     Military rebuilding after revolution. Major oil producer.
                     Hostile to both superpowers. Supporting Islamic movements.`,
        specialAbilities: ["Oil Power", "Revolutionary Zeal", "Strategic Location"],
        color: "#239F40",
        startingTroops: 9,
        influence: 6,
        historicalContext: `Khomeini's leadership. Iran-Iraq War ongoing. Economic
                          strain from war and sanctions. Islamic revolutionary
                          ideology spreading. Western hostility continuing.`
    },

    IRAQ: {
        name: "Republic of Iraq",
        population: 15585000,
        technology: MILITARY_TECH_LEVELS.REGIONAL_POWER,
        military: {
            army: 7,
            navy: 3,
            airforce: 6,
            nuclear: false
        },
        economy: 5,
        stability: 6,
        resources: ["oil", "agriculture"],
        description: `Baathist state under Saddam Hussein. War with Iran since 1980.
                     Large, well-equipped military. Major oil producer. Soviet
                     arms but Western support in Iran war. Chemical weapons use.`,
        specialAbilities: ["Oil Wealth", "Military Industry", "Chemical Weapons"],
        color: "#007A3D",
        startingTroops: 3,
        influence: 5,
        historicalContext: `Saddam's regime at peak. Iran-Iraq War stalemated.
                          Receiving Western support. Chemical weapons employed.
                          Kurdish rebellion suppressed.`
    },

    SAUDIARABIA: {
        name: "Kingdom of Saudi Arabia",
        population: 13010000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 6,
            navy: 4,
            airforce: 6,
            nuclear: false
        },
        economy: 8,
        stability: 8,
        resources: ["oil", "gas", "finance"],
        description: `World's largest oil producer. Key US ally. Modern military
                     with Western equipment. Conservative Islamic monarchy.
                     Major financial reserves. Anti-communist policy.`,
        specialAbilities: ["Oil Dominance", "US Protection", "Islamic Leadership"],
        color: "#006C35",
        startingTroops: 3,
        influence: 7,
        historicalContext: `King Fahd's rule. Oil price influence. Major US ally.
                          Islamic legitimacy challenged post-1979. Leading OPEC.
                          Supporting Iraq against Iran.`
    },

    EGYPT: {
        name: "Arab Republic of Egypt",
        population: 47762000,
        technology: MILITARY_TECH_LEVELS.REGIONAL_POWER,
        military: {
            army: 7,
            navy: 5,
            airforce: 6,
            nuclear: false
        },
        economy: 4,
        stability: 7,
        resources: ["tourism", "suez_canal", "agriculture"],
        description: `Key US ally after Camp David Accords. Largest Arab military.
                     Controls Suez Canal. Regional diplomatic power. Peace with
                     Israel maintained despite Arab opposition.`,
        specialAbilities: ["Suez Control", "US Alliance", "Arab Leadership"],
        color: "#C8102E",
        startingTroops: 10,
        influence: 6,
        historicalContext: `Mubarak presidency. Israeli peace holding. Return to
                          Arab fold beginning. US military aid significant.
                          Economic reforms starting.`
    },

    SYRIA: {
        name: "Syrian Arab Republic",
        population: 10612000,
        technology: MILITARY_TECH_LEVELS.REGIONAL_POWER,
        military: {
            army: 6,
            navy: 3,
            airforce: 5,
            nuclear: false
        },
        economy: 4,
        stability: 7,
        resources: ["oil", "agriculture", "phosphates"],
        description: `Assad's Baathist regime. Major Soviet ally. Large military
                     with Soviet equipment. Controlling Lebanon. Opposition to
                     Israel and Egypt. Supporting Iran in Gulf War.`,
        specialAbilities: ["Soviet Alliance", "Regional Influence"],
        color: "#CE1126",
        startingTroops: 2,
        influence: 5,
        historicalContext: `Hafez al-Assad's rule consolidated. Lebanese occupation.
                          Soviet military support strong. Muslim Brotherhood
                          uprising crushed. Pro-Iran stance.`
    },

    ISRAEL: {
        name: "State of Israel",
        population: 4233000,
        technology: MILITARY_TECH_LEVELS.GREAT_POWER,
        military: {
            army: 8,
            navy: 6,
            airforce: 8,
            nuclear: true,
            nuclearlevel: 6
        },
        economy: 7,
        stability: 7,
        resources: ["technology", "agriculture", "defense_industry"],
        description: `Advanced military power with nuclear capability. Close US ally.
                     Sophisticated defense industry. High-tech economy developing.
                     Occupied territories administration. Lebanon intervention.`,
        specialAbilities: ["Nuclear Deterrent", "Military Technology", "US Support"],
        color: "#005EB8",
        startingTroops: 1,
        influence: 6,
        historicalContext: `Peres-Shamir rotation government. Lebanon occupation.
                          Palestinian uprising pre-Intifada. Defense industry
                          growing. Economic crisis management.`
    },

    JORDAN: {
        name: "Hashemite Kingdom of Jordan",
        population: 2644000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 5,
            navy: 0,
            airforce: 4,
            nuclear: false
        },
        economy: 4,
        stability: 7,
        resources: ["phosphates", "tourism"],
        description: `Pro-Western monarchy. Professional military. Strategic location.
                     Palestinian majority population. Balanced regional policy.
                     Limited resources but stable government.`,
        specialAbilities: ["Western Alliance", "Strategic Position"],
        color: "#007A3D",
        startingTroops: 1,
        influence: 4,
        historicalContext: `King Hussein's balanced policy. Pro-Iraq in Gulf War.
                          Palestinian issue sensitive. Western military aid.
                          Economic development focus.`
    },

    LEBANON: {
        name: "Lebanese Republic",
        population: 2668000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 3,
            navy: 2,
            airforce: 2,
            nuclear: false
        },
        economy: 3,
        stability: 2,
        resources: ["banking", "tourism_potential"],
        description: `Civil war since 1975. Multiple foreign forces present
                     (Syria, Israel). Fractured along sectarian lines. Former
                     banking center. State authority limited. PLO presence.`,
        specialAbilities: ["Fractured State", "Banking Heritage"],
        color: "#EE161F",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Civil war continuing. Syrian occupation. Israeli
                          presence in south. Militia control of regions.
                          Central government weak. Sectarian divisions.`
    },

    KUWAIT: {
        name: "State of Kuwait",
        population: 1710000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 4,
            navy: 3,
            airforce: 4,
            nuclear: false
        },
        economy: 9,
        stability: 8,
        resources: ["oil", "finance", "ports"],
        description: `Oil-rich emirate. Supporting Iraq in Iran war. Modern
                     but small military. High living standards. US protection.
                     Strategic oil port facilities.`,
        specialAbilities: ["Oil Wealth", "US Protection"],
        color: "#007A3D",
        startingTroops: 0,
        influence: 4,
        historicalContext: `Supporting Iraq against Iran. Oil wealth peak.
                          Democratic experiment limited. US naval protection.
                          Palestinian population significant.`
    },

    UAE: {
        name: "United Arab Emirates",
        population: 1379000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 4,
            navy: 3,
            airforce: 4,
            nuclear: false
        },
        economy: 8,
        stability: 9,
        resources: ["oil", "gas", "trade"],
        description: `Federation of seven emirates. Oil-rich. Pro-Western.
                     Developing modern military. Strategic location near
                     Strait of Hormuz. Growing commercial center.`,
        specialAbilities: ["Oil Revenue", "Trade Hub"],
        color: "#00732F",
        startingTroops: 0,
        influence: 4,
        historicalContext: `Sheikh Zayed leadership. Oil wealth investment.
                          Federation consolidating. Dubai emerging as trade
                          center. Pro-Western stance in Gulf.`
    },

    OMAN: {
        name: "Sultanate of Oman",
        population: 1242000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 5,
            navy: 4,
            airforce: 4,
            nuclear: false
        },
        economy: 6,
        stability: 8,
        resources: ["oil", "strategic_location"],
        description: `Controls Strait of Hormuz. British-trained military.
                     Sultan Qaboos modernization. Oil producer. Strategic
                     Western ally. Former Dhofar rebellion crushed.`,
        specialAbilities: ["Strait Control", "British Connection"],
        color: "#C8102E",
        startingTroops: 0,
        influence: 3,
        historicalContext: `Qaboos modernization continuing. Strategic UK/US
                          ally. Hormuz Strait importance. Post-Dhofar rebellion
                          development. Oil wealth growing.`
    },

    NORTHYEMEN: {
        name: "Yemen Arab Republic",
        population: 8850000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 2,
            airforce: 3,
            nuclear: false
        },
        economy: 3,
        stability: 5,
        resources: ["agriculture", "oil_potential"],
        description: `Western-aligned state. Saudi influence strong. Tribal
                     society. Limited oil resources. Tensions with South
                     Yemen. Periodic border conflicts.`,
        specialAbilities: ["Saudi Support", "Tribal Networks"],
        color: "#CE1126",
        startingTroops: 2,
        influence: 2,
        historicalContext: `President Saleh consolidating power. Saudi aid
                          dependent. Oil exploration beginning. Tribal
                          politics important. South Yemen tensions.`
    },

    SOUTHYEMEN: {
        name: "People's Democratic Republic of Yemen",
        population: 2100000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 2,
            airforce: 3,
            nuclear: false
        },
        economy: 2,
        stability: 4,
        resources: ["ports", "fisheries"],
        description: `Only Marxist Arab state. Soviet ally with base at Aden.
                     Poor but strategic location. Internal party conflicts.
                     Tensions with North Yemen.`,
        specialAbilities: ["Soviet Alliance", "Port Control"],
        color: "#FF0000",
        startingTroops: 0,
        influence: 2,
        historicalContext: `Soviet-aligned regime. Aden port strategic. Internal
                          communist party conflicts. Economic struggles.
                          Pre-unification tensions with North.`
    },

    QATAR: {
        name: "State of Qatar",
        population: 358000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 3,
            navy: 2,
            airforce: 3,
            nuclear: false
        },
        economy: 8,
        stability: 8,
        resources: ["gas", "oil", "finance"],
        description: `Oil and gas rich emirate. Small but wealthy population.
                     Pro-Western orientation. Small modern military. Growing
                     regional diplomatic role.`,
        specialAbilities: ["Gas Wealth", "Strategic Alliance"],
        color: "#8D1B3D",
        startingTroops: 0,
        influence: 3,
        historicalContext: `Sheikh Khalifa rule. Gas development beginning.
                          Pro-Western stance. GCC member. Regional diplomatic
                          initiatives starting.`
    },

    BAHRAIN: {
        name: "State of Bahrain",
        population: 425000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 3,
            navy: 2,
            airforce: 3,
            nuclear: false
        },
        economy: 7,
        stability: 7,
        resources: ["oil", "banking", "pearls"],
        description: `Island kingdom hosting US Navy 5th Fleet. Sunni monarchy
                     ruling Shia majority. Banking center. Limited oil reserves.
                     Strategic location in Gulf.`,
        specialAbilities: ["US Naval Base", "Financial Center"],
        color: "#CE1126",
        startingTroops: 0,
        influence: 2,
        historicalContext: `Isa Al Khalifa's rule. US military presence.
                          Sectarian tensions underlying. Banking sector
                          growing. Oil income declining.`
    },

    LIBYA: {
        name: "Socialist People's Libyan Arab Jamahiriya",
        population: 3618000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 5,
            navy: 3,
            airforce: 5,
            nuclear: false
        },
        economy: 6,
        stability: 6,
        resources: ["oil", "gas", "desert"],
        description: `Gaddafi's revolutionary state. Oil-rich economy. Soviet
                     military equipment. Regional interventions. Supporting
                     various revolutionary movements. US tensions.`,
        specialAbilities: ["Oil Power", "Desert Warfare"],
        color: "#239E46",
        startingTroops: 1,
        influence: 4,
        historicalContext: `Gaddafi's revolutionary regime. US confrontations.
                          Chad intervention ongoing. Oil wealth funding
                          international activities. Soviet arms supplies.`
    },

    MOROCCO: {
        name: "Kingdom of Morocco",
        population: 22120000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 6,
            navy: 3,
            airforce: 4,
            nuclear: false
        },
        economy: 4,
        stability: 7,
        resources: ["phosphates", "agriculture", "tourism"],
        description: `Pro-Western monarchy. Western Sahara conflict ongoing.
                     Modern military force. Strategic Gibraltar location.
                     Close US relations. Moderate Arab state.`,
        specialAbilities: ["US Alliance", "Strategic Location"],
        color: "#C1272D",
        startingTroops: 4,
        influence: 4,
        historicalContext: `Hassan II's rule. Western Sahara war. US military
                          cooperation. Economic reforms starting. Regional
                          diplomatic role growing.`
    },

    ALGERIA: {
        name: "People's Democratic Republic of Algeria",
        population: 21990000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 6,
            navy: 3,
            airforce: 5,
            nuclear: false
        },
        economy: 5,
        stability: 7,
        resources: ["oil", "gas", "minerals"],
        description: `Socialist state with Soviet ties. Major oil/gas producer.
                     Large military with Soviet equipment. Non-aligned but
                     anti-Western. Supporting Polisario in Western Sahara.`,
        specialAbilities: ["Energy Resources", "Desert Operations"],
        color: "#006233",
        startingTroops: 4,
        influence: 5,
        historicalContext: `Chadli Bendjedid presidency. Oil-based economy.
                          Non-aligned stance. Early signs of social tension.
                          Western Sahara support continuing.`
    },

    TUNISIA: {
        name: "Republic of Tunisia",
        population: 7260000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 4,
            navy: 3,
            airforce: 3,
            nuclear: false
        },
        economy: 5,
        stability: 7,
        resources: ["tourism", "phosphates", "agriculture"],
        description: `Pro-Western moderate Arab state. Bourguiba's secular
                     leadership. Limited military but strategic location.
                     Tourism-focused economy. PLO headquarters until 1982.`,
        specialAbilities: ["Western Alignment", "Tourism Focus"],
        color: "#E70013",
        startingTroops: 1,
        influence: 3,
        historicalContext: `Bourguiba presidency aging. Economic liberalization.
                          Pro-Western orientation. Rising Islamic opposition.
                          Regional moderate voice.`
    },

    SUDAN: {
        name: "Democratic Republic of Sudan",
        population: 21550000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 5,
            navy: 2,
            airforce: 3,
            nuclear: false
        },
        economy: 3,
        stability: 4,
        resources: ["agriculture", "oil_potential", "minerals"],
        description: `Nimeiry regime recently overthrown. Civil war in South.
                     Drought and famine issues. Strategic Red Sea location.
                     Moving from pro-Western to Islamic law.`,
        specialAbilities: ["Size", "Agricultural Potential"],
        color: "#007229",
        startingTroops: 4,
        influence: 3,
        historicalContext: `Post-Nimeiry transition. Southern civil war.
                          Drought crisis. Islamic law implementation.
                          Ethiopian tensions over refugees.`
    },

    ETHIOPIA: {
        name: "People's Democratic Republic of Ethiopia",
        population: 42580000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 5,
            navy: 2,
            airforce: 3,
            nuclear: false
        },
        economy: 2,
        stability: 3,
        resources: ["coffee", "minerals", "agriculture"],
        description: `Marxist regime under Mengistu. Major Soviet ally in Africa.
                     Large military with Soviet equipment. Severe famine crisis.
                     Wars with Somalia and Eritrean rebels.`,
        specialAbilities: ["Soviet Support", "Highland Territory"],
        color: "#078930",
        startingTroops: 8,
        influence: 4,
        historicalContext: `Mengistu's Red Terror. Famine crisis continuing.
                          Soviet military support. Eritrean rebellion.
                          Resettlement program controversial.`
    },

    SOMALIA: {
        name: "Somali Democratic Republic",
        population: 6040000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 2,
            airforce: 2,
            nuclear: false
        },
        economy: 2,
        stability: 4,
        resources: ["livestock", "fishing", "potential_oil"],
        description: `Siad Barre's dictatorship. Switched from Soviet to US
                     alliance. Growing internal opposition. Strategic Horn
                     of Africa location. Tensions with Ethiopia.`,
        specialAbilities: ["Strategic Location", "US Base Rights"],
        color: "#4189DD",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Barre regime weakening. US military access.
                          Clan-based opposition growing. Ethiopian
                          conflict aftermath. Drought effects.`
    },

    NIGERIA: {
        name: "Federal Republic of Nigeria",
        population: 83700000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 6,
            navy: 3,
            airforce: 4,
            nuclear: false
        },
        economy: 5,
        stability: 4,
        resources: ["oil", "gas", "agriculture"],
        description: `Major oil producer. Military regime under Buhari/Babangida.
                     Regional power. OPEC member. Economic crisis despite oil.
                     Religious and ethnic tensions. Former British colony.`,
        specialAbilities: ["Oil Production", "Regional Leadership"],
        color: "#008751",
        startingTroops: 17,
        influence: 5,
        historicalContext: `Babangida coup (1985). Oil price crisis effects.
                          IMF debate. Structural adjustment pending. Military
                          modernization program.`
    },

    GHANA: {
        name: "Republic of Ghana",
        population: 12840000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 2,
            airforce: 2,
            nuclear: false
        },
        economy: 3,
        stability: 5,
        resources: ["gold", "cocoa", "timber"],
        description: `Rawlings military regime. Economic reforms under IMF.
                     Former British colony. Regional peacekeeping role.
                     Mining and agricultural exports. Democratic pressure.`,
        specialAbilities: ["Gold Production", "Regional Stability"],
        color: "#006B3F",
        startingTroops: 3,
        influence: 3,
        historicalContext: `Rawlings' PNDC rule. Economic recovery program.
                          IMF cooperation. Socialist policies abandoned.
                          Regional mediator role.`
    },

    IVORYCOAST: {
        name: "Republic of Côte d'Ivoire",
        population: 10150000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 2,
            airforce: 2,
            nuclear: false
        },
        economy: 4,
        stability: 7,
        resources: ["cocoa", "coffee", "timber"],
        description: `Houphouët-Boigny's stable rule. French ally. West African
                     economic leader. Agricultural export economy. Pro-Western
                     orientation. Regional diplomatic role.`,
        specialAbilities: ["French Support", "Agricultural Exports"],
        color: "#FF8200",
        startingTroops: 2,
        influence: 4,
        historicalContext: `Houphouët-Boigny leadership stable. Economic model
                          showing strain. French military presence. New capital
                          at Yamoussoukro.`
    },

    SENEGAL: {
        name: "Republic of Senegal",
        population: 6890000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 2,
            airforce: 2,
            nuclear: false
        },
        economy: 3,
        stability: 7,
        resources: ["phosphates", "fishing", "tourism"],
        description: `Democratic system under Diouf. French military presence.
                     Regional diplomatic influence. Casamance separatism
                     beginning. Cultural leadership in Francophone Africa.`,
        specialAbilities: ["French Alliance", "Democratic Stability"],
        color: "#00853F",
        startingTroops: 1,
        influence: 3,
        historicalContext: `Diouf presidency consolidated. IMF programs.
                          Confederation with Gambia. Casamance unrest
                          emerging. French ties strong.`
    },

    MALI: {
        name: "Republic of Mali",
        population: 7700000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 3,
            navy: 0,
            airforce: 2,
            nuclear: false
        },
        economy: 2,
        stability: 6,
        resources: ["gold", "cotton", "livestock"],
        description: `Military government under Traoré. Sahel drought recovery.
                     Limited resources. Strategic location. Tuareg issues
                     emerging. Former French colony.`,
        specialAbilities: ["Desert Control", "Gold Mining"],
        color: "#14B53A",
        startingTroops: 2,
        influence: 2,
        historicalContext: `Traoré's military rule. Drought recovery ongoing.
                          Economic liberalization starting. Early Tuareg
                          tensions. Regional cooperation.`
    },

    LIBERIA: {
        name: "Republic of Liberia",
        population: 2170000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 3,
            navy: 1,
            airforce: 1,
            nuclear: false
        },
        economy: 3,
        stability: 5,
        resources: ["rubber", "iron_ore", "timber"],
        description: `Doe's military regime. US historical ties. Economic
                     decline. Ethnic tensions rising. Strategic location.
                     Former American-Liberian elite displaced.`,
        specialAbilities: ["US Connection", "Port Access"],
        color: "#C8102E",
        startingTroops: 0,
        influence: 2,
        historicalContext: `Doe regime consolidation. US aid important.
                          Economic problems growing. Ethnic tensions.
                          Regional stability role diminishing.`
    },

    GUINEA: {
        name: "Republic of Guinea",
        population: 5780000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 3,
            navy: 1,
            airforce: 2,
            nuclear: false
        },
        economy: 2,
        stability: 6,
        resources: ["bauxite", "iron_ore", "diamonds"],
        description: `Lansana Conté's military regime. Mining economy.
                     Former French colony. Strategic location. Soviet
                     ties reduced. Economic liberalization beginning.`,
        specialAbilities: ["Mineral Wealth", "Strategic Position"],
        color: "#CE1126",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Conté consolidating power. Post-Sékou Touré
                          reforms. Mining sector focus. Reducing Soviet
                          influence. Regional role limited.`
    },

    BURKINAFASO: {
        name: "Burkina Faso",
        population: 7450000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 3,
            navy: 0,
            airforce: 1,
            nuclear: false
        },
        economy: 2,
        stability: 5,
        resources: ["cotton", "gold", "livestock"],
        description: `Sankara's revolutionary regime. Recently renamed from
                     Upper Volta. Socialist orientation. Anti-imperial stance.
                     Popular reforms underway. Limited resources.`,
        specialAbilities: ["Revolutionary Spirit", "Popular Mobilization"],
        color: "#009E49",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Sankara's revolutionary programs. Women's rights
                          emphasis. Self-reliance policy. Anti-French stance.
                          Popular among youth.`
    },

    NIGER: {
        name: "Republic of Niger",
        population: 6730000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 3,
            navy: 0,
            airforce: 1,
            nuclear: false
        },
        economy: 2,
        stability: 5,
        resources: ["uranium", "livestock", "agriculture"],
        description: `Military regime under Kountché. Uranium mining important.
                     Sahel drought recovery. French influence strong. Strategic
                     location in Sahara. Limited development.`,
        specialAbilities: ["Uranium Resources", "Desert Control"],
        color: "#E05206",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Kountché regime stable. Uranium price decline
                          impact. Drought recovery efforts. French military
                          presence. Libya tensions.`
    },

    SIERRALEONE: {
        name: "Republic of Sierra Leone",
        population: 3620000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 2,
            navy: 1,
            airforce: 1,
            nuclear: false
        },
        economy: 2,
        stability: 5,
        resources: ["diamonds", "iron_ore", "agriculture"],
        description: `Stevens' one-party state. Diamond-based economy.
                     Corruption issues. Limited military capacity.
                     Economic decline beginning. Regional instability.`,
        specialAbilities: ["Diamond Resources", "Port Access"],
        color: "#0072C6",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Momoh succeeding Stevens. Economic problems
                          growing. Diamond sector corruption. Student
                          protests beginning. Military dissatisfaction.`
    },

    ZAIRE: {
        name: "Republic of Zaire",
        population: 30850000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 5,
            navy: 1,
            airforce: 3,
            nuclear: false
        },
        economy: 3,
        stability: 5,
        resources: ["copper", "diamonds", "cobalt", "gold"],
        description: `Mobutu's kleptocracy. Western ally. Rich mineral
                     resources. Strategic Cold War position. Economic
                     crisis despite wealth. Military focused on regime.`,
        specialAbilities: ["Mineral Wealth", "Strategic Size"],
        color: "#007749",
        startingTroops: 6,
        influence: 4,
        historicalContext: `Mobutu's personal rule. IMF programs failing.
                          Western support continuing. Mineral exports
                          crucial. Infrastructure declining.`
    },

    CAMEROON: {
        name: "Republic of Cameroon",
        population: 10150000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 2,
            airforce: 2,
            nuclear: false
        },
        economy: 4,
        stability: 7,
        resources: ["oil", "timber", "agriculture"],
        description: `Biya's one-party state. Oil producer. French influence.
                     Relative stability. Agricultural exports. Regional power
                     in Central Africa. Limited opposition allowed.`,
        specialAbilities: ["Oil Production", "Regional Stability"],
        color: "#007A5E",
        startingTroops: 2,
        influence: 3,
        historicalContext: `Biya consolidating power. Oil revenue helping
                          stability. French military support. Some economic
                          liberalization. Opposition controlled.`
    },

    ANGOLA: {
        name: "People's Republic of Angola",
        population: 8770000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 6,
            navy: 2,
            airforce: 4,
            nuclear: false
        },
        economy: 3,
        stability: 3,
        resources: ["oil", "diamonds", "minerals"],
        description: `MPLA Marxist government. Civil war with UNITA.
                     Cuban troops present. Oil wealth. Soviet and Cuban
                     support. Strategic southern Africa location.`,
        specialAbilities: ["Oil Resources", "Cuban Support"],
        color: "#CE1126",
        startingTroops: 2,
        influence: 4,
        historicalContext: `Civil war intensity. Cuban forces significant.
                          South African incursions. Oil sector crucial.
                          UNITA controlling south/east.`
    },

    CONGO: {
        name: "People's Republic of the Congo",
        population: 1950000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 3,
            navy: 1,
            airforce: 2,
            nuclear: false
        },
        economy: 3,
        stability: 6,
        resources: ["oil", "timber", "minerals"],
        description: `Marxist one-party state. Soviet ally. Oil producer.
                     Strategic location. Limited military capacity.
                     Socialist orientation with pragmatic economic policy.`,
        specialAbilities: ["Oil Export", "Soviet Alliance"],
        color: "#009543",
        startingTroops: 0,
        influence: 2,
        historicalContext: `Sassou-Nguesso leadership. Soviet ties strong.
                          Oil revenue important. Some economic opening.
                          Regional stability role.`
    },

    CHAD: {
        name: "Republic of Chad",
        population: 5020000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 0,
            airforce: 1,
            nuclear: false
        },
        economy: 2,
        stability: 3,
        resources: ["cotton", "uranium", "livestock"],
        description: `Habré regime fighting Libyan intervention. French
                     military support. Civil war aftermath. Desert north
                     versus fertile south divide. Severe drought impact.`,
        specialAbilities: ["French Support", "Desert Warfare"],
        color: "#002664",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Habré consolidating power. Libyan withdrawal.
                          French Operation Manta. Drought recovery.
                          North-South tensions continuing.`
    },

    KENYA: {
        name: "Republic of Kenya",
        population: 20333000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 5,
            navy: 2,
            airforce: 3,
            nuclear: false
        },
        economy: 4,
        stability: 7,
        resources: ["agriculture", "tourism", "minerals"],
        description: `Moi's one-party state. Pro-Western orientation. Regional
                     stability anchor. Tourism economy. US military access.
                     Agricultural exports important.`,
        specialAbilities: ["Western Alliance", "Regional Hub"],
        color: "#006600",
        startingTroops: 4,
        influence: 4,
        historicalContext: `Moi strengthening control. US military cooperation.
                          Economic liberalization starting. Regional peace
                          role. Tourism growth.`
    },

    TANZANIA: {
        name: "United Republic of Tanzania",
        population: 21160000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 2,
            airforce: 2,
            nuclear: false
        },
        economy: 3,
        stability: 7,
        resources: ["agriculture", "minerals", "tourism"],
        description: `Nyerere's socialist state. African unity advocate.
                     Economic reforms beginning. Limited military capacity.
                     Non-aligned position. Chinese influence historical.`,
        specialAbilities: ["Political Stability", "Regional Influence"],
        color: "#1EB53A",
        startingTroops: 4,
        influence: 3,
        historicalContext: `Nyerere preparing retirement. Ujamaa policy
                          ending. IMF negotiations. Chinese rail link.
                          Regional peace efforts.`
    },

    UGANDA: {
        name: "Republic of Uganda",
        population: 14153000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 0,
            airforce: 2,
            nuclear: false
        },
        economy: 2,
        stability: 4,
        resources: ["coffee", "copper", "agriculture"],
        description: `Obote's second presidency. Civil war with NRA.
                     Post-Amin recovery ongoing. Economic crisis.
                     Regional tensions. Army divided.`,
        specialAbilities: ["Agricultural Base", "Strategic Location"],
        color: "#FCDC04",
        startingTroops: 3,
        influence: 2,
        historicalContext: `Civil war intensifying. Obote regime weakening.
                          Economic collapse. NRA gaining strength. Regional
                          implications growing.`
    },

    CENTRALAFRICANREPUBLIC: {
        name: "Central African Republic",
        population: 2450000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 2,
            navy: 0,
            airforce: 1,
            nuclear: false
        },
        economy: 2,
        stability: 5,
        resources: ["diamonds", "timber", "uranium"],
        description: `Kolingba military regime. French influence strong.
                     Limited development. Strategic location. Diamond
                     exports important. Small military force.`,
        specialAbilities: ["French Protection", "Diamond Resources"],
        color: "#FFCD00",
        startingTroops: 0,
        influence: 1,
        historicalContext: `Kolingba's military rule. French support crucial.
                          Economic struggles. Limited political opposition.
                          Regional instability effects.`
    },

    GABON: {
        name: "Gabonese Republic",
        population: 985000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 3,
            navy: 1,
            airforce: 2,
            nuclear: false
        },
        economy: 6,
        stability: 8,
        resources: ["oil", "uranium", "timber"],
        description: `Bongo's stable regime. Oil wealth. French military
                     presence. Small population. High living standards
                     for region. Pro-Western orientation.`,
        specialAbilities: ["Oil Wealth", "French Base"],
        color: "#009E60",
        startingTroops: 0,
        influence: 2,
        historicalContext: `Bongo's long rule. Oil revenue stability.
                          French protection guaranteed. Regional
                          meditation role. Economic success.`
    },

    RWANDA: {
        name: "Republic of Rwanda",
        population: 5690000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 3,
            navy: 0,
            airforce: 1,
            nuclear: false
        },
        economy: 2,
        stability: 6,
        resources: ["coffee", "tea", "minerals"],
        description: `Habyarimana's military regime. Ethnic tensions
                     underlying. Coffee exports dependent. Small but
                     densely populated. Belgian influence continues.`,
        specialAbilities: ["Population Density", "Agricultural Export"],
        color: "#00A1DE",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Habyarimana's control solid. Ethnic quotas
                          system. Coffee price impact. Development aid
                          dependent. Regional tensions hidden.`
    },

    SOUTHAFRICA: {
        name: "Republic of South Africa",
        population: 31150000,
        technology: MILITARY_TECH_LEVELS.REGIONAL_POWER,
        military: {
            army: 7,
            navy: 5,
            airforce: 6,
            nuclear: true,
            nuclearlevel: 4
        },
        economy: 6,
        stability: 3,
        resources: ["gold", "diamonds", "minerals", "industry"],
        description: `Apartheid state under Botha. Regional military power.
                     Secret nuclear capability. International sanctions.
                     Internal unrest growing. Advanced industrial base.
                     Operations in Angola/Namibia.`,
        specialAbilities: ["Industrial Power", "Nuclear Capability", "Mineral Wealth"],
        color: "#007749",
        startingTroops: 6,
        influence: 5,
        historicalContext: `State of emergency declared. ANC resistance.
                          Economic sanctions impact. Angola interventions.
                          Reform vs security debate. Township unrest.`
    },

    ZIMBABWE: {
        name: "Republic of Zimbabwe",
        population: 8390000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 5,
            navy: 0,
            airforce: 3,
            nuclear: false
        },
        economy: 4,
        stability: 6,
        resources: ["minerals", "agriculture", "tobacco"],
        description: `Mugabe's one-party state emerging. Strong military.
                     Agricultural exports important. Matabeleland operations.
                     Regional anti-apartheid front-line state. Soviet arms.`,
        specialAbilities: ["Mineral Resources", "Agricultural Base"],
        color: "#006400",
        startingTroops: 2,
        influence: 3,
        historicalContext: `ZANU-PF dominance growing. Matabeleland conflict.
                          Economic success but tensions. Front Line States
                          leadership. Soviet military support.`
    },

    MOZAMBIQUE: {
        name: "People's Republic of Mozambique",
        population: 13790000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 5,
            navy: 2,
            airforce: 2,
            nuclear: false
        },
        economy: 2,
        stability: 3,
        resources: ["hydropower", "agriculture", "ports"],
        description: `FRELIMO Marxist government. Civil war with RENAMO.
                     Economic crisis. Drought impact. Zimbabwe trade routes.
                     Soviet/Cuban support. South African destabilization.`,
        specialAbilities: ["Port Access", "Soviet Support"],
        color: "#009639",
        startingTroops: 3,
        influence: 3,
        historicalContext: `Civil war intensity. Nkomati Accord with SA.
                          Economic collapse. Drought emergency. RENAMO
                          insurgency. Transport corridors strategic.`
    },

    ZAMBIA: {
        name: "Republic of Zambia",
        population: 6460000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 0,
            airforce: 2,
            nuclear: false
        },
        economy: 3,
        stability: 6,
        resources: ["copper", "cobalt", "agriculture"],
        description: `Kaunda's one-party state. Copper-dependent economy.
                     Front-line state against apartheid. Economic crisis.
                     Non-aligned but Western-leaning. IMF tensions.`,
        specialAbilities: ["Copper Resources", "Landlocked Trade"],
        color: "#006838",
        startingTroops: 1,
        influence: 3,
        historicalContext: `Kaunda's long rule. Copper price crisis. IMF
                          disputes. Food riots occurring. Regional peace
                          initiatives. Economic reforms needed.`
    },

    BOTSWANA: {
        name: "Republic of Botswana",
        population: 1050000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 3,
            navy: 0,
            airforce: 2,
            nuclear: false
        },
        economy: 5,
        stability: 8,
        resources: ["diamonds", "cattle", "minerals"],
        description: `Stable democracy. Diamond wealth. Pro-Western.
                     Small but growing military. Surrounded by regional
                     conflicts. Refugee haven. Economic success story.`,
        specialAbilities: ["Diamond Wealth", "Democratic Stability"],
        color: "#75B2DD",
        startingTroops: 0,
        influence: 2,
        historicalContext: `Masire presidency. Diamond revenue prosperity.
                          Regional refugee influx. South Africa tension.
                          Non-racial democracy model.`
    },

    MALAWI: {
        name: "Republic of Malawi",
        population: 7260000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 3,
            navy: 1,
            airforce: 1,
            nuclear: false
        },
        economy: 2,
        stability: 7,
        resources: ["agriculture", "tobacco", "tea"],
        description: `Banda's authoritarian rule. Pro-Western stance.
                     Agricultural economy. South African ally. Limited
                     military capacity. Refugee issues with Mozambique.`,
        specialAbilities: ["Agricultural Export", "Regional Stability"],
        color: "#000000",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Banda's life presidency. South Africa cooperation.
                          Agricultural focus. Mozambican refugees. Regional
                          exception to anti-apartheid stance.`
    },

    NAMIBIA: {
        name: "South West Africa/Namibia",
        population: 1040000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 3,
            navy: 1,
            airforce: 1,
            nuclear: false
        },
        economy: 3,
        stability: 4,
        resources: ["diamonds", "uranium", "fishing"],
        description: `South African administration. SWAPO liberation war.
                     UN independence plan pending. Strategic location.
                     Mineral wealth. Cuban forces in Angola relevant.`,
        specialAbilities: ["Mineral Resources", "Strategic Position"],
        color: "#003580",
        startingTroops: 0,
        influence: 2,
        historicalContext: `Independence negotiations ongoing. SA control
                          continuing. SWAPO insurgency. UN Resolution 435
                          implementation delayed. Cuban link to withdrawal.`
    },

    BRAZIL: {
        name: "Federative Republic of Brazil",
        population: 136150000,
        technology: MILITARY_TECH_LEVELS.REGIONAL_POWER,
        military: {
            army: 6,
            navy: 5,
            airforce: 5,
            nuclear: false
        },
        economy: 6,
        stability: 6,
        resources: ["industry", "agriculture", "minerals", "oil"],
        description: `Transition to democracy. Largest Latin American power.
                     Debt crisis impacts. Growing industrial base. Regional
                     leadership role. Nuclear program development.`,
        specialAbilities: ["Industrial Power", "Regional Leadership"],
        color: "#009739",
        startingTroops: 27,
        influence: 6,
        historicalContext: `Sarney presidency beginning. Democratic transition.
                          Hyperinflation crisis. Industrial strength. Amazon
                          development issues. Nuclear rivalry with Argentina.`
    },

    ARGENTINA: {
        name: "Argentine Republic",
        population: 30330000,
        technology: MILITARY_TECH_LEVELS.REGIONAL_POWER,
        military: {
            army: 6,
            navy: 5,
            airforce: 5,
            nuclear: false
        },
        economy: 5,
        stability: 6,
        resources: ["agriculture", "industry", "nuclear_technology"],
        description: `Post-military democratic transition. Falklands War
                     aftermath. Economic crisis. Nuclear program. Major
                     agricultural exporter. Debt problems significant.`,
        specialAbilities: ["Agricultural Power", "Nuclear Technology"],
        color: "#75AADB",
        startingTroops: 6,
        influence: 5,
        historicalContext: `Alfonsín democracy. Military trials ongoing.
                          Economic struggles. Austral Plan launched.
                          Nuclear program continuing secretly.`
    },

    MEXICO: {
        name: "United Mexican States",
        population: 75790000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 5,
            navy: 4,
            airforce: 4,
            nuclear: false
        },
        economy: 5,
        stability: 7,
        resources: ["oil", "industry", "agriculture"],
        description: `PRI one-party dominance. Oil exporter. Debt crisis
                     recovery. US border importance. Drug trade growing.
                     Limited military role. Economic liberalization start.`,
        specialAbilities: ["Oil Resources", "US Border"],
        color: "#006847",
        startingTroops: 15,
        influence: 5,
        historicalContext: `De la Madrid presidency. Debt crisis aftermath.
                          Economic liberalization beginning. PRI control
                          solid but challenged. Oil price impact.`
    },

    CHILE: {
        name: "Republic of Chile",
        population: 12120000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 5,
            navy: 4,
            airforce: 4,
            nuclear: false
        },
        economy: 4,
        stability: 5,
        resources: ["copper", "minerals", "agriculture"],
        description: `Pinochet dictatorship. Free market economics. Strong
                     military. Copper exports crucial. Growing opposition.
                     US ally. Anti-communist bastion.`,
        specialAbilities: ["Copper Wealth", "Military Control"],
        color: "#D52B1E",
        startingTroops: 2,
        influence: 4,
        historicalContext: `Pinochet regime protests. Chicago Boys economics.
                          Opposition organizing. Copper dependency. National
                          protests growing. Military loyalty firm.`
    },

    PERU: {
        name: "Republic of Peru",
        population: 19040000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 5,
            navy: 3,
            airforce: 4,
            nuclear: false
        },
        economy: 3,
        stability: 4,
        resources: ["minerals", "fishing", "agriculture"],
        description: `Democratic government. Shining Path insurgency.
                     Economic crisis. Drug trade increasing. Military
                     counter-insurgency focus. Andean leadership role.`,
        specialAbilities: ["Mineral Resources", "Counter-Insurgency"],
        color: "#D91023",
        startingTroops: 4,
        influence: 3,
        historicalContext: `García presidency beginning. Shining Path peak.
                          Debt crisis severe. MRTA emerging. Military
                          autonomy in counter-insurgency.`
    },

    COLOMBIA: {
        name: "Republic of Colombia",
        population: 29880000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 5,
            navy: 3,
            airforce: 4,
            nuclear: false
        },
        economy: 4,
        stability: 5,
        resources: ["coffee", "oil", "emeralds"],
        description: `Democratic system. Multiple guerrilla groups.
                     Drug cartels powerful. Coffee exports important.
                     US anti-drug cooperation. Internal conflicts.`,
        specialAbilities: ["Coffee Export", "Counter-Narcotics"],
        color: "#FCD116",
        startingTroops: 6,
        influence: 4,
        historicalContext: `Betancur peace attempts. M-19 Palace siege.
                          Medellín Cartel peak. Guerrilla conflicts.
                          Coffee economy crucial.`
    },

    VENEZUELA: {
        name: "Republic of Venezuela",
        population: 17320000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 5,
            navy: 4,
            airforce: 4,
            nuclear: false
        },
        economy: 5,
        stability: 7,
        resources: ["oil", "minerals", "hydropower"],
        description: `Oil-based democracy. OPEC member. Two-party system.
                     Regional power ambitions. Economic pressures growing.
                     US oil market importance.`,
        specialAbilities: ["Oil Power", "Democratic Stability"],
        color: "#FCE300",
        startingTroops: 3,
        influence: 4,
        historicalContext: `Lusinchi presidency. Oil price crisis impact.
                          Democratic stability. Currency crisis. Regional
                          leadership attempts. OPEC role.`
    },

    NICARAGUA: {
        name: "Republic of Nicaragua",
        population: 3450000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 5,
            navy: 2,
            airforce: 3,
            nuclear: false
        },
        economy: 2,
        stability: 4,
        resources: ["agriculture", "timber", "fishing"],
        description: `Sandinista revolutionary government. Contra war ongoing.
                     Soviet/Cuban support. US economic embargo. Large military
                     for region. Economic crisis. Regional tension source.`,
        specialAbilities: ["Cuban Support", "Revolutionary Defense"],
        color: "#0067C6",
        startingTroops: 1,
        influence: 3,
        historicalContext: `Daniel Ortega leadership. Contra war peak. Soviet
                          aid essential. Regional peace talks starting.
                          Economic problems severe.`
    },

    ELSALVADOR: {
        name: "Republic of El Salvador",
        population: 4780000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 1,
            airforce: 2,
            nuclear: false
        },
        economy: 3,
        stability: 3,
        resources: ["coffee", "sugar", "cotton"],
        description: `Civil war with FMLN rebels. US military aid recipient.
                     Right-wing government. Death squad activity. Coffee
                     economy. High population density. Regional crisis.`,
        specialAbilities: ["US Military Aid", "Coffee Export"],
        color: "#0F47AF",
        startingTroops: 1,
        influence: 3,
        historicalContext: `Duarte presidency. Civil war intensity. US aid
                          crucial. Death squads active. Peace talks
                          rejected. Coffee economy stressed.`
    },

    GUATEMALA: {
        name: "Republic of Guatemala",
        population: 7960000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 1,
            airforce: 2,
            nuclear: false
        },
        economy: 3,
        stability: 4,
        resources: ["agriculture", "oil", "minerals"],
        description: `Military-dominated democracy. Counter-insurgency
                     operations. Indigenous majority. US influence strong.
                     Agricultural exports. Human rights issues.`,
        specialAbilities: ["Military Control", "Agricultural Base"],
        color: "#4997D0",
        startingTroops: 2,
        influence: 3,
        historicalContext: `Cerezo civilian presidency beginning. Military
                          real power. Counter-insurgency continuing.
                          Limited reforms. US support reduced.`
    },

    HONDURAS: {
        name: "Republic of Honduras",
        population: 4230000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 3,
            navy: 1,
            airforce: 2,
            nuclear: false
        },
        economy: 2,
        stability: 5,
        resources: ["agriculture", "timber", "minerals"],
        description: `US ally hosting Contra bases. Civilian government.
                     Military influence strong. Poorest regional state.
                     Strategic location. Limited development.`,
        specialAbilities: ["US Base Access", "Regional Position"],
        color: "#0073CF",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Azcona presidency. US military presence. Contra
                          bases controversy. Economic struggles. Border
                          tensions with Nicaragua.`
    },

    COSTARICA: {
        name: "Republic of Costa Rica",
        population: 2480000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 0,
            navy: 1,
            airforce: 0,
            nuclear: false
        },
        economy: 4,
        stability: 8,
        resources: ["agriculture", "tourism", "technology"],
        description: `Stable democracy. No standing army. US ally. Regional
                     peace initiatives. Social development focus. Tourism
                     growing. Neutral in regional conflicts.`,
        specialAbilities: ["Democratic Stability", "Peace Tradition"],
        color: "#002B7F",
        startingTroops: 0,
        influence: 3,
        historicalContext: `Arias presidency beginning. Peace plan author.
                          Nicaragua tension. Economic reforms. Tourist
                          development. Regional mediator role.`
    },

    PANAMA: {
        name: "Republic of Panama",
        population: 2180000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 3,
            navy: 2,
            airforce: 1,
            nuclear: false
        },
        economy: 4,
        stability: 5,
        resources: ["canal_revenue", "banking", "services"],
        description: `Noriega's military control. US canal presence.
                     Banking center. Strategic location. Drug trade
                     involvement. Growing opposition movement.`,
        specialAbilities: ["Canal Control", "Strategic Location"],
        color: "#DA121A",
        startingTroops: 0,
        influence: 3,
        historicalContext: `Noriega regime consolidating. US relations
                          strained. Drug allegations growing. Canal
                          handover pending. Opposition organizing.`
    },

    CUBA: {
        name: "Republic of Cuba",
        population: 10090000,
        technology: MILITARY_TECH_LEVELS.REGIONAL_POWER,
        military: {
            army: 6,
            navy: 3,
            airforce: 4,
            nuclear: false
        },
        economy: 4,
        stability: 7,
        resources: ["sugar", "nickel", "tobacco"],
        description: `Major Soviet ally. Large military with Soviet equipment.
                     Forces in Angola. Socialist economy. US embargo. Regional
                     revolutionary influence. Medical/education achievements.`,
        specialAbilities: ["Soviet Alliance", "Military Projection"],
        color: "#CF142B",
        startingTroops: 2,
        influence: 5,
        historicalContext: `Castro's established rule. Angola intervention.
                          Soviet dependency high. Caribbean influence.
                          Economic reforms limited.`
    },

    JAMAICA: {
        name: "Jamaica",
        population: 2310000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 2,
            navy: 1,
            airforce: 1,
            nuclear: false
        },
        economy: 3,
        stability: 6,
        resources: ["bauxite", "tourism", "agriculture"],
        description: `Seaga's pro-US government. IMF programs. Tourism
                     dependent. Bauxite mining important. Limited military.
                     Regional moderate voice. Economic challenges.`,
        specialAbilities: ["Tourist Economy", "Bauxite Export"],
        color: "#009B3A",
        startingTroops: 0,
        influence: 2,
        historicalContext: `Seaga's US alignment. IMF austerity effects.
                          Bauxite industry decline. Tourism growth.
                          Grenada intervention supporter.`
    },

    HAITI: {
        name: "Republic of Haiti",
        population: 5890000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 2,
            navy: 1,
            airforce: 1,
            nuclear: false
        },
        economy: 1,
        stability: 4,
        resources: ["agriculture", "cheap_labor"],
        description: `Duvalier dictatorship ending. Poorest Americas nation.
                     Military influence growing. Economic crisis chronic.
                     US concern over stability. Mass poverty.`,
        specialAbilities: ["Strategic Location", "Low Cost Labor"],
        color: "#00209F",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Baby Doc Duvalier's final period. Military
                          taking control. Economic collapse. Popular
                          unrest growing. US policy shift.`
    },

    DOMINICANREPUBLIC: {
        name: "Dominican Republic",
        population: 6420000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 3,
            navy: 1,
            airforce: 2,
            nuclear: false
        },
        economy: 3,
        stability: 6,
        resources: ["tourism", "sugar", "mining"],
        description: `Democratic transition. Sugar economy. Tourism growing.
                     US influence strong. Limited military capacity.
                     Regional moderate stance. Economic struggles.`,
        specialAbilities: ["Tourist Development", "US Support"],
        color: "#002D62",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Jorge Blanco presidency. IMF riots impact.
                          Democratic consolidation. Sugar price crisis.
                          Tourist sector expanding.`
    },

    TRINIDADTOBAGO: {
        name: "Republic of Trinidad and Tobago",
        population: 1160000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 2,
            navy: 1,
            airforce: 1,
            nuclear: false
        },
        economy: 5,
        stability: 7,
        resources: ["oil", "gas", "industry"],
        description: `Oil-based economy. Democratic stability. Regional
                     leader. Small but professional military. US ally.
                     Industrial development. Caribbean influence.`,
        specialAbilities: ["Energy Exports", "Island Industry"],
        color: "#CE1126",
        startingTroops: 0,
        influence: 2,
        historicalContext: `Chambers government. Oil revenue decline.
                          Economic adjustment. Regional leadership.
                          CARICOM influential member.`
    },

    GRENADA: {
        name: "Grenada",
        population: 96000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 1,
            navy: 1,
            airforce: 0,
            nuclear: false
        },
        economy: 2,
        stability: 5,
        resources: ["tourism", "agriculture", "spices"],
        description: `Post-intervention recovery. US/Caribbean presence.
                     Tourism rebuilding. Small security force. New
                     democratic government. Regional example.`,
        specialAbilities: ["Tourist Potential", "US Protection"],
        color: "#CE1126",
        startingTroops: 0,
        influence: 1,
        historicalContext: `Post-1983 intervention phase. Blaize government.
                          Democracy restored. US aid significant. Regional
                          security arrangements new.`
    },

    BOLIVIA: {
        name: "Republic of Bolivia",
        population: 6070000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 1,
            airforce: 2,
            nuclear: false
        },
        economy: 2,
        stability: 5,
        resources: ["tin", "natural_gas", "cocaine"],
        description: `New democracy after dictatorships. Economic crisis.
                     Hyperinflation problem. Tin mining decline. Drug trade
                     growing. Highland-lowland divide. Labor unrest.`,
        specialAbilities: ["Mineral Resources", "Strategic Location"],
        color: "#007934",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Siles Zuazo presidency ending. Hyperinflation
                          peak. Mining sector collapse. Drug trade
                          expansion. Democratic transition fragile.`
    },

    ECUADOR: {
        name: "Republic of Ecuador",
        population: 9100000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 4,
            navy: 2,
            airforce: 3,
            nuclear: false
        },
        economy: 3,
        stability: 6,
        resources: ["oil", "bananas", "fishing"],
        description: `Democratic government. Oil exporter. Border disputes
                     with Peru. Andean member. Growing debt problems.
                     Amazon oil development. Indigenous issues.`,
        specialAbilities: ["Oil Export", "Andean Position"],
        color: "#FFD100",
        startingTroops: 2,
        influence: 2,
        historicalContext: `Febres Cordero presidency. Oil price impact.
                          Debt crisis effects. Peru tensions. IMF
                          programs starting.`
    },

    PARAGUAY: {
        name: "Republic of Paraguay",
        population: 3590000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 4,
            navy: 1,
            airforce: 2,
            nuclear: false
        },
        economy: 3,
        stability: 6,
        resources: ["hydropower", "agriculture", "timber"],
        description: `Stroessner's long dictatorship. Brazilian influence.
                     Smuggling haven. Itaipu dam project. Limited
                     opposition allowed. Regional isolation.`,
        specialAbilities: ["Hydroelectric Power", "Authoritarian Control"],
        color: "#D52B1E",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Stroessner's firm control. Itaipu benefits.
                          Brazilian dependency. Opposition controlled.
                          Drug trade transit role.`
    },

    URUGUAY: {
        name: "Oriental Republic of Uruguay",
        population: 2930000,
        technology: MILITARY_TECH_LEVELS.DEVELOPING,
        military: {
            army: 4,
            navy: 2,
            airforce: 2,
            nuclear: false
        },
        economy: 4,
        stability: 7,
        resources: ["agriculture", "livestock", "banking"],
        description: `Return to democracy. Military influence remaining.
                     Agricultural exports. Banking center. Social welfare
                     tradition. Regional moderate voice.`,
        specialAbilities: ["Democratic Recovery", "Banking Center"],
        color: "#001489",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Sanguinetti presidency. Democratic restoration.
                          Military pact holding. Economic reforms.
                          Social programs restored.`
    },

    GUYANA: {
        name: "Cooperative Republic of Guyana",
        population: 790000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 2,
            navy: 1,
            airforce: 1,
            nuclear: false
        },
        economy: 2,
        stability: 5,
        resources: ["bauxite", "sugar", "gold"],
        description: `Burnham's socialist regime. Economic problems.
                     Racial politics. Venezuelan border claim. Limited
                     military capacity. Former British colony.`,
        specialAbilities: ["Mineral Wealth", "Strategic Location"],
        color: "#009E49",
        startingTroops: 0,
        influence: 1,
        historicalContext: `Burnham's final period. Economic crisis.
                          Socialist policies failing. Racial tensions.
                          Venezuelan dispute continuing.`
    },

    SURINAME: {
        name: "Republic of Suriname",
        population: 350000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 2,
            navy: 1,
            airforce: 1,
            nuclear: false
        },
        economy: 2,
        stability: 4,
        resources: ["bauxite", "gold", "oil"],
        description: `Military regime under Bouterse. Dutch relations
                     strained. Guerrilla conflict starting. Bauxite
                     exports crucial. Small population. Strategic location.`,
        specialAbilities: ["Bauxite Export", "Forest Control"],
        color: "#377E3F",
        startingTroops: 0,
        influence: 1,
        historicalContext: `Bouterse's military rule. Dutch aid cut.
                          Jungle warfare beginning. Economic problems.
                          Regional isolation growing.`
    },

    AUSTRALIA: {
        name: "Commonwealth of Australia",
        population: 15760000,
        technology: MILITARY_TECH_LEVELS.REGIONAL_POWER,
        military: {
            army: 5,
            navy: 6,
            airforce: 5,
            nuclear: false
        },
        economy: 8,
        stability: 9,
        resources: ["minerals", "agriculture", "energy"],
        description: `Western ally. ANZUS member. Regional power. Advanced
                     economy. Mineral wealth. Close US ties. Pacific
                     influence. Democratic stability. British links.`,
        specialAbilities: ["Mineral Wealth", "Naval Control"],
        color: "#00008B",
        startingTroops: 3,
        influence: 6,
        historicalContext: `Hawke Labor government. Economic reforms.
                          US alliance strong. Asian engagement growing.
                          Nuclear free movement debate.`
    },

    NEWZEALAND: {
        name: "New Zealand",
        population: 3250000,
        technology: MILITARY_TECH_LEVELS.DEVELOPED,
        military: {
            army: 4,
            navy: 4,
            airforce: 4,
            nuclear: false
        },
        economy: 7,
        stability: 9,
        resources: ["agriculture", "forestry", "fishing"],
        description: `Anti-nuclear stance straining US ties. ANZUS crisis.
                     Agricultural exports. Pacific leadership role. Social
                     welfare state. British Commonwealth member.`,
        specialAbilities: ["Agricultural Export", "Pacific Leadership"],
        color: "#00247D",
        startingTroops: 1,
        influence: 4,
        historicalContext: `Lange Labour government. Nuclear ships ban.
                          ANZUS dispute. Economic deregulation.
                          South Pacific influence growing.`
    },

    PAPUANEWGUINEA: {
        name: "Independent State of Papua New Guinea",
        population: 3460000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 3,
            navy: 1,
            airforce: 1,
            nuclear: false
        },
        economy: 3,
        stability: 6,
        resources: ["minerals", "timber", "agriculture"],
        description: `Australian support important. Mining development.
                     Tribal diversity. Limited military capacity.
                     Bougainville tensions beginning. Strategic location.`,
        specialAbilities: ["Mineral Resources", "Strategic Position"],
        color: "#CE1126",
        startingTroops: 1,
        influence: 2,
        historicalContext: `Somare-Chan period. Mining expansion.
                          Australian aid crucial. Tribal politics.
                          Bougainville issues emerging.`
    },

    FIJI: {
        name: "Dominion of Fiji",
        population: 700000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 2,
            navy: 1,
            airforce: 0,
            nuclear: false
        },
        economy: 4,
        stability: 6,
        resources: ["tourism", "sugar", "gold"],
        description: `Pre-coup democracy. Ethnic tensions growing. Tourism
                     economy. Regional hub. Commonwealth member. Sugar
                     exports important. Indian-native divide.`,
        specialAbilities: ["Tourist Economy", "Regional Hub"],
        color: "#68BFE5",
        startingTroops: 0,
        influence: 2,
        historicalContext: `Mara leadership. Ethnic tensions rising.
                          Sugar industry crucial. Regional influence.
                          Pre-1987 coup period.`
    },

    SOLOMONISLANDS: {
        name: "Solomon Islands",
        population: 273000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 1,
            navy: 1,
            airforce: 0,
            nuclear: false
        },
        economy: 2,
        stability: 7,
        resources: ["timber", "fishing", "agriculture"],
        description: `New independence. British influence. Small economy.
                     Limited military. Strategic WWII history. Regional
                     cooperation member. Development challenges.`,
        specialAbilities: ["Fish Resources", "Strategic Location"],
        color: "#215B33",
        startingTroops: 0,
        influence: 1,
        historicalContext: `Kenilorea government. Post-independence
                          development. British ties important. Regional
                          cooperation focus.`
    },

    VANUATU: {
        name: "Republic of Vanuatu",
        population: 142000,
        technology: MILITARY_TECH_LEVELS.LIMITED,
        military: {
            army: 1,
            navy: 1,
            airforce: 0,
            nuclear: false
        },
        economy: 2,
        stability: 6,
        resources: ["tourism", "agriculture", "offshore_finance"],
        description: `New independence. Non-aligned stance. No military.
                     Tourism potential. French-British influence.
                     Regional cooperation. Tax haven developing.`,
        specialAbilities: ["Tourist Potential", "Tax Haven"],
        color: "#009543",
        startingTroops: 0,
        influence: 1,
        historicalContext: `Lini government. Non-aligned policy.
                          Franco-British aid. Regional activism.
                          Development priorities.`
    }

// This completes the world country data for 1985, including:
// - All major powers and regional players
// - Accurate military capabilities
// - Economic conditions
// - Political situations
// - Resources and special abilities
// - Cold War alignments and tensions
// - Regional dynamics and relationships

// The data structure provides a comprehensive snapshot of:
// 1. Military strength and technology levels
// 2. Economic capabilities and resources
// 3. Political stability and influence
// 4. Special characteristics and historical context
// 5. Regional relationships and tensions
// 6. Cold War alignment and implications

// Would you like me to:
// 1. Add any specific regions or countries that might have been missed?
// 2. Enhance any particular aspects of the existing data?
// 3. Add additional game mechanics or interaction rules?
// 4. Create supporting documentation or gameplay guides?

};

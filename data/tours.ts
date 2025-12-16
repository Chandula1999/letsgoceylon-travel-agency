export interface TourItineraryItem {
    day: number;
    title: string;
    description: string;
    accommodation?: string;
    meals?: string[];
}

export interface Tour {
    id: string;
    title: string;
    location: string;
    image: string;
    duration: string;
    price: number;
    rating: number;
    reviews: number;
    category: string;
    description?: string;
    highlights?: string[];
    itinerary?: TourItineraryItem[];
    inclusions?: string[];
    exclusions?: string[];
    paymentPolicy?: string;
    paymentMethods?: string[];
    recommendedFor?: string[];
}

export const TOURS: Tour[] = [
    {
        id: "1",
        title: "Eastern Blue Bliss",
        location: "Trincomalee, Pasikudah, Arugambay",
        image: "/assets/pasikuda beach.jpg", // Eastern Blue Bliss - Trincomalee beach
        duration: "12 Days",
        price: 1350, // Estimate
        rating: 4.8,
        reviews: 0,
        category: "Beach",
        recommendedFor: ["Adventure", "Honeymoon"],
        description: "Tucked away from the usual tourist trails, the North Eastern coast of Sri Lanka is a hidden paradise waiting to be discovered. With golden beaches that stretch for miles, untouched coral reefs teeming with marine life, and a rich cultural tapestry woven from Tamil and colonial heritage, this region offers an experience that’s both serene and soul-stirring. Whether you’re chasing adventure, seeking spiritual depth, or simply craving a quiet stretch of sand to call your own, Sri Lanka’s North Eastern coast is a treasure trove of authentic, unspoiled beauty.",
        highlights: [
            "Serene beaches of the North Eastern coast",
            "Sigiriya Rock Fortress sunset",
            "Snorkeling at Pigeon Island",
            "Koneswaram Temple visit",
            "Surfing in Arugambay",
            "Yala National Park Safari",
            "Galle Fort exploration"
        ],
        inclusions: [
            "Accommodation",
            "Transportation in an air-conditioned vehicle with the services of a chauffeur guide",
            "Entrance Tickets",
            "Government Taxes"
        ],
        exclusions: [
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel",
            "Early check ins and late check outs",
            "Tips & Expenses of personal nature",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Negombo",
                description: "Just a few minutes away from the Airport, Negombo is the best place to shake off the post flight exhaustion. Explore the fish market, or head out on a boat ride through the mangroves if you are feeling rested enough. The Negombo beach is amazing for a cool dip or an evening walk along the shore."
            },
            {
                day: 2,
                title: "Habarana & Sigiriya",
                description: "Make a stop for the day at the cultural triangle of the country. Visit the Sigiriya Rock this evening for a spectacular sunset. The Sigiriya Rock is a UNESCO World Heritage site, whose ancient architectural tactics are bound to marvel you."
            },
            {
                day: 3,
                title: "Trincomalee",
                description: "Resume your journey to the North Eastern province of Sri Lanka today. A coastal gem on Sri Lanka’s northeastern shore, Trincomalee is home to one of the world’s finest natural harbors. Known for its crystal-clear waters, historic temples, and golden beaches."
            },
            {
                day: 4,
                title: "Exploring Trincomalee",
                description: "Whether you’re diving into the vibrant marine life of Pigeon Island, soaking in panoramic views from Swami Rock, or exploring the centuries-old Koneswaram Temple, Trincomalee promises an unforgettable escape filled with history, serenity, and sea-kissed adventure."
            },
            {
                day: 5,
                title: "Transfer to Pasikudah",
                description: "After breakfast this morning, you will make your way to Pasikudah. Pasikudah is a quiet coastal paradise on Sri Lanka’s east coast, known for its shallow, calm waters and long stretches of soft, golden sand."
            },
            {
                day: 6,
                title: "Relax in Pasikudah",
                description: "The bay here is perfect for safe swimming, even for little ones, as the sea stays waist-deep far out from the shore. Enjoy a relaxing day by the calm waters."
            },
            {
                day: 7,
                title: "Journey to Arugambay",
                description: "Bid farewell to Pasikudah while you make your way to Arugambay, a surfer’s paradise. Tucked along the southeast coast of Sri Lanka, Arugam Bay is a sun-soaked paradise known for its world-class waves, chilled-out vibes, and palm-fringed beaches."
            },
            {
                day: 8,
                title: "Surfing & Vibes in Arugambay",
                description: "It’s a dream destination for surfers from around the globe, especially during the season from May to September, when the swells are at their best. Enjoy the waves or relax on the beach."
            },
            {
                day: 9,
                title: "Yala National Park",
                description: "Making your way to the South, make a stop at Yala Today. Head out on an Evening Safari at the Yala National Park. With the highest density of leopards in Sri Lanka, test your luck with an exciting drive-in search of the Spotted leopard and many other endemic species."
            },
            {
                day: 10,
                title: "Galle Fort",
                description: "Todays stop is at the city of Galle, a perfect blend of colonial charm and seaside elegance. At its heart lies the historic Galle Fort, a UNESCO World Heritage Site built by the Portuguese and later fortified by the Dutch. Within its cobbled streets, you’ll find a mix of cozy cafés, art galleries, boutique hotels, and old-world architecture."
            },
            {
                day: 11,
                title: "Commercial Hub Colombo",
                description: "Make your way to Colombo, the commercial hub of the country for a perfect end to your Sri Lankan adventure. En-route stop by the Kosgoda Turtle Hatchery. Head out for some last minute shopping runs and a tour around the city."
            },
            {
                day: 12,
                title: "Departure",
                description: "After a fun-filled and adventurous holiday in Sri Lanka, its time to say Good Bye! Today you will be transferred to the airport in time for your departure flight. Until Next Time, Ayubowan!"
            }
        ]
    },
    {
        id: "2",
        title: "Southern Sands Voyage",
        location: "Negombo, Tangalle, Mirissa, Galle",
        image: "/assets/weligama beach.jpg", // Southern Sands Voyage - Southern coast
        duration: "10 Days",
        price: 1100, // Estimate
        rating: 4.7,
        reviews: 0,
        category: "Beach",
        recommendedFor: ["Adventure", "Honeymoon"],
        description: "Welcome to Sri Lanka! From coast to coast, this tour will take you through the ideal beaches meant for surfing, diving, snorkeling, or just laying on the sand and soaking in the sun, all while being just a few hours away from Colombo. The lush mangroves in Negombo to the softest sand in Tangalle, the Dolphins in Mirissa to the ancient fortress in Galle, the corals in Hikkaduwa to the turtles in Kosgoda.",
        highlights: [
            "Negombo Mangrove Boat Ride",
            "Hummanaya Blow Hole",
            "Turtle Watching in Rekawa/Kosgoda",
            "Whale Watching in Mirissa",
            "Galle Dutch Fort",
            "Snorkeling in Hikkaduwa",
            "Relaxing in Bentota"
        ],
        inclusions: [
            "Accommodation",
            "Transportation in an air-conditioned vehicle with the services of a chauffeur guide",
            "Entrance Tickets",
            "Government Taxes"
        ],
        exclusions: [
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel",
            "Early check ins and late check outs",
            "Tips & Expenses of personal nature",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Negombo",
                description: "Just a few minutes away from the Airport, Negombo is the best place to shake off the post flight exhaustion. Explore the fish market, or head out on a boat ride through the mangroves if you are feeling rested enough. The Negombo beach is amazing for a cool dip or an evening walk along the shore."
            },
            {
                day: 2,
                title: "Journey to Tangalle",
                description: "Located around 3 hours away from Negombo, Tangalle is home to open beaches and lagoons with soft sand spread across the long shore. Visit the Hummanaya Blow Hole and the Mulgirigala Temple."
            },
            {
                day: 3,
                title: "Tangalle Exploration",
                description: "The Kalametiya Bird Sanctuary, home to a large diversity of Birds is situated just a short drive away from Tangalle. Scuba Diving and snorkeling in search of Coral reefs is a must when in Tangalle."
            },
            {
                day: 4,
                title: "Mirissa & Dondra Head",
                description: "Visit the southern most point of Sri Lanka, the Dondra head and the coconut tree hill. Surf through the Mirissa Waves."
            },
            {
                day: 5,
                title: "Whale Watching in Mirissa",
                description: "Head out on an early morning Dolphin/Whale Watching excursion. Subject to the weather, Mirissa beach offers a high probability of sighting these glorious mammals."
            },
            {
                day: 6,
                title: "Unawatuna & Galle",
                description: "Make a morning visit to the Jungle beach in Unawatuna hidden within a village. Visit the Galle Dutch Fort in the evening. Explore the nooks and corners of the ancient fortress dating back to the 1500s."
            },
            {
                day: 7,
                title: "Hikkaduwa Coral Reefs",
                description: "Hikkaduwa, known for its corals is an ideal holiday destination for marine lovers. Snorkel through the coral reefs or hop on a glass bottomed boat to explore life underwater."
            },
            {
                day: 8,
                title: "Lagoon Kayaking",
                description: "Kayak through the mangroves, exploring the Hikkaduwa lagoon. Enjoy the vibrant marine atmosphere."
            },
            {
                day: 9,
                title: "Bentota & Turtles",
                description: "Visit the Kosgoda Sea Turtle Hatchery for a soulful experience. Relax by the Bentota beach preparing for the flight scheduled for the Next Day."
            },
            {
                day: 10,
                title: "Departure",
                description: "After a fun-filled and adventurous holiday in Sri Lanka, its time to say Good Bye! Today you will be transferred to the airport in time for your departure flight. Until Next Time, Ayubowan!"
            }
        ]
    },
    {
        id: "3",
        title: "Sunrise Shores Tour",
        location: "Kalpitiya, Jaffna, Trincomalee",
        image: "/assets/Kalpitiya beach.jpg", // Sunrise Shores Tour - Northern beaches
        duration: "14 Days",
        price: 1500, // Estimate
        rating: 4.9,
        reviews: 0,
        category: "Beach",
        recommendedFor: ["Family"],
        description: "Tucked away from the usual tourist trails, the North Eastern coast of Sri Lanka is a hidden paradise waiting to be discovered. With golden beaches, untouched coral reefs, and a rich cultural tapestry woven from Tamil and colonial heritage. Experience the serenity of Kalpitiya, the history of Jaffna, and the pristine beaches of Trincomalee.",
        highlights: [
            "Kitesurfing in Kalpitiya",
            "Dolphin Watching",
            "Mannar Fort & Baobab Trees",
            "Jaffna Library & Nallur Temple",
            "Casuarina Beach",
            "Pigeon Island Snorkeling",
            "Arugambay Surfing",
            "Yala Safari",
            "Galle Fort"
        ],
        inclusions: [
            "Accommodation",
            "Transportation in an air-conditioned vehicle with the services of a chauffeur guide",
            "Entrance Tickets",
            "Government Taxes"
        ],
        exclusions: [
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel",
            "Early check ins and late check outs",
            "Tips & Expenses of personal nature",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Negombo Arrival",
                description: "Just a few minutes away from the Airport, Negombo is the best place to shake off the post flight exhaustion. Explore the fish market, or head out on a boat ride through the mangroves if you are feeling rested enough. The Negombo beach is amazing for a cool dip or an evening walk along the shore"
            },
            {
                day: 2,
                title: "Transfer to Kalpitiya",
                description: "Make your way to Kalpitiya today. Kalpitiya a tranquil coastal town located on the northwestern tip of Sri Lanka, is renowned for its pristine beaches, vibrant marine life, and historical significance."
            },
            {
                day: 3,
                title: "Kitesurfing & Dolphins",
                description: "Kalpitiya is celebrated as one of Sri Lanka’s premier kitesurfing spots. The coastal waters are home to various dolphin species, including spinner, bottlenose, and Indo-Pacific humpback dolphins."
            },
            {
                day: 4,
                title: "Mannar & Fort",
                description: "Make a stop at Mannar for the night. Mannar is a historic coastal town once renowned for its pearl fishing. Visit the Mannar Fort: Built by the Portuguese and later fortified by the Dutch."
            },
            {
                day: 5,
                title: "Journey to Jaffna",
                description: "Today you will make your way to Jaffna. Jaffna is a vibrant city located in the Northern Province of Sri Lanka, known for its rich Tamil heritage, historical landmarks, and cultural resilience."
            },
            {
                day: 6,
                title: "Exploring Jaffna",
                description: "Visit the KKS beach and the Casuarina Beach located a few kilometers away from the Jaffna town, for some gentle waves and soft sand. The Keerimalai Hot water spring is a significant attraction for both tourists and locals."
            },
            {
                day: 7,
                title: "Trincomalee",
                description: "Bid farewell to the North while you make your way to the North East. A coastal gem on Sri Lanka’s northeastern shore, Trincomalee is home to one of the world’s finest natural harbors."
            },
            {
                day: 8,
                title: "Trincomalee Beaches",
                description: "Whether you’re diving into the vibrant marine life of Pigeon Island, soaking in panoramic views from Swami Rock, or exploring the centuries-old Koneswaram Temple, Trincomalee promises an unforgettable escape."
            },
            {
                day: 9,
                title: "Transfer to Arugambay",
                description: "Bid farewell to Trincomalee while you make your way to Arugambay, a surfer’s paradise. Tucked along the southeast coast of Sri Lanka, Arugam Bay is a sun-soaked paradise known for its world-class waves."
            },
            {
                day: 10,
                title: "Arugambay Vibes",
                description: "It’s a dream destination for surfers from around the globe, especially during the season from May to September, when the tides are at their best. Relax and enjoy the beach vibes."
            },
            {
                day: 11,
                title: "Yala National Park",
                description: "Making your way to the South, make a stop at Yala Today. Head out on an Evening Safari At the Yala National Park. With the highest density of leopards in Sri Lanka, test your luck with an exciting drive in search of the Spotted leopard."
            },
            {
                day: 12,
                title: "Galle Fort",
                description: "Todays stop is at the city of Galle, a perfect blend of colonial charm and seaside elegance. At its heart lies the historic Galle Fort, a UNESCO World Heritage Site built by the Portuguese and later fortified by the Dutch."
            },
            {
                day: 13,
                title: "Colombo",
                description: "Make your way to Colombo. Enjoy the mix of cozy cafés, art galleries, boutique hotels, and old-world architecture wrapped in salty sea breeze in the city."
            },
            {
                day: 14,
                title: "Departure",
                description: "After a fun-filled holiday, its time to say Good Bye! Today, you will be transferred to the airport in time for your departure flight."
            }
        ]
    },
    {
        id: "4",
        title: "Scenic Beauty of Sri Lanka",
        location: "Kandy, Nuwara Eliya, Colombo",
        image: "/assets/kandy.jpg", // Sri Lanka cultural scenic beauty
        duration: "9 Days",
        price: 950, // Estimate
        rating: 4.8,
        reviews: 0,
        category: "Cultural",
        recommendedFor: ["Culture", "Nature"],
        description: "Experience the best of Sri Lanka on this 9-day cultural and scenic tour. Start with rest in Negombo, then visit ancient sites like Dambulla’s cave temple and the famous Sigiriya rock. Enjoy a peaceful trek in Hiriwadunna village and explore the historic city of Polonnaruwa. Discover the sacred temples and ruins of Anuradhapura and Ritigala Monastery. In Kandy, visit the Temple of the Tooth and beautiful old temples nearby. Take a scenic train ride to the cool hills of Nuwara Eliya and see the charming Seetha Amman Kovil. End your trip with some free time to shop and relax in Colombo. This journey offers a wonderful mix of culture, history, nature, and leisure, perfect for anyone wanting to truly experience the heart of Sri Lanka.",
        highlights: [
            "Sigiriya Rock Fortress",
            "Dambulla Cave Temple",
            "Hiriwadunna Village Trek",
            "Polonnaruwa Ancient City",
            "Anuradhapura Sacred City",
            "Temple of the Tooth Relic",
            "Scenic Train Ride to Nuwara Eliya"
        ],
        inclusions: [
            "Accommodation",
            "Transportation in an air-conditioned vehicle with the services of a chauffeur guide",
            "Entrance Tickets",
            "Government Taxes"
        ],
        exclusions: [
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel",
            "Early check ins and late check outs",
            "Tips & Expenses of personal nature",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Negombo & Rest",
                description: "Arrive in Sri Lanka and transfer to Negombo to relax and recover from your journey."
            },
            {
                day: 2,
                title: "Dambulla & Sigiriya",
                description: "Visit the famous Dambulla Royal Cave Temple, adorned with ancient Buddhist murals and statues. Then explore the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site, with its stunning frescoes and panoramic views."
            },
            {
                day: 3,
                title: "Hiriwadunna Trek & Polonnaruwa",
                description: "Experience a nature trek in Hiriwadunna, a peaceful village surrounded by beautiful wetlands and wildlife. Later, discover the ancient city of Polonnaruwa, known for its well-preserved ruins and historical significance."
            },
            {
                day: 4,
                title: "Anuradhapura & Ritigala Monastery",
                description: "Visit Anuradhapura, one of Sri Lanka’s oldest capitals, home to sacred Buddhist stupas and monasteries. Explore the serene Ritigala Monastery, an ancient Buddhist forest monastery nestled in the mountains."
            },
            {
                day: 5,
                title: "Kandy: Temples and Traditions",
                description: "Travel to Kandy and visit the Dambulla Royal Cave Temple again if desired. In the evening, explore the Temple of the Tooth Relic, a spiritual center of great importance to Buddhists worldwide."
            },
            {
                day: 6,
                title: "Kandy’s Historic Temples",
                description: "Discover Galadeniya Temple, Embekke Temple, or Lankathilake Temple, each offering unique architecture and rich history surrounded by lush landscapes."
            },
            {
                day: 7,
                title: "Nuwara Eliya & Train Ride",
                description: "Take a scenic train ride from Kandy to Nuwara Eliya, enjoying stunning views of tea plantations and rolling hills. Visit the Seetha Amman Kovil, a temple with ties to the ancient Ramayana epic."
            },
            {
                day: 8,
                title: "Colombo: Shopping and Leisure",
                description: "Head to Colombo for some free time to shop, explore the city, or relax before your departure."
            },
            {
                day: 9,
                title: "Departure from BIA",
                description: "Transfer to Bandaranaike International Airport for your flight home, taking with you unforgettable memories of Sri Lanka’s culture and landscapes."
            }
        ]
    },
    {
        id: "5",
        title: "Heritage Discovery Tour",
        location: "Anuradhapura, Jaffna, Sigiriya, Kandy",
        image: "/assets/sigiriya srilanka.jpg", // Sigiriya Lion Rock aerial view
        duration: "15 Days",
        price: 1600, // Estimate
        rating: 4.9,
        reviews: 0,
        category: "Cultural",
        recommendedFor: ["Culture", "Scenic Explorers"],
        description: "Discover the heart and soul of Sri Lanka on this unforgettable 15-day cultural and scenic journey. From the coastal calm of Negombo to the sacred city of Anuradhapura, uncover ancient history and spiritual landmarks. Journey to the northern charm of Jaffna, with visits to the Dutch Fort, Nagadeepa Island, and Keerimalai Springs. Explore the cultural triangle with iconic sites like Polonnaruwa, Sigiriya Rock Fortress, and Dambulla Cave Temple. Experience traditional village life in Hiriwadunna and the sacred serenity of Kandy’s Temple of the Tooth. Continue through the hill country with temple visits, a scenic train ride to Ella, and tea tasting in Nuwara Eliya. Witness spiritual rituals in Kataragama, wander the historic Galle Fort, and finish with the vibrant energy of Colombo. Blending history, nature, and culture, this tour offers a full picture of Sri Lanka’s beauty, both seen and felt. Perfect for culture lovers, explorers, and those seeking a meaningful, memory-filled holiday.",
        highlights: [
            "Anuradhapura Ancient City",
            "Jaffna Dutch Fort & Library",
            "Nagadeepa & Point Pedro",
            "Sigiriya & Polonnaruwa",
            "Kandy Temple of the Tooth",
            "Scenic Train to Ella",
            "Yala/Kataragama",
            "Galle Dutch Fort"
        ],
        inclusions: [
            "Accommodation",
            "Transportation in an air-conditioned vehicle with the services of a chauffeur guide",
            "Entrance Tickets",
            "Government Taxes"
        ],
        exclusions: [
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel",
            "Early check ins and late check outs",
            "Tips & Expenses of personal nature",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Negombo | Arrival in Sri Lanka",
                description: "Arrive at Bandaranaike International Airport. Meet your guide and transfer to Negombo for rest and relaxation after your flight."
            },
            {
                day: 2,
                title: "Anuradhapura | Sacred Beginnings",
                description: "Travel to Anuradhapura, Sri Lanka’s first ancient capital. Visit its sacred stupas, the Sri Maha Bodhi Tree, and centuries-old ruins steeped in Buddhist history."
            },
            {
                day: 3,
                title: "Jaffna | Northern Welcome",
                description: "Head north to Jaffna and visit the impressive Dutch Fort, reflecting colonial heritage and northern culture."
            },
            {
                day: 4,
                title: "Jaffna | Heritage & Islands",
                description: "Visit the iconic Jaffna Public Library, then take a boat ride to Nagadeepa Island, an important Buddhist pilgrimage site."
            },
            {
                day: 5,
                title: "Jaffna | Northernmost Wonders",
                description: "Explore Point Pedro, Sri Lanka’s northernmost tip, and soak in the healing waters of Keerimalai Hot Springs, surrounded by local myths and legends."
            },
            {
                day: 6,
                title: "Dambulla | Polonnaruwa & Village Trek",
                description: "Journey to the Cultural Triangle. Walk through the ruins of ancient Polonnaruwa, then take a peaceful Hiriwadunna village trek to experience rural life."
            },
            {
                day: 7,
                title: "Dambulla | Sigiriya & Cave Temples",
                description: "Climb the majestic Sigiriya Rock Fortress, then explore the sacred Dambulla Cave Temple, filled with golden Buddha statues and colorful murals."
            },
            {
                day: 8,
                title: "Kandy | Sacred City & Culture",
                description: "Travel to Kandy to visit the Temple of the Sacred Tooth Relic. End the day with a traditional Kandyan cultural dance performance."
            },
            {
                day: 9,
                title: "Kandy | Ancient Temple Trail",
                description: "Discover the historic temples of Lankathilaka, Embekke, and Gadaladeniya, known for their ancient architecture and spiritual ambiance."
            },
            {
                day: 10,
                title: "Nuwara Eliya | Tea Country & Ramayana Trails",
                description: "Head to the misty hills of Nuwara Eliya, visit the Seetha Amman Temple and a working tea factory to see how Ceylon Tea is made."
            },
            {
                day: 11,
                title: "Ella | Train Journey & Nature",
                description: "Enjoy one of the world’s most scenic train rides to Ella. Visit the stunning Ravana Falls upon arrival."
            },
            {
                day: 12,
                title: "Kataragama | Spiritual South",
                description: "Travel to Kataragama, a sacred multi-religious pilgrimage town known for its colorful evening rituals at the temple."
            },
            {
                day: 13,
                title: "Galle | Colonial Beauty",
                description: "Journey to the southern coast and explore the charming Galle Dutch Fort, a UNESCO World Heritage Site filled with history and coastal charm."
            },
            {
                day: 14,
                title: "Colombo | City Buzz & Shopping",
                description: "End your tour in the vibrant capital Colombo with a city tour covering historic landmarks, seaside walks, and a bit of shopping."
            },
            {
                day: 15,
                title: "Departure from BIA",
                description: "Transfer to the airport with unforgettable memories of Sri Lanka’s spiritual, cultural, and natural wonders."
            }
        ]
    },
    {
        id: "6",
        title: "A Historical Journey",
        location: "Anuradhapura, Polonnaruwa, Sigiriya, Kandy",
        image: "/assets/Anuradhapura Sri Lanka.jpg", // Ancient Buddhist stupa ruins
        duration: "6 Days",
        price: 650, // Estimate
        rating: 4.8,
        reviews: 0,
        category: "Cultural",
        recommendedFor: ["Cultural Travelers", "History Buffs"],
        description: "The Cultural Triangle in Sri Lanka offers a journey through some of the most treasured sites in the island’s history. Starting in the ancient city of Anuradhapura, you’ll walk among centuries-old stupas, sacred bodhi trees, and serene reservoirs that once served a great kingdom. A stop at Mihintale, the birthplace of Buddhism in Sri Lanka, adds spiritual depth to the experience. Polonnaruwa brings history to life with its well-preserved ruins, statues, and royal gardens, while Sigiriya rises dramatically from the forest, inviting you to climb through ancient frescoes and marvel at views once reserved for kings. In Dambulla, golden Buddha statues rest in peaceful cave temples, creating a moment of stillness and awe. Finally, in Kandy, the cultural heart of the island, you’ll visit the Temple of the Tooth—one of Buddhism’s most sacred sites. This tour blends history, culture, and spirituality, leaving you with a deeper connection to Sri Lanka’s remarkable past.",
        highlights: [
            "Anuradhapura Sacred City",
            "Mihintale",
            "Polonnaruwa Ancient Ruins",
            "Sigiriya Lion Rock",
            "Dambulla Cave Temple",
            "Kandy Temple of the Tooth"
        ],
        inclusions: [
            "Accommodation",
            "Transportation in an air-conditioned vehicle with the services of a chauffeur guide",
            "Entrance Tickets",
            "Government Taxes"
        ],
        exclusions: [
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel",
            "Early check ins and late check outs",
            "Tips & Expenses of personal nature",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Sri Lanka & Rest in Negombo",
                description: "You will be warmly welcomed at the airport and transferred to Negombo. Spend your first day at rest, settling in and relaxing after your journey."
            },
            {
                day: 2,
                title: "Kandy: Sacred City of Culture",
                description: "Travel to Kandy, the cultural capital of Sri Lanka. In the evening, visit the Temple of the Sacred Tooth Relic, one of the most revered Buddhist temples in the country. Enjoy the spiritual atmosphere and explore the city’s unique charm."
            },
            {
                day: 3,
                title: "Dambulla: Caves and Kings",
                description: "Head to Dambulla to explore the Royal Cave Temple, a UNESCO World Heritage Site filled with stunning Buddha statues and ancient cave paintings. Later in the day, visit the iconic Sigiriya Rock Fortress, an ancient palace on a massive rock offering breathtaking views."
            },
            {
                day: 4,
                title: "Ancient Cities and Rock Kingdoms",
                description: "Begin your day with a visit to Polonnaruwa, the medieval capital of Sri Lanka, where beautifully preserved ruins speak of a glorious past. Return to Sigiriya if you’d like to explore more or catch anything you missed the day before."
            },
            {
                day: 5,
                title: "Colombo: Cultural Contrast in the Capital",
                description: "Drive to Colombo, Sri Lanka’s bustling capital. Visit the stunning Red Mosque (Jami Ul-Alfar Mosque), a striking symbol of the city’s cultural diversity. Enjoy a short city tour or some local shopping if time permits."
            },
            {
                day: 6,
                title: "Departure from BIA",
                description: "After a week filled with culture, history, and unforgettable sights, you’ll be transferred to Bandaranaike International Airport for your departure."
            }
        ]
    },
    {
        id: "7",
        title: "Beyond Boundaries",
        location: "Kandy, Hatton, Nuwara Eliya, Ella, Yala",
        image: "/assets/hatton.jpg", // Adventure hiking mountains
        duration: "15 Days",
        price: 1800, // Estimate
        rating: 4.9,
        reviews: 0,
        category: "Adventure",
        recommendedFor: ["Thrill-Seekers", "Hiking", "Water Sports"],
        description: "This 15-day extreme adventure is designed for seasoned thrill-seekers, pushing physical and mental limits in remote, untamed landscapes. Start off with a cultural tour in the hills followed by hiking the five peaks of the Hanthana Mountain Range. Thereafter, continue your adventure into white water rafting and rope jumping at the Laxaphana Waterfalls, a 9km trek into the wild at the Horton Plains National Park and a hike to the Mini Adam’s Peak at sunrise followed by an exciting Zip Line Ella. Continue your journey to the south, where you will head out on a safari drive at the Yala National Park, a boat ride at dawn in search of Dolphins, followed by Surfing, Snorkeling, Kayaking and many other adventurous water sports.",
        highlights: [
            "Hanthana Mountain Range Hike (5 Peaks)",
            "White Water Rafting in Kitulgala",
            "Rope Jumping at Laxapana Waterfalls",
            "Horton Plains 9km Trek (World's End)",
            "Mini Adam's Peak & Flying Ravana Zip Line",
            "Yala National Park Safari",
            "Dolphin Watching & Water Sports in Mirissa"
        ],
        inclusions: [
            "Accommodation on half board basis while at Kalpitiya. Bed & breakfast basis while at Trincomalee, Passikudah, Pottuvil, Galle, Kosgoda.",
            "Transport in an Air-Conditioned Car with an accompanying English speaking Chauffeur Guide.",
            "Government Tax (18%)"
        ],
        exclusions: [
            "Early check-in & Late check-out.",
            "Entrance/excursion fees to the places mentioned in our itinerary.",
            "Tips and other expenses of a personal nature.",
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel.",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival: Ayubowan!",
                description: "Upon your arrival, you will be greeted by our team at the Bandaranaike International Airport, who will assist you with the check out and the chauffeur guide who will drive you to your hotel in Negombo situated a few minutes away from the airport for some rest."
            },
            {
                day: 2,
                title: "Kandy: The Last Kingdom",
                description: "After Breakfast this morning, you will make your way to Kandy, the final Kingdom of the Kings. Head out on a city tour including a visit to the Temple of the Tooth Relic, a sacred place for all Buddhists, followed by a cultural performance."
            },
            {
                day: 3,
                title: "Kandy: Hanthana Hike",
                description: "Head out this morning, on a hike to the Hanthana Mountain Range. Depending on your energy levels, choose to summit either one or all five peaks. Thereafter, spend your day at leisure by the pool."
            },
            {
                day: 4,
                title: "Hatton: River Adventures",
                description: "Today you will make your way to Hatton. En-route make a stop at Kitulgala, for White water rafting and many other adventure sports. Evening at leisure."
            },
            {
                day: 5,
                title: "Hatton: Rope Jumping",
                description: "After a relaxed breakfast, pay a visit to the Laxapana Waterfall, where you get the opportunity to engage in Rope Jumping. Feel the burst of adrenaline, as you descend the cliff and feel the cool water touch your skin."
            },
            {
                day: 6,
                title: "Nuwara Eliya: World's End Trek",
                description: "After breakfast, make your way to Nuwara Eliya. Visit the Horton Plains National Park, the only wild life sanctuary where you are allowed to explore by foot. Walk 9 kms into the wild, making a stop at the World’s End point and the Baker’s Falls along the way."
            },
            {
                day: 7,
                title: "Ella: The Arch & The Falls",
                description: "Hop on a train Ella this morning. Upon your arrival, explore the city including visits to the 09 arch bridge, the Ella Gap and the Ravana Falls"
            },
            {
                day: 8,
                title: "Ella: Peak & Zip Line",
                description: "Early this morning, head out on a hike to the Mini Adam’s peak for a spectacular sunrise. There is no better way to start the day than this. Thereafter, ride the Flying Ravana Zip Line."
            },
            {
                day: 9,
                title: "Yala: Safari Adventure",
                description: "After breakfast, make your way to Yala. In the evening, head out on safari drive in search of the spotted leopard and many other endemic species."
            },
            {
                day: 10,
                title: "Mirissa: Sun & Surf",
                description: "After breakfast, make your way to Mirissa. Spend your day catching waves and some sun."
            },
            {
                day: 11,
                title: "Mirissa: Dolphins & Beach",
                description: "Head out early this morning, in search of the friendliest mammals of the ocean, the dolphins. After a heartfelt experience, retire by the beach spending your day at leisure."
            },
            {
                day: 12,
                title: "Hikkaduwa & Galle Fort",
                description: "After breakfast, make your way to Hikkaduwa. En-route, stop by the Galle Dutch Fort."
            },
            {
                day: 13,
                title: "Hikkaduwa: Dive & Kayak",
                description: "Head out on a Kayaking expedition followed by Diving this morning. Evening at leisure by the beach."
            },
            {
                day: 14,
                title: "Colombo: Urban Explore",
                description: "After a relaxed breakfast, make your way to Colombo, the commercial hub of the country. Upon your arrival, head out on a relaxed city tour, including some last minute shopping runs."
            },
            {
                day: 15,
                title: "Departure",
                description: "After a fun-filled and adventurous holiday in Sri Lanka, its time to say Good Bye! You will be transferred to the airport in time for your departure flight."
            }
        ]
    },
    {
        id: "8",
        title: "The Southern Explorer",
        location: "Negombo, Yala, Mirissa, Bentota",
        image: "/assets/whales watching mirissa.jpg", // Tropical beach adventure
        duration: "6 Days",
        price: 850, // Estimate
        rating: 4.7,
        reviews: 0,
        category: "Adventure",
        recommendedFor: ["Short Holiday", "Wildlife", "Relaxed Adventure"],
        description: "The Southern Explorer is curated for you, who will be visiting Sri Lanka on a short holiday. The tour itinerary includes some minor adventurous activities which does not require too much of your energy and strength along the southern coast, combined with site seeing in a UNESCO World Heritage Town. Join us to explore the southern beach through watersports, Dolphin Watching, Surfing and an exciting safari drive through the Yala National Park, with one of the highest density of Leopards. The tour plan would deliver its best between the months of November and April, when the weather along the South Coast is ideal.",
        highlights: [
            "Yala National Park Safari",
            "Hummanaya Blow Hole",
            "Mirissa Surfing",
            "Dolphin & Whale Watching",
            "Galle Dutch Fort",
            "Madu River Mangrove Boat Ride",
            "Colombo Street Food Tour"
        ],
        inclusions: [
            "Accommodation on half board basis while at Kalpitiya. Bed & breakfast basis while at Trincomalee, Passikudah, Pottuvil, Galle, Kosgoda.",
            "Transport in an Air-Conditioned Car with an accompanying English speaking Chauffeur Guide.",
            "Government Tax (18%)"
        ],
        exclusions: [
            "Early check-in & Late check-out.",
            "Entrance/excursion fees to the places mentioned in our itinerary.",
            "Tips and other expenses of a personal nature.",
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel.",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival: Welcome to Sri Lanka",
                description: "Upon your arrival, you will be greeted by our team at the Bandaranaike International Airport, who will assist you with the check out and the chauffeur guide who will drive you to your hotel in Negombo situated a few minutes away from the airport for some rest."
            },
            {
                day: 2,
                title: "Yala: Leopards & Wilderness",
                description: "After a relaxed breakfast, you will make your way to Yala. Upon your arrival, check in to the hotel for some rest. In the evening, head out on safari drive in search of the endemic species and especially the spotted leopard."
            },
            {
                day: 3,
                title: "Mirissa: Surf & Coast",
                description: "After a relaxed breakfast, you will make your way to Mirissa. En-route visit the Hummanaya Blow Hole, and the coconut tree hill. Surf through the waves this afternoon. (If you are a beginner, lessons by certified trainers can be organized just for you)"
            },
            {
                day: 4,
                title: "Bentota: Whales & Mangroves",
                description: "Early this morning, head out to the sea in search of Dolphins and whales. After an exciting and fulfilling experience, make your way to Bentota. En-route, make a stop at the Galle Fort, a UNESCO Heritage site. Upon your arrival in Bentota, head out on a boat ride along the Madu River, which will take you through mangroves to the Cinnamon Island."
            },
            {
                day: 5,
                title: "Colombo: Food & City",
                description: "After a relaxed breakfast, make your way to Colombo, the commercial hub of the country. Head out on a city tour and an adventurous street food tour on a tuk tuk this evening."
            },
            {
                day: 6,
                title: "Departure",
                description: "After a fun-filled and adventurous holiday in Sri Lanka, its time to say Good Bye! Today you will be transferred to the airport in time for your departure flight. Until Next Time, Ayubowan"
            }
        ]
    },
    {
        id: "9",
        title: "Venture Further",
        location: "Providian, Wilpattu, Sigiriya, Kandy",
        image: "/assets/wilpattu national park.jpg", // Kitesurfing water sports action
        duration: "11 Days",
        price: 1400, // Estimate
        rating: 4.8,
        reviews: 0,
        category: "Adventure",
        recommendedFor: ["Explorers", "Nature", "Kitesurfing"],
        description: "This 11-day adventure is designed for explorers with moderate experience, with a mix of challenge, adventure and site-seeing. The second and third day is dedicated for Sea expeditions, followed by an exciting safari drive at the Wilpattu National Park. Thereafter, you will be introduced to hiking and rope jumping. The ‘Venture Further’ tour itinerary is an invitation for explorers who are willing to take a step further into their adventurous spirit. We are willing to provide you with a tour of excitement and adventure, if you promise to bring your adventurous spirit along.",
        highlights: [
            "Kalpitiya Kitesurfing",
            "Dolphin Watching & Fishing Expedition",
            "Wilpattu National Park Safari",
            "Sigiriya Rock & Pidurangala Hike",
            "Minneriya National Park Safari",
            "Hanthana Mountain Range Hike",
            "Laxapana Waterfalls Rope Jumping",
            "Temple of the Tooth Relic"
        ],
        inclusions: [
            "Accommodation on half board basis while at Kalpitiya. Bed & breakfast basis while at Trincomalee, Passikudah, Pottuvil, Galle, Kosgoda.",
            "Transport in an Air-Conditioned Car with an accompanying English speaking Chauffeur Guide.",
            "Government Tax (18%)"
        ],
        exclusions: [
            "Early check-in & Late check-out.",
            "Entrance/excursion fees to the places mentioned in our itinerary.",
            "Tips and other expenses of a personal nature.",
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel.",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Negombo",
                description: "Upon your arrival, you will be greeted by our team at the Bandaranaike International Airport, who will assist you with the check out and the chauffeur guide who will drive you to your hotel in Negombo situated a few minutes away from the airport for some rest."
            },
            {
                day: 2,
                title: "Kalpitiya: Kitesurfing",
                description: "After a relaxed breakfast, you will make your way to Kalpitiya. Upon your arrival, check in to the hotel and head out for some kite surfing this afternoon. (Beginner lessons will be conducted by certified trainers). Evening at leisure by the beach"
            },
            {
                day: 3,
                title: "Kalpitiya: Dolphins & Fishing",
                description: "Early this morning, you will head out to sea, in search of Dolphins, the friendly mammals of the ocean. Thereafter, you will be taken on a fishing expedition followed by a cooking session, where you will get the opportunity to assist with the preparation of your catch. Evening at leisure by the beach."
            },
            {
                day: 4,
                title: "Wilpattu Safari",
                description: "Today you will make your way to the Wilpattu National Park. Head out on a safari drive in search of the leopards and many other endemic species found in the park. In the evening, head out on a boat ride across the lagoon."
            },
            {
                day: 5,
                title: "Habarana: Sigiriya Climb",
                description: "After a relaxed breakfast, make your way to Habarana. Visit the Sigiriya Rock, a UNESCO Heritage site this evening. Witness a burst of adrenaline as you ascend the rock, introducing you to a 360 view of the area."
            },
            {
                day: 6,
                title: "Habarana: Pidurangala & Minneriya",
                description: "Early this morning, you will make your way to hike the Pidurangala Rock. Witness a spectacular sunrise, along with the view of the Sigiriya Rock located adjacent to the Pidurangala Rock. In the evening, you will take part in a safari drive, at the Minneriya National Park, a hotspot for large Elephant gatherings."
            },
            {
                day: 7,
                title: "Kandy: Hanthana Hike",
                description: "After Breakfast this morning, you will make your way to Kandy, the final Kingdom of the Kings. In the evening, hike up the Hanthana Mountain range"
            },
            {
                day: 8,
                title: "Hatton: Temple & Transfer",
                description: "Head out on a city tour around Kandy this morning. Visit the Temple of the Tooth Relic, a sacred place to all Buddhists, the Kandy Lake and the buzzling streets in Kandy. Thereafter, make your way to Hatton. Spend your evening at leisure."
            },
            {
                day: 9,
                title: "Hatton: Laxapana Thrills",
                description: "Head out this morning to the Laxapana Falls. While you get the opportunity to view this majestic water fall, you will also take part in Rope Jumping across it. Don’t forget to pack your excitement and courage for this activity. Evening at leisure"
            },
            {
                day: 10,
                title: "Colombo: City Tour",
                description: "After a relaxed breakfast, make your way to Colombo, the commercial hub of the country. Upon your arrival, head out on a relaxed city tour, including some last minute shopping runs."
            },
            {
                day: 11,
                title: "Departure",
                description: "After a fun-filled and adventurous holiday in Sri Lanka, its time to say Good Bye! Today you will be transferred to the airport in time for your departure flight. Until Next Time, Ayubowan!"
            }
        ]
    },
    {
        id: "10",
        title: "Leopard wildlife safari",
        location: "Wilpattu, Anuradhapura, Nuwara Eliya, Yala, Bentota",
        image: "/assets/leopard.jpg", // Leopard wildlife safari
        duration: "17 Days",
        price: 2100, // Estimate
        rating: 4.8,
        reviews: 0,
        category: "Wildlife",
        recommendedFor: ["Wildlife Enthusiasts", "Long Holiday", "Nature"],
        description: "Experience the diverse beauty of Sri Lanka on this 17-day adventure blending wildlife, culture, and coastal relaxation. Begin your journey in Negombo, unwinding by the sea before heading to Wilpattu National Park for thrilling safaris in a pristine wilderness. Explore the ancient city of Anuradhapura and enjoy elephant sightings in Minneriya National Park. Visit the iconic Sigiriya Rock Fortress and discover the natural wonders of Wasgamuwa National Park. Travel to the cool hills of Nuwara Eliya, tour a tea factory, and trek Horton Plains with its stunning viewpoints. Take the scenic train ride to Ella, visit Elephant Rock, and relax in the beach town of Arugambay. Enjoy birdwatching in Kumana and elephant safaris in Udawalawe. Experience the famous Yala National Park and the biodiversity of Sinharaja Rainforest. End your trip with a peaceful Madu River safari and beach leisure in Bentota, leaving you with unforgettable memories of Sri Lanka’s rich landscapes and heritage.",
        highlights: [
            "Wilpattu National Park Safari",
            "Anuradhapura Ancient City",
            "Minneriya & Wasgamuwa Safaris",
            "Horton Plains & World's End",
            "Scenic Train Ride to Ella",
            "Kumana Bird Watching",
            "Yala & Udawalawe Safaris",
            "Sinharaja Rainforest Trek",
            "Madu River Safari"
        ],
        inclusions: [
            "Accommodation on half board basis while at Kalpitiya. Bed & breakfast basis while at Trincomalee, Passikudah, Pottuvil, Galle, Kosgoda.",
            "Transport in an Air-Conditioned Car with an accompanying English speaking Chauffeur Guide.",
            "Government Tax (18%)"
        ],
        exclusions: [
            "Early check-in & Late check-out.",
            "Entrance/excursion fees to the places mentioned in our itinerary.",
            "Tips and other expenses of a personal nature.",
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel.",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival: Negombo",
                description: "Arrive at Bandaranaike International Airport and transfer to Negombo. Relax and unwind after your journey by the serene coastline."
            },
            {
                day: 2,
                title: "Wilpattu: Nature's Welcome",
                description: "Travel to Wilpattu and enjoy a peaceful evening at leisure, surrounded by nature."
            },
            {
                day: 3,
                title: "Wilpattu: Full Day Safari",
                description: "Spend a full day on safari exploring Wilpattu, known for its elusive leopards, elephants, and diverse wildlife in pristine wilderness."
            },
            {
                day: 4,
                title: "Habarana & Anuradhapura",
                description: "Visit the ancient city of Anuradhapura, rich with archaeological wonders and spiritual significance."
            },
            {
                day: 5,
                title: "Habarana & Minneriya",
                description: "Enjoy a thrilling safari at Minneriya National Park, famous for its large gatherings of wild elephants. After the safari, return to Habarana for a relaxing evening."
            },
            {
                day: 6,
                title: "Nuwara Eliya: Tea & Leisure",
                description: "Travel to Nuwara Eliya, tour a tea factory to learn about Ceylon tea, and enjoy leisure time in the cool hill station."
            },
            {
                day: 7,
                title: "Nuwara Eliya: Plains & Peaks",
                description: "Hike Horton Plains National Park, visit World’s End, and explore the scenic Moon Plains."
            },
            {
                day: 8,
                title: "Ella: Train & Tour",
                description: "Enjoy the scenic train ride to Ella, followed by a city tour highlighting local attractions."
            },
            {
                day: 9,
                title: "Arugambay: Elephant Rock",
                description: "Relax in Arugambay, explore Elephant Rock, and enjoy leisure time at this laid-back beach town."
            },
            {
                day: 10,
                title: "Kumana: Birdwatching",
                description: "Visit Kumana National Park for birdwatching and wildlife safaris in this rich biodiversity hotspot."
            },
            {
                day: 11,
                title: "Udawalawe Safari",
                description: "Head to Udawalawe for a safari experience famed for its large elephant populations."
            },
            {
                day: 12,
                title: "Yala National Park",
                description: "Travel via Udawalawe to Yala National Park for an exciting afternoon safari in one of Sri Lanka’s best-known parks."
            },
            {
                day: 13,
                title: "Sinharaja: Rainforest Arrival",
                description: "Arrive at Sinharaja Rainforest and relax in this lush tropical environment."
            },
            {
                day: 14,
                title: "Sinharaja: Trekking",
                description: "Spend the day trekking and discovering the biodiversity of Sinharaja, a UNESCO World Heritage Site."
            },
            {
                day: 15,
                title: "Bentota: River Safari",
                description: "Travel to Bentota and enjoy a tranquil safari along the Madu River, exploring mangroves and island temples."
            },
            {
                day: 16,
                title: "Bentota: Beach Day",
                description: "Spend a full day at leisure on the beautiful beaches of Bentota, soaking up sun and sea."
            },
            {
                day: 17,
                title: "Departure",
                description: "Transfer to Bandaranaike International Airport for your departure, carrying unforgettable memories of Sri Lanka’s diverse landscapes and wildlife."
            }
        ]
    },
    {
        id: "11",
        title: "Sri Lankan elephant herd safari",
        location: "Wilpattu, Sigiriya, Kandy, Yala, Bentota",
        image: "/assets/Minneriya National  Park.jpg", // Sri Lankan elephant herd safari
        duration: "14 Days",
        price: 1750, // Estimate
        rating: 4.9,
        reviews: 0,
        category: "Wildlife",
        recommendedFor: ["Wildlife Seekers", "Culture", "Beach"],
        description: "This 14-day tour offers an incredible journey through Sri Lanka’s diverse landscapes, rich history, and vibrant wildlife. Start your adventure in the peaceful coastal town of Negombo, then head to Wilpattu National Park for exciting safaris in one of the island’s largest and most pristine wilderness areas. Explore ancient cities like Anuradhapura and climb the iconic Sigiriya Rock Fortress. Visit the spiritual heart of Sri Lanka in Kandy, where the famous Temple of the Tooth resides. Enjoy the cool climate and lush greenery of Nuwara Eliya. Experience the breathtaking train ride to Ella and trek to scenic spots like Mini Adam’s Peak and the Nine Arch Bridge. Discover wildlife again with a safari in Yala National Park. End your trip relaxing on the sunny beaches of Bentota, with visits to the historic Galle Fort and a sea turtle hatchery.",
        highlights: [
            "Wilpattu National Park Safari",
            "Sigiriya Rock Fortress",
            "Temple of the Tooth Relic",
            "Nuwara Eliya Tea Gardens",
            "Scenic Train Ride to Ella",
            "Yala National Park Safari",
            "Galle Dutch Fort",
            "Kosgoda Turtle Hatchery"
        ],
        inclusions: [
            "Accommodation on half board basis while at Kalpitiya. Bed & breakfast basis while at Trincomalee, Passikudah, Pottuvil, Galle, Kosgoda.",
            "Transport in an Air-Conditioned Car with an accompanying English speaking Chauffeur Guide.",
            "Government Tax (18%)"
        ],
        exclusions: [
            "Early check-in & Late check-out.",
            "Entrance/excursion fees to the places mentioned in our itinerary.",
            "Tips and other expenses of a personal nature.",
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel.",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival: Negombo",
                description: "Arrive at Bandaranaike International Airport and transfer to Negombo. Relax and unwind after your journey by the serene coastline." // Added Day 1 as it was missing in source but implied
            },
            {
                day: 2,
                title: "Wilpattu: Nature's Welcome",
                description: "Travel to Wilpattu and enjoy an evening at leisure, soaking in the natural surroundings of this lesser-known yet stunning park."
            },
            {
                day: 3,
                title: "Wilpattu: Full Day Safari",
                description: "Spend a full day on safari in Wilpattu, renowned for its leopard population, elephants, and diverse birdlife in a pristine wilderness setting."
            },
            {
                day: 4,
                title: "Habarana & Anuradhapura",
                description: "Journey to Habarana, stopping to explore Anuradhapura’s ancient ruins, a UNESCO World Heritage Site. Evening free for relaxation."
            },
            {
                day: 5,
                title: "Sigiriya & Minneriya",
                description: "Climb the majestic Sigiriya Rock Fortress in the morning, then enjoy an afternoon safari in Minneriya National Park, famous for large elephant gatherings."
            },
            {
                day: 6,
                title: "Kandy: Temples",
                description: "Visit the Dambulla Cave Temple with its impressive Buddhist murals, then proceed to Kandy to see the sacred Temple of the Tooth."
            },
            {
                day: 7,
                title: "Nuwara Eliya: Tea Country",
                description: "Travel to the hill station of Nuwara Eliya. Visit the beautiful Botanical Gardens and a tea factory to learn about Sri Lanka’s tea heritage."
            },
            {
                day: 8,
                title: "Nuwara Eliya: Plains",
                description: "Trek Horton Plains National Park, including the breathtaking World’s End viewpoint. Later, visit Moon Plains for sweeping panoramic views."
            },
            {
                day: 9,
                title: "Ella: Scenic Train",
                description: "Take the famous scenic train journey from Nuwara Eliya to Ella, passing through tea plantations, waterfalls, and lush landscapes."
            },
            {
                day: 10,
                title: "Ella: Peak & Bridge",
                description: "Explore Ella’s natural beauty with a hike up Mini Adam’s Peak and a visit to the iconic Nine Arch Bridge."
            },
            {
                day: 11,
                title: "Yala: Evening Safari",
                description: "Head to Yala National Park for an evening safari, known for its leopards, elephants, and other wildlife in a dramatic coastal setting."
            },
            {
                day: 12,
                title: "Bentota & Galle",
                description: "Drive to Bentota, stopping at the historic Galle Dutch Fort and visit Kosgoda Turtle Hatchery to learn about sea turtle conservation."
            },
            {
                day: 13,
                title: "Bentota: Beach Leisure",
                description: "Enjoy a full day of relaxation on the beautiful beaches of Bentota, soaking up sun and sea at your own pace."
            },
            {
                day: 14,
                title: "Departure",
                description: "Transfer to Bandaranaike International Airport for your departure, taking home memories of an unforgettable Sri Lankan journey."
            }
        ]
    },
    {
        id: "12",
        title: "Heritage Trails of Sri Lanka",
        location: "Habarana, Sigiriya, Nuwara Eliya, Colombo",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2000&auto=format&fit=crop", // Elephant in natural habitat
        duration: "8 Days",
        price: 900, // Estimate
        rating: 4.7,
        reviews: 0,
        category: "Wildlife",
        recommendedFor: ["Nature Lovers", "Wildlife Enthusiasts"],
        description: "Discover the perfect blend of nature, wildlife, and culture on this 8-day, 7-night adventure across Sri Lanka. Begin your journey in the coastal town of Negombo, then head to Habarana in the heart of the Cultural Triangle. Explore ancient wonders like Sigiriya Rock Fortress and experience authentic village life in Hiriwadunna. Enjoy thrilling wildlife safaris in Minneriya and Wasgamuwa National Parks, where you’ll spot elephants, birds, and more. Then travel to the cool hills of Nuwara Eliya, visiting a tea factory and walking through lush plantations. Hike through Horton Plains National Park and witness the dramatic drop at World’s End. Wrap up your journey with leisure and shopping in Colombo, the vibrant capital city.",
        highlights: [
            "Minneriya National Park Safari",
            "Sigiriya Rock Fortress",
            "Hiriwadunna Village Tour",
            "Wasgamuwa National Park Safari",
            "Nuwara Eliya Tea Factory",
            "Horton Plains & World's End",
            "Colombo City Tour"
        ],
        inclusions: [
            "Accommodation on half board basis while at Kalpitiya. Bed & breakfast basis while at Trincomalee, Passikudah, Pottuvil, Galle, Kosgoda.",
            "Transport in an Air-Conditioned Car with an accompanying English speaking Chauffeur Guide.",
            "Government Tax (18%)"
        ],
        exclusions: [
            "Early check-in & Late check-out.",
            "Entrance/excursion fees to the places mentioned in our itinerary.",
            "Tips and other expenses of a personal nature.",
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel.",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival: Negombo",
                description: "Upon arrival at Bandaranaike International Airport (BIA), you will be warmly welcomed and transferred to Negombo. Spend the rest of the day at leisure, relaxing after your flight in this charming coastal town."
            },
            {
                day: 2,
                title: "Habarana & Minneriya",
                description: "Travel to Habarana, nestled in the heart of Sri Lanka’s cultural triangle. In the afternoon, enjoy a thrilling jeep safari at Minneriya National Park, home to the famous gathering of wild elephants."
            },
            {
                day: 3,
                title: "Sigiriya & Village Life",
                description: "Begin your day with a village tour in Hiriwadunna, where you can experience traditional rural life. Later, visit the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site, and marvel at its ancient frescoes and panoramic views."
            },
            {
                day: 4,
                title: "Wasgamuwa National Park",
                description: "Set off for an exciting wildlife experience at Wasgamuwa National Park. Known for its diverse fauna including elephants, sloth bears, and exotic bird species, this park offers a true wilderness escape."
            },
            {
                day: 5,
                title: "Nuwara Eliya: Tea Gardens",
                description: "Travel to the scenic hill town of Nuwara Eliya, often referred to as “Little England.” En route, stop by a tea factory to observe the process of tea making and sample some of the world’s finest Ceylon tea."
            },
            {
                day: 6,
                title: "Horton Plains Hike",
                description: "Embark on a morning hike in Horton Plains National Park, a stunning highland plateau. Visit World’s End and Baker’s Falls, taking in breathtaking views and cool mountain air."
            },
            {
                day: 7,
                title: "Colombo: City & Shop",
                description: "Drive to Colombo, Sri Lanka’s bustling commercial capital. Enjoy a mix of shopping, sightseeing, and relaxation. Discover colonial architecture, modern malls, and local markets."
            },
            {
                day: 8,
                title: "Departure",
                description: "After breakfast, transfer to Bandaranaike International Airport for your departure, taking with you unforgettable memories of Sri Lanka’s nature, culture, and wildlife."
            }
        ]
    },
    {
        id: "13",
        title: "Adventure, Culture & Love",
        location: "Habarana, Kandy, Nuwara Eliya, Ella, Yala, Mirissa, Bentota",
        image: "/assets/Hot Air Balloon Ride in Habarana.jpg", // Romantic couple sunset beach
        duration: "17 Days",
        price: 2400, // Estimate
        rating: 5.0,
        reviews: 0,
        category: "Honeymoon",
        recommendedFor: ["Honeymooners", "Romance", "Adventure"],
        description: "Enjoy a 17-day romantic honeymoon through the heart of Sri Lanka, where every day brings new memories to share. Start your journey in the coastal town of Negombo before heading to Habarana for wildlife safaris, ancient rock fortress climbs, and a relaxing Ayurvedic spa day. Drift gently over lush landscapes on a sunrise hot air balloon ride and cycle through the sacred city of Anuradhapura. In Kandy, discover beautiful temples, the scenic Ambuluawa Tower, and stroll through the Royal Botanical Gardens hand in hand. Head to the misty hills of Nuwara Eliya and take one of the world’s most romantic train rides to Ella. From waterfalls to scenic views, this peaceful hill town is full of charm. Experience the wild at Yala National Park, followed by a candlelit dinner under the stars. Spend quiet days on the golden beaches of Mirissa and Bentota before wrapping up your honeymoon with a fun street food tour and sunset cruise in Colombo.",
        highlights: [
            "Hot Air Balloon Ride in Habarana",
            "Minneriya National Park Safari",
            "Sigiriya Rock & Ayurvedic Spa",
            "Romantic Train Ride to Ella",
            "Yala Safari & Candlelit Dinner",
            "Mirissa & Bentota Beach Leisure",
            "Colombo Sunset Cruise",
            "Ambuluawa Tower & Botanical Gardens"
        ],
        inclusions: [
            "Accommodation on half board basis while at Kalpitiya. Bed & breakfast basis while at Trincomalee, Passikudah, Pottuvil, Galle, Kosgoda.",
            "Transport in an Air-Conditioned Car with an accompanying English speaking Chauffeur Guide.",
            "Government Tax (18%)"
        ],
        exclusions: [
            "Early check-in & Late check-out.",
            "Entrance/excursion fees to the places mentioned in our itinerary.",
            "Tips and other expenses of a personal nature.",
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel.",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Negombo",
                description: "Arrive at Bandaranaike International Airport and transfer to your hotel in Negombo. Enjoy a restful day to recover from your journey and soak up the coastal ambiance."
            },
            {
                day: 2,
                title: "Habarana & Minneriya Safari",
                description: "Travel to Habarana and experience a thrilling safari in Minneriya National Park, home to wild elephants and diverse wildlife. Evening at leisure."
            },
            {
                day: 3,
                title: "Sigiriya & Spa",
                description: "Visit the ancient Sigiriya Rock Fortress, a UNESCO World Heritage site. Later, indulge in a relaxing Ayurvedic spa treatment to rejuvenate your body and mind."
            },
            {
                day: 4,
                title: "Balloon Ride & Anuradhapura",
                description: "Start the day with a breathtaking hot air balloon ride over Habarana’s landscapes at sunrise. Then, explore the sacred city of Anuradhapura by bicycle, immersing yourself in its historic ruins."
            },
            {
                day: 5,
                title: "Village Trek & Leisure",
                description: "Enjoy a guided trek through the peaceful Hiriwadunna village, experiencing traditional rural life and nature. Spend your evening at leisure."
            },
            {
                day: 6,
                title: "Dambulla & Kandy",
                description: "Travel to Kandy and visit the impressive Dambulla Cave Temple, adorned with ancient Buddhist murals. Explore the sacred Temple of the Tooth Relic, a spiritual highlight."
            },
            {
                day: 7,
                title: "Kandy: Tower & Gardens",
                description: "Climb Ambuluawa Tower for panoramic views of Kandy. Spend the afternoon wandering the lush Royal Botanical Gardens, a perfect romantic stroll."
            },
            {
                day: 8,
                title: "Nuwara Eliya: Waterfalls",
                description: "Journey to Nuwara Eliya, visiting the stunning Ramboda Falls en route. Evening at leisure in this charming hill town."
            },
            {
                day: 9,
                title: "Nuwara Eliya: Lake & Berries",
                description: "Visit a local strawberry farm and sample fresh berries. Then, enjoy a leisurely bicycle ride around the scenic Gregory Lake."
            },
            {
                day: 10,
                title: "Train to Ella",
                description: "Take a romantic scenic train journey to Ella, soaking in the breathtaking views of tea plantations and mountains. Evening free to relax."
            },
            {
                day: 11,
                title: "Yala: Safari & Dinner",
                description: "Travel to Yala and embark on an exciting evening safari to spot leopards and other wildlife. End your day with a romantic candlelit dinner."
            },
            {
                day: 12,
                title: "Mirissa: Beach Bliss",
                description: "Relax and unwind on the beautiful beaches of Mirissa. Enjoy peaceful moments by the ocean with your loved one."
            },
            {
                day: 13,
                title: "Mirissa: Coastal Leisure",
                description: "Spend another day soaking up the sun and enjoying the calm beaches or exploring local cafes and seaside spots."
            },
            {
                day: 14,
                title: "Galle & Turtles",
                description: "Visit the historic Galle Dutch Fort, exploring its colonial charm. Continue to Kosgoda to learn about sea turtle conservation at the hatchery."
            },
            {
                day: 15,
                title: "Bentota: River Safari",
                description: "Experience a serene sunrise boat safari along the Bentota River, observing wildlife and mangrove ecosystems"
            },
            {
                day: 16,
                title: "Colombo: City & Food",
                description: "Return to Colombo for a city tour featuring key landmarks, markets, and colonial architecture. In the evening, dive into Colombo’s vibrant street food scene."
            },
            {
                day: 17,
                title: "Departure",
                description: "Enjoy a cozy morning in Colombo. Afterward, transfer to Bandaranaike International Airport for your departure, carrying cherished memories of your honeymoon."
            }
        ]
    },
    {
        id: "14",
        title: "Culture, Nature & Adventure",
        location: "Kandy, Nuwara Eliya, Ella, Galle, Colombo",
        image: "/assets/galle dutch fort.jpg", // Romantic scenic travel adventure
        duration: "12 Days",
        price: 1850, // Estimate
        rating: 4.9,
        reviews: 0,
        category: "Honeymoon",
        recommendedFor: ["Honeymooners", "Culture", "Nature"],
        description: "Experience an unforgettable romantic escape through Sri Lanka’s rich culture and stunning natural beauty. Begin your journey with relaxation in the peaceful coastal town of Negombo before heading inland to Habarana, where thrilling safaris in Minneriya National Park and serene village treks await. Explore the ancient Sigiriya Rock Fortress and drift peacefully over lush landscapes on a magical hot air balloon ride. Discover spiritual treasures at Dambulla’s Royal Cave Temple and the sacred Temple of the Tooth Relic in Kandy, complemented by captivating cultural performances. Journey through misty hill country to Nuwara Eliya, visiting a tea factory and enjoying scenic train rides to the charming town of Ella. Marvel at iconic landmarks such as the Nine Arch Bridge, Mini Adam’s Peak, and Ravana Falls. On your way back, explore the historic Galle Dutch Fort before spending leisure time shopping and soaking up Colombo’s vibrant atmosphere. This romantic adventure offers the perfect blend of nature, culture, and intimate moments to create lasting memories together.",
        highlights: [
            "Hot Air Balloon Ride in Habarana",
            "Minneriya Safari & Village Trek",
            "Sigiriya Rock Fortress",
            "Dambulla Cave & Kandy Cultural Show",
            "Temple of the Tooth Relic",
            "Scenic Train Ride to Ella",
            "Nine Arch Bridge & Mini Adam's Peak",
            "Galle Dutch Fort"
        ],
        inclusions: [
            "Accommodation on half board basis while at Kalpitiya. Bed & breakfast basis while at Trincomalee, Passikudah, Pottuvil, Galle, Kosgoda.",
            "Transport in an Air-Conditioned Car with an accompanying English speaking Chauffeur Guide.",
            "Government Tax (18%)"
        ],
        exclusions: [
            "Early check-in & Late check-out.",
            "Entrance/excursion fees to the places mentioned in our itinerary.",
            "Tips and other expenses of a personal nature.",
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel.",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Negombo",
                description: "Arrive at Bandaranaike International Airport and transfer to your hotel in Negombo. Spend the day at leisure, relaxing and recovering from your journey"
            },
            {
                day: 2,
                title: "Minneriya Safari",
                description: "Travel to Habarana and embark on an exciting safari in Minneriya National Park, famous for its large gatherings of wild elephants. Return to Habarana for overnight stay."
            },
            {
                day: 3,
                title: "Sigiriya & Village Trek",
                description: "Enjoy a guided trek through the scenic Hiriwadunna village, experiencing traditional rural life. Later, visit the iconic Sigiriya Rock Fortress, a UNESCO World Heritage site."
            },
            {
                day: 4,
                title: "Balloon Ride & Leisure",
                description: "Soar above the stunning landscapes of Habarana on an early morning hot air balloon ride. Spend the rest of the day at your own pace, relaxing or exploring."
            },
            {
                day: 5,
                title: "Dambulla & Kandy Show",
                description: "Visit the magnificent Dambulla Royal Cave Temple, adorned with ancient Buddhist murals. Travel to Kandy and enjoy an authentic cultural performance in the evening."
            },
            {
                day: 6,
                title: "Kandy: Sacred Sites",
                description: "Explore the sacred Temple of the Tooth Relic, a key pilgrimage site for Buddhists. Visit Ambuluawa Tower for panoramic views over Kandy’s lush surroundings."
            },
            {
                day: 7,
                title: "Nuwara Eliya Tea",
                description: "Journey to the cool hills of Nuwara Eliya. Tour a tea factory to learn about Sri Lanka’s world-famous tea production. Evening free to enjoy the charming town."
            },
            {
                day: 8,
                title: "Train to Ella",
                description: "Take the picturesque train ride from Nuwara Eliya area to Ella, passing through lush tea plantations and breathtaking scenery. Evening at leisure in Ella."
            },
            {
                day: 9,
                title: "Ella Exploration",
                description: "Visit the iconic Nine Arch Bridge, hike up Mini Adam’s Peak for stunning views, and see the beautiful Ravana Falls. Enjoy a relaxing evening in Ella."
            },
            {
                day: 10,
                title: "Galle Fort",
                description: "Travel towards Colombo with a stop at the historic Galle Dutch Fort to explore its colonial architecture and vibrant streets. Continue to Colombo for overnight stay."
            },
            {
                day: 11,
                title: "Colombo Shopping",
                description: "Spend the day at leisure shopping and exploring Colombo’s markets, boutiques, and cafes. Discover the city’s unique blend of modern and colonial charm."
            },
            {
                day: 12,
                title: "Departure",
                description: "After breakfast, transfer to the airport for your departure, taking with you unforgettable memories of your Sri Lankan adventure."
            }
        ]
    },
    {
        id: "15",
        title: "Coastal Romance",
        location: "Colombo, Bentota",
        image: "/assets/bentota.jpg", // Romantic beach sunset paradise
        duration: "7 Days",
        price: 950, // Estimate
        rating: 5.0,
        reviews: 0,
        category: "Honeymoon",
        recommendedFor: ["Beach Lovers", "Relaxation", "Short Honeymoon"],
        description: "Celebrate love with a beautifully balanced honeymoon tour through Sri Lanka’s vibrant cityscapes and peaceful coastal retreats. Begin your journey in Colombo, where colonial charm meets modern flair. Enjoy a guided city tour, discover colorful local markets, and indulge in a street food experience filled with flavor and energy. Drift into romance on a serene sunset cruise along the Indian Ocean, offering breathtaking views and quiet moments together. Next, escape to Bentota, a tranquil beachside town ideal for rest and romance. Wake up to a peaceful sunrise boat ride along the Madu River, winding through lush mangroves and serene waterways. Spend your days at leisure soaking up the sun, enjoying spa treatments, or simply relaxing by the sea with your loved one. This honeymoon package blends cultural experiences, natural beauty, and intimate moments, creating a perfect setting to begin your journey together.",
        highlights: [
            "Colombo City Tour & Street Food",
            "Romantic Sunset Cruise (Colombo)",
            "Bentota Beach Relaxation",
            "Madu River Sunrise Boat Ride",
            "Seaside Resort Stay"
        ],
        inclusions: [
            "Accommodation on half board basis while at Kalpitiya. Bed & breakfast basis while at Trincomalee, Passikudah, Pottuvil, Galle, Kosgoda.",
            "Transport in an Air-Conditioned Car with an accompanying English speaking Chauffeur Guide.",
            "Government Tax (18%)"
        ],
        exclusions: [
            "Early check-in & Late check-out.",
            "Entrance/excursion fees to the places mentioned in our itinerary.",
            "Tips and other expenses of a personal nature.",
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel.",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Colombo",
                description: "You will be warmly welcomed at Bandaranaike International Airport and transferred to your hotel in Colombo. The rest of the day is at leisure to relax and recover from your flight."
            },
            {
                day: 2,
                title: "Colombo City & Eats",
                description: "Explore the vibrant city of Colombo on a guided city tour, visiting historic landmarks, colorful markets, and colonial architecture. In the evening, dive into the local culinary scene with a fun and flavorful street food experience."
            },
            {
                day: 3,
                title: "Sunset Cruise",
                description: "Enjoy a romantic sunset cruise along the Indian Ocean. Glide along the coastline as the sun dips below the horizon, creating a perfect picture backdrop for your honeymoon."
            },
            {
                day: 4,
                title: "Bentota: Beach Escape",
                description: "Transfer to the charming beach town of Bentota. Check in at a romantic seaside resort. Spend your evening enjoying the beach, relaxing together, and taking in the coastal serenity."
            },
            {
                day: 5,
                title: "Madu River Boat Ride",
                description: "Set out early for a peaceful sunrise boat ride along the Madu River, drifting through mangroves and small islets. The rest of the day is yours to enjoy the beach, spa, or simply unwind with your partner."
            },
            {
                day: 6,
                title: "Leisure by the Sea",
                description: "Spend your day at leisure by the beach soaking in the warmth of the sun, creating core memories that will stay by you for life."
            },
            {
                day: 7,
                title: "Departure",
                description: "After breakfast, check out and transfer to Bandaranaike International Airport for your departure, filled with memories of your perfect romantic escape."
            }
        ]
    },
    {
        id: "16",
        title: "Hillcountry Retreat",
        location: "Negombo, Kandy, Nuwara Eliya, Colombo",
        image: "/assets/nuwara eliya srilanka.jpg", // Sri Lanka tea plantation hills
        duration: "7 Days",
        price: 1050, // Estimate
        rating: 4.8,
        reviews: 0,
        category: "Hill Country",
        recommendedFor: ["Nature Lovers", "Relaxation", "Culture"],
        description: "This 7-day tour takes you through the heart of Sri Lanka’s breathtaking hill country, showcasing its stunning landscapes, tea plantations, and cultural heritage. Begin your journey with a relaxing stay in Negombo before heading to Kandy, where you’ll visit the sacred Temple of the Tooth Relic and enjoy a traditional Kandyan cultural dance show. Continue to Nuwara Eliya, known for its cool climate and colonial charm, with visits to the renowned tea factories and scenic spots like Hakgala Botanical Gardens and Ambewala Farm. Experience a picturesque train ride through the mountains and valleys before concluding your adventure in Colombo, where you can enjoy shopping, leisure activities, and the city’s vibrant culture. This tour combines nature, history, and modern Sri Lanka, offering the perfect blend of relaxation and exploration.",
        highlights: [
            "Temple of the Tooth Relic & Cultural Show",
            "Kandy View Point & Botanical Gardens",
            "Nuwara Eliya Tea Factory & Plantation",
            "Scenic Train Ride (Peradeniya to Nanu Oya)",
            "Hakgala Botanical Gardens & Ambewela Farm",
            "Colombo Shopping & Leisure"
        ],
        inclusions: [
            "Accommodation on half board basis while at Kalpitiya. Bed & breakfast basis while at Trincomalee, Passikudah, Pottuvil, Galle, Kosgoda.",
            "Transport in an Air-Conditioned Car with an accompanying English speaking Chauffeur Guide.",
            "Government Tax (18%)"
        ],
        exclusions: [
            "Early check-in & Late check-out.",
            "Entrance/excursion fees to the places mentioned in our itinerary.",
            "Tips and other expenses of a personal nature.",
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel.",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival | Negombo",
                description: "Upon arrival at Bandaranaike International Airport, you will be met by your friendly, English-speaking Chauffeur Guide who will assist you with your transfer to your hotel in Negombo. After settling in, enjoy a relaxing evening at leisure. Take a dip in the pool or enjoy the serene beauty of the beach."
            },
            {
                day: 2,
                title: "Kandy",
                description: "After breakfast, depart for Kandy, the picturesque hill capital of Sri Lanka. Along the way, enjoy the breathtaking views of lush green landscapes, rolling hills, and charming villages. In the evening, immerse yourself in the culture of Kandy by witnessing the vibrant Kandyan cultural dance show."
            },
            {
                day: 3,
                title: "Kandy Exploration",
                description: "Visit the Temple of the Tooth Relic (Sri Dalada Maligawa), one of the most sacred places of worship for Buddhists. Head to Kandy View Point for panoramic views of the city. Spend the afternoon wandering through the Royal Botanical Gardens in Peradeniya."
            },
            {
                day: 4,
                title: "Nuwara Eliya & Train Ride",
                description: "Journey to the cool hills of Nuwara Eliya. En route, take a scenic train ride from Peradeniya to Nanu Oya, enjoying views of tea plantations. Visit a Tea Factory & Plantation to learn about tea production, followed by a leisurely exploration of 'Little England'."
            },
            {
                day: 5,
                title: "Nuwara Eliya: Nature",
                description: "Enjoy a full day exploring. Visit Hakgala Botanical Garden, one of the oldest in Sri Lanka. Later, visit Ambewela Farm, known for its stunning landscape and dairy production."
            },
            {
                day: 6,
                title: "Colombo",
                description: "Travel to Colombo, the commercial capital. Enjoy shopping and leisure activities, exploring vibrant markets, local shops, and cafes. Colombo offers a blend of modern and colonial architecture."
            },
            {
                day: 7,
                title: "Departure",
                description: "After breakfast, you will be transferred to Bandaranaike International Airport for your departure flight."
            }
        ]
    },
    {
        id: "17",
        title: "A Quick Escape to the Hills",
        location: "Negombo, Kandy, Nuwara Eliya, Ella, Colombo",
        image: "/assets/ella train srilanka.jpg", // Nine Arch Bridge Ella train
        duration: "9 Days",
        price: 1350, // Estimate
        rating: 4.9,
        reviews: 0,
        category: "Hill Country",
        recommendedFor: ["Train Journey Enthusiasts", "Nature", "Culture"],
        description: "Embark on a 9-day journey through Sri Lanka’s hill country, exploring its natural beauty, colonial history, and cultural treasures. From Negombo, travel to Kandy to visit the famous Temple of the Tooth and the Royal Botanical Gardens. Explore the charming town of Nuwara Eliya with its colonial architecture, lush gardens, and tea plantations, before taking a scenic train ride through the heart of the island. Continue to Ella, where you’ll experience stunning landscapes, including the Nine Arches Bridge and Ravana Falls. The tour also includes visits to Hakgala Gardens, Ambewala Farm, and Colombo’s vibrant streets. The journey culminates with a trip to Galle’s historic Dutch Fort, where you’ll step back in time while soaking up the coastal atmosphere. This tour offers an unforgettable mix of nature, culture, and history, perfect for those seeking a comprehensive Sri Lankan experience.",
        highlights: [
            "Temple of the Tooth & Botanical Gardens",
            "Ambuluawa Tower",
            "Nuwara Eliya Tea Factory",
            "Scenic Train Ride (Nanu Oya to Ella)",
            "Nine Arches Bridge & Ravana Falls",
            "Mini Adam’s Peak Hike",
            "Galle Dutch Fort",
            "Colombo City Tour"
        ],
        inclusions: [
            "Accommodation on half board basis while at Kalpitiya. Bed & breakfast basis while at Trincomalee, Passikudah, Pottuvil, Galle, Kosgoda.",
            "Transport in an Air-Conditioned Car with an accompanying English speaking Chauffeur Guide.",
            "Government Tax (18%)"
        ],
        exclusions: [
            "Early check-in & Late check-out.",
            "Entrance/excursion fees to the places mentioned in our itinerary.",
            "Tips and other expenses of a personal nature.",
            "Alcoholic Beverages",
            "Extra meals/snacks and beverages ordered from the hotel or outside the hotel.",
            "Travel Insurance, Visa & Air Fare"
        ],
        paymentPolicy: "Please note we require 50% of the payment on confirmation and the balance 02 weeks prior to arrival. Or the full payment can be settled on confirmation.",
        paymentMethods: [
            "Online payment using a personal credit card (Amex/Visa/Master)",
            "Bank transfer"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival: Negombo",
                description: "Upon arrival at Bandaranaike International Airport, meet your English-speaking Chauffeur Guide and proceed to your hotel in Negombo. Spend the evening at leisure, unwinding by the beach or relaxing by the pool."
            },
            {
                day: 2,
                title: "Kandy: Temple & Views",
                description: "Journey to Kandy, surrounded by lush hills. Visit the Temple of the Tooth Relic, one of the holiest sites for Buddhists. In the afternoon, enjoy the stunning views from Kandy View Point."
            },
            {
                day: 3,
                title: "Kandy: Nature & Tower",
                description: "Visit Ambuluawa, a unique biodiversity complex offering panoramic views from its spiral tower. Continue with a walk through the Royal Botanical Gardens in Peradeniya."
            },
            {
                day: 4,
                title: "Nuwara Eliya: Tea & Train",
                description: "Take a scenic train ride from Peradeniya to Nanu Oya. Visit a Tea Factory & Plantation to witness tea production. Spend the rest of the day exploring the colonial charm of Nuwara Eliya."
            },
            {
                day: 5,
                title: "Nuwara Eliya: Gardens & Farm",
                description: "Visit Hakgala Botanical Gardens, known for diverse plant species. Later, explore Ambewela Farm for fresh dairy products and stunning views of the surrounding hills."
            },
            {
                day: 6,
                title: "Ella: Train & Bridge",
                description: "Embark on a scenic train ride from Nanu Oya to Ella. Visit the famous Nine Arches Bridge and enjoy breathtaking countryside views. Explore Ella town's relaxed atmosphere."
            },
            {
                day: 7,
                title: "Ella: Peak & Falls",
                description: "Hike up Mini Adam’s Peak for panoramic views. Visit Ravana Falls and enjoy the cascading waters. In the afternoon, visit Ella Gap for a breathtaking view where the mountains meet the sky."
            },
            {
                day: 8,
                title: "Colombo via Galle",
                description: "Travel to Colombo, stopping at Galle Fort, a UNESCO World Heritage Site. Once in Colombo, enjoy free time to explore the city or relax at the hotel."
            },
            {
                day: 9,
                title: "Departure",
                description: "After breakfast, you’ll be transferred to Bandaranaike International Airport for your departure flight."
            }
        ]
    }
];

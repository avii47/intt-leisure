import img1 from "../assets/images/sample itinerary.jpg";

import CulturalOdyssey from "../assets/images/Cultural Odyssey.jpg";

import colombo_img from "../assets/images/destinations/Colombo.jpg"
import colombo2_img from "../assets/images/destinations/Colombo2.jpg"
import dambulla_img from "../assets/images/destinations/Dambulla.jpg"
import gregaryLake_img from "../assets/images/destinations/Gregary Lake.jpg"
import kandy_img from "../assets/images/destinations/Kandy.jpg"
import kithulgala_img from "../assets/images/destinations/Kithulgala.jpg"
import maduRiver_img from "../assets/images/destinations/Madu River.jpg"
import bentota_img from "../assets/images/destinations/bentota.jpg"
import nuwaraEliya_img from "../assets/images/destinations/Nuwara Eliya.jpg"
import nuwaraEliya2_img from "../assets/images/destinations/Nuwara Eliya2.jpg"
import peradeniya_img from "../assets/images/destinations/Peradeniya.jpg"
import pinnawala_img from "../assets/images/destinations/Pinnawela Elephant Orphanage.jpg"
import sigiriya_img from "../assets/images/destinations/Sigiriya.jpg"
import airport_img from "../assets/images/destinations/BIA.jpg"

import BeyondTheHills from "../assets/images/Beyond the Hills.jpg";
import JourneyThroughParadise from "../assets/images/Journey Through Paradise.jpg";
import SriLankaAwaits from "../assets/images/Sri Lanka Awaits.jpg";
import WondersOfSriLanka from "../assets/images/Wonders of Sri Lanka.jpg"

const contentData = [
  {
    id: 1,
    img: CulturalOdyssey,
    title: "Cultural Odyssey",
    subTitle: "A 5-Day Journey Through Sri Lanka",
    cardTxt: "Discover Sri Lanka’s charm with a blend of culture, nature, and adventure. From Kandy’s...",
    overview: "Discover Sri Lanka’s charm with a blend of culture, nature, and adventure. From Kandy’s iconic sites and Nuwara Eliya’s lush tea plantations to thrilling rafting in Kitulgala and Colombo’s buzzing nightlife, this tour has it all.",
    galleryImages: [
        CulturalOdyssey, kandy_img, nuwaraEliya_img, nuwaraEliya2_img, gregaryLake_img, colombo_img
    ],
    days: [
        {
            id: 1,
            img: kandy_img,
            title: "Bandaranaike International Airport to Kandy",
            content: [
                "Upon arrival at Bandaranaike International Airport, you will be warmly greeted by our INTT Leisure representative.",
                "Transfer from the airport to Kandy.",
                "Visit the Pinnawela Elephant Orphanage (Optional – Entrance Fee Supplement).",
                "Proceed to your hotel in Kandy for check-in.",
                "Embark on a city tour of Kandy, exploring its rich cultural heritage.",
                "Visit a gem lapidary in Kandy to witness the intricate art of gem cutting.",
                "Return to the hotel for an overnight stay."
            ],
            inclusion: [
                "Meet and assist at Bandaranaike International Airport.",
                "Transfer to Kandy.",
                "Visit to Pinnawela Elephant Orphanage (optional, entrance fee supplement).",
                "Accommodation in Kandy hotel."
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            route: ['BIA', 'Kandy']
        },
        {
            id: 2,
            img: nuwaraEliya_img,
            title: "Kandy To Nuwara Eliya",
            content: [
                "Enjoy a delightful breakfast at the hotel.",
                "Depart for Nuwara Eliya.",
                "En route, visit a renowned tea plantation and factory to observe the tea-plucking process and see how raw green leaves are transformed into graded tea products.",
                "Continue your journey to Nuwara Eliya and check in to your hotel.",
                "Relax and enjoy the cool, refreshing climate of Nuwara Eliya.",
                "Dinner and overnight stay at the hotel."
            ],
            inclusion: [
                "Breakfast at the hotel in Kandy.",
                "Transfer to Nuwara Eliya.",
                "Visit to a tea plantation and factory",
                "Accommodation in Nuwara Eliya hotel.",
                "Dinner included."
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            route: ['Kandy', 'Nuwara Eliya']
        },
        {
            id: 3,
            img: gregaryLake_img,
            title: "Nuwara Eliya",
            content: [
                "After breakfast, begin a city tour of Nuwara Eliya.",
                "Take a city tour of Nuwara Eliya, exploring historical landmarks and the area’s colonial heritage. Enjoy a leisurely stroll around Lake Gregory, soaking in the serene atmosphere.",
                "Return to the hotel for some free time to unwind and enjoy the cool climate.",
                "Dinner and overnight stay at the hotel."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "City tour of Nuwara Eliya, including historical landmarks and colonial heritage.",
                "Stroll around Lake Gregory (entrance fee included).",
                "Accommodation in Nuwara Eliya hotel.",
                "Dinner included."
            ],
            route: ['Nuwara Eliya']
        },
        {
            id: 4,
            img: colombo_img,
            title: "Nuwara Eliya to Colombo",
            content: [
                "After breakfast, depart for Colombo.",
                "En route, stop at Kitulgala for an exhilarating white-water rafting experience. Known for its sago palm cultivation, Kitulgala is a popular destination for adventure sports, including rafting, jungle trekking, and cave explorations. (Optional – 2 hours, Supplement Fee Applies)",
                "Continue your journey to Colombo and check in to your hotel.",
                "Enjoy a city tour of Colombo, which includes a visit to Galle Face Green, a scenic urban park along the beachfront. Relax, take in the sea breeze, and enjoy local street food such as prawn fritters (isso wade). Later, experience Colombo’s vibrant nightlife, including popular nightclubs and the Casino Marina Colombo, where you can enjoy live entertainment and gaming.",
                "Return to the hotel for an overnight stay."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Transfer to Colombo.",
                "Optional stop at Kitulgala for white-water rafting (optional supplement fee).",
                "City tour and shopping in Colombo.",
                "Accommodation in Colombo hotel."
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            route: ['Nuwara Eliya', 'colombo']
        },
        {
            id: 5,
            img: airport_img,
            title: "Colombo to Bandaranaike International Airport",
            content: [
                "After breakfast at the hotel, depart from Colombo for Bandaranaike International Airport in time for your flight out of Sri Lanka."
            ],
            inclusion: [
                "Enjoy a final breakfast at the hotel.",
                "Transfer to the airport in time for your departure flight from Sri Lanka."
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            route: ['Colombo', 'BIA']
        },
    ] 
  },
  {
    id: 2,
    img: SriLankaAwaits,
    title: "Sri Lanka Awaits",
    subTitle: "An 8-Day Tour of Nature, Culture, and History",
    cardTxt: "This 8-day tour of Sri Lanka offers a blend of culture, history, and nature...",
    overview: "This 8-day tour of Sri Lanka offers a blend of culture, history, and nature. Visit Pinnawala’s Elephant Orphanage, Sigiriya Rock Fortress, and the Royal Botanical Gardens. Explore Nuwara Eliya’s tea plantations, enjoy a river safari in Bentota, and experience the vibrant culture of Colombo. Stay in comfortable hotels throughout, with plenty of opportunities for relaxation and discovery. Perfect for experiencing Sri Lanka’s heritage and natural beauty.",
    galleryImages: [
        SriLankaAwaits, dambulla_img, sigiriya_img, peradeniya_img, bentota_img, maduRiver_img
    ],
    days: [
        {
            id: 1,
            img: dambulla_img,
            title: "Bandaranaike International Airport – Pinnawala - Dambulla",
            content: [
                "Meet our representative at Bandaranaike International Airport and transfer to Dambulla via Pinnawala.",
                "Visit Pinnawala Elephant Orphanage – Sri Lanka’s only elephant orphanage, serving as a sanctuary for elephants in need of care.",
                "Visit Dambulla Cave Temple – Explore the UNESCO World Heritage site with Buddhist murals and over 150 statues, including a massive reclining Buddha.",
                "Proceed to the hotel in Dambulla for check-in.",
                "Dinner & overnight stay at the hotel in Dambulla.",
            ],
            inclusion: [
                "Meet and assist at Bandaranaike International Airport.",
                "Transportation to Dambulla via Pinnawala.",
                "Visit to Pinnawala Elephant Orphanage (optional entrance fee).",
                "Visit to Dambulla Cave Temple.",
                "Overnight stay at a hotel in Dambulla."
            ],
            distance: "180 km",
            duration: "03 hours approx.",
            route: ['BIA', 'Dambulla']
        },
        {
            id: 2,
            img: sigiriya_img,
            title: "Dambulla to Kandy",
            content: [
                "Breakfast at the hotel.",
                "Climb Sigiriya Rock Fortress (optional) – Explore the 5th-century fortress, famous for its frescoes and panoramic views.",
                "Leave for Kandy.",
                "En route visit the Spice Garden in Matale. – Experience Sri Lanka’s spice heritage and explore spice gardens promoting local cultivation.",
                "Proceed to the hotel in Kandy for check-in.",
                "Kandy City Tour – Visit the cultural heart of Sri Lanka, surrounded by hills and the Mahaweli river.",
                "Visit a Gem Lapidary – Learn about Sri Lanka’s famous gemstone industry.",
                "Kandy Cultural Dance Show (optional) – Enjoy an exciting traditional dance performance, featuring drumming, Kandyan dance, fire dancers, and folklore.",
                "Dinner & overnight stay at the hotel in Kandy."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Climb to Sigiriya Rock Fortress (entrance fee may apply).",
                "Visit to the Spice Garden in Matale.",
                "City tour of Kandy.",
                "Overnight stay at a hotel in Kandy."
            ],
            distance: "80 km",
            duration: "02 hours 10 minutes approx.",
            route: ['Dabulla ', 'Kandy']
        },
        {
            id: 3,
            img: peradeniya_img,
            title: "Kandy to Nuwara Eliya",
            content: [
                "After breakfast, visit the Royal Botanical Gardens in Peradeniya (optional), originally a royal pleasure garden, now spanning 147 acres with a remarkable variety of plants, trees, and flowers.",
                "Depart for Nuwara Eliya, stopping en route at a tea plantation to observe tea plucking and a factory to see the transformation of green leaves into graded tea.",
                "Continue to your hotel in Nuwara Eliya for dinner and an overnight stay.",
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Visit Royal Botanical Gardens, Peradeniya (optional) – Explore the stunning 147-acre garden, once a royal pleasure garden, with a diverse range of plants.",
                "Leave for Nuwara Eliya.",
                "En route to Nuwara Eliya, visit a Tea Plantation – Learn how tea is plucked and see the processing of green tea leaves at a local factory.",
                "Proceed to the hotel in Nuwara Eliya for check-in.",
                "Dinner & overnight stay at the hotel in Nuwara Eliya."
            ],
            distance: "80 km",
            duration: "02 hours 40 minutes approx",
            route: ['Kandy', 'Nuwara Eliya']
        },
        {
            id: 4,
            img: nuwaraEliya2_img,
            title: "Nuwara Eliya",
            content: [
                "Breakfast at the hotel.",
                "City tour of Nuwara Eliya: Explore colonial landmarks and tea plantations, then stroll around Lake Gregory to enjoy its serene atmosphere.",
                "Return to the hotel in Nuwara Eliya for relaxation.",
                "Dinner & overnight stay at the hotel in Nuwara Eliya.",
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "City tour of Nuwara Eliya.",
                "Overnight stay at a hotel in Nuwara Eliya."
            ],
            route: ['Nuwara Eliya']
        },
        {
            id: 5,
            img: bentota_img,
            title: "Nuwara Eliya To Bentota",
            content: [
                "Breakfast at the hotel.",
                "Transfer to Bentota and check in at the beach hotel.",
                "Relax and enjoy the beach and coastal beauty.",
                "Dinner & overnight stay at the hotel in Bentota."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Depart for Colombo.",
                "City tour and shopping in Colombo.",
                "Check in to your hotel in Colombo.",
                "Relax and enjoy the evening.",
                "Dinner and overnight stay at the hotel."
            ],
            distance: "200 km",
            duration: "05 hours 20 minutes approx.",
            route: ['Nuwara Eliya', 'Bentota']
        },
        {
            id: 6,
            img: maduRiver_img,
            title: "Bentota",
            content: [
                "Breakfast at the hotel.",
                "Madu River Safari (optional) – Explore the serene Madu River, its mangroves, biodiversity, and visit Kotu Duwa island with its ancient temple.",
                "Return to the hotel in Bentota for relaxation.",
                "Dinner & overnight stay at the hotel in Bentota."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Transfer to Bandaranaike International Airport for your departure.",
            ],
            route: ['Bentota']
        },
        {
            id: 7,
            img: colombo2_img,
            title: "Bentota to Colombo",
            content: [
                "Breakfast at the hotel.",
                "Transfer to Colombo for a city tour and shopping experience.",
                "Discover Colombo’s blend of modern attractions and historical landmarks.",
                "Proceed to the hotel in Colombo for check-in.",
                "Dinner & overnight stay at the hotel in Colombo."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Transportation to Colombo.",
                "City tour and shopping in Colombo.",
                "Overnight stay at a hotel in Colombo."
            ],
            distance: "105 km",
            duration: "01 hours 50 minutes approx.",
            route: ['Bentota', 'Colombo']
        },
        {
            id: 8,
            img: airport_img,
            title: "Colombo to Bandaranaike International Airport",
            content: [
                "After breakfast at the hotel, depart for Bandaranaike International Airport, ensuring you arrive in time for your flight out of Sri Lanka."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Transfer to Bandaranaike International Airport in time for your departure flight."
            ],
            distance: "40 km",
            duration: "35 minutes approx.",
            route: ['Colombo', 'BIA']
        },
    ] 
  },
  {
    id: 3,
    img: JourneyThroughParadise,
    title: "Journey Through Paradise",
    subTitle: "7 Days in Captivating Sri Lanka",
    cardTxt: "This tour offers a blend of culture, scenic beauty, and relaxation. Begin with Kandy's rich heritage...",
    overview: "This tour offers a blend of culture, scenic beauty, and relaxation. Begin with Kandy's rich heritage and iconic dance show, explore the lush tea plantations and colonial charm of Nuwara Eliya, unwind on Bentota's beaches with a serene river cruise, and end in Colombo with its lively mix of history, shopping, and coastal views.​",
    galleryImages: [
        JourneyThroughParadise, kandy_img, nuwaraEliya_img, bentota_img, maduRiver_img, colombo_img
    ],
    days: [
        {
            id: 1,
            img: kandy_img,
            title: "Bandaranaike International Airport to Kandy",
            content: [
                "Arrive at Bandaranaike International Airport and meet your INTT Leisure representative.",
                "Visit Pinnawela Elephant Orphanage (Optional): Shelter for abandoned and injured elephants.",
                "Check-in to your hotel in Kandy.",
                "City tour of Kandy: The charming hill capital of Sri Lanka and the island’s second-largest city, rich in cultural heritage.",
                "Visit a gem lapidary: Learn about Sri Lanka’s precious gems.",
                "Enjoy the Kandy Cultural Dance Show (Optional): One of the city’s famed evening events, featuring captivating traditional drummers, mesmerizing fire dancers, and performances from up-country and low-country folklore that create an unforgettable experience.",
                "Dinner and Overnight stay at the hotel."
            ],
            inclusion: [
                "Transfer from Bandaranaike International Airport to Kandy.",
                "Visit the Pinnawala Elephant Orphanage (Optional).",
                "Overnight stay at the hotel in Kandy"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            route: ['BIA', 'Colombo']
        },
        {
            id: 2,
            img: peradeniya_img,
            title: "Kandy To Nuwara Eliya",
            content: [
                "Breakfast at the hotel.",
                "Visit Royal Botanical Gardens (Optional): Originally a pleasure garden for a Sinhala king and later expanded by the British, featuring an incredible variety of trees, plants, and flowers.",
                "En route, visit a tea plantation to observe the tea-plucking process and a factory to witness how raw green leaves are processed into the graded product.",
                "Check-in to your hotel in Nuwara Eliya.",
                "Dinner and Overnight stay at the hotel."
            ],
            inclusion: [
                "Visit the Royal Botanical Gardens in Peradeniya (Optional).",
                "En route visit a Tea Plantation and Factory.",
                "Overnight stay at the hotel in Nuwara Eliya."
            ],
            distance: "80 km",
            duration: "02 hours 40 minutes approx.",
            route: ['Kandy', 'Nuwara Eliya']
        },
        {
            id: 3,
            img: nuwaraEliya2_img,
            title: "Nuwara Eliya",
            content: [
                "Breakfast at the hotel.",
                "City tour of Nuwara Eliya: Explore colonial landmarks and tea plantations, then stroll around Lake Gregory to enjoy its serene atmosphere.",
                "Return to the hotel in Nuwara Eliya.",
                "Relax in Nuwara Eliya’s cool climate.",
                "Dinner & Overnight stay at the hotel."
            ],
            inclusion: [
                "Commence a city tour of Nuwara Eliya.",
                "Overnight stay at the hotel in Nuwara Eliya.",
            ],
            route: ['Nuwara Eliya']
        },
        {
            id: 4,
            img: bentota_img,
            title: "Nuwara Eliya To Bentota",
            content: [
                "Breakfast at the hotel.",
                "Depart for Bentota, check-in at your beach hotel.",
                "Relax and unwind by the beach.",
                "Dinner & Overnight stay at the hotel."
            ],
            inclusion: [
                "Proceed to the hotel in Bentota.",
                "Relax & enjoy your day at the beach hotel.",
                "Overnight stay at the hotel in Bentota."
            ],
            distance: "200 km",
            duration: "05 hours 20 minutes approx.",
            route: ['Nuwara Eliya', 'Bentota']
        },
        {
            id: 5,
            img: maduRiver_img,
            title: "Bentota",
            content: [
                "Breakfast at the hotel.",
                "Head to Balapitiya for a river cruise on Madu River (Optional – Entrance Fee). Sail through the crystal-clear waters of the Madu River, a vital lifeline for Balapitiya. Visit Kotu Duwa, a small island with an ancient temple dating back to Sinhalese kings, or explore the shady mangrove tunnels teeming with diverse wildlife and ecological wonders.",
                "Return to the hotel in Kalutara.",
                "Relax and enjoy your day at the hotel.",
                "Dinner & Overnight stay at the hotel."
            ],
            inclusion: [
                "Proceed to Balapitiya for a river cruise (Optional).",
                "Overnight stay at the hotel in Bentota."
            ],
            route: ['Bentota']
        },
        {
            id: 6,
            img: colombo2_img,
            title: "Bentota to Colombo",
            content: [
                "Breakfast at the hotel.",
                "Depart for Colombo, shopping and city tour: Discover Colombo’s blend of history, modernity, and culture.",
                "Dinner & Overnight stay at the hotel.",
            ],
            inclusion: [
                "Commence shopping and a city tour of Colombo.",
                "Proceed to the hotel in Colombo.",
                "Overnight stay at the hotel in Colombo"
            ],
            distance: "105 km",
            duration: "01 hours 50 minutes approx.",
            route: ['Bentota', 'Colombo']
        },
        {
            id: 7,
            img: airport_img,
            title: "Colombo to Bandaranaike International Airport",
            content: [
                "On Day 07, you will start with breakfast at the hotel. After enjoying your meal, you will depart for Bandaranaike International Airport, which is approximately 40 kilometers away and takes about 35 minutes to reach.",
                "Make sure to leave with enough time to accommodate any airport procedures and check-in for your flight out of Sri Lanka. As you travel to the airport, reflect on the beautiful experiences and memories made during your trip.",
                "Safe travels! If you have any last-minute questions or need assistance, feel free to ask."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Transfer to the airport for departure."
            ],
            distance: "40 km",
            duration: "35 minutes approx.",
            route: ['Colombo', 'BIA']
        },
    ] 
  },
  {
    id: 4,
    img: BeyondTheHills,
    title: "Beyond the Hills",
    subTitle: "6 Days of Sri Lankan Wonders",
    cardTxt: "We are thrilled to present you with an exciting itinerary for your 5 Nights and 6 Days in the beautiful island...",
    overview: "We are thrilled to present you with an exciting itinerary for your 5 Nights and 6 Days in the beautiful island of Sri Lanka! Your journey begins with a warm welcome at Bandaranaike International Airport, where our friendly representative will assist you. You'll travel to the enchanting city of Kandy, known for its rich cultural heritage and stunning landscapes. Along the way, you have the option to visit the Pinnawala Elephant Orphanage, a heartwarming sanctuary for elephants in need. Once in Kandy, immerse yourself in the local culture with a city tour, a visit to a Gem Lapidary, and an unforgettable evening at the Kandy Cultural Dance Show. Get ready for an unforgettable experience filled with joy, culture, and natural beauty!",
    galleryImages: [
        BeyondTheHills, pinnawala_img, peradeniya_img, bentota_img, maduRiver_img, colombo_img
    ],
    days: [
        {
            id: 1,
            img: pinnawala_img,
            title: "Bandaranaike International Airport to Kandy",
            content: [
                "Arrive at Bandaranaike International Airport and meet your INTT Leisure representative.",
                "Transfer to Kandy.",
                "Visit the Pinnawela Elephant Orphanage (Optional – Entrance Fee).",
                "Check in to your hotel in Kandy.",
                "City tour of Kandy, including the Temple of the Sacred Tooth Relic and Kandy Lake.",
                "Visit a gem lapidary in Kandy.",
                "Attend the Kandy Cultural Dance Show – A captivating evening event showcasing traditional drummers, fire dancers, and performances of Kandyan and low-country dances. This show offers an unforgettable cultural experience.",
                "Return to the hotel for dinner and overnight stay."
            ],
            inclusion: [
                "Meet and assist at Bandaranaike International Airport.",
                "Transfer from the airport to Kandy.",
                "Optional visit to the Pinnawala Elephant Orphanage (entrance fee supplement).",
                "Check-in at the hotel in Kandy."
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes approx.",
            route: ['Colombo', 'BIA']
        },
        {
            id: 2,
            img: peradeniya_img,
            title: "Kandy To Nuwara Eliya",
            content: [
                "Breakfast at the hotel.",
                "Visit the Royal Botanical Gardens in Peradeniya (Optional – Entrance Fee). This botanical garden was originally built as a pleasure garden by a Sinhala king and later expanded by the British. It is home to an impressive variety of trees, plants, and flowers.",
                "En route, visit a tea plantation and factory.",
                "Arrive in Nuwara Eliya – the heart of Sri Lanka’s hill country. Known for its famous Ceylon tea, Nuwara Eliya is a stunning region with rolling mountains blanketed in velvety green tea plantations, interspersed with sparkling streams and cascading waterfalls.",
                "Check in to your hotel and enjoy the cooler climate.",
                "Dinner and overnight stay at the hotel."
            ],
            inclusion: [
                "Breakfast at the hotel in Kandy.",
                "Visit the Royal Botanical Gardens in Peradeniya (optional - entrance fee supplement).",
                "En route to Nuwara Eliya, visit a Tea Plantation and Factory.",
                "City tour of Nuwara Eliya.",
                "Check-in at the hotel in Nuwara Eliya."
            ],
            distance: "80 km",
            duration: "02 hours 50 minutes approx.",
            route: ['Kandy', 'Nuwara Eliya']
        },
        {
            id: 3,
            img: bentota_img,
            title: "Nuwara Eliya to Bentota",
            content: [
                "After breakfast, visit the Royal Botanical Gardens in Peradeniya (optional), originally a royal pleasure garden, now spanning 147 acres with a remarkable variety of plants, trees, and flowers.",
                "Depart for Nuwara Eliya, stopping en route at a tea plantation to observe tea plucking and a factory to see the transformation of green leaves into graded tea.",
                "Continue to your hotel in Nuwara Eliya for dinner and an overnight stay.",
            ],
            inclusion: [
                "Breakfast at the hotel in Nuwara Eliya.",
                "Transfer to Bentota.",
                "Check-in at the hotel in Bentota.",
                "Relax and enjoy the beach hotel."
            ],
            distance: "200 km",
            duration: "05 hours 20 minutes approx.",
            route: ['Nuwara Eliya', 'Bentota']
        },
        {
            id: 4,
            img: maduRiver_img,
            title: "Bentota",
            content: [
                "Breakfast at the hotel.",
                "Head to Balapitiya for a river cruise on Madu River (Optional – Entrance Fee).",
                "Return to your hotel in Nuwara Eliya to relax and enjoy the cool climate, followed by dinner and an overnight stay. Sail through the crystal-clear waters of the Madu River, a vital lifeline for Balapitiya. Visit Kotu Duwa, a small island with an ancient temple dating back to Sinhalese kings, or explore the shady mangrove tunnels teeming with diverse wildlife and ecological wonders.",
                "Return to the hotel and relax.",
                "Dinner and overnight stay at the hotel."
            ],
            inclusion: [
                "Breakfast at the hotel in Bentota.",
                "Optional river cruise in Balapitiya (entrance fee supplement).",
                "Explore the Madu River and its ecological treasures.",
                "Return to the hotel in Bentota.",
                "Relax and enjoy your day at the hotel."
            ],
            route: ['Bentota']
        },
        {
            id: 5,
            img: colombo_img,
            title: "Bentota to Colombo",
            content: [
                "After breakfast, depart from Nuwara Eliya for Bentota.",
                "Upon arrival, check in at your beach hotel, where you can relax and enjoy a leisurely day by the beach.",
                "Conclude your day with dinner and an overnight stay at the hotel.",
            ],
            inclusion: [
                "Breakfast at the hotel in Bentota.",
                "Transfer to Colombo.",
                "City tour and shopping in Colombo.",
                "Check-in at the hotel in Colombo.",
                "Relax and enjoy your day."
            ],
            distance: "105 km",
            duration: "01 hours 15 minutes approx.",
            route: ['Bentota', 'Colombo']
        },
        {
            id: 6,
            img: airport_img,
            title: "Colombo to Bandaranaike International Airport",
            content: [
                "After breakfast at the hotel, head to Balapitiya for an optional river cruise along the Madu River.",
                "As you glide through the clear waters, take in the blend of ecology and culture, visiting Kotu Duwa, a small island home to an ancient temple. Sail through shady mangrove tunnels, experiencing the tranquility of this biodiversity hotspot, rich in reptiles, mollusks, and over 70 species of freshwater fish. Balapitiya is also known for its cinnamon plantations and unique fish pedicure centers, making it a favorite for bird watchers and those seeking rejuvenation.",
                "Return to your hotel in Kalutara to relax and enjoy the day. Conclude with dinner and an overnight stay at the hotel.",
            ],
            inclusion: [
                "Breakfast at the hotel in Colombo.",
                "Transfer to Bandaranaike International Airport for your flight out of Sri Lanka."
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes approx.",
            route: ['Colombo', 'BIA']
        },
    ] 
  },
  {
    id: 5,
    img: WondersOfSriLanka,
    title: "Wonders of Sri Lanka",
    subTitle: "9 Days of Scenic Journeys",
    cardTxt: "This 9-day tour of Sri Lanka combines cultural exploration, nature experiences...",
    overview: "This 9-day tour of Sri Lanka combines cultural exploration, nature experiences, and relaxation. Visit the Pinnawala Elephant Orphanage, Dambulla Cave Temple, and witness traditional village life in Hiriwaduna. Explore the Sigiriya Rock Fortress, spice gardens, and enjoy a cultural dance show in Kandy. Continue to Nuwara Eliya, known for its tea plantations and colonial charm, then relax in Bentota. The tour concludes with a river cruise in Balapitiya and a city tour in Colombo before departing from Bandaranaike International Airport.",
    galleryImages: [
        WondersOfSriLanka, pinnawala_img, dambulla_img, kandy_img, nuwaraEliya_img, bentota_img
    ],
    days: [
        {
            id: 1,
            img: pinnawala_img,
            title: "Bandaranaike International Airport – Pinnawala - Dambulla",
            content: [
                "Meet and greet at Bandaranaike International Airport by INTT Leisure representative.",
                "Transfer to Dambulla via Pinnawala.",
                "Visit Pinnawala Elephant Orphanage (Optional – Entrance Fee Supplement).",
                "Visit Dambulla Cave Temple (UNESCO World Heritage Site).",
                "Proceed to hotel in Dambulla.",
                "Dinner & Overnight stay at the hotel."
            ],
            inclusion: [
                "Meet and assist at Bandaranaike International Airport.",
                "Transportation to Dambulla via Pinnawala.",
                "Visit to the Pinnawala Elephant Orphanage (optional, entrance fee supplement may apply).",
                "Visit to the Dambulla Cave Temple.",
                "Dinner and overnight stay at the hotel in Dambulla."
            ],
            distance: "180 km",
            duration: "03 hours 50 minutes approx.",
            route: ['BIA', 'Dambulla']
        },
        {
            id: 2,
            img: dambulla_img,
            title: "Dambulla - Minneriya",
            content: [
                "Breakfast at the hotel.",
                "Village tour of Hiriwaduna (Optional). Hiriwaduna is a rural village located in Habarana, North Central Province. If you wish to meet the country folks, this is one of the ideal spots. The charming village, shaded on either side by a dry zone shrub forest, with unpaved gravel paths and humble village folk, offers a chance to witness the environment of typical Sri Lankan village life.",
                "Visit Minneriya National Park & Jeep Safari (Optional – Entrance Fee Supplement). It is one of the most prominent attractions of the island, visited by locals and tourists alike in great numbers.",
                "Return to hotel in Dambulla.",
                "Dinner & Overnight stay at the hotel."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Optional village tour of Hiriwaduna.",
                "Visit to Minneriya National Park (wildlife experience).",
                "Return to the hotel in Dambulla.",
                "Dinner and overnight stay at the hotel."
            ],
            route: ['Dambulla']
        },
        {
            id: 3,
            img: kandy_img,
            title: "Dambulla to Kandy",
            content: [
                "Breakfast at the hotel.",
                "Climb Sigiriya Rock Fortress (Optional – Entrance Fee Supplement).",
                "Leave for Kandy.",
                "En route visit the Spice Garden in Matale.",
                "En route visit the Spice Garden in Matale. Sri Lanka is famous for its spices and spice gardens. These spice gardens offer tourists memorable visits to various spice plantations. To promote and uplift spice growing, a spice council was established with all key industry private and public sector stakeholders. Historically known as Taprobane, Sri Lanka was world-renowned for its high-quality spices. During ancient times, the Greeks, Romans, and Arabs maintained links with Sri Lanka through the spice trade.",
                "Proceed to Kandy.",
                "City tour of Kandy",
                "Visit a Gem Lapidary in Kandy.",
                "In the evening view the Kandy Cultural Dance Show. (Optional) A captivating evening event showcasing traditional drummers, fire dancers, and performances of Kandyan and low-country dances. This show offers an unforgettable cultural experience.",
                "Return to hotel in Kandy.",
                "Dinner & Overnight stay at the hotel."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Optional climb to Sigiriya Rock Fortress (entrance fee supplement may apply).",
                "Visit to the Spice Garden in Matale en route to Kandy.",
                "Dinner and overnight stay at the hotel in Kandy."
            ],
            distance: "80 km",
            duration: "02 hours 10 minutes approx.",
            route: ['Dambulla', 'Kandy']
        },
        {
            id: 4,
            img: nuwaraEliya_img,
            title: "Kandy to Nuwara Eliya",
            content: [
                "Breakfast at the hotel.",
                "Visit Royal Botanical Gardens in Peradeniya (Optional – Entrance Fee Supplement). Explore the stunning 147-acre garden, once a royal pleasure garden, with a diverse range of plants.",
                "Leave for Nuwara Eliya.",
                "En route visit Tea Plantation and Factory.",
                "Proceed to hotel in Nuwara Eliya.",
                "Dinner & Overnight stay at the hotel."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Visit to the Royal Botanical Gardens in Peradeniya (optional, entrance fee supplement may apply).",
                "Transportation to Nuwara Eliya.",
                "Dinner and overnight stay at the hotel in Nuwara Eliya."
            ],
            distance: "80 km",
            duration: "02 hours 40 minutes approx.",
            route: ['Kandy', 'Nuwara Eliya']
        },
        {
            id: 5,
            img: nuwaraEliya2_img,
            title: "Nuwara Eliya",
            content: [
                "Breakfast at the hotel.",
                "City tour of Nuwara Eliya.",
                "Return to hotel in Nuwara Eliya.",
                "Relax and enjoy the cool climate.",
                "Dinner & Overnight stay at the hotel."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "City tour of Nuwara Eliya.",
                "Dinner and overnight stay at the hotel in Nuwara Eliya."
            ],
            route: ['Nuwara Eliya']
        },
        {
            id: 6,
            img: maduRiver_img,
            title: "Nuwara Eliya to Bentota",
            content: [
                "Breakfast at the hotel.",
                "Leave for Bentota.",
                "Proceed to hotel in Bentota.",
                "Relax & enjoy the beach hotel.",
                "Dinner & Overnight stay at the hotel"
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Transportation to Bentota.",
                "Relaxation time at the beach hotel.",
                "Dinner and overnight stay at the hotel in Bentota."
            ],
            distance: "200 km",
            duration: "05 hours 20 minutes approx.",
            route: ['Nuwara Eliya', 'Bentota']
        },
        {
            id: 7,
            img: bentota_img,
            title: "Bentota",
            content: [
                "Breakfast at the hotel.",
                "Visit Balapitiya for river cruise (Optional – Supplement Fee Given).",
                "Return to hotel in Bentota.",
                "Relax & enjoy the day at the hotel.",
                "Dinner & Overnight stay at the hotel."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Optional river cruise in Balapitiya (supplement fee may apply).",
                "Return to the hotel in Kalutara.",
                "Relaxation time at the hotel.",
                "Dinner and overnight stay at the hotel."
            ],
            route: ['Bentota']
        },
        {
            id: 8,
            img: colombo2_img,
            title: "Bentota to Colombo",
            content: [
                "Breakfast at the hotel.",
                "Leave for Colombo.",
                "Shopping and city tour of Colombo.",
                "Proceed to hotel in Colombo.",
                "Relax & enjoy the day.",
                "Dinner & Overnight stay at the hotel."
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Transportation to Colombo.",
                "City tour of Colombo (sightseeing).",
                "Dinner and overnight stay at the hotel in Colombo."
            ],
            distance: "105 km",
            duration: "01 hours 50 minutes approx.",
            route: ['Bentota', 'Colombo']
        },
        {
            id: 9,
            img: airport_img,
            title: "Colombo to Bandaranaike International Airport",
            content: [
                "Breakfast at the hotel.",
                "Transfer to Bandaranaike International Airport for departure.",
            ],
            inclusion: [
                "Breakfast at the hotel.",
                "Transfer to Bandaranaike International Airport for departure."
            ],
            distance: "40 km",
            duration: "35 minutes approx.",
            route: ['Colombo', 'BIA']
        },
    ]
  }
  
  
];

export default contentData;
import img1 from "../assets/images/sample itinerary.jpg";

import CulturalOdyssey from "../assets/images/Cultural Odyssey.jpg";
import CulturalOdysseyDay1 from "../assets/images/Cultural Odyssey -day1.jpg";
import CulturalOdysseyDay2 from "../assets/images/Cultural Odyssey -day2.jpg";
import CulturalOdysseyDay3 from "../assets/images/Cultural Odyssey -day3.jpg";
import CulturalOdysseyDay4 from "../assets/images/Cultural Odyssey -day4.jpg";
import CulturalOdysseyDay5 from "../assets/images/Cultural Odyssey -day5.jpg";

import BeyondTheHills from "../assets/images/Beyond the Hills.jpg";
import JourneyThroughParadise from "../assets/images/Journey Through Paradise.jpg";

const contentData = [
  {
    id: 1,
    img: CulturalOdyssey,
    title: "Cultural Odyssey",
    subTitle: "A 5-Day Journey Through Sri Lanka",
    cardTxt: "You will be met on arrival at the Bandaranaike International Airport by our INTT leisure...",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    days: [
        {
            id: 1,
            img: CulturalOdysseyDay1,
            title: "Bandaranaike International Airport to Kandy",
            content: [
                "Upon arrival at Bandaranaike International Airport, an INTT Leisure representative will meet you, assist with luggage, and introduce you to your chauffeur for a transfer to Kandy.",
                "In Kandy, enjoy a visit to Pinnawala Elephant Orphanage (optional), a sanctuary dedicated to caring for abandoned and injured elephants.",
                "Explore the vibrant city of Kandy, Sri Lanka’s cultural and religious hill capital and a UNESCO World Heritage City. Highlights include a visit to a Gem Lapidary and the Kandy Cultural Dance Show (optional), showcasing traditional drumming, fire dancing, and folklore performances.",
                "Return to the hotel in Kandy for an overnight stay."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 2,
            img: CulturalOdysseyDay2,
            title: "Kandy To Nuwara Eliya",
            content: [
                "After breakfast at the hotel, depart from Kandy to Nuwara Eliya.",
                "On the way, visit a tea plantation to observe tea plucking and a factory to learn about processing tea leaves into graded products.",
                "Continue to your hotel in Nuwara Eliya, where you can relax and enjoy the cool climate.",
                "Dinner and an overnight stay at the hotel."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 3,
            img: CulturalOdysseyDay3,
            title: "Nuwara Eliya",
            content: [
                "After breakfast, begin a city tour of Nuwara Eliya.",
                "Explore the heart of Sri Lankan hill country, famed for Ceylon tea and scenic green tea plantations, streams, and waterfalls. The area’s cool climate, misty landscapes, and colonial charm make it a highlight of Sri Lanka.",
                "Visit historical landmarks and stroll around Lake Gregory, enjoying its serene atmosphere (entrance fee included).",
                "Return to your hotel in Nuwara Eliya to relax and savor the cool climate, followed by dinner and an overnight stay."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 4,
            img: CulturalOdysseyDay4,
            title: "Nuwara Eliya to Colombo",
            content: [
                "After breakfast, depart from Nuwara Eliya to Colombo, stopping en route at Kitulgala for optional white-water rafting, a prime spot for adventure sports amid serene surroundings.",
                "Continue to Colombo and check in at the hotel. Embark on a city tour and enjoy shopping in Sri Lanka's vibrant commercial capital, where a blend of east and west offers unique dining and shopping experiences.",
                "Stroll along Galle Face Green, a beachfront park perfect for a sunset walk and local street foods like isso wade. For nightlife, visit a popular nightclub or Casino Marina Colombo for gaming and live entertainment.",
                "Return to your hotel in Colombo for an overnight stay."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 5,
            img: CulturalOdysseyDay5,
            title: "Colombo to Bandaranaike International Airport",
            content: [
                "After breakfast at the hotel, depart from Colombo for Bandaranaike International Airport in time for your flight out of Sri Lanka."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
    ] 
  },
  {
    id: 2,
    img: BeyondTheHills,
    title: "Beyond the Hills",
    subTitle: "6 Days of Sri Lankan Wonders",
    cardTxt: "You will be met on arrival at the Bandaranaike International Airport by our INTT leisure...",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    days: [
        {
            id: 1,
            img: {img1},
            title: "Bandaranaike International Airport – Pinnawala - Dambulla",
            content: [
                "Upon arrival at Bandaranaike International Airport, an INTT Leisure representative will meet you, assist with luggage, and introduce you to your chauffeur for the journey to Dambulla via Pinnawala.",
                "En route, visit the Pinnawala Elephant Orphanage (optional), a unique sanctuary providing special care for orphaned and injured elephants.",
                "In Dambulla, explore the UNESCO-listed Dambulla Cave Temple, featuring intricate Buddhist murals and over 150 statues, including a massive reclining Buddha. This historic site is set against a backdrop of traditional Sri Lankan countryside and vibrant markets.",
                "Continue to your hotel in Dambulla for dinner and an overnight stay."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 2,
            img: {img1},
            title: "Dambulla to Kandy",
            content: [
                "After breakfast, climb the Sigiriya Rock Fortress (optional), a UNESCO World Heritage site and 5th-century marvel built by King Kashyapa. Known as the Lion Rock, this 200-meter-high fortress features extensive gardens, moats, and the famed frescoes of the ‘Heavenly Maidens,’ accessible by a spiral stairway.",
                "Depart for Kandy, stopping en route at the Spice Garden in Matale to experience Sri Lanka’s rich spice heritage and explore the plantations that made the island renowned for its quality spices in ancient times.",
                "Arriving in Kandy, begin a city tour of this cultural capital, a UNESCO World Heritage City set amidst scenic hills and looped by the Mahaweli River. Key highlights include a visit to a Gem Lapidary and an optional evening Kandy Cultural Dance Show, featuring traditional drumming, fire dancing, and folklore performances.",
                "Return to your hotel in Kandy for dinner and an overnight stay."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 3,
            img: {img1},
            title: "Kandy to Nuwara Eliya",
            content: [
                "After breakfast, visit the Royal Botanical Gardens in Peradeniya (optional), originally a royal pleasure garden, now spanning 147 acres with a remarkable variety of plants, trees, and flowers.",
                "Depart for Nuwara Eliya, stopping en route at a tea plantation to observe tea plucking and a factory to see the transformation of green leaves into graded tea.",
                "Continue to your hotel in Nuwara Eliya for dinner and an overnight stay.",
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 4,
            img: {img1},
            title: "Kandy To Nuwara Eliya",
            content: [
                "After breakfast, embark on a city tour of Nuwara Eliya, the heart of Sri Lanka’s hill country, known for its lush green tea plantations, misty glens, and charming British character.",
                "Discover historical landmarks and immerse yourself in the colonial heritage of the area. Take a peaceful stroll around Lake Gregory to enjoy the calming atmosphere.",
                "Return to your hotel in Nuwara Eliya to relax and enjoy the cool climate, followed by dinner and an overnight stay.",
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 5,
            img: {img1},
            title: "Kandy To Nuwara Eliya",
            content: [
                "After breakfast, depart from Nuwara Eliya for Bentota.",
                "Upon arrival, check in at your beach hotel, where you can relax and enjoy a leisurely day by the beach.",
                "Conclude your day with dinner and an overnight stay at the hotel.",
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 6,
            img: {img1},
            title: "Bentota",
            content: [
                "After breakfast at the hotel, head to Balapitiya for an optional river cruise along the Madu River.",
                "As you glide through the clear waters, take in the blend of ecology and culture, visiting Kotu Duwa, a small island home to an ancient temple. Sail through shady mangrove tunnels, experiencing the tranquility of this biodiversity hotspot, rich in reptiles, mollusks, and over 70 species of freshwater fish. Balapitiya is also known for its cinnamon plantations and unique fish pedicure centers, making it a favorite for bird watchers and those seeking rejuvenation.",
                "Return to your hotel in Kalutara to relax and enjoy the day. Conclude with dinner and an overnight stay at the hotel.",
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 7,
            img: {img1},
            title: "Bentota",
            content: [
                "After breakfast, depart from Bentota for Colombo.",
                "Upon arrival, enjoy shopping and a city tour of Colombo, the trade and commercial capital known as a traditional gateway to the Orient. This vibrant city offers a unique blend of eastern and western influences, rich history, and charm. Colombo boasts an impressive array of high-quality restaurants and some of the best shopping opportunities in Asia.",
                "Proceed to your hotel in Colombo, where you can relax and enjoy the rest of your day. End the day with dinner and an overnight stay at the hotel.",
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 8,
            img: {img1},
            title: "Bentota",
            content: [
                "After breakfast at the hotel, depart for Bandaranaike International Airport, ensuring you arrive in time for your flight out of Sri Lanka."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
    ] 
  },
  {
    id: 3,
    img: JourneyThroughParadise,
    title: "Journey Through Paradise",
    subTitle: "7 Days in Captivating Sri Lanka",
    cardTxt: "You will be met on arrival at the Bandaranaike International Airport by our INTT leisure...",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    days: [
        {
            id: 1,
            img: {img1},
            title: "Bandaranaike International Airport to Kandy",
            content: [
                "Upon arrival at Bandaranaike International Airport, you will be greeted by our INTT leisure representative, who will assist with your luggage and guide you to your vehicle, where your personal chauffeur awaits.",
                "You'll transfer to Kandy, stopping at the Pinnawala Elephant Orphanage (optional), which provides shelter and care for abandoned, injured, and maimed elephants, particularly focusing on baby elephants in need of nurturing.",
                "After your visit, proceed to your hotel in Kandy and embark on a city tour. Kandy, the charming hill capital of Sri Lanka and the second largest city on the island, is nestled amidst low hills and the Mahaweli River, standing at 465 meters above sea level. It is renowned as the country’s religious and cultural center and is recognized as a World Heritage City.",
                "During the tour, visit a gem lapidary to learn about Sri Lanka’s precious stones. In the evening, you have the option to attend the Kandy Cultural Dance Show, a captivating experience featuring traditional drumming and various art forms, including fire dancers and traditional Kandyan dancers.",
                "Return to your hotel in Kandy for dinner and an overnight stay."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 2,
            img: {img1},
            title: "Kandy To Nuwara Eliya",
            content: [
                "After enjoying breakfast at the hotel, you'll visit the Royal Botanical Gardens in Peradeniya (optional), which spans 147 acres and features a stunning variety of trees, plants, and flowers. Originally established as a pleasure garden by a Sinhala king, it was later expanded by the British.",
                "Following your visit, depart for Nuwara Eliya, stopping at a tea plantation along the way. Here, you’ll see how tea is hand-plucked and visit a factory to witness the processing of the raw green leaf into graded tea products.",
                "Once you arrive in Nuwara Eliya, proceed to your hotel for dinner and an overnight stay.",
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 3,
            img: {img1},
            title: "Nuwara Eliya",
            content: [
                "After enjoying breakfast at the hotel, you'll embark on a city tour of Nuwara Eliya, the heart of Sri Lanka's hill country. Known for its lush Ceylon tea plantations, Nuwara Eliya features rolling mountains, gushing streams, and beautiful waterfalls, all set against a refreshing climate and misty glens.",
                "During the tour, you'll explore historical landmarks, absorbing the colonial heritage of the area. You’ll also have the opportunity to stroll around Lake Gregory, taking in its serene and calming atmosphere.",
                "After your tour, return to the hotel to relax and enjoy the cool climate of Nuwara Eliya. Later, enjoy dinner and an overnight stay at the hotel."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 4,
            img: {img1},
            title: "Nuwara Eliya to Bentota",
            content: [
                "After breakfast at the hotel, you'll depart for Bentota, a beautiful coastal destination. Upon arrival, check in at your hotel and take some time to relax and unwind. Enjoy your day soaking up the sun and the beach atmosphere.",
                "In the evening, savor a delightful dinner and then enjoy an overnight stay at the hotel, surrounded by the tranquil sounds of the ocean.",
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 5,
            img: {img1},
            title: "Bentota",
            content: [
                "On Day 05, you'll start your morning with breakfast at the hotel. Then, you'll head to Balapitiya for an optional river cruise on the Madu River. This serene cruise offers a chance to experience the stunning combination of ecology and culture in the area. You'll navigate through the clear waters, heading towards Kotu Duwa, a small island home to a temple dating back to ancient Sinhalese kings.",
                "As you glide through the shaded mangroves, you'll encounter a vibrant ecosystem teeming with diverse wildlife, including reptiles, mollusks, and over 70 species of freshwater fish. The region is also known for its abundant cinnamon plantations and unique experiences, such as a 'fish pedicure' center, perfect for relaxation. Bird watchers will find plenty to enjoy here as well.",
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 6,
            img: {img1},
            title: "Bentota to Colombo",
            content: [
                "On Day 06, after enjoying breakfast at the hotel, you will depart for Colombo. The journey will take approximately 1 hour and 50 minutes.",
                "Upon your arrival in Colombo, you will kick off your visit with a shopping excursion and a city tour. Colombo, as the trade and commercial capital of Sri Lanka, is a vibrant city that beautifully blends Eastern and Western influences, showcasing a rich tapestry of history and modernity.",
                "You'll find an array of high-quality restaurants offering diverse cuisines from around the world, making it a delightful destination for food lovers. The shopping opportunities in Colombo are also noteworthy, with a mix of local boutiques and international brands.",
                "After your exploration, you will check into your hotel in Colombo. Take some time to relax and unwind before dinner. You'll enjoy a meal at the hotel and spend the night there, recharging for the next day’s adventures."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 7,
            img: {img1},
            title: "Colombo to Bandaranaike International Airport",
            content: [
                "On Day 07, you will start with breakfast at the hotel. After enjoying your meal, you will depart for Bandaranaike International Airport, which is approximately 40 kilometers away and takes about 35 minutes to reach.",
                "Make sure to leave with enough time to accommodate any airport procedures and check-in for your flight out of Sri Lanka. As you travel to the airport, reflect on the beautiful experiences and memories made during your trip.",
                "Safe travels! If you have any last-minute questions or need assistance, feel free to ask."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
    ] 
  },
  {
    id: 4,
    img: img1,
    title: "Sri Lanka Awaits",
    subTitle: "An 8-Day Tour of Nature",
    cardTxt: "You will be met on arrival at the Bandaranaike International Airport by our INTT leisure...",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    days: [
        {
            id: 1,
            img: {img1},
            title: "Bandaranaike International Airport to Kandy",
            content: [
                "Upon your arrival at Bandaranaike International Airport, you will be warmly greeted by our INTT Leisure representative. They will assist you with your luggage and guide you to your vehicle, where your personal chauffeur awaits to start your journey.",
                "You will then embark on a scenic drive to Kandy, taking in the beautiful landscapes that Sri Lanka has to offer. On your way, you’ll have the opportunity to visit the Pinnawala Elephant Orphanage (optional - entrance fee supplement). This renowned sanctuary was established to provide shelter and nourishment to abandoned, injured, and maimed elephants, particularly focusing on the care of baby elephants who cannot survive without their mothers.",
                "After your visit to the orphanage, proceed to your hotel in Kandy, where you will check in and settle down. Once you’re refreshed, you’ll begin your city tour of Kandy. This charming hill capital is not only Sri Lanka’s second-largest city but also a UNESCO World Heritage Site. Nestled amidst low hills and looped by the Mahaweli River, Kandy serves as the country’s religious and cultural center.",
                "During your city tour, you will also visit a gem lapidary in Kandy, where you can discover the exquisite craftsmanship of Sri Lankan gem artisans. The variety and quality of gemstones in the area are truly remarkable.",
                "In the evening, you’ll have the chance to immerse yourself in the vibrant Kandy Cultural Dance Show. This performance is one of the most famous evening events in the heritage city. It features captivating traditional drummers and showcases a variety of dance forms, including fire dancers, Demon dancers, and Traditional Kandyan dancers. The show runs for over an hour and promises a breathtaking experience of local culture.",
                "After the cultural show, you will return to your hotel for dinner and an overnight stay, ending your first day in Sri Lanka filled with unforgettable experiences."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 2,
            img: {img1},
            title: "Kandy To Nuwara Eliya",
            content: [
                "After enjoying breakfast at the hotel, you will set out for a visit to the Royal Botanical Gardens in Peradeniya (optional - entrance fee supplement). This beautiful botanical garden was initially established as a pleasure garden by a Sinhala king and was later expanded by the British. Spanning 147 acres, it showcases an amazing variety of trees, plants, and flowers, making it a perfect spot for nature lovers.",
                "Following your exploration of the gardens, you will leave for Nuwara Eliya. En route, you will visit a tea plantation, where you can witness firsthand how tea is carefully plucked from the lush bushes. Additionally, you will have the opportunity to tour a factory, observing the intricate process of turning raw green tea leaves into the graded product that is world-renowned.",
                "Once you arrive in Nuwara Eliya, you will commence a city tour of this picturesque town. Known as the heart of Sri Lankan hill country, Nuwara Eliya is famous for its Ceylon tea and features rolling mountains covered in velvety green tea plantations, interspersed with gushing streams and tumbling waterfalls. The salubrious climate, misty glens, and distinctly British character make Nuwara Eliya a must-visit destination in Sri Lanka.",
                "Finally, you will proceed to your hotel in Nuwara Eliya, where you can relax and enjoy the serene surroundings."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 3,
            img: {img1},
            title: "Nuwara Eliya to Bentota",
            content: [
                "After enjoying breakfast at the hotel, you will begin your journey from Nuwara Eliya to Bentota. The scenic drive will take you through the breathtaking landscapes of Sri Lanka, showcasing the country's natural beauty along the way.",
                "Upon arrival in Bentota, you will proceed to your hotel, where you can unwind and soak in the relaxing atmosphere. With its stunning beaches and tranquil surroundings, Bentota offers the perfect opportunity to recharge after your travels.",
                "Spend the rest of the day enjoying the amenities of your beach hotel. Whether you prefer lounging by the pool, strolling along the sandy shores, or indulging in a spa treatment, Bentota has something for everyone to enjoy.",
                "In the evening, you will have dinner at the hotel, followed by an overnight stay, ensuring you are refreshed for the adventures that lie ahead."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 4,
            img: {img1},
            title: "Bentota",
            content: [
                "Start your day with breakfast at the hotel, preparing you for an exciting adventure ahead. After breakfast, you will proceed to Balapitiya for a river cruise (optional – entrance fee supplement may apply).",
                "In Balapitiya, you can sit back and appreciate how ecology and culture blend harmoniously under the sun. As you cruise through the clear waters of the Madu River, you will head towards Kotu Duwa, a small island that houses a temple dating back to the ancient Sinhalese kings. You’ll also have the opportunity to sail through tunnels of shady mangroves that line the riverbanks, revealing an ecological treasure trove. This biodiverse hotspot is home to various reptiles, mollusks, and over 70 species of freshwater fish.",
                "The region is not only rich in natural beauty but also offers a glimpse into rural life on the island. Here, you can explore cinnamon plantations and discover a unique 'fish pedicure' center—one of the latest rejuvenation techniques that has gained popularity. Additionally, Balapitiya is a well-known destination for bird watchers, making it an exciting spot for nature enthusiasts.",
                "After your cruise, you will return to the hotel in Bentota, where you can relax and enjoy the rest of your day at leisure. Whether you choose to lounge by the beach or indulge in the hotel's amenities, you will have plenty of options to unwind.",
                "In the evening, enjoy dinner at the hotel, followed by an overnight stay, ensuring you are well-rested for the next day's adventures."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 5,
            img: {img1},
            title: "Bentota to Colombo",
            content: [
                "Begin your day with a delicious breakfast at the hotel before preparing for your journey to Colombo. After breakfast, you will leave for Colombo, which is approximately 105 km away and takes around 1 hour and 50 minutes to reach.",
                "Upon your arrival in Colombo, you will kick off your exploration with shopping and a city tour. As the trade and commercial capital of Sri Lanka, Colombo has long served as a traditional gateway to the Orient. This vibrant city is a fascinating blend of East and West, where the past harmoniously meets the present, creating a unique charm that captivates visitors.",
                "One of Colombo's lesser-known but remarkable features is its exceptional range of high-quality restaurants offering diverse cuisines from around the globe. Whether you crave local delicacies or international dishes, you will find plenty of options to satisfy your palate. Additionally, Colombo boasts some of the best shopping opportunities in Asia, making it a great place to indulge in retail therapy.",
                "After your city tour and shopping experience, proceed to your hotel in Colombo. Once settled in, take some time to relax and enjoy the amenities the hotel offers, or simply unwind from your day of exploration",
                "In the evening, you will enjoy dinner at the hotel, followed by an overnight stay, ensuring you are refreshed and ready for the adventures that await you tomorrow."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 6,
            img: {img1},
            title: "Colombo to Bandaranaike International Airport",
            content: [
                "Start your day with a satisfying breakfast at the hotel, savoring the last moments of your stay in Colombo. After breakfast, it’s time to prepare for your journey to the airport.",
                "You will leave for Bandaranaike International Airport, which is approximately 40 km away and takes around 35 minutes to reach. Make sure to keep your travel documents handy and ensure you have everything packed for your departure.",
                "Arriving at the airport, you’ll have time to check in for your flight and complete any necessary formalities. As you reflect on your journey through Sri Lanka, you can cherish the memories made during your travels.",
                "Wishing you a safe flight and a pleasant journey home!"
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
    ] 
  },
  {
    id: 5,
    img: img1,
    title: "Wonders of Sri Lanka",
    subTitle: "9 Days of Scenic Journeys",
    cardTxt: "You will be met on arrival at the Bandaranaike International Airport by our INTT leisure...",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    days: [
        {
            id: 1,
            img: {img1},
            title: "Bandaranaike International Airport – Pinnawala - Dambulla",
            content: [
                "Upon arrival at Bandaranaike International Airport, you will be warmly greeted by our INTT Leisure representative, who will assist you with your luggage and guide you to your waiting vehicle. Here, your personal chauffeur will be ready to begin your journey through Sri Lanka.",
                "Depart from the airport and set off for Dambulla, with a scenic stop at the Pinnawala Elephant Orphanage along the way. This unique establishment is the only one of its kind in Sri Lanka, serving as a sanctuary, nursery, and breeding ground for elephants in need. The orphanage provides a safe haven for abandoned and injured elephants, ensuring they receive special care and attention.",
                "Continue your journey to Dambulla, where you’ll explore the famed Dambulla Cave Temple, a UNESCO World Heritage Site. This remarkable complex is nestled within a massive rock and features intricate Buddhist murals and over 150 statues, including a colossal reclining Buddha. Dambulla's cave temples offer a mesmerizing glimpse into ancient Buddhist artistry and devotion. The surrounding area, with its lively markets and serene countryside, allows you to experience the charm of traditional Sri Lankan life.",
                "After your visit, proceed to your hotel in Dambulla. Enjoy a delicious dinner and settle in for a restful overnight stay, preparing for more adventures to come."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 2,
            img: {img1},
            title: "Dambulla - Minneriya",
            content: [
                "Begin your day with a hearty breakfast at the hotel, preparing for a day filled with exploration and adventure.",
                "For those seeking an authentic cultural experience, embark on an optional village tour of Hiriwaduna. Located in Habarana in Sri Lanka’s North Central Province, Hiriwaduna offers a charming glimpse into traditional village life. This quiet, rural village, nestled between dry-zone shrub forests and shaded by towering trees, invites visitors to meet friendly locals and observe a simpler, unhurried way of life. Wander along gravel paths, surrounded by scenic countryside, and immerse yourself in the peaceful environment of typical Sri Lankan village life.",
                "In the afternoon, head to Minneriya National Park for an exciting Jeep safari. This optional adventure provides a unique opportunity to see wild elephants gathering in their natural habitat. Minneriya is one of Sri Lanka’s most renowned national parks, known for its large elephant population, particularly during the dry season when herds gather around the park’s reservoir. The safari offers not only a close view of these majestic creatures but also sightings of various bird species and other wildlife.",
                "After an unforgettable day of cultural immersion and wildlife sightings, return to your hotel in Dambulla. Enjoy a delicious dinner and settle in for an overnight stay, reflecting on the day’s memorable experiences."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 3,
            img: {img1},
            title: "03: Dambulla to Kandy",
            content: [
                "Start your day with a delicious breakfast at the hotel, preparing for an adventurous journey to some of Sri Lanka's most iconic sites.",
                "For those inclined to explore ancient architecture and history, an optional climb of the Sigiriya Rock Fortress awaits. This 5th-century marvel, designated as a UNESCO World Heritage site, was constructed by King Kashyapa (477-495 AD). Known as the Lion Rock, Sigiriya stands at 200 meters and offers breathtaking views of the surrounding jungle. At the base, a moat, ramparts, and extensive water gardens frame the rock’s base, while midway up the rock, visitors can view the famous frescoes of the 'Heavenly Maidens.' These frescoes, painted in earth pigments, depict beautiful maidens and add an air of mystique to the fortress.",
                "After descending from Sigiriya, embark on a scenic journey to Kandy, stopping en route at a Spice Garden in Matale. Sri Lanka’s spice gardens are renowned for their aromatic spices and herbs. These gardens provide visitors with insights into Sri Lanka's spice trade, a heritage that dates back centuries. Learn about the various spices that have long enriched Sri Lankan cuisine, medicine, and traditions.",
                "Arriving in Kandy, check in at your hotel before setting out to explore this enchanting hill city. Known as Sri Lanka’s cultural capital, Kandy is nestled amidst lush hills and sits beside the Mahaweli River. A UNESCO World Heritage site, it is home to temples, historic sites, and a rich blend of cultural traditions. During the city tour, visit a Gem Lapidary, where you can observe Sri Lanka's renowned gemstone industry, famous for sapphires and other precious stones.",
                "In the evening, attend the optional Kandy Cultural Dance Show. This captivating performance showcases traditional Kandyan dances, including fire dancers, drum performances, and various regional dances that offer a vivid glimpse into Sri Lanka's folklore and traditions. The show, lasting over an hour, provides a truly memorable experience.",
                "Return to your hotel in Kandy for dinner and an overnight stay, wrapping up a day steeped in culture, history, and natural beauty."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 4,
            img: {img1},
            title: "Kandy to Nuwara Eliya",
            content: [
                "Begin your day with breakfast at the hotel, fueling up for a scenic journey into the heart of Sri Lanka’s tea country.",
                "The first stop of the day is an optional visit to the Royal Botanical Gardens in Peradeniya, just outside of Kandy. Initially established as a pleasure garden by a Sinhala king, the gardens were expanded by the British and now cover 147 acres. Known for their vast variety of trees, plants, and flowers, these gardens are an oasis of beauty and a haven for plant lovers. Stroll through avenues of towering palms, see the famous orchid collection, and immerse yourself in the vibrant, lush environment.",
                "After the gardens, continue on your journey toward Nuwara Eliya. On the way, visit a Tea Plantation to witness Sri Lanka’s renowned tea-making process firsthand. Here, you’ll see skilled workers carefully plucking tea leaves by hand and can tour the tea factory to learn about the intricate process of turning raw green leaves into graded, ready-to-use tea. You may even have a chance to sample some fresh Ceylon tea, renowned for its distinctive flavor.",
                "Arrive in Nuwara Eliya, also known as 'Little England' due to its cool climate and colonial architecture. Check into your hotel, where you can relax and unwind, enjoying the crisp mountain air.",
                "In the evening, savor a hearty dinner and enjoy a restful overnight stay at your hotel in Nuwara Eliya, ready to explore more of this picturesque hill town the next day."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 5,
            img: {img1},
            title: "Nuwara Eliya",
            content: [
                "Begin your day with breakfast at the hotel, preparing for a full exploration of Nuwara Eliya, often referred to as the 'Heart of Sri Lankan Hill Country.'",
                "Embark on a city tour of Nuwara Eliya, where you'll find yourself surrounded by rolling mountains carpeted with lush, green tea plantations, along with bubbling streams and picturesque waterfalls. This area is not only the center of Sri Lanka’s famed tea industry but also a unique blend of British charm and Sri Lankan heritage. With its refreshing climate and mist-covered landscapes, Nuwara Eliya feels worlds away from the tropical heat of the coast.",
                "Explore the historical landmarks that showcase Nuwara Eliya’s colonial past. Wander through streets lined with quaint, British-style cottages and old buildings that lend the town its nickname, 'Little England.' You’ll see how the town’s architecture and layout reflect its colonial roots, offering a charming and distinctive atmosphere.",
                "Take a peaceful stroll around Lake Gregory, a tranquil spot in the heart of Nuwara Eliya. The lake, surrounded by misty hills and greenery, is perfect for relaxing or simply taking in the serene views. You can walk along the shoreline, take a boat ride, or simply sit and enjoy the calming environment.",
                "After your tour, return to the hotel to relax and unwind in the cool climate of Nuwara Eliya. Enjoy a leisurely evening and a delicious dinner at the hotel, rounding off a refreshing day in this enchanting town.",
                "Dinner and overnight stay at the hotel in Nuwara Eliya."
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
        {
            id: 6,
            img: {img1},
            title: "Nuwara Eliya to Bentota",
            content: [
                "Start your day with a satisfying breakfast at the hotel, savoring the last moments of your stay in Colombo. After breakfast, it’s time to prepare for your journey to the airport.",
                "You will leave for Bandaranaike International Airport, which is approximately 40 km away and takes around 35 minutes to reach. Make sure to keep your travel documents handy and ensure you have everything packed for your departure.",
                "Arriving at the airport, you’ll have time to check in for your flight and complete any necessary formalities. As you reflect on your journey through Sri Lanka, you can cherish the memories made during your travels.",
                "Wishing you a safe flight and a pleasant journey home!"
            ],
            inclusion: [
                "Accommodation",
                "Dinner and breakfast at the hotel"
            ],
            distance: "115 km",
            duration: "02 hours 50 minutes",
            mapPositions: [
                "7.8731",
                "80.7718"
            ]
        },
    ]
  }
  
  
];

export default contentData;
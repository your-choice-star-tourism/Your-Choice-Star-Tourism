import tour_1 from "./tour_1.jpg";
import tour_1_1 from "./tour_1_1.jpg";
import tour_1_2 from "./tour_1_2.jpg";
import tour_1_3 from "./tour_1_3.jpeg";

import tour_2 from "./tour_2.webp";
import tour_2_1 from "./tour_2_1.jpg";
import tour_2_2 from "./tour_2_2.jpg";
import tour_2_3 from "./tour_2_3.jpg";

import tour_3 from "./tour_3.webp";
import tour_3_1 from "./tour_3_1.jpg";
import tour_3_2 from "./tour_3_2.avif";
import tour_3_3 from "./tour_3_3.avif";

import tour_4 from "./tour_4.jpeg";
import tour_4_1 from "./tour_4_1.avif";
import tour_4_2 from "./tour_4_2.webp";
import tour_4_3 from "./tour_4_3.jpeg";

import tour_5 from "./tour_5.webp";
import tour_5_1 from "./tour_5_1.webp";
import tour_5_2 from "./tour_5_2.jpg";
import tour_5_3 from "./tour_5_3.jpg";

import tour_6 from "./tour_6.avif";
import tour_6_1 from "./tour_6_1.jpg";
import tour_6_2 from "./tour_6_2.jpg";
import tour_6_3 from "./tour_6_3.png";

import tour_7 from "./tour_7.jpeg";
import tour_7_1 from "./tour_7_1.jpg";
import tour_7_2 from "./tour_7_2.webp";
import tour_7_3 from "./tour_7_3.jpg";

import tour_8 from "./tour_8.jpg";
import tour_8_1 from "./tour_8_1.webp";
import tour_8_2 from "./tour_8_2.webp";
import tour_8_3 from "./tour_8_3.jpg";

import tour_9 from "./tour_9.jpg";
import tour_9_1 from "./tour_9_1.jpg";
import tour_9_2 from "./tour_9_2.webp";
import tour_9_3 from "./tour_9_3.jpg";

import tour_10 from "./tour_10.jpg";
import tour_10_1 from "./tour_10_1.webp";
import tour_10_2 from "./tour_10_2.jpg";
import tour_10_3 from "./tour_10_3.webp";

import tour_11 from "./tour_11.webp";
import tour_11_1 from "./tour_11_1.avif";
import tour_11_2 from "./tour_11_2.jpg";
import tour_11_3 from "./tour_11_3.webp";

import tour_12 from "./tour_12.webp";
import tour_12_1 from "./tour_12_1.jpg";
import tour_12_2 from "./tour_12_2.jpg";
import tour_12_3 from "./tour_12_3.jpg";

import tour_13 from "./tour_13.jpg";
import tour_13_1 from "./tour_13_1.jpg";
import tour_13_2 from "./tour_13_2.jpg";
import tour_13_3 from "./tour_13_3.jpeg";

import tour_14 from "./tour_14.avif";
import tour_14_1 from "./tour_14_1.jpg";
import tour_14_2 from "./tour_14_2.jpg";
import tour_14_3 from "./tour_14_3.jpg";

import tour_15 from "./tour_15.jpg";
import tour_15_1 from "./tour_15_1.webp";
import tour_15_2 from "./tour_15_2.avif";
import tour_15_3 from "./tour_15_3.jpg";

export const categories = [
  {
    name: "Theme Park",
  },
  {
    name: "Water Park",
  },
  {
    name: "Museums",
  },
  {
    name: "Parks & Gardens",
  },
  {
    name: "Zoo & Aquariums",
  },
  {
    name: "Observation Deck",
  },
  {
    name: "Events & Shows",
  },
  {
    name: "Tours",
  },
  {
    name: "Cruises",
  },
  {
    name: "Water Activities",
  },
  {
    name: "Outdoor Activities",
  },
  {
    name: "Others",
  },
];

// icons
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

export const books = [
  {
    id: "1",
    name: "Burj Khalifa",
    image: [
      { value: tour_1 },
      { value: tour_1_1 },
      { value: tour_1_2 },
      { value: tour_1_3 },
    ],
    price: 158,
    kidprice: 202,
    description:
      "Burj Khalifa, a symbol of Dubai's ambition, stands as an architectural masterpiece. Inspired by the Hymenocallis flower, its sleek, tapering design reflects Islamic influences and modern innovation. Housing luxury apartments, offices, and a hotel, it offers breathtaking views from its observation decks. The shimmering facade and iconic fountains captivate millions, making it a global landmark and a testament to human ingenuity.",
    description2:
      "Burj Khalifa, world's tallest marvel, symbolizes innovation and ambition.",
    category: "Observation Deck",
    date: 1716634345448,
    popular: true,
    mostbooked: true,
    pickup: false,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "1_addon1", image: tour_1, addon_name: "Burj Khalifa Add on 1", price: 300, kidprice: 255 },
      { id: "1_addon2", image: tour_1, addon_name: "Burj Khalifa Add on 2", price: 100, kidprice: 150 },
      { id: "1_addon3", image: tour_1, addon_name: "Burj Khalifa Add on 3", price: 200, kidprice: 2000 },
      { id: "1_addon4", image: tour_1, addon_name: "Burj Khalifa Add on 4", price: 2500, kidprice: 241 },
      { id: "1_addon5", image: tour_1, addon_name: "Burj Khalifa Add on 5", price: 166, kidprice: 123 },
      { id: "1_addon6", image: tour_1, addon_name: "Burj Khalifa Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "2",
    name: "IMG Worlds of Adventure",
    image: [
      { value: tour_2 },
      { value: tour_2_1 },
      { value: tour_2_2 },
      { value: tour_2_3 },
    ],
    price: 206,
    kidprice: 202,
    description:
      "IMG Worlds of Adventure is Dubai's largest indoor theme park, featuring four unique zones: Marvel, Cartoon Network, Lost Valley - Dinosaur Adventure, and IMG Boulevard. It offers a mix of thrilling rides, interactive attractions, and entertainment experiences for all ages. From meeting Marvel superheroes and Cartoon Network characters to exploring a prehistoric world with life-sized dinosaurs, visitors can enjoy a wide range of activities. The park combines world-class rides, dining, and shopping in a climate-controlled environment, making it an ideal destination for families and adventure seekers.",
    description2:
      "IMG Worlds of Adventure offers thrilling rides and adventures for all ages.",
    category: "Theme Park",
    date: 1716634345448,
    popular: true,
    mostbooked: true,
    pickup: true,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "2_addon1", image: tour_1, addon_name: "IMG World Add on 1", price: 300, kidprice: 255 },
      { id: "2_addon2", image: tour_1, addon_name: "IMG World Add on 2", price: 100, kidprice: 150 },
      { id: "2_addon3", image: tour_1, addon_name: "IMG World Add on 3", price: 200, kidprice: 2000 },
      { id: "2_addon4", image: tour_1, addon_name: "IMG World Add on 4", price: 2500, kidprice: 241 },
      { id: "2_addon5", image: tour_1, addon_name: "IMG World Add on 5", price: 166, kidprice: 123 },
      { id: "2_addon6", image: tour_1, addon_name: "IMG World Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "3",
    name: "Museum of the Future",
    image: [
      { value: tour_3 },
      { value: tour_3_1 },
      { value: tour_3_2 },
      { value: tour_3_3 },
    ],
    price: 154,
    kidprice: 202,
    description:
      "The Museum of the Future in Dubai is a groundbreaking architectural marvel and a hub for innovation and technology. It offers a glimpse into what the world could look like decades from now, showcasing futuristic concepts, cutting-edge designs, and interactive exhibits. With its unique torus-shaped design, the museum itself is an engineering wonder. Visitors can explore themes like AI, space exploration, sustainability, and the future of healthcare. It's not just a place to view exhibits but a space that inspires imagination and creativity, encouraging everyone to think beyond the limits of today. The Museum of the Future is more than a museum—it's a journey into tomorrow.",
    description2:
      "Discover innovation, technology, and creativity at the incredible Museum of the Future.",
    category: "Museums",
    date: 1716634345448,
    popular: true,
    mostbooked: true,
    pickup: false,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "3_addon1", image: tour_1, addon_name: "Museum of the Future Add on 1", price: 300, kidprice: 255 },
      { id: "3_addon2", image: tour_1, addon_name: "Museum of the Future Add on 2", price: 100, kidprice: 150 },
      { id: "3_addon3", image: tour_1, addon_name: "Museum of the Future Add on 3", price: 200, kidprice: 2000 },
      { id: "3_addon4", image: tour_1, addon_name: "Museum of the Future Add on 4", price: 2500, kidprice: 241 },
      { id: "3_addon5", image: tour_1, addon_name: "Museum of the Future Add on 5", price: 166, kidprice: 123 },
      { id: "3_addon6", image: tour_1, addon_name: "Museum of the Future Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "4",
    name: "Dubai Miracle Garden",
    image: [
      { value: tour_4 },
      { value: tour_4_1 },
      { value: tour_4_2 },
      { value: tour_4_3 },
    ],
    price: 59,
    kidprice: 202,
    description:
      "Dubai Miracle Garden is a stunning attraction that showcases millions of vibrant flowers arranged in breathtaking designs and patterns. As one of the largest natural flower gardens in the world, it features unique displays like heart-shaped arches, life-sized floral structures, and themed gardens. This magical destination combines creativity and nature, offering a truly unforgettable experience. It's a paradise for flower lovers and photographers alike",
    description2:
      "Experience vibrant colors, breathtaking designs, and floral artistry at Dubai Miracle Garden.",
    category: "Parks & Gardens",
    date: 1716634345449,
    popular: true,
    mostbooked: true,
    pickup: true,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "4_addon1", image: tour_1, addon_name: "Dubai Miracle Add on 1", price: 300, kidprice: 255 },
      { id: "4_addon2", image: tour_1, addon_name: "Dubai Miracle Add on 2", price: 100, kidprice: 150 },
      { id: "4_addon3", image: tour_1, addon_name: "Dubai Miracle Add on 3", price: 200, kidprice: 2000 },
      { id: "4_addon4", image: tour_1, addon_name: "Dubai Miracle Add on 4", price: 2500, kidprice: 241 },
      { id: "4_addon5", image: tour_1, addon_name: "Dubai Miracle Add on 5", price: 166, kidprice: 123 },
      { id: "4_addon6", image: tour_1, addon_name: "Dubai Miracle Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "5",
    name: "Inside Burj Al Arab",
    image: [
      { value: tour_5 },
      { value: tour_5_1 },
      { value: tour_5_2 },
      { value: tour_5_3 },
    ],
    price: 246,
    kidprice: 202,
    description:
      "The Burj Al Arab, often referred to as the world's most luxurious hotel, is an iconic symbol of Dubai's grandeur and innovation. Shaped like a billowing sail, this architectural masterpiece offers unparalleled luxury with opulent suites, world-class dining, and exceptional service. Situated on its own island, the hotel provides stunning views of the Arabian Gulf. It's a true testament to elegance, exclusivity, and modern design.",
    description2:
      "Experience unparalleled luxury, iconic architecture, and world-class hospitality at Burj Al Arab.",
    category: "Observation Deck",
    date: 1716634345450,
    popular: true,
    mostbooked: true,
    pickup: false,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "5_addon1", image: tour_1, addon_name: "Al Arab Add on 1", price: 300, kidprice: 255 },
      { id: "5_addon2", image: tour_1, addon_name: "Al Arab Add on 2", price: 100, kidprice: 150 },
      { id: "5_addon3", image: tour_1, addon_name: "Al Arab Add on 3", price: 200, kidprice: 2000 },
      { id: "5_addon4", image: tour_1, addon_name: "Al Arab Add on 4", price: 2500, kidprice: 241 },
      { id: "5_addon5", image: tour_1, addon_name: "Al Arab Add on 5", price: 166, kidprice: 123 },
      { id: "5_addon6", image: tour_1, addon_name: "Al Arab Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "6",
    name: "Dubai Desert Safari",
    image: [
      { value: tour_6 },
      { value: tour_6_1 },
      { value: tour_6_2 },
      { value: tour_6_3 },
    ],
    price: 268,
    kidprice: 202,
    description:
      "The Dubai Desert Safari is a must-try adventure that offers an exciting blend of thrilling activities and cultural experiences. From adrenaline-pumping dune bashing and quad biking to serene camel rides and sandboarding, it caters to every adventurer. As the sun sets over the golden dunes, you'll enjoy a traditional Bedouin-style camp with delicious food, henna art, and captivating entertainment like belly dancing and Tanoura shows.",
    description2:
      "Experience thrilling dune bashing, camel rides, and mesmerizing sunsets on Dubai Desert Safari.",
    category: "Outdoor Activities",
    date: 1716634345451,
    popular: true,
    mostbooked: true,
    pickup: true,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "6_addon1", image: tour_1, addon_name: "Desert safari Add on 1", price: 300, kidprice: 255 },
      { id: "6_addon2", image: tour_1, addon_name: "Desert safari Add on 2", price: 100, kidprice: 150 },
      { id: "6_addon3", image: tour_1, addon_name: "Desert safari Add on 3", price: 200, kidprice: 2000 },
      { id: "6_addon4", image: tour_1, addon_name: "Desert safari Add on 4", price: 2500, kidprice: 241 },
      { id: "6_addon5", image: tour_1, addon_name: "Desert safari Add on 5", price: 166, kidprice: 123 },
      { id: "6_addon6", image: tour_1, addon_name: "Desert safari Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "7",
    name: "Legoland Waterpark Dubai",
    image: [
      { value: tour_7 },
      { value: tour_7_1 },
      { value: tour_7_2 },
      { value: tour_7_3 },
    ],
    price: 191,
    kidprice: 202,
    description:
      "Legoland Water Park Dubai is an exciting destination for families and kids looking for fun in the sun. With a variety of thrilling water slides, lazy rivers, and interactive play areas, it's designed to provide endless hours of entertainment. Children can build their own Lego boats, create colorful sandcastles, or enjoy gentle water rides. The park's vibrant and safe environment encourages imaginative play and teamwork, making it perfect for families to spend quality time together. Whether it's splashing around in the wave pool or zooming down water slides, Legoland Water Park offers an unforgettable experience for all ages.",
    description2:
      "Legoland Water Park Dubai offers fun slides, lazy rivers, and building activities for kids and families.",
    category: "Water Park",
    date: 1716634345452,
    popular: true,
    mostbooked: true,
    pickup: false,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "7_addon1", image: tour_1, addon_name: "Legoland WaterPark Add on 1", price: 300, kidprice: 255 },
      { id: "7_addon2", image: tour_1, addon_name: "Legoland WaterPark Add on 2", price: 100, kidprice: 150 },
      { id: "7_addon3", image: tour_1, addon_name: "Legoland WaterPark Add on 3", price: 200, kidprice: 2000 },
      { id: "7_addon4", image: tour_1, addon_name: "Legoland WaterPark Add on 4", price: 2500, kidprice: 241 },
      { id: "7_addon5", image: tour_1, addon_name: "Legoland WaterPark Add on 5", price: 166, kidprice: 123 },
      { id: "7_addon6", image: tour_1, addon_name: "Legoland WaterPark Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "8",
    name: "Wild Wadi Waterpark Dubai",
    image: [
      { value: tour_8 },
      { value: tour_8_1 },
      { value: tour_8_2 },
      { value: tour_8_3 },
    ],
    price: 286,
    kidprice: 202,
    description:
      "Wild Wadi Waterpark in Dubai is a top destination for water fun and adventure, offering a mix of thrilling rides and family-friendly attractions. Located at the base of the Burj Al Arab, it combines traditional Arabian architecture with modern water play features. Highlights include the Jumeirah Sceirah, one of the world's tallest water slides, and a lazy river for a more relaxed experience. The park also has a wave pool, kids' play areas, and plenty of shaded spots. Whether you're looking for high-speed thrills or a place to unwind, Wild Wadi Waterpark caters to all ages and is perfect for a day of fun in the sun.",
    description2:
      "Wild Wadi Waterpark Dubai offers thrilling slides, wave pools, and adventure for families and thrill-seekers.",
    category: "Water Park",
    date: 1716634345453,
    popular: true,
    mostbooked: true,
    pickup: false,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "8_addon1", image: tour_1, addon_name: "Wild Wadi Add on 1", price: 300, kidprice: 255 },
      { id: "8_addon2", image: tour_1, addon_name: "Wild Wadi Add on 2", price: 100, kidprice: 150 },
      { id: "8_addon3", image: tour_1, addon_name: "Wild Wadi Add on 3", price: 200, kidprice: 2000 },
      { id: "8_addon4", image: tour_1, addon_name: "Wild Wadi Add on 4", price: 2500, kidprice: 241 },
      { id: "8_addon5", image: tour_1, addon_name: "Wild Wadi Add on 5", price: 166, kidprice: 123 },
      { id: "8_addon6", image: tour_1, addon_name: "Wild Wadi Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "9",
    name: "Dubai Aquarium and Underwater Zoo",
    image: [
      { value: tour_9 },
      { value: tour_9_1 },
      { value: tour_9_2 },
      { value: tour_9_3 },
    ],
    price: 195,
    kidprice: 202,
    description:
      "Dubai Aquarium and Underwater Zoo at The Dubai Mall offers an immersive experience into marine life with over 140 diverse species. The centerpiece is a giant suspended tank filled with sharks, rays, and colorful fish, viewed through a 48-meter tunnel. Visitors can also interact with marine creatures in touch tanks and enjoy educational exhibits on marine conservation. This is an exciting and informative destination for all ages, providing a deep dive into the underwater world.",
    description2:
      "Dubai Aquarium and Underwater Zoo showcases diverse marine life, including sharks, rays, and colorful fish.",
    category: "Zoo & Aquariums",
    date: 1716634345454,
    popular: true,
    mostbooked: true,
    pickup: false,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "9_addon1", image: tour_1, addon_name: "Dubai Aquarium Add on 1", price: 300, kidprice: 255 },
      { id: "9_addon2", image: tour_1, addon_name: "Dubai Aquarium Add on 2", price: 100, kidprice: 150 },
      { id: "9_addon3", image: tour_1, addon_name: "Dubai Aquarium Add on 3", price: 200, kidprice: 2000 },
      { id: "9_addon4", image: tour_1, addon_name: "Dubai Aquarium Add on 4", price: 2500, kidprice: 241 },
      { id: "9_addon5", image: tour_1, addon_name: "Dubai Aquarium Add on 5", price: 166, kidprice: 123 },
      { id: "9_addon6", image: tour_1, addon_name: "Dubai Aquarium Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "10",
    name: "The Lost Chambers Aquarium",
    image: [
      { value: tour_10 },
      { value: tour_10_1 },
      { value: tour_10_2 },
      { value: tour_10_3 },
    ],
    price: 132,
    kidprice: 202,
    description:
      "The Lost Chambers Aquarium, located at Atlantis, The Palm in Dubai, offers a captivating glimpse into the ancient underwater city of Atlantis. Through a series of tunnels and chambers, visitors can explore a labyrinth of marine exhibits that include sharks, rays, and a variety of fish, all set against the backdrop of sunken ruins and coral formations. The interactive exhibits and storytelling provide an immersive experience, letting guests uncover the legend of Atlantis and its mysterious past. It's a fascinating adventure for families and a must-visit destination for anyone curious about marine life and ancient myths.",
    description2:
      "The Lost Chambers Aquarium reveals the mysteries of the lost underwater city of Atlantis.",
    category: "Zoo & Aquariums",
    date: 1716634345455,
    popular: true,
    mostbooked: true,
    pickup: false,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "10_addon1", image: tour_1, addon_name: "Lost Chambers Add on 1", price: 300, kidprice: 255 },
      { id: "10_addon2", image: tour_1, addon_name: "Lost Chambers Add on 2", price: 100, kidprice: 150 },
      { id: "10_addon3", image: tour_1, addon_name: "Lost Chambers Add on 3", price: 200, kidprice: 2000 },
      { id: "10_addon4", image: tour_1, addon_name: "Lost Chambers Add on 4", price: 2500, kidprice: 241 },
      { id: "10_addon5", image: tour_1, addon_name: "Lost Chambers Add on 5", price: 166, kidprice: 123 },
      { id: "10_addon6", image: tour_1, addon_name: "Lost Chambers Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "11",
    name: "Sky Views Dubai",
    image: [
      { value: tour_11 },
      { value: tour_11_1 },
      { value: tour_11_2 },
      { value: tour_11_3 },
    ],
    price: 84,
    kidprice: 202,
    description:
      "Sky Views Dubai offers an unparalleled experience with stunning views of Dubai's iconic skyline from a transparent, glass-floored observation deck. Perched high above the bustling city, visitors can take in breathtaking panoramas of the city's architectural wonders, from the Burj Khalifa to the Palm Jumeirah. The Sky Edge walk, a thrilling transparent skywalk, allows you to step out over the edge for a truly daring experience. Whether you're a thrill-seeker or simply looking for a unique vantage point, Sky Views Dubai provides a memorable way to appreciate the city's stunning landscape",
    description2:
      "Sky Views Dubai offers breathtaking views of the city's skyline from a glass-floored observation deck.",
    category: "Observation Deck",
    date: 1716634345456,
    popular: true,
    mostbooked: true,
    pickup: false,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "11_addon1", image: tour_1, addon_name: "Sky Views Add on 1", price: 300, kidprice: 255 },
      { id: "11_addon2", image: tour_1, addon_name: "Sky Views Add on 2", price: 100, kidprice: 150 },
      { id: "11_addon3", image: tour_1, addon_name: "Sky Views Add on 3", price: 200, kidprice: 2000 },
      { id: "11_addon4", image: tour_1, addon_name: "Sky Views Add on 4", price: 2500, kidprice: 241 },
      { id: "11_addon5", image: tour_1, addon_name: "Sky Views Add on 5", price: 166, kidprice: 123 },
      { id: "11_addon6", image: tour_1, addon_name: "Sky Views Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "12",
    name: "Tandem Skydive At The Palm Dubai",
    image: [
      { value: tour_12 },
      { value: tour_12_1 },
      { value: tour_12_2 },
      { value: tour_12_3 },
    ],
    price: 2578,
    kidprice: 202,
    description:
      "Tandem Skydive at The Palm Dubai is an exhilarating experience that lets you jump from 13,000 feet above the iconic Palm Jumeirah. As a tandem skydive, you'll be harnessed to an experienced instructor who guides you through the entire jump. After freefalling for over a minute, you'll open the parachute and float down gently, taking in breathtaking views of the Dubai coastline, skyscrapers, and luxury resorts. It's an unforgettable adventure that combines adrenaline with spectacular scenery, making it a must-try activity for thrill-seekers visiting Dubai.",
    description2:
      "Tandem Skydive at The Palm Dubai offers a breathtaking freefall and stunning views of the iconic Palm Jumeirah.",
    category: "Outdoor Activities",
    date: 1716634345457,
    popular: true,
    mostbooked: true,
    pickup: false,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "12_addon1", image: tour_1, addon_name: "Tandem Skydive Add on 1", price: 300, kidprice: 255 },
      { id: "12_addon2", image: tour_1, addon_name: "Tandem Skydive Add on 2", price: 100, kidprice: 150 },
      { id: "12_addon3", image: tour_1, addon_name: "Tandem Skydive Add on 3", price: 200, kidprice: 2000 },
      { id: "12_addon4", image: tour_1, addon_name: "Tandem Skydive Add on 4", price: 2500, kidprice: 241 },
      { id: "12_addon5", image: tour_1, addon_name: "Tandem Skydive Add on 5", price: 166, kidprice: 123 },
      { id: "12_addon6", image: tour_1, addon_name: "Tandem Skydive Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "13",
    name: "Royal Marina Dhow Cruise Premium",
    image: [
      { value: tour_13 },
      { value: tour_13_1 },
      { value: tour_13_2 },
      { value: tour_13_3 },
    ],
    price: 239,
    kidprice: 202,
    description:
      "The Royal Marina Dhow Cruise Premium offers a sophisticated evening experience on Dubai Marina. Guests can enjoy a delightful dinner buffet with a variety of international cuisines while cruising along the scenic waterfront, surrounded by towering skyscrapers and luxury yachts. As the sun sets, the cruise transforms into a tranquil oasis, complete with live entertainment and cultural performances like traditional Tanoura dance shows. It's a perfect way to experience Dubai's iconic skyline from the water while enjoying a memorable evening of dining and entertainment.",
    description2:
      "Royal Marina Dhow Cruise Premium offers an elegant evening with stunning views, dining, and live entertainment on Dubai Marina.",
    category: "Cruises",
    date: 1716634345458,
    popular: true,
    mostbooked: true,
    pickup: false,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "13_addon1", image: tour_1, addon_name: "Royal Marina Add on 1", price: 300, kidprice: 255 },
      { id: "13_addon2", image: tour_1, addon_name: "Royal Marina Add on 2", price: 100, kidprice: 150 },
      { id: "13_addon3", image: tour_1, addon_name: "Royal Marina Add on 3", price: 200, kidprice: 2000 },
      { id: "13_addon4", image: tour_1, addon_name: "Royal Marina Add on 4", price: 2500, kidprice: 241 },
      { id: "13_addon5", image: tour_1, addon_name: "Royal Marina Add on 5", price: 166, kidprice: 123 },
      { id: "13_addon6", image: tour_1, addon_name: "Royal Marina Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "14",
    name: "Legoland Dubai",
    image: [
      { value: tour_14 },
      { value: tour_14_1 },
      { value: tour_14_2 },
      { value: tour_14_3 },
    ],
    price: 194,
    kidprice: 202,
    description:
      "Legoland Dubai is a fantastic family-friendly destination that brings the world of Lego to life. With more than 40 interactive rides, shows, and attractions, it's a place where kids can build, play, and learn with millions of colorful Lego bricks. From Lego-themed roller coasters and water rides to hands-on building experiences in the Lego City and Lego Kingdoms, there's something for every young builder. The park is divided into several zones, each offering unique experiences such as Lego City, Adventure, and Miniland, where iconic Dubai landmarks are recreated in Lego form. Legoland Dubai is an ideal destination for a fun-filled day out with the family.",
    description2:
      "Legoland Dubai features themed attractions, interactive rides, and millions of colorful Lego bricks for kids of all ages.",
    category: "Theme Park",
    date: 1716634345459,
    popular: true,
    mostbooked: true,
    pickup: false,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "14_addon1", image: tour_1, addon_name: "Legoland Add on 1", price: 300, kidprice: 255 },
      { id: "14_addon2", image: tour_1, addon_name: "Legoland Add on 2", price: 100, kidprice: 150 },
      { id: "14_addon3", image: tour_1, addon_name: "Legoland Add on 3", price: 200, kidprice: 2000 },
      { id: "14_addon4", image: tour_1, addon_name: "Legoland Add on 4", price: 2500, kidprice: 241 },
      { id: "14_addon5", image: tour_1, addon_name: "Legoland Add on 5", price: 166, kidprice: 123 },
      { id: "14_addon6", image: tour_1, addon_name: "Legoland Add on 6", price: 187, kidprice: 236 },
    ],
  },
  {
    id: "15",
    name: "Ski Dubai",
    image: [
      { value: tour_15 },
      { value: tour_15_1 },
      { value: tour_15_2 },
      { value: tour_15_3 },
    ],
    price: 235,
    kidprice: 202,
    description:
      "Ski Dubai, located inside the Mall of the Emirates, offers a unique winter wonderland experience in the heart of the desert. It features an indoor ski resort with real snow, where visitors can enjoy skiing, snowboarding, tobogganing, and even encounter penguins at the onsite Penguin Encounter. The facility offers a variety of slopes for all skill levels, from gentle beginner runs to challenging black diamond runs. For those new to skiing or snowboarding, Ski Dubai provides lessons and equipment rentals. It's a perfect destination for families, thrill-seekers, and anyone looking to escape the Dubai heat and experience winter sports.",
    description2:
      "Ski Dubai offers year-round snow fun with indoor slopes, ski lessons, and exciting activities like snowboarding and tobogganing.",
    category: "Theme Park",
    date: 1716634345460,
    popular: true,
    mostbooked: true,
    pickup: false,
    expectations: [
      "Free of cost pickup service.",
      "Our staff will contact you to confirm tour dates.",
      "Our guides understand more than one language.",
      "Can contact with our experts for recommendations.",
      "Can save this tour to cart for future purchases or easy access.",
    ],
    addons: [
      { id: "15_addon1", image: tour_1, addon_name: "Ski Dubai Add on 1", price: 300, kidprice: 255 },
      { id: "15_addon2", image: tour_1, addon_name: "Ski Dubai Add on 2", price: 100, kidprice: 150 },
      { id: "15_addon3", image: tour_1, addon_name: "Ski Dubai Add on 3", price: 200, kidprice: 2000 },
      { id: "15_addon4", image: tour_1, addon_name: "Ski Dubai Add on 4", price: 2500, kidprice: 241 },
      { id: "15_addon5", image: tour_1, addon_name: "Ski Dubai Add on 5", price: 166, kidprice: 123 },
      { id: "15_addon6", image: tour_1, addon_name: "Ski Dubai Add on 6", price: 187, kidprice: 236 },
    ],
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      { label: "About Us", value: "/#aboutus" },
      { label: "Your Cart", value: "/cart#cart" },
      { label: "Book Services", value: "/tours#tours" },
    ],
  },
  {
    title: "Raise A Query",
    links: [
      { label: "Request For Visa", value: "/HelpCenter#help-center" },
      { label: "Ask For Help", value: "/HelpCenter#help-center" },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Landline", value: "04-770-5677" },
    { label: "WhatsApp - (Jitesh)", value: "+971 4 770 5677" },
    { label: "Email", value: "booking@yourchoicestar.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/yourchoicetourism/",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/yourchoicetourism?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    { icon: <FaXTwitter />, url: "https://www.x.com/" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/" },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/company/your-choice-star-tourism-llc/",
    },
  ],
};

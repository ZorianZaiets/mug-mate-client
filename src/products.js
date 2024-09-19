import aluminium_cupholder from "./img/aluminium-cupholder.jpeg";
import wood_cupholder from "./img/wood-cupholder.jpeg";
import plastik_cupholder from "./img/plastik-cupholder.jpeg";
import aluminium_wood_cupholder from "./img/aluminium-wood-cupholder.jpeg";

import wood_1 from './img/wood_img/wood_1.jpg';
import wood_2 from './img/wood_img/wood_2.jpg';
import wood_3 from './img/wood_img/wood_3.jpg';
import wood_4 from './img/wood_img/wood_4.jpg';
import wood_5 from './img/wood_img/wood_5.jpg';

import allu_1 from './img/alluminium_img/allu_1.jpg';
import allu_2 from './img/alluminium_img/allu_2.jpg';
import allu_3 from './img/alluminium_img/allu_3.jpg';
import allu_4 from './img/alluminium_img/allu_4.jpg';
import allu_5 from './img/alluminium_img/allu_5.jpg';

import plastic_1 from './img/plastic_img/plastic_1.jpg';
import plastic_2 from './img/plastic_img/plastic_2.jpg';
import plastic_3 from './img/plastic_img/plastic_3.jpg';
import plastic_4 from './img/plastic_img/plastic_4.jpg';
import plastic_5 from './img/plastic_img/plastic_5.jpg';

import wood_allu_1 from './img/wood_alluminium_img/wood_allu_1.jpg';
import wood_allu_2 from './img/wood_alluminium_img/wood_allu_2.jpg';
import wood_allu_3 from './img/wood_alluminium_img/wood_allu_3.jpg';
import wood_allu_4 from './img/wood_alluminium_img/wood_allu_4.jpg';
import wood_allu_5 from './img/wood_alluminium_img/wood_allu_5.jpg';


const wood_images = [wood_1, wood_2, wood_3, wood_4, wood_5];
const allu_images = [allu_1, allu_2, allu_3, allu_4, allu_5];
const plastic_images = [plastic_1, plastic_2, plastic_3, plastic_4, plastic_5];
const wood_allu_images = [wood_allu_5, wood_allu_2, wood_allu_3, wood_allu_4, wood_allu_1];

const wood_description_eng = "This MugMate is made from high-quality, sustainably sourced wood, offering a warm and natural feel. The wooden material gives the coaster a timeless look, perfect for those who appreciate nature-inspired designs. Its organic texture brings a unique tactile experience, making it an elegant yet functional addition to your coffee or tea setup.";
const allu_description_eng = "The aluminum MugMate is a true reflection of sleek, modern design. Made from premium, lightweight aluminum, this version stands out with its metallic sheen and refined feel. Not only is aluminum resistant to corrosion and wear, but it also provides excellent heat conduction, ensuring your drink stays at the perfect temperature. A choice for those who value both aesthetics and durability.";
const plastic_description_eng = "Crafted from high-grade, durable plastic, this version of MugMate is both lightweight and sturdy. The smooth, modern surface of the plastic offers a minimalist design that blends seamlessly with any environment. Ideal for those seeking an affordable, stylish solution, this plastic edition delivers convenience and functionality, making it perfect for everyday use.";
const wood_allu_description_eng = "Combining the best of both worlds, this MugMate features a striking blend of aluminum and wood. The smooth, polished aluminum provides a modern edge, while the natural wood element adds warmth and character. This fusion of materials not only enhances the aesthetic but also boosts durability and heat management. Perfect for those looking for a balance of contemporary design with a touch of nature.";

export const products = [
    {
        id: 1,
        title: 'Aluminium Mate',
        img: allu_images[0],
        price: '235',
        photos: allu_images,
        description_eng: allu_description_eng
    },

    {
        id: 2,
        title: 'Wood Mate',
        img: wood_images[0],
        price: '194',
        photos: wood_images,
        description_eng: wood_description_eng
    },

    {
        id: 3,
        title: 'Plastik Mate',
        img: plastic_images[0],
        price: '155',
        photos: plastic_images,
        description_eng: plastic_description_eng
    },

    {
        id: 4,
        title: 'W&A Mate',
        img: wood_allu_images[0],
        price: '199',
        photos: wood_allu_images,
        description_eng: wood_allu_description_eng
    },];
import React from 'react';
import ProductCategory from '../components/ProductCategory';
import dummyImage from '../assets/dummyImage.jpeg'; 

const shadesProducts = [
  {
    id: 601,
    title: "AVANT-GARDE OVAL SHADES",
    price: "₹2,800.00",
    priceNum: 2800,
    image: dummyImage,
    colors: ["Black", "Brown"],
    sizes: ["One Size"],
    gridClass: "col-span-2 md:col-span-3 h-52 sm:h-72 md:h-[400px]"
  },
  {
    id: 602,
    title: "CYBER MATRIX GLASSES",
    price: "₹3,200.00",
    priceNum: 3200,
    image: dummyImage,
    colors: ["Silver", "Black"],
    sizes: ["One Size"],
    gridClass: "col-span-1 md:col-span-2 h-44 sm:h-60 md:h-[300px]"
  },
  {
    id: 603,
    title: "STEALTH BLACK AVIATORS",
    price: "₹2,500.00",
    priceNum: 2500,
    image: dummyImage,
    colors: ["Black"],
    sizes: ["One Size"],
    gridClass: "col-span-1 row-span-2 h-[368px] sm:h-[504px] md:h-[624px]"
  }
];

const Shades = (props) => {
  return <ProductCategory title="SHADES" products={shadesProducts} {...props} />;
};

export default Shades;
import React from 'react';
import ProductCategory from '../components/ProductCategory';
import dummyImage from '../assets/dummyImage.jpeg'; 

const shoeProducts = [
  {
    id: 201,
    title: "CHUNKY RUNNER V1 - BLK",
    price: "₹4,500.00",
    priceNum: 4500,
    image: dummyImage,
    colors: ["Black", "White"],
    sizes: ["7", "8", "9", "10", "11"],
    gridClass: "col-span-2 md:col-span-3 h-52 sm:h-72 md:h-[400px]"
  },
  {
    id: 202,
    title: "STREET LOW SNEAKER",
    price: "₹3,999.00",
    priceNum: 3999,
    image: dummyImage,
    colors: ["White", "Red"],
    sizes: ["7", "8", "9", "10"],
    gridClass: "col-span-1 md:col-span-2 h-44 sm:h-60 md:h-[300px]"
  },
  {
    id: 203,
    title: "PLATFORM BOOT - RED",
    price: "₹5,499.00",
    priceNum: 5499,
    image: dummyImage,
    colors: ["Red", "Black"],
    sizes: ["7", "8", "9", "10", "11"],
    gridClass: "col-span-1 row-span-2 h-[368px] sm:h-[504px] md:h-[624px]"
  }
];

const Shoes = (props) => {
  return <ProductCategory title="SHOES" products={shoeProducts} {...props} />;
};

export default Shoes;
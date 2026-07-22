import React from 'react';
import ProductCategory from '../components/ProductCategory';
import dummyImage from '../assets/dummyImage.jpeg'; 

const accessoryProducts = [
  {
    id: 401,
    title: "MINIMALIST CARDHOLDER",
    price: "₹1,200.00",
    priceNum: 1200,
    image: dummyImage,
    colors: ["Black", "Brown"],
    sizes: ["One Size"],
    gridClass: "col-span-2 md:col-span-3 h-52 sm:h-72 md:h-[400px]"
  },
  {
    id: 402,
    title: "STREETWEAR BEANIE",
    price: "₹899.00",
    priceNum: 899,
    image: dummyImage,
    colors: ["Black", "Red", "White"],
    sizes: ["One Size"],
    gridClass: "col-span-1 md:col-span-2 h-44 sm:h-60 md:h-[300px]"
  },
  {
    id: 403,
    title: "SILVER LINK CHAIN",
    price: "₹1,599.00",
    priceNum: 1599,
    image: dummyImage,
    colors: ["Silver"],
    sizes: ["One Size"],
    gridClass: "col-span-1 row-span-2 h-[368px] sm:h-[504px] md:h-[624px]"
  }
];

const Accessories = (props) => {
  return <ProductCategory title="ACCESSORIES" products={accessoryProducts} {...props} />;
};

export default Accessories;
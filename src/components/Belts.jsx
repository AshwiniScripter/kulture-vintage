import React from 'react';
import ProductCategory from '../components/ProductCategory';
import dummyImage from '../assets/dummyImage.jpeg'; 

const beltsProducts = [
  {
    id: 301,
    title: "INDUSTRIAL UTILITY BELT",
    price: "₹1,999.00",
    priceNum: 1999,
    image: dummyImage,
    colors: ["Black"],
    sizes: ["S", "M", "L"],
    gridClass: "col-span-2 md:col-span-3 h-52 sm:h-72 md:h-[400px]"
  },
  {
    id: 302,
    title: "CLASSIC LEATHER STRAP",
    price: "₹2,499.00",
    priceNum: 2499,
    image: dummyImage,
    colors: ["Brown", "Black"],
    sizes: ["S", "M", "L"],
    gridClass: "col-span-1 md:col-span-2 h-44 sm:h-60 md:h-[300px]"
  },
  {
    id: 303,
    title: "MATTE BLACK BUCKLE BELT",
    price: "₹1,750.00",
    priceNum: 1750,
    image: dummyImage,
    colors: ["Black"],
    sizes: ["S", "M", "L"],
    gridClass: "col-span-1 row-span-2 h-[368px] sm:h-[504px] md:h-[624px]"
  }
];

const Belts = (props) => {
  return <ProductCategory title="BELTS" products={beltsProducts} {...props} />;
};

export default Belts;
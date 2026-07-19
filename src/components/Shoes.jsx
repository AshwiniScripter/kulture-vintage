import React from 'react';
import ProductCategory from '../components/ProductCategory';
import dummyImage from '../assets/dummyImage.jpeg'; 

const shoeProducts = [
  {
    id: 201,
    title: "CHUNKY RUNNER V1 - BLK",
    price: "₹4,500.00",
    image: dummyImage,
    gridClass: "col-span-2 md:col-span-3 h-52 sm:h-72 md:h-[400px]"
  },
  {
    id: 202,
    title: "STREET LOW SNEAKER",
    price: "₹3,999.00",
    image: dummyImage,
    gridClass: "col-span-1 md:col-span-2 h-44 sm:h-60 md:h-[300px]"
  },
  {
    id: 203,
    title: "PLATFORM BOOT - RED",
    price: "₹5,499.00",
    image: dummyImage,
    gridClass: "col-span-1 row-span-2 h-[368px] sm:h-[504px] md:h-[624px]"
  }
];

const Shoes = (props) => {
  return <ProductCategory title="SHOES" products={shoeProducts} {...props} />;
};

export default Shoes;
import React from 'react';
import ProductCategory from '../components/ProductCategory';
import dummyImage from '../assets/dummyImage.jpeg'; 

const watchesProducts = [
  {
    id: 501,
    title: "CHRONO SPORT MATTE",
    price: "₹9,500.00",
    priceNum: 9500,
    image: dummyImage,
    colors: ["Black", "Silver"],
    sizes: ["One Size"],
    gridClass: "col-span-2 md:col-span-3 h-52 sm:h-72 md:h-[400px]"
  },
  {
    id: 502,
    title: "CYBERPUNK DIGITAL V1",
    price: "₹7,999.00",
    priceNum: 7999,
    image: dummyImage,
    colors: ["Black", "Green"],
    sizes: ["One Size"],
    gridClass: "col-span-1 md:col-span-2 h-44 sm:h-60 md:h-[300px]"
  },
  {
    id: 503,
    title: "STEALTH AUTOMATIC",
    price: "₹14,499.00",
    priceNum: 14499,
    image: dummyImage,
    colors: ["Black"],
    sizes: ["One Size"],
    gridClass: "col-span-1 row-span-2 h-[368px] sm:h-[504px] md:h-[624px]"
  }
];

const Watches = (props) => {
  return <ProductCategory title="WATCHES" products={watchesProducts} {...props} />;
};

export default Watches;
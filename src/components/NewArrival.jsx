import React from 'react';
import ProductCategory from '../components/ProductCategory';
import dummyImage from '../assets/dummyImage.jpeg';

const newArrivalProducts = [
  {
    id: 105,
    title: "OVERSIZED STREET TEE",
    price: "₹1,999.00",
    priceNum: 1999,
    image: dummyImage,
    colors: ["Black", "Red", "Green"],
    sizes: ["S", "M", "L", "XL"],
    gridClass: "col-span-2 md:col-span-3 h-52 sm:h-72 md:h-[400px]"
  },
  {
    id: 203,
    title: "PLATFORM BOOT - RED",
    price: "₹5,499.00",
    priceNum: 5499,
    image: dummyImage,
    colors: ["Red", "Black"],
    sizes: ["7", "8", "9", "10", "11"],
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
  },
  {
    id: 703,
    title: "GOTHIC STRAP TROUSERS",
    price: "₹4,999.00",
    priceNum: 4999,
    image: dummyImage,
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
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
    gridClass: "col-span-2 md:col-span-3 h-52 sm:h-72 md:h-[450px]"
  },
  {
    id: 602,
    title: "CYBER MATRIX GLASSES",
    price: "₹3,200.00",
    priceNum: 3200,
    image: dummyImage,
    colors: ["Silver", "Black"],
    sizes: ["One Size"],
    gridClass: "col-span-1 h-44 sm:h-60 md:h-[300px]"
  },
  {
    id: 803,
    title: "CRIMSON TIE-DYE WRAP",
    price: "₹950.00",
    priceNum: 950,
    image: dummyImage,
    colors: ["Red", "Green"],
    sizes: ["One Size"],
    gridClass: "col-span-1 h-44 sm:h-60 md:h-[300px]"
  }
];

const NewArrival = (props) => {
  return <ProductCategory title="NEW ARRIVAL" products={newArrivalProducts} {...props} />;
};

export default NewArrival;

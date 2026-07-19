import React from 'react';
import ProductCategory from '../components/ProductCategory';
import dummyImage from '../assets/dummyImage.jpeg'; 

const bandanaProducts = [
  {
    id: 801,
    title: "PAISLEY STREET BANDANA",
    price: "₹890.00",
    image: dummyImage,
    gridClass: "col-span-2 md:col-span-3 h-52 sm:h-72 md:h-[400px]"
  },
  {
    id: 802,
    title: "MONOCHROME MESH MASK",
    price: "₹1,100.00",
    image: dummyImage,
    gridClass: "col-span-1 md:col-span-2 h-44 sm:h-60 md:h-[300px]"
  },
  {
    id: 803,
    title: "CRIMSON TIE-DYE WRAP",
    price: "₹950.00",
    image: dummyImage,
    gridClass: "col-span-1 row-span-2 h-[368px] sm:h-[504px] md:h-[624px]"
  }
];

const Bandana = (props) => {
  return <ProductCategory title="BANDANA" products={bandanaProducts} {...props} />;
};

export default Bandana;
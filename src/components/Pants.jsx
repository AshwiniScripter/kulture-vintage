import React from 'react';
import ProductCategory from '../components/ProductCategory';
import dummyImage from '../assets/dummyImage.jpeg'; 

const pantsProducts = [
  {
    id: 701,
    title: "CARGO UTILITY PANTS - BLK",
    price: "₹4,200.00",
    priceNum: 4200,
    image: dummyImage,
    colors: ["Black", "Green"],
    sizes: ["S", "M", "L", "XL"],
    gridClass: "col-span-2 md:col-span-3 h-52 sm:h-72 md:h-[400px]"
  },
  {
    id: 702,
    title: "RELAXED FIT DENIM",
    price: "₹3,899.00",
    priceNum: 3899,
    image: dummyImage,
    colors: ["Blue", "Black"],
    sizes: ["S", "M", "L", "XL"],
    gridClass: "col-span-1 md:col-span-2 h-44 sm:h-60 md:h-[300px]"
  },
  {
    id: 703,
    title: "GOTHIC STRAP TROUSERS",
    price: "₹4,999.00",
    priceNum: 4999,
    image: dummyImage,
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    gridClass: "col-span-1 row-span-2 h-[368px] sm:h-[504px] md:h-[624px]"
  }
];

const Pants = (props) => {
  return <ProductCategory title="PANTS" products={pantsProducts} {...props} />;
};

export default Pants;
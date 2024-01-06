"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// arrival data
import dataProduct from "../../db/product";

// filter category
const [category, setCategory] = useState("Apparel");
const handeleClick = (event: any) => {
  setCategory(event.target.value);
};
// motions
const animateY = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: [0.5, 0, 0, 1],
      duration: 1,
    },
  },
};

const ProductsCards = () => {
  return (
    <>
      {dataProduct
        .filter((items) => category === "" || items.category === category)
        .slice(0, 4)
        .map((items) => (
          <motion.div
            variants={animateY}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            key={items.id}
            className="flex w-[45%] md:w-[24%] relative"
          >
            <div className="flex flex-col">
              <Image
                width={500}
                height={500}
                src={`/images/productimage/${items.img}`}
                alt={items.title}
                className="object-contain object-top"
              ></Image>
              <div className="flex-col mx-auto pt-1 md:pt-2 pb-4">
                <h3 className="text-center text-[#fcfcfc] text-xs md:text-sm">
                  {items.title}
                </h3>
                <span className="flex justify-center text-[#DD8560] text-sm md:text-base">
                  ${items.price}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
    </>
  );
};

export default ProductsCards;

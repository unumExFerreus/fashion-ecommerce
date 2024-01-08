"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosStar } from "react-icons/io";

import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";

const ProductsCards = ({ items }) => {
  const cart = useContext(CartContext);
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

  return (
    <>
      <motion.div
        variants={animateY}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: false,
        }}
        className="flex w-full mt-3 md:mt-6 relative"
      >
        <div className="flex w-full">
          <div className="w-1/3">
            <Image
              width={500}
              height={500}
              src={`/images/productimage/${items?.img}`}
              alt={items?.title}
              className="object-contain object-top"
            ></Image>
          </div>
          <div className="flex flex-col w-2/3 mx-auto pt-0 px-3">
            <h3 className="text-[#fcfcfc] text-base md:text-xl pt-0 sm:pt-1">
              {items?.title}
            </h3>
            <h4 className="text-[#fcfcfc]/60 text-xs md:text-base pt-0 sm:pt-1">
              {items?.description}
            </h4>
            <span className="flex text-[#DD8560] text-base md:text-xl pt-0 sm:pt-1">
              ${items?.price}
            </span>
            <div className="flex items-center text-[#fcfcfc]/60 text-xs md:text-base pt-0 sm:pt-2">
              <div className="flex items-center text-[#DD8560]">
                <IoIosStar />
                <span className="font-sans text-[#fcfcfc]/60 px-1">
                  {items?.rating}
                </span>
              </div>
              <span>Ratings</span>
            </div>
          </div>
        </div>
        <button
          className="bg-black active:bg-white"
          onClick={() => cart.addItemToCart(items.id)}
        >
          Add To Cart
        </button>
      </motion.div>
    </>
  );
};

export default ProductsCards;

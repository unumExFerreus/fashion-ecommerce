"use client";

import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";

import { getProductData } from "@/db/product";
import Image from "next/image";
import { motion } from "framer-motion";
import { GoPlus, GoDash, GoTrash } from "react-icons/go";

function Cart({ id, quantity }) {
  const cart = useContext(CartContext);
  const data = getProductData(id);
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
    <motion.div
      key={data.id}
      variants={animateY}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: false,
      }}
      className="flex w-full h-fit mt-3 md:mt-6 relative"
    >
      <div className="flex w-full">
        <div className="w-1/3">
          <Image
            width={500}
            height={500}
            src={`/images/productimage/${data?.img}`}
            alt={data?.title}
            className="object-contain object-top"
          ></Image>
        </div>
        <div className="flex flex-col w-2/3 mx-auto pt-0 px-3">
          <h3 className="text-[#fcfcfc] text-base md:text-xl pt-0 sm:pt-1">
            {data?.title}
          </h3>
          <h4 className="text-[#fcfcfc]/60 text-xs md:text-base pt-0 sm:pt-1">
            {data?.description}
          </h4>
          <span className="flex text-[#DD8560] text-base md:text-xl pt-0 sm:pt-1">
            ${data?.price}
          </span>
          <div className="flex items-center text-[#fcfcfc]/60 text-xs md:text-base pt-0 sm:pt-2 font-sans">
            <button
              className="text-[#C4C4C4] border rounded-full border-[#555] w-fit h-fit"
              onClick={() => cart.removeItemFromCart(id)}
            >
              <GoDash size={22} />
            </button>
            <span className="text-[#C4C4C4] text-xl px-4">{quantity}</span>
            <button
              className="text-[#C4C4C4] border rounded-full border-[#555] w-fit h-fit"
              onClick={() => cart.addItemToCart(id)}
            >
              <GoPlus size={22} />
            </button>
            <button className="ml-5" onClick={() => cart.deleteFromCart(id)}>
              <GoTrash size={22} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Cart;

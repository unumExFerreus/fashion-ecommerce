import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
function ArrivalCards({ img, title, price, id }) {
  return (
    <motion.div
      variants={animateY}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: false,
      }}
      key={id}
      className="flex w-[45%] md:w-[24%] relative"
    >
      <div className="flex flex-col">
        <Image
          width={500}
          height={500}
          src={`/images/productimage/${img}`}
          alt={title}
          className="object-contain object-top"
        ></Image>
        <div className="flex-col mx-auto pt-1 md:pt-2 pb-4">
          <h4 className="text-center text-[#fcfcfc] text-xs md:text-sm">{title}</h4>
          <span className="flex justify-center text-[#DD8560] text-sm md:text-base">${price}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default ArrivalCards;

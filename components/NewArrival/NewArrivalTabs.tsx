"use client";

import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { data } from "../../db/product";
import Link from "next/link";

const NewArrivalTabs = () => {
  // tab logic
  const [tabOpen, setTabOpen] = useState(1);
  const toggleTab = (id: any) => {
    setTabOpen(id);
  };

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

  return (
    <>
      <header aria-label="arrival tab button">
        <ul className="flex flex-wrap justify-evenly w-[90%] mx-auto mt-2 md:mt-4 z-10 text-sm md:text-base tenor">
          <li className="relative">
            <div
              onClick={() => {
                toggleTab(1);
              }}
              className={`after:bg-[url('../public/images/Dot.svg')] after:block after:absolute after:h-[10px] after:w-full after:bg-center after:bg-cover after:scale-x-0 after:hover:scale-x-100 after:scale-y-0 after:hover:scale-y-100 after:transition after:duration-[.4s] after:origin-center after:z-10 after:ease-in-out ${
                tabOpen === 1
                  ? "text-[#FCFCFC] duration-300 after:scale-x-100 after:scale-y-100"
                  : "text-[#FCFCFC]/60"
              }`}
            >
              <button
                aria-label="Select tab"
                onClick={handeleClick}
                value={"Apparel"}
              >
                Apparel
              </button>
            </div>
          </li>
          <li className="relative">
            <div
              onClick={() => {
                toggleTab(2);
              }}
              className={`after:bg-[url('../public/images/Dot.svg')] after:block after:absolute after:h-[10px] after:w-full after:bg-center after:bg-cover after:scale-x-0 after:hover:scale-x-100 after:scale-y-0 after:hover:scale-y-100 after:transition after:duration-[.4s] after:origin-center after:z-10 after:ease-in-out ${
                tabOpen === 2
                  ? "text-[#FCFCFC] duration-300 after:scale-x-100 after:scale-y-100"
                  : "text-[#FCFCFC]/60"
              }`}
            >
              <button
                aria-label="Select tab"
                onClick={handeleClick}
                value={"Dress"}
              >
                Dress
              </button>
            </div>
          </li>
          <li className="relative">
            <div
              onClick={() => {
                toggleTab(3);
              }}
              className={`after:bg-[url('../public/images/Dot.svg')] after:block after:absolute after:h-[10px] after:w-full after:bg-center after:bg-cover after:scale-x-0 after:hover:scale-x-100 after:scale-y-0 after:hover:scale-y-100 after:transition after:duration-[.4s] after:origin-center after:z-10 after:ease-in-out ${
                tabOpen === 3
                  ? "text-[#FCFCFC] duration-300 after:scale-x-100 after:scale-y-100"
                  : "text-[#FCFCFC]/60"
              }`}
            >
              <button
                aria-label="Select tab"
                onClick={handeleClick}
                value={"Shirt"}
              >
                Shirt
              </button>
            </div>
          </li>
          <li className="relative">
            <div
              onClick={() => {
                toggleTab(4);
              }}
              className={`after:bg-[url('../public/images/Dot.svg')] after:block after:absolute after:h-[10px] after:w-full after:bg-center after:bg-cover after:scale-x-0 after:hover:scale-x-100 after:scale-y-0 after:hover:scale-y-100 after:transition after:duration-[.4s] after:origin-center after:z-10 after:ease-in-out ${
                tabOpen === 4
                  ? "text-[#FCFCFC] duration-300 after:scale-x-100 after:scale-y-100"
                  : "text-[#FCFCFC]/60"
              }`}
            >
              <button
                aria-label="Select tab"
                onClick={handeleClick}
                value={"Bag"}
              >
                Bag
              </button>
            </div>
          </li>
        </ul>
      </header>
      <section
        className="flex flex-wrap justify-evenly w-full h-fit mt-4 md:mt-6 relative"
        aria-label="arrival content"
      >
        {data
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
              <div className="flex flex-col mx-auto">
                <Image
                  width={300}
                  height={400}
                  src={`/images/productimage/${items.img}`}
                  alt={items.title}
                  className="object-cover object-top h-[180px] sm:h-[250px] md:h-[300px] lg:h-[400px]"
                />
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
        <Link
          href={"/products"}
          className="flex items-center h-0 text-[#fcfcfc] text-base md:text-2xl my-5 tenor cursor-pointer"
        >
          <span>Explore More</span>
          <IoIosArrowRoundForward className="flex items-end" size={30} />
        </Link>
      </section>
    </>
  );
};

export default NewArrivalTabs;

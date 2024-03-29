"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Data from "../../db/menu.json";
import UnderlineSVG from "../SVGs/UnderlineSVG";
import {
  RiInstagramFill,
  RiTwitterXLine,
  RiYoutubeFill,
  RiMapPinLine,
  RiPhoneLine,
} from "react-icons/ri";

export const Submenu = ({ toggleMenu }: any) => {
  const [tabOpen, setTabOpen] = useState(1);
  const toggleTab = (id: number) => {
    setTabOpen(id);
  };
  // motion
  const animateY = {
    initial: {
      opacity: 0,
      y: "75%",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.5, 0, 0, 1],
        duration: 1,
      },
    },
  };

  return (
    <div className="w-full h-full bg-[#111] tenor">
      <div className="flex flex-col h-[100dvh] justify-between container w-full max-w-[1460px] mx-auto pt-[60px] relative">
        <section aria-label="menu tabs">
          {/* tab button */}
          <ul className="sticky flex gap-[10%] justify-between md:justify-normal max-w-[1440px] w-full z-10">
            {Data.menu.map((items, index) => {
              return (
                <li className="relative" key={index}>
                  <button
                    aria-label="Select tab"
                    onClick={() => toggleTab(index + 1)}
                    className={`after:bg-[url('../public/images/Line.svg')] after:bottom-[-.6rem] after:block after:absolute after:h-[10px] after:w-full after:bg-center after:bg-cover after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-[.4s] after:origin-center after:z-50 after:ease-in-out ${
                      tabOpen === index + 1
                        ? "text-[#FCFCFC] duration-300 after:scale-x-100"
                        : "text-[#FCFCFC]/60"
                    }`}
                  >
                    <h3 className="text-[.875rem] tracking-[4px] cursor-pointer indent-1">
                      {items.tab}
                    </h3>
                  </button>
                </li>
              );
            })}
            <hr className="absolute mt-[1.795rem] w-full border-1 border-[#888]/60" />
          </ul>
          {/* tab content */}
          <div className="sticky flex w-full h-fit max-h-[45dvh] mt-5 xs:mt-10 overflow-y-auto customScroll">
            {Data.menu.map((menu, tabIndex) => (
              <div
                key={tabIndex}
                className={`w-full h-fit transition-all duration-1000 ${
                  tabOpen === tabIndex + 1 ? "" : "absolute hidden"
                }`}
              >
                <ul>
                  {menu.items.map((items, index) => (
                    <motion.li
                      key={index}
                      variants={animateY}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: false,
                      }}
                      className="text-[#FCFCFC]/100 text-[.875rem] xs:text-[1rem] mb-2 xs:mb-5 indent-1"
                    >
                      <Link href={items.link}>
                        <button
                          aria-label="List item button"
                          className="select-auto"
                          onClick={toggleMenu}
                        >
                          {items.name}
                        </button>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        {/* Social Media */}
        <div className="flex flex-col mb-1 xs:mb-6 mt-4 text-[#fcfcfc]">
          <div className="flex ml-1 mb-2 xs:mb-4 cursor-pointer">
            <RiPhoneLine
              className="w-6 h-6 mr-4 fill-[#fcfcfc]"
              alt="call icon"
            />
            <span className="text-[.875rem] xs:text-[1rem]">
              (777) 777-7777
            </span>
          </div>
          <div className="flex ml-1 mb-3 xs:mb-8 cursor-pointer ">
            <RiMapPinLine
              className="w-6 h-6 mr-4 fill-[#fcfcfc]"
              alt="location icon"
            />
            <span className="text-[.875rem] xs:text-[1rem]">Store locator</span>
          </div>
          <div className="w-[55%] sm:w-[45%] md:w-[35%] lg:w-[20%] mx-auto mb-3 fill-[#555]">
            <UnderlineSVG />
          </div>
          <div className="flex mx-auto w-[45%] sm:w-[40%] md:w-[25%] lg:w-[15%] justify-between">
            <Link href={"#"} aria-label="Go to instagram">
              <RiInstagramFill
                className="fill-[#fcfcfc] w-6 h-6"
                alt="Instagram icon"
              />
            </Link>
            <Link href={"#"} aria-label="Go to X">
              <RiTwitterXLine className="fill-[#fcfcfc] w-6 h-6" alt="X icon" />
            </Link>
            <Link href={"#"} aria-label="Go to youtube">
              <RiYoutubeFill
                className="fill-[#fcfcfc] w-6 h-6"
                alt="Youtube icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

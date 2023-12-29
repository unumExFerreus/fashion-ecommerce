"use client";

import Link from "next/link";
import submenuData from "../db.json";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  RiInstagramFill,
  RiTwitterXLine,
  RiYoutubeFill,
  RiMapPinLine,
  RiPhoneLine,
} from "react-icons/ri";

export const Submenu = (props: any) => {
  const [tabOpen, setTabOpen] = useState(1);
  const toggleTab = (id: any) => {
    setTabOpen(id);
  };

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
      <div className="flex flex-col h-[100dvh] justify-between container max-w-[1440px] mx-auto pt-[72px] relative">
        <section aria-label="tab">
          {/* tab button */}
          <ul className="sticky flex gap-[10%] justify-between md:justify-normal max-w-[1440px] w-full z-10">
            <li className="relative">
              <button
                onClick={() => toggleTab(1)}
                className={`after:bg-[url('../public/images/Divider.svg')] after:bottom-[-.6rem] after:block after:absolute after:h-[10px] after:w-full after:bg-center after:bg-cover after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-[.4s] after:origin-center after:z-50 after:ease-in-out ${
                  tabOpen === 1
                    ? "text-[#FCFCFC] duration-300 after:scale-x-100"
                    : "text-[#FCFCFC]/60"
                }`}
              >
                <h3 className="text-[.875rem] tracking-[4px] cursor-pointer indent-1">
                  WOMEN
                </h3>
              </button>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleTab(2)}
                className={`after:bg-[url('../public/images/Divider.svg')] after:bottom-[-.6rem] after:block after:absolute after:h-[10px] after:w-full after:bg-center after:bg-cover after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-[.4s] after:origin-center after:z-50 after:ease-in-out ${
                  tabOpen === 2
                    ? "text-[#FCFCFC] duration-300 after:scale-x-100"
                    : "text-[#FCFCFC]/60"
                }`}
              >
                <h3 className="text-[.875rem] tracking-[4px] cursor-pointer indent-1">
                  MAN
                </h3>
              </button>
            </li>
            <li className="relative">
              <button
                onClick={() => toggleTab(3)}
                className={`after:bg-[url('../public/images/Divider.svg')] after:bottom-[-.6rem] after:block after:absolute after:h-[0.625rem] after:w-full after:bg-center after:bg-cover after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-[.4s] after:origin-center after:z-50 after:ease-in-out ${
                  tabOpen === 3
                    ? "text-[#FCFCFC] duration-300 after:scale-x-100"
                    : "text-[#FCFCFC]/60"
                }`}
              >
                <h3 className="text-[.875rem] tracking-[4px] cursor-pointer indent-1">
                  KIDS
                </h3>
              </button>
            </li>
            <hr className="absolute mt-[1.793rem] w-full border-1 border-[#888]/60" />
          </ul>
          {/* tab content */}
          <div className="sticky flex w-full h-fit max-h-[45dvh] mt-5 xs:mt-10 overflow-y-auto">
            <div
              className={`w-full h-fit transition-all duration-1000 ${
                tabOpen === 1
                  ? ""
                  : "absolute hidden"
              }`}
            >
              <ul>
                {submenuData.map((e) => {
                  if (e.for === "WOMEN") {
                    return (
                      <motion.li
                        variants={animateY}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                          once: false,
                        }}
                        className="text-[#FCFCFC]/100 text-[.875rem] xs:text-[1rem] mb-2 xs:mb-5 indent-1"
                        key={e.id}
                      >
                        <Link href={e.link}>{e.name}</Link>
                      </motion.li>
                    );
                  }
                })}
              </ul>
            </div>
            <div
              className={`w-full h-fit transition-all duration-1000 ${
                tabOpen === 2
                  ? " "
                  : "absolute hidden"
              }`}
            >
              <ul>
                {submenuData.map((e) => {
                  if (e.for === "MAN") {
                    return (
                      <motion.li
                        variants={animateY}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                          once: false,
                        }}
                        className="text-[#FCFCFC]/100 text-[.875rem] xs:text-[1rem] mb-2 xs:mb-5 indent-1"
                        key={e.id}
                      >
                        <Link href={e.link}>{e.name}</Link>
                      </motion.li>
                    );
                  }
                })}
              </ul>
            </div>
            <div
              className={`w-full h-fit transition-all duration-1000 ${
                tabOpen === 3
                  ? ""
                  : "absolute hidden"
              }`}
            >
              <ul>
                {submenuData.map((e) => {
                  if (e.for === "KIDS") {
                    return (
                      <motion.li
                        variants={animateY}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                          once: false,
                        }}
                        className="text-[#FCFCFC]/100 text-[.875rem] xs:text-[1rem] mb-2 xs:mb-5 indent-1"
                        key={e.id}
                      >
                        <Link href={e.link}>{e.name}</Link>
                      </motion.li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </section>
        {/* Social Media */}
        <div className="flex flex-col mb-1 xs:mb-6 text-[#fcfcfc]">
          <div className="flex ml-1 mb-2 xs:mb-4 cursor-pointer">
            <RiPhoneLine
              className="w-6 h-6 mr-4 fill-[#fcfcfc]"
              alt="call icon"
            />
            <span className="text-[.875rem] xs:text-[1rem]">(777) 777-7777</span>
          </div>
          <div className="flex ml-1 mb-3 xs:mb-8 cursor-pointer ">
            <RiMapPinLine
              className="w-6 h-6 mr-4 fill-[#fcfcfc]"
              alt="location icon"
            />
            <span className="text-[.875rem] xs:text-[1rem]">Store locator</span>
          </div>
          <div className="w-[55%] sm:w-[45%] md:w-[35%] lg:w-[20%] mx-auto mb-3 fill-[#888]/60">
            <svg viewBox="60.839 104.117 124.959 9.255">
              <path
                d="M 123.396 113.372 L 127.946 108.822 L 185.798 108.822 L 185.798 108.615 L 127.946 108.615 L 123.396 104.117 L 118.898 108.615 L 60.839 108.615 L 60.839 108.822 L 118.898 108.822 L 123.396 113.372 Z M 123.396 104.427 L 127.739 108.719 L 123.396 113.061 L 119.053 108.719 L 123.396 104.427 Z"
                transform="matrix(1, 0, 0, 1, 7.105427357601002e-15, 7.105427357601002e-15)"
              />
            </svg>
          </div>
          <div className="flex mx-auto w-[45%] sm:w-[40%] md:w-[25%] lg:w-[15%] justify-between">
            <Link href={"#"}>
              <RiInstagramFill
                className="fill-[#fcfcfc] w-6 h-6"
                alt="instagram icon"
              />
            </Link>
            <Link href={"#"}>
              <RiTwitterXLine className="fill-[#fcfcfc] w-6 h-6" alt="X icon" />
            </Link>
            <Link href={"#"}>
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

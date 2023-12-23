"use client";

import { useState } from "react";
import { Submenu } from "./Submenu";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "../public/images/_index";
import LogoSVG from "./SVGs/LogoSVG";
import SearchSVG from "./SVGs/SearchSVG";
import ShopingSVG from "./SVGs/ShopingSVG";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className="flex justify-between container max-w-[1440px] w-full h-[60px] md:h-[72px] py-5 z-20">
      <div className="flex items-center">
        {/* CUSTOM SVG FOR MENU BUTTON */}
        <button className="z-50 mr-[56px] fill-[#fcfcfc]" onClick={toggleMenu}>
          <svg
            className="relative w-[24px] h-[24px]"
            viewBox="0 0 100 100"
          >
            <rect
              className={`translate-y-[25%] transition-all duration-500 ease-in-out ${
                isMenuOpen ? "rotate-45 origin-[13px_8px]" : ""
              }`}
              width={100}
              height={5}
              x={1}
            ></rect>
            <rect
              className={`translate-y-[50%] transition-all duration-500 ease-in-out ${
                isMenuOpen ? "w-[0]" : ""
              }`}
              width={70}
              height={5}
              x={1}
            ></rect>
            <rect
              className={`translate-y-[75%] transition-all duration-500 ease-in-out ${
                isMenuOpen
                  ? "-rotate-45 translate-y-[50%] origin-[21px_1px]"
                  : ""
              }`}
              width={100}
              height={5}
              x={1}
            ></rect>
          </svg>
        </button>
        {/* SLIDE MENU */}
        <div
          className={`fixed inset-0 w-full h-full duration-700 ease-out z-40 ${
            isMenuOpen ? "left-0 md:flex" : "left-[-100vw] md:hidden"
          }`}
        >
          <Submenu />
        </div>
        <div
          className={`fixed inset-0 w-[100vw] h-full transition-all duration-1000 bg-black/40 backdrop-blur-[15px] z-30 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        />
      </div>
      {/* NAVBAR */}
      <div className="flex justify-center items-center fill-[#fcfcfc] w-20 md:w-28 h-auto p-[1px]">
        <LogoSVG />
      </div>
      <div className="flex items-center">
        {/* SEARCH BUTTON */}
        <button className="ml-4 w-6 h-6 stroke-[#fcfcfc]">
          <SearchSVG />
        </button>
        {/* SHOPING BUTTON */}
        <button className="ml-4 w-6 h-6 stroke-[#fcfcfc]">
          <ShopingSVG />
        </button>
      </div>
    </div>
  );
};

export default Nav;

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
    <nav className="flex justify-between z-50 container max-w-[1440px] w-full h-[72px] mx-auto py-5 bg-[#111]">
      {/* slider */}
      <div className="flex items-center">
        {/* CUSTOM SVG FOR MENU BUTTON */}
        <button className="z-50 mr-[56px] fill-[#fcfcfc]" onClick={toggleMenu}>
          <svg className="relative w-[24px] h-[24px]" viewBox="0 0 100 100">
            <rect
              className={`translate-y-[25%] transition-all duration-700 ease-in-out ${
                isMenuOpen ? "rotate-45 origin-[13px_8px] left-0" : ""
              }`}
              width={100}
              height={5}
              x={1}
            ></rect>
            <rect
              className={`translate-y-[50%] transition-all duration-700 ease-in-out ${
                isMenuOpen ? "w-[0] left-0" : ""
              }`}
              width={70}
              height={5}
              x={1}
            ></rect>
            <rect
              className={`translate-y-[75%] transition-all duration-700 ease-in-out ${
                isMenuOpen
                  ? "-rotate-45 translate-y-[50%] origin-[21px_1px] left-0"
                  : ""
              }`}
              width={100}
              height={5}
              x={1}
            ></rect>
          </svg>
        </button>
        <div
          className={`fixed right-0 md:left-0 bottom-0 top-0 w-full h-[100dvh] md:duration-[1s] duration-[1.8s] ease-[cubic-bezier(.5,0,0,1)] z-40 ${
            isMenuOpen
              ? "left-0 visible md:opacity-100 md:blur-[0px]"
              : "left-[-100%] invisible md:blur-[40px] md:opacity-0"
          }`}
        >
          <Submenu />
        </div>
        {/* BACKDROP */}
        <div
          className={`absolute inset-0 w-full h-[100dvh] backdrop-blur-[10px] bg-black/60 z-30 duration-[2s] ease-[cubic-bezier(.5,0,0,1)] md:invisible ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
        </div>
      </div>
      {/* NAV ICONS */}
      <div className="flex justify-center items-center fill-[#fcfcfc] w-20 md:w-24 h-auto p-[1px]">
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
    </nav>
  );
};

export default Nav;

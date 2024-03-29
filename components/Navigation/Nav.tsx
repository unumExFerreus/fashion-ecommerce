"use client";

import { useState } from "react";
import { Submenu } from "./Submenu";
import LogoSVG from "../SVGs/LogoSVG";
import SearchSVG from "../SVGs/SearchSVG";
import ShopingSVG from "../SVGs/ShopingSVG";
import SearchPage from "./SearchPage";
import Link from "next/link";

const Nav = () => {
  // opem menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // disable scroll
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };
  // open search bar
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="flex w-full h-[60px] bg-[#111] select-none z-50">
      <div className="flex justify-between container max-w-[1440px] w-full mx-auto py-5">
        {/* slider */}
        <div className="flex items-center">
          {/* Custom SVG for meno button */}
          <button
            aria-label="Menu button"
            className="z-50 mr-[56px] fill-[#fcfcfc]"
            onClick={toggleMenu}
          >
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
            className={`fixed inset-0 md:left-0 w-full min-h-[100dvh] md:duration-[1s] duration-[1.5s] ease-[cubic-bezier(.5,0,0,1)] z-40 ${
              isMenuOpen
                ? "left-0 visible md:opacity-100 md:blur-[0px]"
                : "left-[-100%] invisible md:blur-[40px] md:opacity-0"
            }`}
          >
            <Submenu toggleMenu={toggleMenu} />
          </div>
          {/* BACKDROP */}
          <div
            className={`absolute inset-0 w-full h-[100dvh] bg-black/80 z-30 duration-[2s] ease-[cubic-bezier(.5,0,0,1)] md:invisible ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          ></div>
        </div>
        {/* NAV ICONS */}
        <Link
          href={"/"}
          className="flex justify-center items-center fill-[#fcfcfc] w-20 md:w-24 h-auto p-[1px]"
        >
          <LogoSVG />
        </Link>
        <div className="flex items-center">
          {/* Search button */}
          <button
            aria-label="Search button"
            onClick={toggleSearchOpen}
            className="ml-4 w-6 h-6 stroke-[#fcfcfc]"
          >
            <SearchSVG />
          </button>
          <div
            className={`absolute right-0 left-0 w-full h-10 duration-700 ease-[cubic-bezier(.5,0,0,1)] z-[-1] ${
              isSearchOpen ? "top-[60px] visible" : "top-0 invisible"
            }`}
          >
            <SearchPage
              isSearchOpen={isSearchOpen}
              setIsSearchOpen={setIsSearchOpen}
            />
          </div>
          {/* Cart button */}
          <button
            aria-label="Cart button"
            className="ml-4 w-6 h-6 stroke-[#fcfcfc]"
          >
            <Link href={"/cart"} aria-label="Go to shopping cart">
              <ShopingSVG />
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

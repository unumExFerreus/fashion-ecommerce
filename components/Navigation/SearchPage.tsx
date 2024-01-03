"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CloseSVG from "../SVGs/CloseSVG";
import SearchSVG from "../SVGs/SearchSVG";
import Image from "next/image";
import dataProduct from "@/db/product";

const SearchPage = ({ isSearchOpen, setIsSearchOpen }: any) => {
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);

    // disable scroll
    if (!isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  // search filter
  const [search, setSearch] = useState("");
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
    <div className="w-full h-full bg-[#111] tenor">
      <div className="container max-w-[1440px] mx-auto">
        <header className="flex flex-col justify-center w-full h-[72px]">
          <div className="flex justify-between items-center w-full">
            <form className="flex items-center w-full">
              <button type="submit" className="flex stroke-[#fcfcfc] w-8 h-8">
                <SearchSVG />
              </button>
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent placeholder:text-[#FCFCFC]/60 text-[#FCFCFC] text-sm py-2 px-4 focus:outline-none"
                type="search"
                placeholder="Search items"
              />
            </form>
            <button
              className="flex fill-[#fcfcfc] w-6 h-6"
              onClick={toggleSearch}
            >
              <CloseSVG />
            </button>
          </div>
          <hr className="w-full border-1 border-[#888]/60 mt-1" />
        </header>
        <section
          aria-label="search result"
          className="sticky w-full h-[calc(100dvh-72px)] overflow-y-auto customScroll"
        >
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2 px-2 justify-items-center min-h-fit">
            {dataProduct
              .filter((items: any) => {
                return search.toLowerCase() === ""
                  ? ""
                  : items.category.toLowerCase().includes(search.toLowerCase()) ||
                      items.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((items: any) => (
                <motion.div
                  variants={animateY}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: false,
                  }}
                  key={items.id}
                  className="flex relative"
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchPage;

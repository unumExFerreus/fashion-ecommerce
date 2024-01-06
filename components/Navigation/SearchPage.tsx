"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CloseSVG from "../SVGs/CloseSVG";
import SearchSVG from "../SVGs/SearchSVG";
import Image from "next/image";
import dataProduct from "@/db/product";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import Pagination from "../Pagination/Pagination";

interface SearchPageProps {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchPage: React.FC<SearchPageProps> = ({
  isSearchOpen,
  setIsSearchOpen,
}) => {
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);

    // disable scroll
    if (!isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  // search
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
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent placeholder:text-[#FCFCFC]/60 text-[#FCFCFC] text-sm py-2 px-4 focus:outline-none"
                type="search"
                placeholder="Search items"
              />
            </form>
            <button
              className="flex fill-[#fcfcfc] w-4 h-4"
              onClick={toggleSearch}
            >
              <CloseSVG />
            </button>
          </div>
          <hr className="w-full border-1 border-[#888]/60 mt-1" />
        </header>
        <section
          aria-label="search result"
          className="w-full h-[calc(95dvh-72px)]"
        >
          <div className="sticky object-contain items-start grid grid-cols-1 md:grid-cols-2 w-full h-full overflow-y-auto customScroll">
            {dataProduct
              .filter((items) => {
                return search.toLowerCase() === ""
                  ? ""
                  : items.category
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                      items.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((items) => (
                <motion.div
                  variants={animateY}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: false,
                  }}
                  key={items.id}
                  className="flex w-full h-fit mt-3 md:mt-6 relative"
                >
                  <div className="flex w-full">
                    <div className="w-1/3">
                      <Image
                        width={500}
                        height={500}
                        src={`/images/productimage/${items.img}`}
                        alt={items.title}
                        className="object-contain object-top"
                      ></Image>
                    </div>
                    <div className="flex flex-col w-2/3 mx-auto pt-1 md:pt-2 p-3">
                      <h3 className="text-[#fcfcfc] text-base md:text-xl pt-1">
                        {items.title}
                      </h3>
                      <h3 className="text-[#fcfcfc]/60 text-xs md:text-base pt-1">
                        {items.description}
                      </h3>
                      <span className="flex text-[#DD8560] text-base md:text-xl pt-1">
                        ${items.price}
                      </span>
                      <div className="flex items-center text-[#fcfcfc]/60 text-xs md:text-base pt-3">
                        <div className="flex items-center text-[#DD8560]">
                          <IoIosStar />
                          <span className="font-sans text-[#fcfcfc]/60 px-1">
                            {items.rating}
                          </span>
                        </div>
                        <span>Ratings</span>
                      </div>
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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dataProduct from "@/db/product";
import Link from "next/link";
import Pagination from "@/components/Pagination/Pagination";
import { IoIosStar } from "react-icons/io";

const products = () => {
  // pagination
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 8;

  const filteredProducts = dataProduct.filter(
    (item) =>
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.title.toLowerCase().includes(search.toLowerCase())
  );
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const startIndex = currentPage * productsPerPage;
  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );
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
    <div className="container max-w-[1440px] mx-auto tenor">
      <div>
        <form className="flex items-center w-full select-none">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent placeholder:text-[#FCFCFC]/60 text-[#FCFCFC] text-sm py-2 px-4 focus:outline-none"
            type="search"
            placeholder="Search items"
          />
        </form>
        <hr className="w-full border-1 border-[#888]/60 mt-1" />
      </div>
      <section
        className="grid grid-cols-1 md:grid-cols-2 w-full h-fit mt-3 md:mt-6 relative"
        aria-label="products content"
      >
        {visibleProducts
          .filter((items) => {
            return search.toLowerCase() === ""
              ? items
              : items.category.toLowerCase().includes(search.toLowerCase()) ||
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
              className="flex w-full mt-3 md:mt-6 relative"
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
                <div className="flex flex-col w-2/3 mx-auto pt-0 sm:pt-1 md:pt-2 p-3">
                  <h3 className="text-[#fcfcfc] text-base md:text-xl pt-0 sm:pt-1">
                    {items.title}
                  </h3>
                  <h3 className="text-[#fcfcfc]/60 text-xs md:text-base pt-0 sm:pt-1">
                    {items.description}
                  </h3>
                  <span className="flex text-[#DD8560] text-base md:text-xl pt-0 sm:pt-1">
                    ${items.price}
                  </span>
                  <div className="flex items-center text-[#fcfcfc]/60 text-xs md:text-base pt-0 sm:pt-2">
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
      </section>
      <div className="text-[#fcfcfc] mt-10 md:mt-20">
        <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default products;

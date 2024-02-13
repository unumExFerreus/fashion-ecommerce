"use client";

import { Suspense, useState } from "react";

import { data } from "@/db/product";
import Pagination from "@/components/Pagination/Pagination";
import Footer from "@/components/Footer/Footer";
import ProductsCards from "@/components/ProductsCards/ProductsCards";

const products = () => {
  const productData = data;
  // pagination
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 9;

  const pageCount = Math.ceil(productData.length / productsPerPage);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const startIndex = currentPage * productsPerPage;
  const visibleProducts = productData.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="flex flex-col justify-between w-full min-h-[calc(100dvh-60px)] tenor">
      <div className="w-full lg:max-w-[1440px] mx-auto">
        <section
          className="grid grid-cols-1 lg:grid-cols-3 w-full h-fit mt-3 md:mt-6 lg:mx-auto md:container relative"
          aria-label="products content"
        >
          {visibleProducts.map((item) => (
            <ProductsCards key={item.id} itemsData={item} />
          ))}
        </section>
        <div className="text-[#fcfcfc] mt-10 md:mt-20">
          <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default products;

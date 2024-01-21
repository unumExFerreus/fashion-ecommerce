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
    <div className="w-full tenor">
      <div className="md:container w-full max-w-[1440px] mx-auto">
        <section
          className="grid grid-cols-1 lg:grid-cols-3 w-full h-fit mt-3 md:mt-6 relative"
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

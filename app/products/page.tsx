"use client";

import { useState } from "react";
import { data } from "@/db/product";
import Pagination from "@/components/Pagination/Pagination";
import ProductsCards from "@/components/ProductsCards/ProductsCards";
import Footer from "@/components/Footer/Footer";

const products = () => {
  // pagination
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 9;

  const filteredProducts = data.filter(
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

  return (
    <div className="tenor">
      <div className="max-w-[1440px] mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  w-full h-fit mt-3 md:mt-6 relative"
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
              <ProductsCards key={items.id} itemsData={items} />
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

"use client";

import Footer from "@/components/Footer/Footer";
import ProductsCards from "@/components/ProductsCards/ProductsCards";
import { data } from "@/db/product";

// export function generateMetadata({ params: { term } }) {
//   return {
//     title: `Results for ${term}`,
//   };
// }

const SearchResults = ({ params }) => {
  const filteredItems = data.filter((item) => {
    const itemName = item.title.toLowerCase();
    const searchTerm = params.term.toLowerCase();

    return itemName.includes(searchTerm);
  });
  console.log(filteredItems);
  if (filteredItems.length === 0) {
    return (
      <p className="text-lg md:text-xl text-[#fcfcfc] w-full h-[calc(100dvh-60px)] flex justify-center items-center">
        No results found for {params.term}
      </p>
    );
  }

  return (
    <div className="flex flex-col justify-between w-full min-h-[calc(100dvh-60px)] tenor">
      <div className="w-full lg:max-w-[1440px] mx-auto">
        <section
          className="grid grid-cols-1 lg:grid-cols-3 w-full h-fit mt-3 md:mt-6 lg:mx-auto md:container relative"
          aria-label="search results"
        >
          {filteredItems.map((item) => (
            <ProductsCards key={item.id} itemsData={item} />
          ))}
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SearchResults;

"use client";

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
      <p className="text-lg md:text-xl text-[#fcfcfc] w-full h-[calc(100dvh-72px)] flex justify-center items-center">
        No results found for {params.term}
      </p>
    );
  }

  return (
    <section aria-label="search results" className="container max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-fit mt-6 relative">
        {filteredItems.map((item) => (
          <ProductsCards key={item.id} itemsData={item} />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;

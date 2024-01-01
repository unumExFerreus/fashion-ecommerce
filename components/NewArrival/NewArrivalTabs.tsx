"use client";

import { useState } from "react";
import ArrivalProducts from "./ArrivalProducts";
import ArrivalCards from "./ArrivalCards";
import { IoIosArrowRoundForward } from "react-icons/io";


// arrival data
import dataProduct from "../../db/product";

const NewArrivalTabs = () => {
  const [tabOpen, setTabOpen] = useState(1);
  const toggleTab = (id: any) => {
    setTabOpen(id);
  };

  // filter category
  const [category, setCategory] = useState("Apparel");

  const handeleClick = (event: any) => {
    setCategory(event.target.value);
  };

  function filteredData(dataProduct: any, selected: any) {
    let filteredProducts = dataProduct;

    if (selected) {
      filteredProducts = filteredProducts.filter(
        (dataProduct) => dataProduct.category === selected
      );
    }

    const slicedProducts = filteredProducts.slice(0, 4);

    return slicedProducts.map(({ img, title, price, id }) => (
      <ArrivalCards key={id} img={img} title={title} price={price} />
    ));
  }

  const result = filteredData(dataProduct, category);

  return (
    <>
      {/* tab button */}
      <header aria-label="arrival tab button">
        <ul className="flex flex-wrap justify-evenly w-[90%] mx-auto mt-2 md:mt-4 z-10 text-sm md:text-base tenor">
          <li className="relative">
            <div
              onClick={() => {
                toggleTab(1);
              }}
              className={`after:bg-[url('../public/images/Dot.svg')] after:block after:absolute after:h-[10px] after:w-full after:bg-center after:bg-cover after:scale-x-0 after:hover:scale-x-100 after:scale-y-0 after:hover:scale-y-100 after:transition after:duration-[.4s] after:origin-center after:z-10 after:ease-in-out ${
                tabOpen === 1
                  ? "text-[#FCFCFC] duration-300 after:scale-x-100 after:scale-y-100"
                  : "text-[#FCFCFC]/60"
              }`}
            >
              <button onClick={handeleClick} value={"Apparel"}>
                Apparel
              </button>
            </div>
          </li>
          <li className="relative">
            <div
              onClick={() => {
                toggleTab(2);
              }}
              className={`after:bg-[url('../public/images/Dot.svg')] after:block after:absolute after:h-[10px] after:w-full after:bg-center after:bg-cover after:scale-x-0 after:hover:scale-x-100 after:scale-y-0 after:hover:scale-y-100 after:transition after:duration-[.4s] after:origin-center after:z-10 after:ease-in-out ${
                tabOpen === 2
                  ? "text-[#FCFCFC] duration-300 after:scale-x-100 after:scale-y-100"
                  : "text-[#FCFCFC]/60"
              }`}
            >
              <button onClick={handeleClick} value={"Dress"}>
                Dress
              </button>
            </div>
          </li>
          <li className="relative">
            <div
              onClick={() => {
                toggleTab(3);
              }}
              className={`after:bg-[url('../public/images/Dot.svg')] after:block after:absolute after:h-[10px] after:w-full after:bg-center after:bg-cover after:scale-x-0 after:hover:scale-x-100 after:scale-y-0 after:hover:scale-y-100 after:transition after:duration-[.4s] after:origin-center after:z-10 after:ease-in-out ${
                tabOpen === 3
                  ? "text-[#FCFCFC] duration-300 after:scale-x-100 after:scale-y-100"
                  : "text-[#FCFCFC]/60"
              }`}
            >
              <button onClick={handeleClick} value={"Tshirt"}>
                Tshirt
              </button>
            </div>
          </li>
          <li className="relative">
            <div
              onClick={() => {
                toggleTab(4);
              }}
              className={`after:bg-[url('../public/images/Dot.svg')] after:block after:absolute after:h-[10px] after:w-full after:bg-center after:bg-cover after:scale-x-0 after:hover:scale-x-100 after:scale-y-0 after:hover:scale-y-100 after:transition after:duration-[.4s] after:origin-center after:z-10 after:ease-in-out ${
                tabOpen === 4
                  ? "text-[#FCFCFC] duration-300 after:scale-x-100 after:scale-y-100"
                  : "text-[#FCFCFC]/60"
              }`}
            >
              <button onClick={handeleClick} value={"Bag"}>
                Bag
              </button>
            </div>
          </li>
        </ul>
      </header>
      {/* tab content */}
      <section
        className="flex flex-wrap justify-evenly w-full h-fit mt-4 md:mt-6 relative"
        aria-label="arrival content"
      >
        <ArrivalProducts result={result} />
        <div className="flex items-center text-[#fcfcfc] text-base md:text-lg my-5 tenor">
          <span>Explore More</span>
          <IoIosArrowRoundForward className="flex items-end" size={30} />
        </div>
      </section>
    </>
  );
};

export default NewArrivalTabs;

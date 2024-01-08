"use client";

import Cart from "@/components/Cart/Cart";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";
import ShopingSVG from "@/components/SVGs/ShopingSVG";
import { getProductData } from "@/db/product";

const page = (id) => {
  const cart = useContext(CartContext);
  const data = getProductData(id);

  return (
    <div className="flex flex-col justify-between w-full min-h-[calc(100dvh-72px)] max-w-[1440px] mx-auto tenor relative overflow-hidden lg:pt-5">
      <section
        className="w-full h-full px-[.5rem] sm:px-[1rem] lg:fixed lg:px-8 lg:pl-[4rem] lg:py-[30px] lg:w-[50%] max-w-[720px] lg:h-[calc(100dvh-144px)]"
        aria-label="cart items"
      >
        <h4 className="text-[#fcfcfc] text-lg lg:text-2xl lg:mb-2">CART</h4>
        <div
          className={`grid grid-cols-1 w-full h-fit overflow-y-auto mb-6 lg:mt-2 customScroll ${
            cart.items.length > 2 ? "h-full" : ""
          }`}
        >
          {cart.items.length > 0 ? (
            cart.items.map((item) => (
              <Cart key={item.id} id={item.id} quantity={item.quantity} />
            ))
          ) : (
            <span className="text-[#fcfcfc]/60">No Items In The Cart</span>
          )}
        </div>
      </section>
      <div className="flex flex-col w-full lg:w-[calc(50%-4rem)] h-fit select-none border-t-[1px] lg:border-[1px] border-[#888]/60 lg:p-[2rem] lg:ml-[50%]">
        <div className="w-full h-fit px-[.5rem] sm:px-[1rem] lg:px-0 mx-auto text-[#fcfcfc] tenor">
          <div className="flex flex-col w-full">
            <div className="flex justify-between w-full">
              <span className="text-sm lg:text-2xl my-2 lg:mt-0">
                Sub Total
              </span>
              <span className="font-sans text-base">
                $ {cart.getTotalAmount()}
              </span>
            </div>
            <span className="text-sm lg:text-base text-[#fcfcfc]/60 mb-6">
              shipping charges, taxes and discount codes are calculated at the
              time of accounting.
            </span>
          </div>
        </div>
        <button className="flex justify-center items-center w-full h-14 bg-white duration-500 active:bg-white/80">
          <div className="stroke-[#111] w-6 h-6">
            <ShopingSVG />
          </div>
          <span className="text-[#111] text-base ml-2 mt-2">BUY NOW</span>
        </button>
      </div>
    </div>
  );
};

export default page;

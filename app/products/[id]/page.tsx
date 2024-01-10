"use client";

import Footer from "@/components/Footer/Footer";
import { getProductData } from "@/db/product";
import Image from "next/image";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";

export default function Page({ params }: { params: { id: any } }) {
  const data = getProductData(parseInt(params.id, 10));

  const [selectedSize, setSelectedSize] = useState(data?.size[0]);
  const [selectedColor, setSelectedColor] = useState(data?.color[0]);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const cart = useContext(CartContext);
  return !data ? (
    <span className="flex justify-center text-[#fcfcfc] text-lg my-10">
      PAGE FOR URL NOT FOUND
    </span>
  ) : (
    <div>
      <section
        aria-label="Products Details"
        className="md:grid grid-cols-2 md:container md:max-w-[1440px] mx-auto md:my-10"
      >
        <div className="">
          <Image
            width={500}
            height={500}
            priority={true}
            src={`/images/productimage/${data?.img}`}
            alt={data?.title ?? "Product Image"}
            className="object-contain object-center w-full md:w-2/3 max-w-[750px] mx-auto"
          ></Image>
        </div>
        <div className="flex flex-col justify-between min-w-full md:px-0 md:mb-0 md:mt-[25%] my-10">
          <div className="flex flex-col w-full container">
            <div>
              <h1 className="text-[#fcfcfc] text-xl md:text-2xl">
                {data?.title}
              </h1>
              <h4 className="text-[#fcfcfc]/60 text-[10px] text-base md:text-xl">
                {data?.description}
              </h4>
              <span className="flex text-[#DD8560] text-xl md:text-2xl pt-0 sm:pt-1 select-none">
                ${data?.price}
              </span>
            </div>
          </div>
          <div>
            <div className="sm:flex text-[#fcfcfc] text-sm md:text-base container tenor select-none">
              <div className="flex items-center mr-5 mt-12 mb-8">
                <h3 className="mr-2">Color</h3>
                {data.color.map((color) => (
                  <button
                    key={color}
                    style={{
                      backgroundColor: color,
                    }}
                    className={`mx-1 w-6 h-6 md:w-8 md:h-8 outline outline-offset-0 outline-[0.5px] rounded-full duration-300 border-[1.5px] border-[#000] ${
                      selectedColor === color
                        ? "outline-[#fff] border-[#111]"
                        : "outline-[#fff0]"
                    }`}
                    onClick={() => handleColorChange(color)}
                  ></button>
                ))}
              </div>
              <div className="flex items-center mr-5 mt-12 mb-8">
                <h3 className="mr-2">Size</h3>
                {data.size.map((size) => (
                  <button
                    key={size}
                    className={`mx-1 w-6 h-6 md:w-8 md:h-8 text-[10px] md:text-xs bg-[#000] outline outline-offset-0 outline-[.5px] rounded-full duration-300 ${
                      selectedSize === size
                        ? "outline-[#fcfcfc]"
                        : "outline-none text-[#fcfcfc]"
                    }`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => cart.addItemToCart(data.id)}
              className="flex justify-center items-center w-full md:w-1/2 h-14 bg-white duration-500 active:bg-white/60"
            >
              <div className="stroke-[#111] w-6 h-6 mr-1">
                <IoMdAdd size={24} />
              </div>
              <span className="text-[#111] text-base">ADD TO CART</span>
            </button>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

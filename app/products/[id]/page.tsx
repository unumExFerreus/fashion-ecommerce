"use client";

import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";
import { getProductData } from "@/db/product";

import Footer from "@/components/Footer/Footer";
import Image from "next/image";

import { IoMdAdd } from "react-icons/io";
import {
  DoNotBleachSVG,
  DoNotTumbleDrySVG,
  DoNotWashSVG,
  IronLowSVG,
} from "@/components/SVGs/care/_index";
import Accordion from "@/components/Accordion/Accordion";

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
    <span className="flex justify-center text-[#fcfcfc] text-lg my-10 tenor">
      PAGE FOR THIS URL NOT FOUND
    </span>
  ) : (
    <div className="flex flex-col justify-between w-full min-h-[calc(100dvh-60px)]">
      <div>
        <section
          aria-label="Products Details"
          className="md:grid grid-cols-2 md:container md:max-w-[1440px] tenor mx-auto md:mt-10"
        >
          <div>
            <Image
              width={500}
              height={500}
              priority={true}
              src={`/images/productimage/${data?.img}`}
              alt={data?.title ?? "Product Image"}
              className="object-contain object-center w-full md:w-2/3 max-w-[750px] mx-auto"
            />
          </div>
          <div className="flex flex-col justify-between min-w-full md:px-0 md:mb-0">
            <div className="flex flex-col w-full container">
              <div>
                <h1 className="text-[#fcfcfc] text-xl md:text-2xl">
                  {data?.title}
                </h1>
                <h2 className="text-[#fcfcfc]/60 text-[10px] text-base md:text-xl">
                  {data?.description}
                </h2>
                <span className="flex text-[#DD8560] text-xl md:text-2xl pt-0 sm:pt-1 select-none">
                  ${data?.price}
                </span>
              </div>
            </div>
            <div className="md:container">
              <div className="md:justify-between container md:px-0 text-[#fcfcfc] text-sm md:text-base w-full md:w-3/4 mt-12 mb-6 select-none">
                <div className="flex items-center mt-5">
                  <h3 className="mr-2">Color</h3>
                  {data.color.map((color) => (
                    <button
                      aria-label="Select color"
                      key={color}
                      style={{
                        backgroundColor: color,
                      }}
                      className={`mx-1 w-8 h-8 outline outline-offset-0 outline-[0.5px] rounded-full duration-300 border-[1.5px] border-[#000] ${
                        selectedColor === color
                          ? "outline-[#fff] border-[#111]"
                          : "outline-[#fff0]"
                      }`}
                      onClick={() => handleColorChange(color)}
                    ></button>
                  ))}
                </div>
                <div className="flex items-center mt-5">
                  <h3 className="mr-2">Size</h3>
                  {data.size.map((size) => (
                    <button
                      aria-label="Select size"
                      key={size}
                      className={`mx-1 w-8 h-8 text-[10px] md:text-xs bg-[#000] outline outline-offset-0 outline-[.5px] rounded-full duration-300 ${
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
              <div>
                <button
                  aria-label="Add to cart"
                  onClick={() => cart.addItemToCart(data.id)}
                  className="flex justify-center items-center w-full md:w-3/4 h-14 bg-white duration-500 active:bg-white/60"
                >
                  <div className="stroke-[#111] w-6 h-6 mr-1">
                    <IoMdAdd size={24} />
                  </div>
                  <span className="text-[#111] text-base">ADD TO CART</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section
          aria-label="More details"
          className="container max-w-[1440px] mx-auto tenor grid md:grid-cols-2 md:gap-20"
        >
          <div>
            <div className="mt-10 md:mt-20">
              <h3 className="text-sm md:text-base text-[#fcfcfc]">MATERIALS</h3>
              <p className="text-xs md:text-sm text-[#fcfcfc]/60 mt-1">
                We work with monitoring programmes to ensure compliance with
                safety, health and quality standards for our products.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-sm md:text-base text-[#fcfcfc]">CARE</h3>
              <p className="text-xs md:text-sm text-[#fcfcfc]/60 mt-1">
                To keep your jackets and coats clean, you only need to freshen
                them up and go over them with a cloth or a clothes brush. If you
                need to dry clean a garment, look for a dry cleaner that uses
                technologies that are respectful of the environment.
              </p>
              <ul className="text-sm md:text-base text-[#fcfcfc]/60 mt-4">
                <li className="flex items-center">
                  <div className="w-8 h-8 stroke-[#fcfcfc] mr-2">
                    <DoNotBleachSVG />
                  </div>
                  <span>Do not use bleach</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 stroke-[#fcfcfc] mr-2">
                    <DoNotTumbleDrySVG />
                  </div>
                  <span>Do not tumble dry</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 stroke-[#fcfcfc] mr-2">
                    <DoNotWashSVG />
                  </div>
                  <span>Dry clean with tetrachloroethylene</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 stroke-[#fcfcfc] mr-2">
                    <IronLowSVG />
                  </div>
                  <span>Iron at a maximum of 110ºC/230ºF</span>
                </li>
              </ul>
            </div>
          </div>
          <section aria-label="accordion" className="w-full mt-6 md:mt-16">
            <Accordion />
          </section>
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

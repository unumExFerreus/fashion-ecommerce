"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Banner_1, Banner_2, Banner_3 } from "../public/images/_index";
import DotSVG from "./SVGs/DotSVG";

export const Banner = () => {
  const slides = [Banner_1, Banner_2, Banner_3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const islastSlide = currentIndex === slides.length - 1;
    const newIndex = islastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  const autoPlay = () => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(intervalId);
  };
  useEffect(() => {
    const stopAutoPlay = autoPlay();
    return () => stopAutoPlay();
  }, [currentIndex]);

  return (
    <div className="w-full h-fit transition-opacity duration-1000 relative">
      <Image
        layout="responsive"
        loading="eager"
        className="object-cover object-top opacity-100"
        src={slides[currentIndex]}
        alt=""
      />
      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute text-[#111] top-[75%] left-3 -translate-x-0 z-10"
      >
        <SlArrowLeft size={32} alt="left arrow icon" />
      </button>
      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute text-[#111] top-[75%] right-3 -translate-x-0 z-10"
      >
        <SlArrowRight size={32} alt="right arrow icon" />
      </button>
      <div className="absolute w-full bottom-0">
        <h1 className="w-fit mx-auto text-[2rem] md:text-[3rem] text-[#FCFCFC] leading-[2.25rem] md:leading-[3.25rem] tracking-[1.2px] md:tracking-[3px] mb-[20%] md:mb-[45%] moda italic">
          <span>
            LUXURY <br />
          </span>
          <span className="ml-4">
            FASHION
            <br />
          </span>
          <span className="ml-[-.875rem]">&ACCESSORIES</span>
        </h1>
        <div className="flex justify-center">
          <button className="w-[250px] h-10 bg-[#FCFCFC]/40 backdrop-blur-[2px] rounded-full z-10">
            <span className="text-[#111] !blur-[0px]">EXPLORE COLLECTION</span>
          </button>
        </div>
        <div className="flex justify-center items-center my-4 cursor-pointer">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`stroke-[#fcfcfc] w-[12px] md:w-4 mx-[.375rem] duration-500 ${
                currentIndex === slideIndex
                  ? "fill-[#fcfcfc]/100"
                  : "fill-[#fcfcfc]/0"
              } `}
            >
              <DotSVG />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

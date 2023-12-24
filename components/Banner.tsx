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
    <div className="w-full h-fit relative">
      <Image
        layout="responsive"
        loading="eager"
        className="object-cover object-top"
        src={slides[currentIndex]}
        alt=""
      />

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute text-[#fcfcfc] top-[75%] left-2 z-[1]"
      >
        <SlArrowLeft
          className="w-4 sm:w-6 md:w-7 h-auto"
          alt="left arrow icon"
        />
      </button>
      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute text-[#fcfcfc] top-[75%] right-2 z-[1]"
      >
        <SlArrowRight
          className="w-4 sm:w-6 md:w-7 h-auto"
          alt="right arrow icon"
        />
      </button>
      <div className="absolute w-full bottom-0">
        <h1 className="w-fit ml-[30%] sm:ml-[33%] md:ml-[35%] mb-[30%] md:mb-[45%] text-[1.25rem] sm:text-[1.75rem] md:text-[3rem] text-[#FCFCFC] leading-[1.5rem] sm:leading-[2.25rem] md:leading-[3.25rem] tracking-[1.5px] md:tracking-[3px] moda italic z-10">
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
          <button className="min-w-[190px] w-1/3 h-10 bg-[#FCFCFC]/40 backdrop-blur-[2px] rounded-full z-[1]">
            <span className="text-[#111] !blur-[0px]">EXPLORE COLLECTION</span>
          </button>
        </div>
        <div className="flex justify-center items-center w-fit mx-auto my-[2%] cursor-pointer">
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

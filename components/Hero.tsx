"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Banner_1, Banner_2, Banner_3 } from "../public/images/_index";
import DotSVG from "./SVGs/DotSVG";

import { motion } from "framer-motion";

export const Hero = () => {
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
    <div className="overflow-hidden w-full h-full max-w-[750px] mx-auto relative select-none">
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 3, ease: [0.5, 0, 0, 1] }}
        viewport={{ once: true }}
      >
        <Image priority={true} src={slides[currentIndex]} alt="" />
      </motion.div>
      <div className="absolute flex flex-col w-full h-[55%] justify-between bottom-0">
        <div className="relative">
          <h1 className="w-fit ml-[30%] sm:ml-[33%] md:ml-[35%] text-[1.25rem] sm:text-[1.75rem] md:text-[3rem] text-[#FCFCFC] leading-[1.5rem] sm:leading-[2.25rem] md:leading-[3.25rem] tracking-[1.5px] md:tracking-[3px] moda italic z-10">
            <span>
              LUXURY <br />
            </span>
            <span className="ml-4">
              FASHION
              <br />
            </span>
            <span className="ml-[-.875rem]">&ACCESSORIES</span>
          </h1>
        </div>
        {/* SLIDE ARROWS */}
        <div className="flex justify-between text-[#fcfcfc] px-1">
          <button onClick={prevSlide}>
            <SlArrowLeft
              className="w-4 sm:w-6 md:w-7 h-auto drop-shadow-[0_0px_5px_rgba(1,1,1,1)]"
              alt="left arrow icon"
            />
          </button>
          <button onClick={nextSlide}>
            <SlArrowRight
              className="w-4 sm:w-6 md:w-7 h-auto drop-shadow-[0_0px_5px_rgba(1,1,1,1)]"
              alt="right arrow icon"
            />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center w-fit mx-auto relative">
            <button className="py-2 px-4 before:backdrop-blur-[1px] before:duration-500 before:absolute before:inset-0 before:w-full before:h-full before:bg-[#FCFCFC]/50 before:hover:scale-95">
              <span className="items-center text-[#111] !blur-[0px] text-[14px]">
                EXPLORE COLLECTION
              </span>
            </button>
          </div>
          <div className="flex justify-center items-center w-fit mx-auto my-[2%] cursor-pointer drop-shadow-[0_0px_8px_rgba(1,1,1,1)]">
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
    </div>
  );
};

"use client";

import { useState } from "react";
import accordionData from "@/db/accordion";

import { GoChevronUp } from "react-icons/go";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(1);
  const toggleAccordion = (id: number) => {
    setIsOpen(id);
  };

  return (
    <>
      {accordionData.map((item) => {
        return (
          <div key={item.id} className="flex text-[#fcfcfc] tenor">
            <div
              className={`w-6 h-6 my-2 mr-2 duration-300 ${
                isOpen === item.id ? "text-[#fcfcfc]" : "text-[#fcfcfc]/50"
              }`}
            >
              <item.svgComponent size={24} />
            </div>
            <div className="w-full">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAccordion(item.id)}
              >
                <h3 className="text-sm md:text-base mt-4">{item.title}</h3>
                <span
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isOpen === item.id ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <GoChevronUp size={24} />
                </span>
              </div>
              <div
                className={`text-xs md:text-sm text-[#fcfcfc]/60 my-2 transition-all duration-500 grid ${
                  isOpen === item.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">{item.content}</div>
              </div>
              <hr className="w-full border-1 border-[#888]/60" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;

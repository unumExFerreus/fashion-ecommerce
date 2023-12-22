"use client";

import Link from "next/link";
import submenuData from "../db.json";
import { useState } from "react";
import {
  RiInstagramFill,
  RiTwitterXLine,
  RiYoutubeFill,
  RiMapPinLine,
  RiPhoneLine,
} from "react-icons/ri";

export const Submenu = (props: any) => {
  const [tabOpen, setTabOpen] = useState(1);
  const toggleTab = (id: any) => {
    setTabOpen(id);
  };

  return (
    <div className="absolute w-full h-[100vh] bg-[#111]">
      <div className="flex flex-col justify-between h-full container max-w-[1440px] mx-auto tenor">
        <ul className="flex relative mx-auto w-full mt-[4rem]">
          <li className="relative">
            {/* tab button */}
            <button
              onClick={() => toggleTab(1)}
              className={`after:bottom-[-9px] after:block after:content-[''] after:absolute after:h-[5px] after:w-full after:bg-center after:bg-cover after:bg-no-repeat after:bg-[url('../public/images/Divider.svg')] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-[.4s] after:origin-center after:z-50 after:ease-in-out  ${
                tabOpen === 1
                  ? "text-[#FCFCFC] duration-300 after:scale-x-100"
                  : "text-[#FCFCFC]/60"
              }`}
            >
              <h3 className="text-[.875rem] tracking-[4px] cursor-pointer indent-1">
                WOMEN
              </h3>
            </button>
          </li>
          {/* tab content */}
          <div
            className={`absolute top-[4.5rem] transition-all duration-700 ${
              tabOpen === 1
                ? "opacity-100 left-[0]"
                : "opacity-0 left-[-5vw] z-[-51]"
            }`}
          >
            <ul>
              {submenuData.map((e) => {
                if (e.for === "WOMEN") {
                  return (
                    <li className="text-[#FCFCFC]/100 mb-5 indent-1" key={e.id}>
                      <Link href={e.link}>{e.name}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <li className="ml-[15%] relative">
            {/* tab button */}
            <button
              onClick={() => toggleTab(2)}
              className={`after:bottom-[-9px] after:block after:content-[''] after:absolute after:h-[5px] after:w-full after:bg-center after:bg-cover after:bg-no-repeat after:bg-[url('../public/images/Divider.svg')] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-[.4s] after:origin-center after:z-50 after:ease-in-out  ${
                tabOpen === 2
                  ? "text-[#FCFCFC] duration-300 after:scale-x-100"
                  : "text-[#FCFCFC]/60"
              }`}
            >
              <h3 className="text-[.875rem] tracking-[4px] cursor-pointer indent-1">
                MAN
              </h3>
            </button>
          </li>
          {/* tab content */}
          <div
            className={`absolute top-[4.5rem] transition-all duration-700 ${
              tabOpen === 2
                ? "flex opacity-100 left-[0]"
                : "opacity-0 left-[-5vw] z-[-51]"
            }`}
          >
            <ul>
              {submenuData.map((e) => {
                if (e.for === "MAN") {
                  return (
                    <li className="text-[#FCFCFC]/100 mb-5 indent-1" key={e.id}>
                      <Link href={e.link}>{e.name}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <li className="ml-[15%] relative">
            {/* Tab Button */}
            <button
              onClick={() => toggleTab(3)}
              className={`after:bottom-[-9px] after:block after:content-[''] after:absolute after:h-[5px] after:w-full after:bg-center after:bg-cover after:bg-no-repeat after:bg-[url('../public/images/Divider.svg')] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-[.4s] after:origin-center after:z-50 after:ease-in-out ${
                tabOpen === 3
                  ? "text-[#FCFCFC] duration-300 after:scale-x-100"
                  : "text-[#FCFCFC]/60"
              }`}
            >
              <h3 className="text-[.875rem] tracking-[4px] cursor-pointer indent-1">
                KIDS
              </h3>
            </button>
          </li>

          {/* Tab Content */}
          <div
            className={`absolute top-[4.5rem] transition-all duration-700 ${
              tabOpen === 3
                ? "flex opacity-100 left-0"
                : "opacity-0 left-[-5vw] z-[-51]"
            }`}
          >
            <ul>
              {submenuData.map((e) => {
                if (e.for === "KIDS") {
                  return (
                    <li className="text-[#FCFCFC] mb-5 indent-1" key={e.id}>
                      <Link href={e.link}>{e.name}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <hr className="absolute mt-[30px] w-full h-[1px] border-0 bg-[#888]/60" />
        </ul>

        {/* Social Media */}
        <div className="mb-6 text-[#fcfcfc]">
          <div className="flex ml-1 mb-4 cursor-pointer">
            <RiPhoneLine
              className="w-6 h-6 mr-4 fill-[#fcfcfc]"
              alt="call icon"
            />
            <span>(777) 777-7777</span>
          </div>
          <div className="flex ml-1 mb-8 cursor-pointer ">
            <RiMapPinLine
              className="w-6 h-6 mr-4 fill-[#fcfcfc]"
              alt="location icon"
            />
            <span>Store locator</span>
          </div>
          <div className="w-[55%] sm:w-[35%] md:w-[20%] mx-auto mb-4 fill-[#888]/60">
            <svg viewBox="60.839 104.117 124.959 9.255">
              <path
                d="M 123.396 113.372 L 127.946 108.822 L 185.798 108.822 L 185.798 108.615 L 127.946 108.615 L 123.396 104.117 L 118.898 108.615 L 60.839 108.615 L 60.839 108.822 L 118.898 108.822 L 123.396 113.372 Z M 123.396 104.427 L 127.739 108.719 L 123.396 113.061 L 119.053 108.719 L 123.396 104.427 Z"
                transform="matrix(1, 0, 0, 1, 7.105427357601002e-15, 7.105427357601002e-15)"
              />
            </svg>
          </div>
          <div className="flex mx-auto w-[50%] sm:w-[30%] md:w-[15%] justify-between">
            <Link href={"#"}>
              <RiInstagramFill
                className="fill-[#fcfcfc] w-6 h-6"
                alt="instagram icon"
              />
            </Link>
            <Link href={"#"}>
              <RiTwitterXLine className="fill-[#fcfcfc] w-6 h-6" alt="X icon" />
            </Link>
            <Link href={"#"}>
              <RiYoutubeFill
                className="fill-[#fcfcfc] w-6 h-6"
                alt="Youtube icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

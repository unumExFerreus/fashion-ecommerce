import Image from "next/image";
import { Hero } from "@/components/Hero/Hero";
import NewArrivalTabs from "@/components/NewArrival/NewArrivalTabs";

import { InstagramPost_1, InstagramPost_2 } from "@/public/images/_index";

import { LiaShippingFastSolid } from "react-icons/lia";
import { PiPlant } from "react-icons/pi";
import { MdOutlineHighQuality, MdOutlineDesignServices } from "react-icons/md";

import UnderlineSVG from "@/components/SVGs/UnderlineSVG";
import LogoSVG from "@/components/SVGs/LogoSVG";
import _SVG from "@/components/SVGs/_SVG";
import {
  Boss,
  Burberry,
  Catier,
  Gucci,
  Prada,
  TiffanyCo,
} from "@/components/SVGs/brands/_index";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <section aria-label="hero" className="mx-auto relative">
        <Hero />
      </section>
      <section
        aria-label="New Arrival"
        className="w-full h-full mx-auto mt-10 md:mt-24"
      >
        <div className="flex flex-col justify-center w-full max-w-[1440px] mx-auto items-center relative">
          <header className="w-fit items-center">
            <h2 className="text-base sm:text-xl md:text-3xl text-[#FCFCFC] tracking-[1.5px] md:tracking-[3px] tenor">
              NEW ARRIVAL
            </h2>
          </header>
          <div className="w-1/3 md:w-1/4 xl:w-[15%] mx-auto fill-[#fcfcfc]">
            <UnderlineSVG />
          </div>
          <section aria-label="Arrival Tabs">
            <NewArrivalTabs />
          </section>
        </div>
      </section>
      <section
        aria-label="brand logos"
        className="w-full h-full mt-10 md:mt-24 container max-w-[1440px] xs:px-0 mx-auto"
      >
        <div className="flex flex-col justify-center w-full mx-auto">
          <div className="w-1/3 md:w-1/4 xl:w-[15%] mx-auto fill-[#fcfcfc]">
            <UnderlineSVG />
          </div>
          <div className="grid grid-cols-3 gap-4 justify-items-center items-center md:flex md:justify-center md:gap-[10%] w-full fill-[#fcfcfc]/100 py-4 md:py-8">
            <div className="w-12 md:w-20">
              <Boss />
            </div>
            <div className="w-24 md:w-36">
              <Burberry />
            </div>
            <div className="w-16 md:w-24">
              <Prada />
            </div>
            <div className="w-20 md:w-[8rem]">
              <Gucci />
            </div>
            <div className="w-16 md:w-28">
              <Catier />
            </div>
            <div className="w-24 md:w-36">
              <TiffanyCo />
            </div>
          </div>
          <div className="w-1/3 md:w-1/4 xl:w-[15%] mx-auto fill-[#fcfcfc]">
            <UnderlineSVG />
          </div>
        </div>
      </section>
      <section
        aria-label="about company"
        className="w-full h-full mt-10 md:mt-24 mx-auto"
      >
        <div className="flex justify-center mx-auto fill-[#fcfcfc] w-20 md:w-32">
          <LogoSVG />
        </div>
        <header className="text-sm md:text-base text-[#fcfcfc]/60 text-center tenor container max-w-[1440px] mx-auto">
          <h2 className="pt-4 pb-5 px-5 md:px-[30%]">
            Making a luxurious lifestyle accessible for a generous group of
            women is our daily drive.
          </h2>
        </header>
        <div className="w-1/3 md:w-1/4 xl:w-[15%] md:px-8 mx-auto fill-[#fcfcfc]">
          <UnderlineSVG />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 text-sm md:text-base text-[#fcfcfc]/60 text-center tenor container max-w-[1440px] mx-auto">
          <div className="flex flex-col my-3 mr-1 md:px-10">
            <div className="text-[#fcfcfc] mx-auto my-2">
              <LiaShippingFastSolid size={30} />
            </div>
            <h3>Fast shipping. Free on orders over $25.</h3>
          </div>
          <div className="flex flex-col my-3 ml-1 md:px-10">
            <div className="text-[#fcfcfc] mx-auto my-2">
              <PiPlant size={30} />
            </div>
            <h3>Sustainable process from start to finish.</h3>
          </div>
          <div className="flex flex-col my-3 mr-1 md:px-10">
            <div className="text-[#fcfcfc] mx-auto my-2">
              <MdOutlineHighQuality size={30} />
            </div>
            <h3>high-quality materials.</h3>
          </div>
          <div className="flex flex-col my-3 ml-1 md:px-10">
            <div className="text-[#fcfcfc] mx-auto my-2">
              <MdOutlineDesignServices size={30} />
            </div>
            <h3>Unique designs </h3>
          </div>
        </div>
        <div className="fill-[#fcfcfc] w-16 md:w-28 mx-auto mt-2 md:mt-8">
          <_SVG />
        </div>
      </section>
      <section
        className="w-full h-full mx-auto mt-8 md:mt-20"
        aria-label="social media"
      >
        <div>
          <span className="flex justify-center text-base sm:text-xl md:text-3xl text-[#FCFCFC] tracking-[1.5px] md:tracking-[3px] mb-3 tenor">
            Follow Us
          </span>
          <div className="grid grid-cols-2 md:flex md:justify-center gap-4 mx-4 md:mx-auto mt-2 justify-items-center items-center drop-shadow-xl">
            <Link href="#" aria-label="social link">
              <Image
                width={300}
                height={300}
                src={InstagramPost_1}
                alt="Instagram post 1"
              />
            </Link>
            <Link href="#" aria-label="social link">
              <Image
                width={300}
                height={300}
                src={InstagramPost_2}
                alt="Instagram post 2"
              />
            </Link>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

import Link from "next/link";
import { RiInstagramFill, RiTwitterXLine, RiYoutubeFill } from "react-icons/ri";
import UnderlineSVG from "../SVGs/UnderlineSVG";

const Footer = () => {
  return (
    <>
      <div className="flex mx-auto w-[45%] sm:w-[40%] md:w-[25%] lg:w-[12%] justify-between mt-10 md:mt-24 py-4">
        <Link href={"#"} aria-label="Go to instagram">
          <RiInstagramFill
            className="fill-[#fcfcfc] w-6 h-6 md:w-8 md:h-8"
            alt="Instagram icon"
          />
        </Link>
        <Link href={"#"} aria-label="Go to X">
          <RiTwitterXLine
            className="fill-[#fcfcfc] w-6 h-6 md:w-8 md:h-8"
            alt="X icon"
          />
        </Link>
        <Link href={"#"} aria-label="Go to youtube">
          <RiYoutubeFill
            className="fill-[#fcfcfc] w-6 h-6 md:w-8 md:h-8"
            alt="Youtube icon"
          />
        </Link>
      </div>
      <div className="w-1/3 md:w-1/4 xl:w-[15%] md:px-8 mx-auto fill-[#fcfcfc]">
        <UnderlineSVG />
      </div>
      <div className="flex justify-center py-5 tenor">
        <div className="flex flex-col text-center text-[#fcfcfc] ">
          <span className="py-1">support@something.com</span>
          <span className="py-1">+777 777 777</span>
          <span className="py-1">08:00 - 22:00 - Everyday</span>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-14 text-[#fcfcfc]/60 bg-[#000]/30 tenor">
      <span className="text-xs">Copyright© Me All Rights Reserved</span>
      </div>
    </>
  );
};

export default Footer;

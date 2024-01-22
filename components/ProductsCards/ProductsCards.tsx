import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { IoIosArrowRoundForward, IoIosStar } from "react-icons/io";

interface DATAPROPS {
  category?: string;
  description?: string;
  id?: number;
  title?: string;
  price?: number;
  rating?: number;
  color?: string[];
  size?: string[];
  img?: string;
}

const ProductsCards = ({ itemsData }: { itemsData: DATAPROPS }) => {
  console.log(itemsData);

  // motions
  const animateY = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.5, 0, 0, 1],
        duration: 1,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={animateY}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: false,
        }}
        className="flex w-full max-h-[250px] mt-3 md:mt-6 relative tenor"
      >
        <div className="flex w-full h-full">
          <Link href={`/products/${itemsData.id}`}>
            <Image
              src={`/images/productimage/${itemsData?.img}`}
              alt={`${itemsData.title}`}
              width={150}
              height={300}
              className="object-cover md:w-[200px] object-top"
            />
          </Link>
          <div className="flex flex-col w-2/3 mx-auto pt-0 px-3">
            <div>
              <h3 className="text-[#fcfcfc] text-base md:text-xl pt-0 sm:pt-1">
                {itemsData?.title}
              </h3>
              <h4 className="flex flex-wrap items-center text-[#fcfcfc]/60 text-[10px] sm:text-xs md:text-base pt-0 sm:pt-1">
                {itemsData.description}
              </h4>
              <span className="flex text-[#DD8560] text-base md:text-xl">
                ${itemsData?.price}
              </span>
              <div className="flex items-center text-[#fcfcfc]/60 text-[10px] sm:text-xs md:text-base py-0 sm:py-2 md:py-4">
                <div className="flex items-center text-[#DD8560]">
                  <IoIosStar />
                  <span className="font-sans text-[#fcfcfc]/60 px-1">
                    {itemsData.rating}
                  </span>
                </div>
                <span>Ratings</span>
              </div>
            </div>
            <Link
              href={`/products/${itemsData.id}`}
              className="flex flex-wrap items-center text-[#fcfcfc]/60 duration-300 hover:text-[#fcfcfc] text-[10px] sm:text-xs md:text-base cursor-pointer"
            >
              See More Details
              <IoIosArrowRoundForward className="flex items-end w-5 sm:w-7 h-auto" />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductsCards;

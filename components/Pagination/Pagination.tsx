import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={
        <SlArrowLeft
          className="w-4 sm:w-6 md:w-7 h-auto drop-shadow-[0px_0px_5px_rgba(17,17,17,1)]"
          alt="left arrow icon"
        />
      }
      nextLabel={
        <SlArrowRight
          className="w-4 sm:w-6 md:w-7 h-auto drop-shadow-[0px_0px_5px_rgba(17,17,17,1)]"
          alt="right arrow icon"
        />
      }
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={"flex justify-evenly items-center w-1/2 md:max-w-[20%] mx-auto relative bg-[#111] select-none"}
      activeClassName={"flex justify-evenly rounded-full items-center w-8 h-8 md:w-10 md:h-10 bg-[#888888]/60 tranition-all duration-500"}
    />
  );
};

export default Pagination;

"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import CloseSVG from "../SVGs/CloseSVG";

interface SearchPageProps {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchPage: React.FC<SearchPageProps> = ({
  isSearchOpen,
  setIsSearchOpen,
}) => {
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  
  // search
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/searchpage/${search}`);
    setSearch("");
  };

  return (
    <div className="flex items-center justify-start w-full h-full bg-[#111] tenor">
      <div className="container max-w-[1440px] mx-auto relative">
        <header className="flex flex-col justify-center w-full h-full">
          <div className="flex justify-between items-center w-full">
            <form onSubmit={handleSubmit} className="flex items-center w-full">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search items"
                className="w-full bg-transparent placeholder:text-[#FCFCFC]/60 text-[#FCFCFC] text-sm focus:outline-none"
              />
            </form>
            <button
              aria-label="Close search"
              className="flex fill-[#fcfcfc] w-4 h-4"
              onClick={toggleSearch}
            >
              <CloseSVG />
            </button>
          </div>
        </header>
        <hr className="flex items-end w-full border-1 border-[#888]/60 mt-1" />
      </div>
    </div>
  );
};

export default SearchPage;

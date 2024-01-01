import UnderlineSVG from "@/components/SVGs/UnderlineSVG";
import { Hero } from "../components/Hero/Hero";
import NewArrivalTabs from "@/components/NewArrival/NewArrivalTabs";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <section aria-label="hero" className="mx-auto relative">
        <Hero />
      </section>
      <section
        aria-label="New Arrival"
        className="w-full h-full mx-auto mt-10 md:mt-16"
      >
        <div className="flex flex-col justify-center w-full max-w-[1440px] mx-auto items-center relative">
          <header className="w-fit items-center">
            <h2 className="text-base sm:text-xl md:text-3xl text-[#FCFCFC] tracking-[1.5px] md:tracking-[3px] tenor">
              NEW ARRIVAL
            </h2>
            <div className="w-[80%] mx-auto fill-[#fcfcfc]">
              <UnderlineSVG />
            </div>
          </header>
          <section aria-label="Arrival Tabs">
            <NewArrivalTabs />
          </section>
        </div>
      </section>
      <section className="h-[100dvh] ">

      </section>
    </div>
  );
}

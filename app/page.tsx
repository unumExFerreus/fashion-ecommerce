import { Banner } from "../components/Banner";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <section className="mx-auto relative">
        <div className="w-full max-w-[800px] mx-auto relative">
          <Banner />
        </div>
      </section>
      <div className="flex w-full mx-0 h-[300vh]"></div>
    </div>
  );
}

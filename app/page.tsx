import { Banner } from "../components/Banner";

export default function Home() {
  return (
    <div className="flex justify-center max-w-[1440px] relative mx-auto scroll-smooth">
      <section className="flex justify-center w-full max-w-[800px] relative">
        <Banner />
      </section>
      <div className="flex h-[300vh]"></div>
    </div>
  );
}

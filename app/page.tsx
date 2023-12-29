import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <section aria-label="hero" className="mx-auto relative">
        <Hero />
      </section>
      <section aria-label="New Arrival" className="w-full h-full">
      </section>
    </div>
  );
}

import AboutChess from "@/components/home/about-chess";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="max-w-11/12 mx-auto">
        <Hero />
        <Features />
        <AboutChess />
      </div>
    </main>
  );
}

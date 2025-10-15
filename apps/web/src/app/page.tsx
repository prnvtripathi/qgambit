import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="max-w-11/12 mx-auto border-x border-gradient-to-b from-secondary via-primary to-secondary">
        <Hero />
      </div>
    </main>
  );
}

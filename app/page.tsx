import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 mx-auto bg-[#b5d8eb]">
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-4xl lg:text-6xl text-center text-black">
            Somos una iglesia que se reúne para{" "}
            <span className="font-bold text-white">adorar</span> a Dios,{" "}
            <span className="font-bold text-white">estudiar</span> la Biblia, y{" "}
            <span className="font-bold text-white">servir</span> a nuestra
            comunidad.
          </p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <Link href="https://g.co/kgs/Q8qH8i8">
            <img
              src="/map.png"
              alt="map"
              className="rounded-lg shadow border border-black"
            />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

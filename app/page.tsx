import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />

      <div className="m-4 md:hidden">
        <p className="text-2xl text-center font-bold text-[#00416a]">
          Bienvenidos a<br /> Primera Iglesia Bautista
          <br /> de Milwaukee
        </p>
      </div>

      <div className="m-4 hidden md:block">
        <p className="text-4xl text-center font-bold text-[#00416a]">
          Bienvenidos a Primera Iglesia Bautista de Milwaukee
        </p>
      </div>
    </div>
  );
}

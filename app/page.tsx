import Banner from "@/components/Banner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />

      <HeroSection />

      <div className="text-lg lg:text-xl text-center text-white bg-gray-800 p-8 w-full mx-auto">
        <h2 className="font-bold underline text-2xl mb-4">Horario</h2>
        <p className="mb-2">Domingo: 11:00 AM - 12:00 PM</p>
        <p className="mb-2">Miercoles: 6:30 PM - 8:00 PM</p>
        <p className="mb-2">Sabado: 10:00 AM - 12:00 PM</p>
      </div>
      <Banner />
    </div>
  );
}

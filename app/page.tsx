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
        <p className="mb-2">Domingo - Escuela Dominical - 10:00am</p>
        <p className="mb-2">Domingo - Servicio - 11:00am</p>
        <p className="mb-2">Domingo - Servicio - 5:00pm</p>
        <p className="mb-2">Miercoles - Estudio Biblico - 7:00pm</p>
      </div>

      <Banner />
    </div>
  );
}

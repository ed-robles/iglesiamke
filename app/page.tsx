import Banner from "@/components/Banner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />

      <HeroSection />

      <div className="text-lg lg:text-xl text-center text-white bg-gray-800 p-8 w-full mx-auto">
        <h1 className="font-bold underline text-2xl mb-4">Horario</h1>
        <h2 className="mb-2">
          <span className="font-bold">Domingo</span>
          <p>Escuela Dominical: 10:00am</p>
          <p>Servicio: 11:00am</p>
          <p>Servicio: 5:00pm</p>
        </h2>
        <h2 className="mt-4">
          <span className="font-bold">Miercoles</span>
          <p>Estudio Biblico: 7:00pm</p>
        </h2>
      </div>

      <Banner />
    </div>
  );
}

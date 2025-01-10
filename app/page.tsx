import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="flex flex-col items-center justify-center">
        <h1 className="md:hidden text-2xl lg:text-4xl font-bold text-center bg-[#00416a] w-full text-white py-8">
          Bienvenidos a<br /> Nuestra Iglesia
        </h1>
        <h1 className="hidden md:block text-2xl lg:text-4xl font-bold text-center bg-[#00416a] w-full text-white py-8">
          Bienvenidos a Nuestra Iglesia
        </h1>
        <div className="text-lg lg:text-xl text-center text-white bg-gray-800 m-8 p-4 rounded shadow-lg max-w-2xl mx-auto">
          <h2 className="font-bold underline text-2xl mb-4">Horario</h2>
          <p className="mb-2">Domingo: 11:00 AM - 12:00 PM</p>
          <p className="mb-2">Miercoles: 6:30 PM - 8:00 PM</p>
          <p className="mb-2">Sabado: 10:00 AM - 12:00 PM</p>
        </div>
      </div>
      <Banner />

      <Footer />
    </div>
  );
}

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="flex flex-col items-center justify-center py-16 px-8">
        <h1 className="text-2xl lg:text-4xl text-center bg-[#00416a] text-white p-4 rounded-lg shadow">
          Bienvenidos A Nuestra Iglesia
        </h1>
        <div className="text-lg lg:text-xl text-center text-black mt-4">
          <h2 className="font-bold underline my-8 text-2xl">Horario</h2>
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

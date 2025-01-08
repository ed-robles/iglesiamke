import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />

      <div className="m-2">
        <p className="text-2xl font-bold">
          Bienvenidos a Primera Iglesia Bautista de Milwaukee
        </p>
      </div>
    </div>
  );
}

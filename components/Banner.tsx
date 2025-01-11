import Link from "next/link";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto">
      <div className="col-span-1 flex items-center justify-center">
        <p className="text-2xl md:text-4xl text-center p-12 font-bold text-[#b5d8eb]">
          Somos una iglesia que se reúne para{" "}
          <span className="font-bold text-[#00416a]">adorar</span> a Dios,{" "}
          <span className="font-bold text-[#00416a]">estudiar</span> la Biblia,
          y <span className="font-bold text-[#00416a]">servir</span> a nuestra
          comunidad.
        </p>
      </div>
      <div className="bg-[#00416a] flex items-center justify-center">
        <Link href="https://g.co/kgs/Q8qH8i8">
          <img
            src="/map.png"
            alt="map"
            className="rounded-lg shadow border border-black scale-75 hover:scale-90 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;

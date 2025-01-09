import Link from "next/link";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-16 mx-auto bg-gradient-to-br from-[#b5d8eb] to-blue-400">
      <div className="col-span-1 flex items-center justify-center">
        <p className="text-2xl lg:text-4xl text-center text-black">
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
  );
};

export default Banner;

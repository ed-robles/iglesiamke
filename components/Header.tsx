import Image from "next/image";

const Header = () => {
  return (
    <div className="mb-4 p-2 lg:p-8">
      <div className="flex justify-center">
        <Image
          className=""
          src="/STACKEDlogo.png"
          alt="PIB logo"
          width={750}
          height={250}
        />
      </div>
    </div>
  );
};

export default Header;

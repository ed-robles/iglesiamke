import Image from "next/image";

const Header = () => {
  return (
    <div className="m-0">
      <div className="flex justify-center">
        <Image
          className="p-4"
          src="/STACKEDlogo.png"
          alt="PIB logo"
          width={600}
          height={200}
        />
      </div>
    </div>
  );
};

export default Header;

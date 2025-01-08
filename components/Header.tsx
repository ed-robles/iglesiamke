import Image from "next/image";

const Header = () => {
  return (
    <div className="m-0">
      <div className="flex justify-center bg-[#b5d8eb]">
        <Image src="/STACKEDlogo.png" alt="PIB logo" width={600} height={200} />
      </div>
    </div>
  );
};

export default Header;

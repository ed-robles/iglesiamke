import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white p-2 text-xs text-black text-center">
      <span className="text-[#4FBBFF] text-center animate-spin-slow">
        <Link href="https://roblescreativeco.com">
          {" "}
          <Image
            src="/RCC_Circle_Blue.png"
            className="ml-1 inline"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </span>
    </div>
  );
};

export default Footer;

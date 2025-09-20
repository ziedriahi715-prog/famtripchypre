import Image from "next/image";
import React from "react";

interface NavbarProps {
  text: string;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ text, className }) => {
  return (
    <div className={className ?? ""}>
      <div className="bg-[#1f2833]">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-4 py-3">
          <div className="relative h-[44px] w-[110px]">
            <Image src="/images/logo.png" alt="Logo" fill sizes="110px" />
          </div>
          <div className="relative h-[44px] w-[110px]">
            <Image src="/images/sassy.jpg" alt="Sassy" fill sizes="110px" />
          </div>
          <div className="relative h-[44px] w-[110px]">
            <Image src="/images/cyprus.png" alt="Cyprus" fill sizes="110px" />
          </div>
        </div>
      </div>

      <div className="bg-[#6d9161]">
        <div className="mx-auto max-w-4xl px-4 py-2">
          <h1 className="text-white text-sm md:text-base font-semibold uppercase tracking-wide">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import React from "react";

interface NavbarProps {
  text: string;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ text, className }) => {
  return (
    <div className={className ?? ""}>
      <div className="bg-gradient-to-r from-[#1f2f3a] to-[#ffffff]">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-2 sm:gap-4 md:gap-6 px-2 sm:px-3 md:px-4 py-2 sm:py-3">
          <div className="relative h-[30px] w-[70px] sm:h-[36px] sm:w-[85px] md:h-[44px] md:w-[110px]">
            <Image src="/images/logo.png" alt="Logo" fill sizes="(max-width: 640px) 70px, (max-width: 768px) 85px, 110px" />
          </div>
          <div className="relative h-[30px] w-[70px] sm:h-[36px] sm:w-[85px] md:h-[44px] md:w-[110px]">
            <Image src="/images/sassy_png.png" alt="Sassy" fill sizes="(max-width: 640px) 70px, (max-width: 768px) 85px, 120px" />
          </div>
          <div className="relative h-[30px] w-[70px] sm:h-[36px] sm:w-[85px] md:h-[44px] md:w-[110px]">
            <Image src="/images/cyprus.png" alt="Cyprus" fill sizes="(max-width: 640px) 70px, (max-width: 768px) 85px, 110px" />
          </div>
        </div>
      </div>

      <div className="bg-[#6d9161]">
        <div className="mx-auto max-w-4xl px-2 sm:px-3 md:px-4 py-1 sm:py-2">
          <h1 className="text-white text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide text-center sm:text-left">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import React from "react";

interface NavbarProps {
  text: string;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ text, className }) => {
  return (
    <div className={className ?? ""}>
      <div className="bg-[#1f2f3a] h-[92px] flex items-center justify-around gap-5">
        <div className="max-w-4xl flex items-center justify-between  gap-10 p-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-md p-1.5 sm:p-2 shadow-lg min-h-[28px] w-24 sm:w-32 md:w-36 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={35}
              className="h-5 w-auto sm:h-7 md:h-9 object-contain max-w-full"
              priority
            />
          </div>

          {/* Sassy Events logo with fallback */}
          <div className="bg-white/90 backdrop-blur-sm rounded-md p-1.5 sm:p-2 shadow-lg min-h-[28px] w-24 sm:w-32 md:w-36 flex items-center justify-center">
            <Image
              src="/images/sassy_png.png"
              alt="Sassy Events"
              width={120}
              height={50}
              className="h-5 w-auto sm:h-7 md:h-9 object-contain max-w-full"
              priority
            />
          </div>

          {/* Cyprus Airways logo with fallback */}
          <div className="bg-white/90 backdrop-blur-sm rounded-md p-1.5 sm:p-2 shadow-lg min-h-[28px] w-24 sm:w-32 md:w-36 flex items-center justify-center">
            <Image
              src="/images/cyprus.png"
              alt="Cyprus Airways"
              width={100}
              height={35}
              className="h-5 w-auto sm:h-7 md:h-9 object-contain max-w-full"
              priority
            />
          </div>
        </div>
      </div>

      <div className="bg-[#6d9161] h-[48px] flex items-center">
        <div className="max-w-4xl px-2 sm:px-3 md:px-4">
          <h1 className="text-white text-sm sm:text-md md:text-lg font-bold uppercase tracking-wide text-left">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

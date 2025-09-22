import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Banner {
  className?: string;
  BannerTitleClass?: string;
}

const Banner: React.FC<Banner> = ({
  className = "",
  BannerTitleClass = "",
}) => {
  return (
    <div
      className={`
        relative bg-black bg-[url('/images/banniere.jpg')] bg-cover bg-center bg-no-repeat px-4 h-[33vh] md:h-[40vh] ${className} 
       `}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* THE MICE EXPERT section in top right */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
        {/* Vertical line separator */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 rounded-sm h-24 sm:h-30 md:h-36 bg-black shadow-white shadow-sm"></div>

        {/* Logo container positioned to the right of the line */}
        <div className=" left-1/2  ml-2 sm:ml-3 md:ml-4 flex flex-col items-start gap-1 sm:gap-2 md:gap-3 relative z-10">
          {/* First logo with fallback */}
          <div className=" min-h-[28px] w-24 sm:w-32 md:w-36 flex items-center justify-center">
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
          <div className="min-h-[28px] w-24 sm:w-32 md:w-36 flex items-center justify-center">
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
          <div className=" min-h-[28px] w-24 sm:w-32 md:w-36 flex items-center justify-center">
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

      {/* Main title at bottom center */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 px-4 sm:bottom-4 md:bottom-6">
        <div className="text-white text-center font-Scotch">
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-xl font-Bonnet font-bold uppercase tracking-[0.2em] leading-tight letter-shadow">
            FAM TRIP CHYPRE
          </div>
          <div className="whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-base font-Scotch font-normal uppercase tracking-[0.15em] mt-2 leading-tight letter-shadow-subtitle">
            L'ÉVASION GRANDEUR NATURE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

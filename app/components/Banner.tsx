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
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 z-20 flex flex-col items-end">
        {/* Vertical line separator */}
        <div className="absolute -left-4 sm:-left-6 md:-left-8 top-0 w-0.5 h-32  sm:h-36 md:h-48 bg-white/80 shadow-sm"></div>

        {/* Logo container with better spacing and backgrounds */}
        <div className="flex flex-col items-end gap-2 sm:gap-3 md:gap-4">
          {/* First logo with fallback */}
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

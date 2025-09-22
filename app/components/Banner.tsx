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
      className={`relative bg-[url('/images/banniere.jpg')] bg-cover bg-center bg-no-repeat min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] ${className}`}
    >
      {/* THE MICE EXPERT section in top right */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 z-10">
        {/* Vertical line separator */}
        <div className="absolute -left-3 sm:-left-4 md:-left-6 top-0 w-px h-20 sm:h-32 md:h-40 bg-black"></div>

        {/* Text block */}
        <div className="mt-2 sm:mt-3 md:mt-4">
          <Image
            src="/images/logo.png"
            alt="Sassy Events"
            width={120}
            height={40}
            className="h-4 w-auto sm:h-6 md:h-8"
          />
        </div>

        {/* Sassy Events logo */}
        <div className="mt-1 sm:mt-2 md:mt-4">
          <Image
            src="/images/sassy_png.png"
            alt="Sassy Events"
            width={140}
            height={60}
            className="h-4 w-auto sm:h-6 md:h-8"
          />
        </div>

        {/* Cyprus Airways logo */}
        <div className="mt-1 sm:mt-2 md:mt-3">
          <Image
            src="/images/cyprus.png"
            alt="Cyprus Airways"
            width={120}
            height={40}
            className="h-4 w-auto sm:h-6 md:h-8"
          />
        </div>
      </div>

      {/* Main title at bottom center */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 px-4 sm:bottom-4 md:bottom-6">
        <div className="text-white text-center font-sans">
          <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-wider drop-shadow-lg leading-tight">
            FAM TRIP CHYPRE
          </div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal uppercase tracking-wider drop-shadow-lg mt-1 leading-tight">
            L'ÉVASION GRANDEUR NATURE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

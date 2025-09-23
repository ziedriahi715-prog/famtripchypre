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

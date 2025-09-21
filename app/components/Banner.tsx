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
      className={`relative bg-[url('/images/banniere.jpg')] bg-cover bg-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] ${className}`}
    >
      {/* Red line in top left */}

      {/* THE MICE EXPERT section in top right */}
      <div className="absolute top-6 right-6 z-10">
        {/* Vertical line separator */}
        <div className="absolute -left-6 top-0 w-px h-40 bg-black"></div>

        {/* Text block */}
        <div className="mt-4">
          <Image
            src="/images/logo.png"
            alt="Sassy Events"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>

        {/* Sassy Events logo */}
        <div className="mt-4">
          <Image
            src="/images/sassy_png.png"
            alt="Sassy Events"
            width={140}
            height={60}
            className="h-8 w-auto"
          />
        </div>

        {/* Cyprus Airways logo */}
        <div className="mt-3">
          <Image
            src="/images/cyprus.png"
            alt="Cyprus Airways"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>
      </div>

      {/* Main title at bottom center */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-white text-center font-sans">
          <div className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider drop-shadow-lg leading-tight">
            FAM TRIP CHYPRE
          </div>
          <div className="text-base md:text-lg lg:text-xl font-normal uppercase tracking-wider drop-shadow-lg mt-1 leading-tight">
            L'ÉVASION GRANDEUR NATURE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

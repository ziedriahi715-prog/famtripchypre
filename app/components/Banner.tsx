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
      className={`relative bg-black bg-[url('/images/banniere.jpg')] bg-cover bg-center bg-no-repeat min-h-[300px] md:min-h-[400px] lg:min-h-[500px] p-4 ${className}`}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Logo container */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-4 sm:gap-2 mt-4 sm:mt-8">
          <Link
            className="text-primary-foreground relative block h-[60px] w-[120px] sm:h-[70px] sm:w-[130px] md:h-[80px] md:w-[150px] transition-transform hover:scale-105"
            href={"/"}
          >
            <Image
              src={"/images/sassy.jpg"}
              fill
              alt="Sassy Logo"
              className="object-contain"
              sizes="(max-width: 640px) 120px, (max-width: 768px) 130px, 150px"
              priority
            />
          </Link>

          <Link
            className="text-primary-foreground relative block h-[60px] w-[120px] sm:h-[70px] sm:w-[130px] md:h-[80px] md:w-[150px] transition-transform hover:scale-105"
            href={"/"}
          >
            <Image
              src={"/images/logo.png"}
              fill
              alt="Main Logo"
              className="object-contain"
              sizes="(max-width: 640px) 120px, (max-width: 768px) 130px, 150px"
              priority
            />
          </Link>

          <Link
            className="text-primary-foreground relative block h-[60px] w-[120px] sm:h-[70px] sm:w-[130px] md:h-[80px] md:w-[150px] transition-transform hover:scale-105"
            href={"/"}
          >
            <Image
              src={"/images/cyprus.png"}
              fill
              alt="Cyprus Logo"
              className="object-contain"
              sizes="(max-width: 640px) 120px, (max-width: 768px) 130px, 150px"
              priority
            />
          </Link>
        </div>

        {/* Title section */}
        <div className="flex-1 flex items-center justify-center px-4">
          <h1
            className={`${BannerTitleClass} text-white text-center text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-semibold uppercase leading-tight max-w-4xl`}
          >
            <span className="block mb-2 drop-shadow-lg">FAM TRIP CHYPRE</span>
            <span className="block text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] font-normal drop-shadow-lg">
              L'ÉVASION GRANDEUR NATURE
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

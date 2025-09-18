import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Banner {
  className: string;
  BannerTitleClass: string;
}

const Banner: React.FC<Banner> = ({ className, BannerTitleClass }) => {
  return (
    <div
      className={`relative bg-black bg-[url('/images/banniere.jpg')] bg-contain bg-left bg-no-repeat p-4 ${className}`}
    >
      <Link
        className="text-primary-foreground relative mx-auto block h-[80px] w-[150px]"
        href={'/'}
      >
        <Image src={'/images/logo.png'} fill alt="Logo" objectFit="contain" />
      </Link>

      <h1
        className={`${BannerTitleClass} text-primaryforeground absolute right-0 left-0 mx-auto text-center text-[24px] font-semibold uppercase`}
      >
        Secret AfterWork part<span className="text-accent ml-2">V</span>
      </h1>
    </div>
  );
};

export default Banner;

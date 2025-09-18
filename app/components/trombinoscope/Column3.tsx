import Image from 'next/image';
import React from 'react';

const Column3 = () => {
  return (
    <div className="columns-1 gap-3 space-y-3 md:columns-2">
      <div className="image">
        <Image
          fill
          objectFit="cover"
          className="rounded-[20px] object-top"
          src="/images/trombinoscope/Clément - Step In.jpg"
          alt="Clément - Step In"
        />
      </div>
      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#5FC14233]"></div>
      <div className="image">
        <Image
          fill
          objectFit="cover"
          className="rounded-[20px] object-top"
          src="/images/trombinoscope/Cynthia - Incentivos Ibiza.jpg"
          alt="Cynthia - Incentivos Ibiza"
        />
      </div>
      <div className="image">
        <Image
          fill
          objectFit="cover"
          className="rounded-[20px] object-top"
          src="/images/trombinoscope/Dibi Youssef - Emirates.jpg"
          alt="Dibi Youssef - Emirates"
        />
      </div>

      <div className="image">
        <Image
          fill
          objectFit="cover"
          className="rounded-[20px] object-top"
          src="/images/trombinoscope/Marion Colas - OT Arabie Saoudite.jpg"
          alt="Marion Colas - OT Arabie Saoudite"
        />
      </div>
      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#ED80001A]"></div>

      <div className="image">
        <Image
          fill
          objectFit="cover"
          className="rounded-[20px] object-top"
          src="/images/trombinoscope/Michèle - Blue Safari Seychelles.jpg"
          alt="Michèle - Blue Safari Seychelles"
        />
      </div>

      <div className="image">
        <Image
          fill
          objectFit="cover"
          className="rounded-[20px] object-top"
          src="/images/trombinoscope/CerenAvantgarde.jpg"
          alt="Ceren"
        />
      </div>

      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#6A936033]"></div>
      <div className="image">
        <Image
          fill
          objectFit="cover"
          className="rounded-[20px] object-top"
          src="/images/trombinoscope/Gael - Tucaya.jpg"
          alt="Gael - Tucaya"
        />
      </div>

      <div className="image">
        <Image
          fill
          objectFit="cover"
          className="rounded-[20px] object-top"
          src="/images/trombinoscope/Hervé - The MICE Experts.jpg"
          alt="Hervé - The MICE Experts"
        />
      </div>
      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#6A936033]"></div>
      <div className="image">
        <Image
          fill
          objectFit="cover"
          className="rounded-[20px] object-top"
          src="/images/trombinoscope/Hugo Robotti.jpg"
          alt="Hugo Robotti"
        />
      </div>
      <div className="image">
        <Image
          fill
          objectFit="cover"
          className="rounded-[20px] object-top"
          src="/images/trombinoscope/Sami - Terre d'ailleurs.jpg"
          alt="Sami - Terre d'ailleurs"
        />
      </div>

      <div className="image">
        <Image
          fill
          objectFit="cover"
          className="rounded-[20px] object-top"
          src="/images/trombinoscope/NazlicanMarriott.jpg"
          alt="Nazlican - Marriott"
        />
      </div>
      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#5FC14233]"></div>
    </div>
  );
};

export default Column3;

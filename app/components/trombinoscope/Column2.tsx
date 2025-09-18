import Image from 'next/image';
import React from 'react';

const Column2 = () => {
  return (
    <div className="columns-1 gap-3 space-y-3 md:columns-2">
      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#ED80001A]"></div>
      <div className="image">
        <Image
          fill
          className="rounded-[20px] object-top"
          objectFit="cover"
          src="/images/trombinoscope/Cécile Fauconnier (Sun Life).jpg"
          alt="Cécile Fauconnier (Sun Life)"
        />
      </div>
      <div className="image">
        <Image
          fill
          className="rounded-[20px] object-top"
          objectFit="cover"
          src="/images/trombinoscope/Lara - Qincentive.jpg"
          alt="Lara - Qincentive"
        />
      </div>
      <div className="image">
        <Image
          fill
          className="rounded-[20px] object-top"
          objectFit="cover"
          src="/images/trombinoscope/Léna Lacaës - OT Dubaï.jpg"
          alt="Léna Lacaës - OT Dubaï"
        />
      </div>
      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#00000029]"></div>
      <div className="image">
        <Image
          fill
          className="rounded-[20px] object-top"
          objectFit="cover"
          src="/images/trombinoscope/Manon - Emacarena.jpg"
          alt="Manon - Emacarena"
        />
      </div>
      <div className="image">
        <Image
          fill
          className="rounded-[20px] object-top"
          objectFit="cover"
          src="/images/trombinoscope/Didier - Origin africa.jpg"
          alt="Didier - Origin africa"
        />
      </div>
      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#5FC14233]"></div>

      <div className="image">
        <Image
          fill
          className="rounded-[20px] object-top"
          objectFit="cover"
          src="/images/trombinoscope/Frédéric - Step in.jpg"
          alt="Frédéric - Step in"
        />
      </div>
      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#5FC14233]"></div>
      <div className="image">
        <Image
          fill
          className="rounded-[20px] object-top"
          objectFit="cover"
          src="/images/trombinoscope/Myriam (Beachcomber).jpg"
          alt="Myriam (Beachcomber)"
        />
      </div>
      <div className="image">
        <Image
          fill
          className="rounded-[20px] object-top"
          objectFit="cover"
          src="/images/trombinoscope/Nadia - Qatar Airways.jpg"
          alt="Nadia - Qatar Airways"
        />
      </div>

      <div className="image">
        <Image
          fill
          className="rounded-[20px] object-top"
          objectFit="cover"
          src="/images/trombinoscope/Nagesh - Incent india.jpg"
          alt="Nagesh - Incent india"
        />
      </div>
      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#5FC14233]"></div>
      <div className="image">
        <Image
          fill
          className="rounded-[20px] object-top"
          objectFit="cover"
          src="/images/trombinoscope/JihaneAvantgarde.jpg"
          alt="Jihane - Avantgarde"
        />
      </div>

      <div className="image">
        <Image
          fill
          className="rounded-[20px] object-top"
          objectFit="cover"
          src="/images/trombinoscope/YaseminMarriott.jpg"
          alt="Yasemin - Marriott"
        />
      </div>
    </div>
  );
};

export default Column2;

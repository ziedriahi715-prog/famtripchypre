import Image from 'next/image';
import React from 'react';

const Column1 = () => {
  return (
    <div className="columns-1 gap-3 space-y-3 md:columns-2">
      <div className="image">
        <Image
          objectFit="cover"
          className="rounded-[20px] object-top"
          fill
          src="/images/trombinoscope/Aysegul - Qincentive.jpg"
          alt="Aysegul - Qincentive"
        />
      </div>

      <div className="image">
        <Image
          objectFit="cover"
          className="rounded-[20px] object-top"
          fill
          src="/images/trombinoscope/Candice - Shangri La.jpg"
          alt="Candice - Shangri La"
        />
      </div>

      <div className="image">
        <Image
          objectFit="cover"
          className="rounded-[20px] object-top"
          fill
          src="/images/trombinoscope/Tarek - SPICE.jpg"
          alt="Tarek - SPICE"
        />
      </div>

      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#5FC14233]"></div>

      <div className="image">
        <Image
          objectFit="cover"
          className="rounded-[20px] object-top"
          fill
          src="/images/trombinoscope/Teelasha - Emotions.jpg"
          alt="Teelasha - Emotions"
        />
      </div>

      <div className="image">
        <Image
          objectFit="cover"
          className="rounded-[20px] object-top"
          fill
          src="/images/trombinoscope/Sandra - Spice Egypte.jpg"
          alt="Sandra - Spice Egypte"
        />
      </div>

      <div className="image">
        <Image
          objectFit="cover"
          className="rounded-[20px] object-top"
          fill
          src="/images/trombinoscope/Alberta - Merity.jpg"
          alt="Alberta - Merity"
        />
      </div>

      <div className="image">
        <Image
          objectFit="cover"
          className="rounded-[20px] object-top"
          fill
          src="/images/trombinoscope/Annabelle - Easia.jpg"
          alt="Annabelle - Easia"
        />
      </div>

      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#ED80001A]"></div>

      <div className="image">
        <Image
          objectFit="cover"
          className="rounded-[20px] object-top"
          fill
          src="/images/trombinoscope/Anne Christine - 7th sense.jpg"
          alt="Anne Christine - 7th sense"
        />
      </div>

      <div className="image">
        <Image
          objectFit="cover"
          className="rounded-[20px] object-top"
          fill
          src="/images/trombinoscope/Inès - Off Road.jpg"
          alt="Inès - Off Road"
        />
      </div>

      <div className="image">
        <Image
          fill
          objectFit="cover"
          className="rounded-[20px object-top]"
          src="/images/trombinoscope/Jalil - KTI.jpg"
          alt="Jalil - KTI"
        />
      </div>

      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#ED80001A]"></div>

      <div className="image">
        <Image
          objectFit="cover"
          className="rounded-[20px] object-top"
          fill
          src="/images/trombinoscope/Jenny - OT Maurice.jpg"
          alt="Jenny - OT Maurice"
        />
      </div>
      <div className="image">
        <Image
          objectFit="cover"
          className="rounded-[20px] object-top"
          fill
          src="/images/trombinoscope/Aurore - Sassy Events.jpg"
          alt="Aurore - Sassy_Events"
        />
      </div>
      <div className="h-[90px] w-[115px] rounded-[20px] bg-[#ED80001A]"></div>
    </div>
  );
};

export default Column1;

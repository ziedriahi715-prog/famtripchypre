import Image from "next/image";
import React from "react";

const Column4 = () => {
  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Xenia - Force Rose.jpg"
          alt="Xenia - Force Rose"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Xénia - <span className="font-bold">Force Rose</span>
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Sabrina - Wagram & Vous.jpg"
          alt="Sabrina - Wagram & Vous"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Sabrina - <span className="font-bold">Wagram & Vous</span>
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Herve.jpg"
          alt="Hervé - The MICE Experts"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Hervé - <span className="font-bold">The MICE Experts</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Column4;

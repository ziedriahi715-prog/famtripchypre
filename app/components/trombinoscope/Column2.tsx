import Image from "next/image";
import React from "react";

const Column2 = () => {
  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Géraldine - Créative Events.jpg"
          alt="Géraldine - Creative Events"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Géraldine - <span className="font-bold">Créative Events</span>
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/melanie.jpg"
          alt="Mélanie - Succès des Stim"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Mélanie - <span className="font-bold">Succès des Stim</span>
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Kléa - Sassy Events.jpg"
          alt="Kléa - Sassy Events"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Kléa - <span className="font-bold">Sassy Events</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Column2;

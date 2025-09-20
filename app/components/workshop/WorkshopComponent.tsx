import React from "react";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import Map from "../icons/Map";

const WorkshopComponent = () => {
  return (
    <>
      <Navbar text="Carte" />
      <div className="p-6">
        <h2 className="flex items-center space-x-3 mb-5">
          <div className="border-primary relative flex h-10 w-10 items-center justify-center rounded-full border-2">
            <Map className="fill-primary h-7 w-7" />
          </div>
          <span className="text-primary text-xl font-semibold">
            Carte de Chypre
          </span>
        </h2>
        <div className="flex justify-center">
          <Image
            src="/images/map.jpg"
            alt="Carte de Chypre"
            width={1000}
            height={1000}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default WorkshopComponent;

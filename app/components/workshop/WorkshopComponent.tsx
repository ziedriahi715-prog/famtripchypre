import React from "react";
import Image from "next/image";
import Navbar from "../navbar/Navbar";

const WorkshopComponent = () => {
  return (
    <>
      <Navbar text="Carte" />
      <div className="p-6">
        <Image src="/images/map.jpg" alt="Map" width={1000} height={1000} />
      </div>
    </>
  );
};

export default WorkshopComponent;

import Camera from "@/app/components/icons/Camera";

import React from "react";
import Column1 from "./Column1";
import Column2 from "./Column2";
import Column3 from "./Column3";
import Column4 from "./Column4";
import Navbar from "../navbar/Navbar";

const Trombinoscope = () => {
  return (
    <>
      <Navbar text="Trombinoscope" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-4 mt-4 sm:mt-6">
        <Column1 />
        <Column2 />
        <Column3 />
        <Column4 />
      </div>
    </>
  );
};

export default Trombinoscope;

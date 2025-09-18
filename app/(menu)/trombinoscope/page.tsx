import Camera from '@/app/components/icons/Camera';
import Column1 from '@/app/components/trombinoscope/Column1';
import Column2 from '@/app/components/trombinoscope/Column2';
import Column3 from '@/app/components/trombinoscope/Column3';

import React from 'react';

const Page = () => {
  return (
    <>
      <div className="p-6">
        <h2 className="flex items-center space-x-3">
          <div className="border-primary relative flex h-10 w-10 items-center justify-center rounded-full border-2">
            <Camera className="fill-primary h-7 w-7" />
          </div>
          <span className="text-primary text-xl font-semibold">Trombinoscope</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 px-4 md:gap-2">
        <Column1 />
        <Column2 />
        <Column3 />
      </div>
    </>
  );
};

export default Page;

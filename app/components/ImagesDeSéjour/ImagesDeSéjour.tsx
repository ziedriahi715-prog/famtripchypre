import React from "react";
import Navbar from "../navbar/Navbar";
import Image from "next/image";

const ImagesDeSéjour = () => {
  const images = [
    {
      src: "/images/sejour/Image 1.jpeg",
      alt: "Image 1",
    },
    {
      src: "/images/sejour/Image 2.jpg",
      alt: "Image 2",
    },
    {
      src: "/images/sejour/Image 3.jpeg",
      alt: "Image 3",
    },
    {
      src: "/images/sejour/Image 4.jpg",
      alt: "Image 4",
    },
    {
      src: "/images/sejour/Image 5.jpg",
      alt: "Image 5",
    },
    {
      src: "/images/sejour/Image 6.jpg",
      alt: "Image 6",
    },
    {
      src: "/images/sejour/Image 7.jpg",
      alt: "Image 7",
    },
    {
      src: "/images/sejour/Image 8.jpg",
      alt: "Image 8",
    },
    {
      src: "/images/sejour/Image 9.jpg",
      alt: "Image 9",
    },
    {
      src: "/images/sejour/Image 10.jpg",
      alt: "Image 10",
    },
    {
      src: "/images/sejour/Image 11.jpg",
      alt: "Image 11",
    },
    {
      src: "/images/sejour/Image 12.avif",
      alt: "Image 12",
    },
    {
      src: "/images/sejour/Image 13.jpg",
      alt: "Image 13",
    },
    {
      src: "/images/sejour/Image 14.jpg",
      alt: "Image 14",
    },
  ];
  return (
    <div>
      <Navbar text="Images du séjour" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-2">
        {images.map((image, index) => (
          <div key={index} className="relative w-full aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-[20px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesDeSéjour;

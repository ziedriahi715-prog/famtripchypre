import React from "react";
import Navbar from "../navbar/Navbar";
import Image from "next/image";

const ImagesDeSéjour = () => {
  const images = [
    {
      src: "/images/sejour/image 1.jpeg",
      alt: "Image 1",
    },
    {
      src: "/images/sejour/image 2.jpg",
      alt: "Image 2",
    },
    {
      src: "/images/sejour/image 3.jpeg",
      alt: "Image 3",
    },
    {
      src: "/images/sejour/image 4.jpg",
      alt: "Image 4",
    },
    {
      src: "/images/sejour/image 5.jpg",
      alt: "Image 5",
    },
    {
      src: "/images/sejour/image 6.jpg",
      alt: "Image 6",
    },
    {
      src: "/images/sejour/image 7.jpg",
      alt: "Image 7",
    },
    {
      src: "/images/sejour/image 8.jpg",
      alt: "Image 8",
    },
    {
      src: "/images/sejour/image 9.jpg",
      alt: "Image 9",
    },
    {
      src: "/images/sejour/image 10.jpg",
      alt: "Image 10",
    },
    {
      src: "/images/sejour/image 11.jpg",
      alt: "Image 11",
    },
    {
      src: "/images/sejour/image 12.avif",
      alt: "Image 12",
    },
    {
      src: "/images/sejour/image 13.jpg",
      alt: "Image 13",
    },
    {
      src: "/images/sejour/image 14.jpg",
      alt: "Image 14",
    },
  ];
  return (
    <div>
      <Navbar text="Images de séjour" />
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

import React from "react";
import Image from "next/image";

function SmallCard({ image, city, duration }) {
  return (
    <div className=" flex space-x-4 hover:bg-gray-100 rounded-md hover:scale-105 transition duration-200 ease-out mx-2 mb-2 mt-5 cursor-pointer">
      <div className="relative w-16 h-16">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className=" rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center space-y-1 ">
        <p className="text-sm">{city}</p>
        <p className="text-gray-500 text-sm">{duration}</p>
      </div>
    </div>
  );
}

export default SmallCard;

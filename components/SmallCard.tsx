import React from "react";
import Image from "next/image";

type Props = {
  img: string,
  location: string,
  distance: string,
};
const SmallCard: React.FC<Props> = ({ img, location, distance }) => {
  return (
    <div className=" flex space-x-4 hover:bg-gray-100 rounded-md hover:scale-105 transition duration-200 ease-out mx-2 mb-2 mt-5 cursor-pointer">
      <div className="relative w-16 h-16">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className=" rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center space-y-1 ">
        <p className="text-sm">{location}</p>
        <p className="text-gray-500 text-sm">{distance}</p>
      </div>
    </div>
  );
};

export default SmallCard;

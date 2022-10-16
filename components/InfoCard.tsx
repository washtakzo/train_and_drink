import React from "react";
import Image from "next/image";

const InfoCard = () => {
  return (
    <div className="flex flex-col sm:flex-row border-solid first:border-t border-x-0 border-t-0 border-gray-200 border-b px-4 py-6 cursor-pointer hover:opacity-90 hover:shadow-lg transition duration-200 ease-out">
      <div className="relative sm:h-32 lg:h-40 aspect-video">
        <Image
          src="https://web.archive.org/web/20210725183154im_/https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="py-2 sm:pl-6 w-[100%]">
        <div className="flex justify-between">
          <p className="text-xs lg:text-base text-gray-500">
            Private room in center of London
          </p>
          <p>icon</p>
        </div>
        <h2 className="text-lg lg:text-2xl font-semibold">
          Stay at this spacious Edwardian House
        </h2>
        <div className="w-10 pt-2 border-solid border-x-0 border-t-0 border-b-[1px] border-gray-200" />
        <p className="text-sm lg:text-base text-gray-500 py-2">
          1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen ·
          Free parking · Washing Machine
        </p>
        <h3 className="text-end font-semibold text-md lg:text-xl">
          £30 / night
        </h3>
        <div className="flex justify-between pt-1">
          <p className="lg:text-lg">
            <span>$</span>4.73
          </p>
          <p className="text-sm lg:text-base">£117 total</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

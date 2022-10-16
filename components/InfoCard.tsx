import React from "react";
import Image from "next/image";
import theme from "../utils/theme";

const InfoCard = () => {
  return (
    <div className="flex flex-col sm:flex-row border-solid first:border-t border-x-0 border-t-0 border-gray-200 border-b px-4 py-6 cursor-pointer hover:opacity-90 hover:shadow-lg transition duration-200 ease-out">
      <div className="relative sm:h-32 lg:h-40 xl:h-52 aspect-video">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 hover:scale-110 transition duration-200 ease-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <h2 className="text-lg lg:text-2xl font-semibold">
          Stay at this spacious Edwardian House
        </h2>
        <div className="w-10 pt-2 border-solid border-x-0 border-t-0 border-b-[1px] border-gray-200" />
        <p className="text-sm lg:text-base text-gray-500 py-2">
          1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen ·
          Free parking · Washing Machine
        </p>
        <h3 className="text-end font-semibold text-md lg:text-xl 2xl:text-2xl">
          £30 / night
        </h3>
        <div className="flex justify-between pt-1">
          <p className="lg:text-lg 2xl:text-xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={theme.palette.secondary.main}
              className="h-5"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            4.73
          </p>
          <p className="text-sm lg:text-base 2xl:text-lg">£117 total</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

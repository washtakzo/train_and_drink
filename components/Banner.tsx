import React from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";

const Banner = () => {
  return (
    <div className="relative w-full h-96 sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
      <Image
        src="https://www.theanimedaily.com/wp-content/uploads/2022/08/Blue-Lock-Anime-Release-Date2.webp"
        layout="fill"
        objectFit="cover"
        className="saturate-50"
      />
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-between items-center">
        <Typography
          className="font-semibold px-2 py-1 bg-[#ffffffdd] rounded-md text-xl flex-grow"
          component="p"
          color="primary"
        >
          Not sure where to go ?
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className="mt-2 normal-case"
        >
          I am flexible
        </Button>
      </div>
    </div>
  );
};

export default Banner;

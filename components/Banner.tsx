import React from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";

const Banner = () => {
  return (
    <div className="relative w-full h-96 sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
      <Image
        src="https://web.archive.org/web/20210725183154im_/https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
        layout="fill"
        objectFit="cover"
        className=""
      />
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-between items-center">
        <Typography
          className="font-semibold px-2 py-1  rounded-md text-sm md:text-xl flex-grow"
          component="p"
          color="white"
        >
          Not sure where to train ?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className="mt-2 normal-case font-semibold md:text-xl"
        >
          I am flexible
        </Button>
      </div>
    </div>
  );
};

export default Banner;

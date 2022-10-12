import React from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";

const HeroCard = () => {
  return (
    <div className="relative w-full h-80 sm:h-96 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://www.theanimedaily.com/wp-content/uploads/2022/08/Blue-Lock-Anime-Release-Date2.webp"
        layout="fill"
        objectFit="cover"
        className="saturate-50"
      />
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-between items-center">
        <Typography
          className="font-semibold px-2 py-1 bg-slate-100 rounded-full"
          component="p"
          color="primary"
        >
          Not sure where to go ?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className="mt-2 font-semibold normal-case"
        >
          I am flexible
        </Button>
      </div>
    </div>
  );
};

export default HeroCard;

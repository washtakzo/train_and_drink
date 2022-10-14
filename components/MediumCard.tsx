import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

type Props = {
  img: string;
  title: string;
};

const MediumCard: React.FC<Props> = ({ img, title }) => {
  return (
    <div className="flex flex-col hover:scale-105 transition duration-250 ease-out cursor-pointer">
      <div className="relative w-72 h-72">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <Typography component="h4" variant="h5" className="mt-4">
        {title}
      </Typography>
    </div>
  );
};

export default MediumCard;

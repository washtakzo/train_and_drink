import React from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";

type Props = {
  img: string;
  title: string;
  subtitle: string;
  buttonText: string;
};

const LargCard: React.FC<Props> = ({ img, title, subtitle, buttonText }) => {
  return (
    <div className="relative w-auto h-96 m-auto cursor-pointer hover:scale-105 transition duration-200 ease-out">
      <Image
        src={img}
        alt="largCardImage"
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
      <div className="absolute top-20 left-12">
        <Typography
          className="text-white w-[250px]"
          component="h5"
          variant="h4"
        >
          {title}
        </Typography>
        <Typography className="text-white mt-2" component="p">
          {subtitle}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className="mt-4 text-sm normal-case py-2"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default LargCard;

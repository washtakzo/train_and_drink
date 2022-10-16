import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <footer className="m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-y-12 py-12 max-w-[1000px]">
        <div className="space-y-2 text-center footer__div">
          <Typography component="h6" variant="h6">
            ABOUT
          </Typography>
          <p>How TrainDrink works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>TrainDrink Plus</p>
          <p>TrainDrink Luxe</p>
        </div>
        <div className="space-y-2 text-center footer__div">
          <Typography component="h6" variant="h6">
            COMMUNITY
          </Typography>
          <p>How TrainDrink works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>TrainDrink Plus</p>
          <p>TrainDrink Luxe</p>
        </div>
        <div className="space-y-2 text-center footer__div">
          <Typography component="h6" variant="h6">
            HOST
          </Typography>
          <p>How TrainDrink works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>TrainDrink Plus</p>
          <p>TrainDrink Luxe</p>
        </div>
        <div className="space-y-2 text-center footer__div">
          <Typography component="h6" variant="h6">
            SUPPORT
          </Typography>
          <p>How TrainDrink works</p>
          <p>Newsroom</p>
          <p>Developped by Zoher</p>
          <p>TrainDrink Plus</p>
          <p>TrainDrink Luxe</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

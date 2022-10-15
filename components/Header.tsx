import React, { useEffect, useState } from "react";
import { Typography, TextField } from "@mui/material";
import Calendar from "./Calendar";

const Header = () => {
  //scrolling Management
  const [scroll, setScroll] = useState(0);
  const listenScroll = React.useCallback(() => {
    const scrolling =
      document.body.scrollTop || document.documentElement.scrollTop;
    setScroll(scrolling);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  }, []);
  //---
  const isScrollTop = scroll === 0 ? true : false;
  const transition = " transition duration-300 ease-out ";
  return (
    <header
      className={`z-50 fixed top-0 w-[100%] ${
        isScrollTop ? "shadow-none bg-transparent" : "shadow-md bg-white"
      }  ${transition}`}
    >
      <div className={`grid grid-cols-3 items-center `}>
        {/* left */}
        <Typography
          variant="h5"
          component="h1"
          className="py-6 px-4 font-bold cursor-pointer"
          fontWeight={"bold"}
          color={`${isScrollTop ? "white" : "primary"}`}
        >
          train&drink
        </Typography>

        {/* midle */}
        <div
          className={`w-[100%] max-w-lg border-2 rounded-lg m-auto ${
            scroll > 0 ? "border-solid" : "text-white border-solid "
          }${transition}`}
        >
          <TextField
            variant="standard"
            color="primary"
            placeholder="Start yout search"
            inputProps={{
              className: `w-[100%] ${
                isScrollTop
                  ? "placeholder-[#ffffff] text-white pl-2 " + transition
                  : transition
              }`,
            }}
            className="w-[100%]"
          />
        </div>

        {/* right */}
        <div className="flex  items-center justify-end space-x-4 pr-4">
          <Typography
            className={`hidden md:inline-flex cursor-pointer 
                                ${
                                  isScrollTop ? "text-white" : "text-slate-500"
                                }${transition}`}
          >
            Become a host
          </Typography>
          {/* icon planette */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-6 h-6  cursor-pointer ${
              isScrollTop ? "text-white" : "text-slate-500"
            }${transition}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <div
            className={`flex items-center justify-between border-solid border-2 p-1 rounded-full 
                       ${
                         isScrollTop ? "border-white" : "border-slate-500"
                       }${transition}`}
          >
            {/* icon burger */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6  cursor-pointer ${
                isScrollTop ? "text-white" : "text-slate-500"
              }${transition}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            {/* icon user */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6  cursor-pointer ${
                isScrollTop ? "text-white" : "text-slate-500"
              }${transition}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        </div>
      </div>
      {!isScrollTop && (
        <div className="flex justify-center">
          <Calendar />
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { Typography, TextField } from "@mui/material";
import Calendar from "./Calendar";
import theme from "../utils/theme";
import { useRouter } from "next/router";

type Props = {
  placeholder?: string;
  canBeTransparent?: boolean;
};
const borderTheme = `border-[${theme.palette.primary.main}]`;

const Header: React.FC<Props> = ({ placeholder, canBeTransparent = true }) => {
  //Search Management
  //input search state
  const [searchInput, setSearchInput] = useState("");
  const handleChangeInputSearch = (event: any) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };
  //search confirmation
  const router = useRouter();
  const onSearchConfirmation = (startDate: Date, endDate: Date) => {
    router.push({
      pathname: "/search",
      query: {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        location: searchInput,
      },
    });
    setSearchInput("");
  };
  //---

  //scrolling Management
  const [scroll, setScroll] = useState(0);
  const listenScroll = React.useCallback(() => {
    const scrolling =
      document.body.scrollTop || document.documentElement.scrollTop;
    setScroll(scrolling);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  }, [listenScroll]);
  //---

  const isHeaderTransparent =
    scroll === 0 && searchInput.length === 0 && canBeTransparent;
  const transition = " transition duration-300 ease-out ";
  return (
    <div>
      <header
        className={`z-50 fixed top-0 w-[100%] ${
          isHeaderTransparent
            ? "shadow-none bg-transparent"
            : "shadow-md bg-white"
        }  ${transition}`}
      >
        <div className={`grid grid-cols-3 items-center `}>
          {/* left */}
          <Typography
            variant="h5"
            component="h1"
            className="py-6 px-4 font-bold cursor-pointer"
            fontWeight={"bold"}
            color={`${isHeaderTransparent ? "white" : "primary"}`}
            onClick={() => {
              router.push("/");
            }}
          >
            train&drink
          </Typography>

          {/* midle */}
          <div
            className={`w-[100%] max-w-lg border-2 rounded-lg m-auto border-solid ${
              isHeaderTransparent ? "text-white " : borderTheme
            }${transition}`}
          >
            <TextField
              variant="standard"
              color="primary"
              placeholder={placeholder ? placeholder : "Start yout search"}
              inputProps={{
                className: `w-[100%] pl-2  ${
                  isHeaderTransparent
                    ? "placeholder-[#ffffff] text-white " + transition
                    : transition
                }`,
              }}
              className="w-[100%]"
              value={searchInput}
              onChange={handleChangeInputSearch}
            />
          </div>

          {/* right */}
          <div className="flex  items-center justify-end space-x-4 pr-4">
            <Typography
              className={`hidden md:inline-flex cursor-pointer 
                                ${
                                  isHeaderTransparent
                                    ? "text-white"
                                    : "text-slate-500"
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
                isHeaderTransparent ? "text-white" : "text-slate-500"
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
                         isHeaderTransparent
                           ? "border-white"
                           : "border-slate-500"
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
                  isHeaderTransparent ? "text-white" : "text-slate-500"
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
                  isHeaderTransparent ? "text-white" : "text-slate-500"
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
        {searchInput.length > 0 && (
          <div className="flex justify-center">
            <Calendar
              onCancel={() => {
                setSearchInput("");
              }}
              onSearchConfirmation={onSearchConfirmation}
            />
          </div>
        )}
      </header>
      {/* Div qui prend la taille du header 
      pour permettre au élément suivant de se mettre a la suite 
      quand le header est défini comme ne pouvant pas etre transparent
      et donc le contenue qui suit doit etre en dessous et non pas derrière le header*/}
      {!canBeTransparent && <div className="h-[80px]"></div>}
    </div>
  );
};

export default Header;

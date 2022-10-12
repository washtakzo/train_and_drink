import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Typography } from "@mui/material";
import SmallCard from "../components/SmallCard";
import React from "react";
import MediumCard from "../components/MediumCard";
import LargCard from "../components/LargCard";

const database_adress =
  "https://airbnb-clone-d2585-default-rtdb.europe-west1.firebasedatabase.app/";

const popularEndPoint = "popular.json";
const cardDataEndPoint = "card_data.json";

type Props = {
  popularDestination: {
    img: string;
    location: string;
    distance: string;
  }[];
  cardData: {
    img: string;
    title: string;
  }[];
};

const Home: NextPage<Props> = ({ popularDestination, cardData }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="/styles/tailwind.css" rel="stylesheet" /> */}
      </Head>
      <Header />
      <Banner />
      <main className="max-w-[1100px] m-auto px-4">
        <section className="py-6">
          <Typography component="h2" variant="h4" fontWeight="500" className="">
            Explore Nearby
          </Typography>
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {popularDestination.map((item: any, index: any) => (
              <SmallCard
                key={index}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section className=" py-6">
          <Typography component="h2" variant="h4" fontWeight="500" className="">
            Train Anywhere
          </Typography>
          <div className="flex space-x-4 pt-12 overflow-x-scroll overflow-y-hidden scrollbar-hide pl-2 -ml-2">
            {cardData.map((item) => (
              <MediumCard img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargCard
          img="https://www.theanimedaily.com/wp-content/uploads/2022/08/Blue-Lock-Anime-Release-Date2.webp"
          title="The Greatest Outdoors"
          subtitle="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const popularDestination = await fetch(database_adress + popularEndPoint)
    .then((res) => res.json())
    .then((data) => data);

  const cardData = await fetch(database_adress + cardDataEndPoint)
    .then((res) => res.json())
    .then((data) => data);

  return {
    props: {
      popularDestination,
      cardData,
    },
  };
}

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Footer from "../components/Footer";

const DATA_BASE_URL =
  "https://airbnb-clone-d2585-default-rtdb.europe-west1.firebasedatabase.app/search_results.json";

const Search = ({ cardsInfo }) => {
  const router = useRouter();
  const [formatedStartDate, setFormatedStartDate] = useState("");
  const [formatedEndDate, setFormatedEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [placehodler, setPlaceholder] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    const startDateFormated = format(
      new Date(router.query.startDate),
      "dd MMMM yy"
    );
    setFormatedStartDate(startDateFormated);
    const endDateFormated = format(
      new Date(router.query.endDate),
      "dd MMMM yy"
    );
    setFormatedEndDate(endDateFormated);
    setLocation(router.query.location);
    setPlaceholder(
      `${router.query.location} | ${startDateFormated} - ${endDateFormated}`
    );
  }, [router.isReady, router.query.startDate, router.query.endDate]);

  return (
    <>
      <Header placeholder={placehodler} canBeTransparent={false} />
      <main className="flex min-h-screen">
        <section className="px-6 flex-grow">
          <p className="text-xs mt-14 font-semibold">
            300+ Home Gym - {formatedStartDate} - {formatedEndDate} - for you
          </p>
          <h1 className="font-semibold text-3xl py-2">Stays in {location}</h1>
          <div className="mt-6">
            {cardsInfo &&
              cardsInfo.map((item) => (
                <InfoCard
                  key={item.long + item.img}
                  img={item.img}
                  description={item.description}
                  location={item.location}
                  price={item.price}
                  star={item.star}
                  title={item.title}
                  total={item.total}
                />
              ))}
          </div>
        </section>
        <section className="hidden lg:inline-flex min-w-[300px] w-[30%] bg-red-300"></section>
      </main>
      <Footer />
    </>
  );
};

export default Search;

export async function getServerSideProps() {
  const cardsInfo = await fetch(DATA_BASE_URL)
    .then((res) => res.json())
    .then((data) => data);
  return {
    props: {
      cardsInfo,
    },
  };
}

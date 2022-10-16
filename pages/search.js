import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Footer from "../components/Footer";

const Search = () => {
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
  }, [router.isReady]);

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
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </section>
        <section className="hidden lg:inline-flex min-w-[300px] w-[30%] bg-red-300"></section>
      </main>
      <Footer />
    </>
  );
};

export default Search;

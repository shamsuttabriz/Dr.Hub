import React from "react";
import Hero from "../components/Hero";
import Doctors from "../components/Doctors";
import { useLoaderData } from "react-router";
import Success from "../components/Success";
import { Helmet } from "react-helmet-async";

function Home() {
  const data = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Dr.Hub | Home</title>
      </Helmet>
      <Hero />
      <Doctors doctors={data} />
      <Success />
    </div>
  );
}

export default Home;

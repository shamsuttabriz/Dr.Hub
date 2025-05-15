import React from "react";
import Banner1 from "../assets/banner1.png";
import Banner2 from "../assets/banner2.jpg";

function Hero() {
  return (
    <div className="text-center my-12 p-5 mx-3 md:mx-auto rounded-2xl shadow-white shadow-md border-2 border-white">
      <h1 className="text-3xl md:text-5xl">
        Dependable Care, Backed by Trusted <br className="hidden md:block" />
        Professionals.
      </h1>
      <p className="text-slate-700 py-5 text-sm md:text-base">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a
        <br className="hidden md:block" /> routine checkup or urgent
        consultation, book appointments in minutes and receive quality care you
        can trust.
      </p>
      <form className="flex flex-col md:flex-row justify-center items-center mb-10 md:px-24">
        <input
          type="text"
          placeholder="Search any doctors..."
          className="bg-white border border-gray-300 rounded-3xl shadow-md w-2/3 px-5 py-2 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
        />
        <a className="btn btn-primary rounded-3xl ">Search Now</a>
      </form>
      <div className="flex flex-col lg:flex-row gap-5 justify-center ">
        <img
          className="border-2 lg:h-92 2xl:h-[450px] border-slate-300 rounded-2xl"
          src={Banner1}
          alt="Banner"
        />
        <img
          className="border-2  lg:h-92 2xl:h-[450px] border-slate-300 rounded-2xl"
          src={Banner2}
          alt="Banner"
        />
      </div>
    </div>
  );
}

export default Hero;

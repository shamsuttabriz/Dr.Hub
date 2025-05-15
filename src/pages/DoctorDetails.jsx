import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { addToDoctor, getFromDoctors } from "../utilities";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

function DoctorDetails() {
  const [todayAvailable, setTodayAvailable] = useState(false);

  const data = useLoaderData();
  const doctorId = useParams().tabriz;
  const singleDoctor = data.find((d) => d.id === parseInt(doctorId));
  const {
    image,
    name,
    reg,
    fee,
    education,
    availability,
    specialities,
    designation,
    workplace,
  } = singleDoctor || {};

  // Today name
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });

  // Doctors add to localstorage
  const handleDoctor = () => {
    console.log("Clicked");
    addToDoctor(singleDoctor);
  };

  // Doctor Today Availeve check
  useEffect(() => {
    const isAvailableToday = availability.includes(dayName);
    setTodayAvailable(isAvailableToday);
  }, [availability, dayName]);

  // Toast message
  let notify;
  if (todayAvailable) {
    notify = () => toast.success("Doctor added successfully.");
  } else {
    notify = () => toast.error("Today is not available doctor");
  }

  return (
    <div className="space-y-16">
      <Helmet>
        <title>Dr.Hub | DoctorDetails</title>
      </Helmet>
      {/* Doctor Heading */}
      <div className="text-center mx-5 lg:mx-auto mt-12 lg:max-w-screen-xl bg-gray-50 p-5 rounded ">
        <h2 className="text-3xl font-bold">Doctor’s Profile Details</h2>
        <p className="py-3 text-slate-800">
          Each doctors profile includes credentials, specialties, patient
          reviews, and availability — everything you need to make informed
          choices. Get to know your doctor before booking and feel confident in
          your care.
        </p>
      </div>
      {/* Doctor Detaisl */}
      <div className="flex flex-col max-w-screen-xl border-2 border-white shadow-white shadow-md overflow-hidden rounded lg:flex-row mx-5 lg:mx-auto">
        <div className="relative lg:w-2/5">
          <img
            src={image}
            alt={name}
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-16 lg:pl-10 lg:w-2/3 bg-white">
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            {name}
          </h5>
          <div className="mb-5 text-gray-800">
            <p className="text-gray-500">{education}</p>
            <p className="text-gray-500">{designation}</p>
            <div className="flex gap-2 my-3">
              {specialities?.map((sp, i) => {
                return (
                  <span
                    key={i}
                    className="text-blue-600 bg-blue-100 border border-blue-600 px-2 py-1 rounded-2xl text-sm"
                  >
                    {sp}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="mb-3">
            <p className="text-sm text-gray-500">Works at: </p>
            <p className="text-lg font-semibold">{workplace}</p>
          </div>
          <div className="py-3 text-gray-500 border border-dashed border-gray-300 border-s-0 border-e-0">
            Reg No. {reg}
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center my-3">
            <h3 className="text-lg font-semibold">Availability: </h3>
            <div className="flex gap-2">
              {availability.map((ab, i) => (
                <p
                  key={i}
                  className="bg-green-100 text-green-600 border border-green-600 px-3 py-1 text-sm rounded-2xl"
                >
                  {ab}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <span className="text-lg font-semibold">Consultation Fee:</span>{" "}
            <span className="font-semibold text-blue-500">Taka: </span>
            <span className="font-semibold text-blue-500">{fee}</span>
            <span className="text-gray-500">&nbsp;(incl. Vat)&nbsp;</span>{" "}
            <span className="text-blue-500">Per Consultation</span>
          </div>
        </div>
      </div>
      {/* Doctor Appointment */}
      <div className="text-center mx-5 lg:mx-auto mt-12 lg:max-w-screen-xl bg-gray-50 p-5 rounded mb-12">
        <h2 className="text-3xl font-bold text-center pb-4">
          Book an Appoinment
        </h2>
        <div className="flex justify-between py-3 border border-dashed border-gray-300 border-s-0 border-e-0">
          <p className="text-lg font-semibold">Availability</p>
          {todayAvailable ? (
            <p className="bg-green-50 border border-green-500 text-green-500 rounded-2xl px-3 py-1 text-sm lg:text-base">
              Today is available
            </p>
          ) : (
            <p className="bg-red-50 border text-red-500 border-red-500 rounded-2xl px-3 py-1 text-sm lg:text-base">
              Today is not available
            </p>
          )}
        </div>
        <div className="mt-5">
          <p className="px-5 py-2 bg-amber-100 text-amber-600 text-center border border-amber-600 rounded-3xl">
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
          <Link
            to="/my-books"
            onClick={(e) => {
              if (!todayAvailable) {
                e.preventDefault();
              } else {
                handleDoctor();
              }
              notify();
            }}
            className={`btn btn-primary w-full mt-5 rounded-3xl ${
              todayAvailable ? "" : "cursor-not-allowed"
            }`}
          >
            Book Appoinment Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;

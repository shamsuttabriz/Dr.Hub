import React from "react";
import { Link } from "react-router";

function Doctor({ doctor }) {
  // console.log(doctor);
  const { id, name, education, image, experience, reg } = doctor || {};
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-4">
        <figure className="rounded-xl h-52 object-contain ">
          <img className="w-full " src={image} alt={name} />
        </figure>
        <div className="py-3">
          <div className="flex gap-2">
            <span className="text-xs bg-green-50 border border-green-500 text-green-500 px-5 py-1 rounded-2xl font-semibold">
              Avaiable
            </span>
            <span className="text-xs bg-blue-50 border border-blue-500 text-blue-500 px-5 py-1 rounded-2xl font-semibold">
              {experience} experience
            </span>
          </div>
          <h2 className="card-title pt-3 text-3xl">{name}</h2>
          <p className="text-base text-gray-500 pt-1 pb-3">{education}</p>
          <hr className="border-dashed border-gray-300" />
          <p className="text-base font-semibold text-gray-500 py-3">
            Reg. No. {reg}
          </p>
          <div className="card-actionsu">
            <Link
              to={`/doctor-details/${id}`}
              className="btn btn-outline btn-primary rounded-3xl font-bold w-full"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;

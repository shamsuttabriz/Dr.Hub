import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";

function Doctors({ doctors }) {
  const [allDoctors, setAllDoctores] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) setAllDoctores(doctors);
    else setAllDoctores(doctors.slice(0, 6));
  }, [doctors, showAll]);
  return (
    <div className="px-4">
      <div className="text-center md:w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold">Our Best Doctors</h2>
        <p className="py-3 text-slate-800">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {allDoctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <div className="my-10 text-center">
        <button
          onClick={() => {
            setShowAll((prev) => !prev);
            if (showAll) window.scroll(0, 800);
          }}
          className="btn btn-primary rounded-3xl px-6"
        >
          {showAll ? "Jast A Little" : "View All Doctors"}
        </button>
      </div>
    </div>
  );
}

export default Doctors;

import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    icon: "🩺",
    count: "199",
    label: "Total Doctors",
  },
  {
    id: 2,
    icon: "⭐️⭐️⭐️",
    count: "467",
    label: "Total Reviews",
  },
  {
    id: 3,
    icon: "👨‍⚕️👩‍⚕️",
    count: "1900",
    label: "Patients",
  },
  {
    id: 4,
    icon: "👥",
    count: "300",
    label: "Total Staffs",
  },
];

const Success = () => {
  return (
    <section className="my-16 lg:my-24 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        We Provide Best Medical Services
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm py-8 px-4 flex flex-col items-center"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-3xl font-bold text-gray-800 flex">
              <CountUp start={0} end={parseInt(item.count)} delay={2}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <span>+</span>
            </h3>
            <p className="text-gray-500 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Success;

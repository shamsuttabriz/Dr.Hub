import { useEffect, useState } from "react";
import { getFromDoctors, removeFromDoctors } from "../utilities";
import EmptyDoctors from "../components/ui/EmptyDoctors";
import toast from "react-hot-toast";
import Chart from "../components/ui/Chart";
import { Helmet } from "react-helmet-async";

function MyBooks() {
  const [doctors, setDoctors] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const reservedDoctores = getFromDoctors();
    if (reservedDoctores.length > 0) setIsAvailable(true);
    setDoctors(reservedDoctores);
  }, []);

  const handleDelete = (id) => {
    removeFromDoctors(id);
    setDoctors(getFromDoctors());
  };

  const notify = () => toast.success("Doctor canceled successfully");

  // Rechart
  const chartDoc = doctors.map(doc => {
    const doctor = {
      id: doc.id,
      docName: doc.name,
      docFee: doc.fee,
    }
    return doctor;
  })
  console.log(chartDoc);
  return (
    <div className="px-4 pb-10">
      <Helmet>
              <title>Dr.Hub | My-Bookings</title>
            </Helmet>
      {isAvailable ? (
        <div>
          <div className="text-3xl lg:text-5xl text-center p-5 my-10 bg-white rounded">
            <div>
              <Chart chartDoc={chartDoc} />
              {/* ReChart {chartDoc.length} */}
            </div>
          </div>
          <div>
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold">
                My Today Appointments
              </h2>
              <p className="text-gray-500 mt-2 mb-10">
                Our platform connects you with verified, experienced doctors
                across various specialties — all at your convenience.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded p-6">
                  <h3 className="text-xl lg:text-2xl font-semibold">
                    {doctor.name}
                  </h3>
                  <div className="text-gray-500 flex flex-col lg:flex-row justify-between lg:items-center border-b border-dashed border-gray-400 py-4">
                    <span>{doctor.education}</span>
                    <span>Appointment Fee : {doctor.fee} Taka + Vat</span>
                  </div>
                  <div className="mt-5">
                    <button
                      onClick={() => {
                        handleDelete(doctor.id);
                        notify();
                      }}
                      className="btn btn-outline btn-error font-semibold w-full rounded-3xl"
                    >
                      Cencel Apoinment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <EmptyDoctors />
      )}
    </div>
  );
}

export default MyBooks;

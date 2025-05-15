const getFromDoctors = () => {
  const doctores = localStorage.getItem("doctors");

  if (doctores) return JSON.parse(doctores);
  return [];
};

const addToDoctor = (doctor) => {
  const doctores = getFromDoctors();
  const isExist = doctores.find((p) => p.id === doctor.id);

  if (isExist) console.log("Doctor already get Appoinment");
  else doctores.push(doctor);

  localStorage.setItem("doctors", JSON.stringify(doctores));
};

const removeFromDoctors = (id) => {
  const doctors = getFromDoctors();
  const remainingDoctors = doctors.filter((p) => p.id !== id);
  localStorage.setItem("doctors", JSON.stringify(remainingDoctors));
};

export { getFromDoctors, addToDoctor, removeFromDoctors };

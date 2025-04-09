
import React from "react";
import RegistroForm from "../components/RegistroForm";
import Consejos from "../components/Consejos";

function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <RegistroForm />
      <Consejos />
    </div>
  );
}

export default Dashboard;

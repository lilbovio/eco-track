import React from 'react';

const RegistroForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Registro Diario</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Consumo de agua (litros):</label>
          <input type="number" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Consumo de energía (kWh):</label>
          <input type="number" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Residuos generados (kg):</label>
          <input type="number" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Transporte utilizado:</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegistroForm;
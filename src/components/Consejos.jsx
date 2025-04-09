import React from 'react';

const consejos = [
  { id: 1, texto: "Cierra la llave mientras te cepillas los dientes." },
  { id: 2, texto: "Apaga las luces al salir de una habitación." },
  { id: 3, texto: "Lleva tu propia botella reutilizable." }
];

const Consejos = () => {
  return (
    <div className="max-w-xl mx-auto mt-6 bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-2">Consejos ecológicos 🌎</h3>
      <ul className="list-disc pl-5 space-y-1">
        {consejos.map(c => (
          <li key={c.id}>{c.texto}</li>
        ))}
      </ul>
    </div>
  );
};

export default Consejos;
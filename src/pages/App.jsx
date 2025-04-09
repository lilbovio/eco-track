import React from 'react';
import RegistroForm from '../components/RegistroForm';
import Navbar from '../components/Navbar';
import Consejos from '../components/Consejos';

const App = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <main className="p-4">
        <RegistroForm />
        <Consejos />
      </main>
    </div>
  );
};

export default App;
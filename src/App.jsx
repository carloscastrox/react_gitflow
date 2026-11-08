import { useState } from 'react';
import './App.css';
import PerfilAprendiz from "./features/PerfilAprendiz";
import miFoto from "./assets/mi-foto.jpg";

function App() {
  return (
    <PerfilAprendiz foto={miFoto} />
  );
}

export default App;

import React from 'react';
import './PerfilSENA.css';

const PerfilSENA = () => {
  const estudiante = {
    nombre: "Andrés Camilo Córdoba Ramírez",
    institucion: "SENA / Sofka Technologies",
    programa: "Análisis y Desarrollo de Software (ADSO)",
    ficha: "3494620", // 
    ambiente: "Ambiente de Desarrollo de Software - Virtual / Presencial",
    fotoUrl: "../assets/imgcamilocordoba.jpeg", // Reemplaza con el enlace a tu foto real
  };

  return (
    <div className="sena-card-container">
      <div className="sena-card">
        <div className="sena-card-header">
          <h2>Carnet Digital de Formación</h2>
          <span className="badge-sena">SENA</span>
        </div>
        
        <div className="sena-card-body">
          <div className="foto-container">
            <img 
              src={estudiante.fotoUrl} 
              alt={`Foto de ${estudiante.nombre}`} 
              className="estudiante-foto" 
            />
          </div>
          
          <div className="info-container">
            <h3 className="estudiante-nombre">{estudiante.nombre}</h3>
            
            <div className="info-item">
              <strong>Institución / Alianza:</strong> 
              <span>{estudiante.institucion}</span>
            </div>
            
            <div className="info-item">
              <strong>Programa:</strong> 
              <span>{estudiante.programa}</span>
            </div>
            
            <div className="info-item">
              <strong>Número de Ficha:</strong> 
              <span className="ficha-tag">{estudiante.ficha}</span>
            </div>
            
            <div className="info-item">
              <strong>Ambiente:</strong> 
              <span>{estudiante.ambiente}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilSENA;
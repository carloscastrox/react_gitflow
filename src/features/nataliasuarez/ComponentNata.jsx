import React from 'react';
import FotoNata from '../../assets/Fotonata.png';

export const ComponentNata = () => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '12px',
      padding: '20px',
      maxWidth: '350px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      fontFamily: 'sans-serif',
      margin: '20px auto'
    }}>
      <img
        src={FotoNata}
        alt="Foto de Natalia Peña Suárez"
        style={{
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '15px'
        }}
      />
      <h2 style={{ margin: '10px 0 5px', fontSize: '1.4rem' }}>Natalia Peña Suárez</h2>
      <p style={{ margin: '5px 0', color: '#555', fontWeight: 'bold' }}>
        Ambiente: <span style={{ color: '#000' }}>703</span>
      </p>
      <p style={{ margin: '5px 0', color: '#555' }}>
        Formación: <strong>ADSO (Análisis y Desarrollo de Software)</strong>
      </p>
    </div>
  );
};

export default ComponentNata;
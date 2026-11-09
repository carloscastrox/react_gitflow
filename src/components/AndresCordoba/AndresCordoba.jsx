import React from 'react';
import './AndresCamiloCordobaRamirez.css';
import avatarImg from '../../assets/andres-cordoba.jpg';

const AndresCamiloCordobaRamirez = () => {
  const student = {
    name: 'Andrés Camilo Córdoba Ramírez',
    program: 'Análisis y Desarrollo de Software',
    classroom: '703',
    avatarUrl: avatarImg
  };

  return (
    <div className="profile-card">
      <img 
        src={student.avatarUrl} 
        alt={`Foto de ${student.name}`} 
        className="profile-card__avatar" 
      />
      <h2 className="profile-card__name">{student.name}</h2>
      <p className="profile-card__text">
        <strong>Programa:</strong> {student.program}
      </p>
      <p className="profile-card__text">
        <strong>Ambiente:</strong> {student.classroom}
      </p>
    </div>
  );
};

export default AndresCamiloCordobaRamirez;
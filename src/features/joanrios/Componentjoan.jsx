import React from 'react'
import joanFoto from '../../assets/imgjoan.jpeg'
import './Componentjoan.css'

export const Componentjoan = () => {
  return (
    <div className="profile-card">
      <div className="profile-avatar-container">
        <img
          src={joanFoto}
          alt="Foto de Joan Stiven Rios Valderrama"
          className="profile-avatar"
        />
      </div>

      <h2 className="profile-name">Joan Stiven Rios Valderrama</h2>
      <span className="profile-badge">Aprendiz SENA</span>

      <div className="profile-info-list">
        <div className="profile-info-item">
          <span className="profile-info-label">Programa de Formación</span>
          <p className="profile-info-value">
            Tecnólogo en Análisis y Desarrollo de Software
          </p>
        </div>

        <div className="profile-info-item">
          <span className="profile-info-label">Número de Ambiente</span>
          <p className="profile-info-value">Ambiente 702</p>
        </div>
      </div>
    </div>
  )
}

export const Componentjoa = Componentjoan

export default Componentjoan

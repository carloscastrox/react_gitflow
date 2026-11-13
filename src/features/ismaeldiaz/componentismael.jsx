
import React from 'react';
import './componentisma.css';
import fotoIsmael from '../../assets/imgismael.jpg';

export const Componentismael = () => {
  return (
    <div className="ismael-container">

      <div className="ismael-card">

        <div className="ismael-image-container">
          <img
            src={fotoIsmael}
            alt="Fotografía de Ismael"
            className="ismael-image"
          />

          <div className="ismael-image-overlay"></div>
        </div>

        <div className="ismael-content">

          <span className="ismael-tag">
            ESTUDIANTE SENA
          </span>

          <h2 className="ismael-name">
            JOSE ISMAEL DIAZ VIDARTE 
          </h2>

          <div className="ismael-divider"></div>

          <div className="ismael-info">

            <div className="ismael-info-item">
              <span className="ismael-label">
                AMBIENTE
              </span>
              <p>703</p>
            </div>

            <div className="ismael-info-item">
              <span className="ismael-label">
                PROGRAMA
              </span>
              <p>Análisis y Desarrollo de Software</p>
            </div>

            <div className="ismael-info-item">
              <span className="ismael-label">
                INSTITUCIÓN
              </span>
              <p>Servicio Nacional de Aprendizaje - SENA</p>
            </div>

          </div>

          <div className="ismael-footer">
            <span>FORMACIÓN TECNOLÓGICA</span>
            <span className="ismael-dot"></span>
          </div>

        </div>
      </div>

    </div>
  );
};

import React from 'react';
import fotoCamilo from '../../assets/imgcamilocordoba.jpeg';

const PerfilSENA = () => {
  const estudiante = {
    nombre: "Andrés Camilo Córdoba Ramírez",
    institucion: "SENA / Sofka Technologies",
    programa: "Análisis y Desarrollo de Software (ADSO)",
    ficha: "3494620",
    ambiente: "Ambiente de Desarrollo de Software - Virtual / Presencial",
    fotoUrl: fotoCamilo,
  };

  return (
    <div className="container px-3 my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm overflow-hidden">
            <div className="card-header bg-success text-white d-flex justify-content-between align-items-center py-3">
              <h5 className="mb-0 fs-6">Carnet Digital de Formación</h5>
              <span className="badge bg-light text-success fw-bold">SENA</span>
            </div>

            <div className="card-body p-3 p-sm-4 text-center">
              <div className="my-3 d-flex justify-content-center">
                <img
                  src={estudiante.fotoUrl}
                  alt={`Foto de ${estudiante.nombre}`}
                  className="img-fluid rounded-circle border border-3 border-success shadow-sm"
                  style={{
                    width: '100%',
                    maxWidth: '150px',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <h4 className="card-title mb-3 fs-5">{estudiante.nombre}</h4>

              <div className="text-start bg-light p-3 rounded">
                <p className="mb-2 small">
                  <strong>Institución / Alianza:</strong> {estudiante.institucion}
                </p>
                <p className="mb-2 small">
                  <strong>Programa:</strong> {estudiante.programa}
                </p>
                <p className="mb-2 small">
                  <strong>Número de Ficha:</strong>{' '}
                  <span className="badge bg-secondary">{estudiante.ficha}</span>
                </p>
                <p className="mb-0 small">
                  <strong>Ambiente:</strong> {estudiante.ambiente}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilSENA;
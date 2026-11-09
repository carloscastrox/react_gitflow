import React from 'react'

export const Componetsebastian = () => {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card bg-dark text-white rounded-0 shadow"
        style={{ width: '300px' }}>

        <img
          src='../../assets/sebastian.jpg'
          className="card-img-top"
          alt="Foto de Sebastián"
          style={{ height: '280px', objectFit: 'cover' }}
        />

        <div className="card-body text-center">
          <h3 className="card-title fw-bold text-uppercase">
            Sebastián Monsalve
          </h3>

          <hr className="border-light" />

          <h5 className="fw-bold text-warning">
            Ambiente 703
          </h5>

          <p className="card-text text-light mb-0">
            Análisis y Desarrollo de Software
          </p>

          <p className="text-secondary small mt-3 mb-0">
            SENA
          </p>
        </div>
      </div>
    </div>
  )
}
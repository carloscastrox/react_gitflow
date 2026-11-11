import React from 'react'
import imgKevin from '../../assets/imgkevin.jpg'

const css = `
.kevin-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.kevin-card {
  width: 300px;
  background-color: #212529;
  color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
}

.kevin-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
}

.kevin-body {
  padding: 1rem;
  text-align: center;
}

.kevin-title {
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
}

.kevin-line {
  border: 0;
  border-top: 1px solid #f8f9fa;
  margin: 1rem 0;
}

.kevin-ambiente {
  font-weight: bold;
  color: #ffc107;
}

.kevin-text {
  color: #f8f9fa;
  margin: 0;
}
`

export const Componentkevin = () => {
  return (
    <>
      <style>{css}</style>

      <div className="kevin-container">
        <div className="kevin-card">
          <img
            src={imgKevin}
            className="kevin-img"
            alt="Foto de Kevin Osorio"
          />

          <div className="kevin-body">
            <h3 className="kevin-title">Kevin Osorio</h3>
            <hr className="kevin-line" />
            <h5 className="kevin-ambiente">Ambiente 703</h5>
            <p className="kevin-text">Análisis y Desarrollo de Software</p>
          </div>
        </div>
      </div>
    </>
  )
}

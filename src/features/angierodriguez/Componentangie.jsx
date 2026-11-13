import React from 'react'
import fotoAngie from '../../assets/imgangie.jpeg'
export const ComponentAngie = () => {
  return (
     <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={fotoAngie}
        alt="Foto de Angie"
        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <h2>Angie</h2>
      <p>Salón: 703</p>
      <p>Programa: Desarrollo de Software</p>
    </div>
  )
}

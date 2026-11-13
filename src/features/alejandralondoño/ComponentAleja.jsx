import React from 'react'
import imgAleja from '../../assets/imgAleja.jpeg'
export const ComponentAleja = () => {
  return (
     <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={imgAleja}
        alt="Foto de Alejandra Londoño"
        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <h2>Alejandra Londoño</h2>
      <p>Salón: 703</p>
      <p>Programa: Desarrollo de Software</p>
    </div>
  )
}
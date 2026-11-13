import React from 'react'
import imgFarid from '../../assets/imgFarid.jpg'
export const Componentfarid = () => {
  return (
     <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={imgFarid}
        alt="Foto de Farid"
        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <h2>Farid</h2>
      <p>Salón: 703</p>
      <p>Programa: Desarrollo de Software</p>
    </div>
  )
}
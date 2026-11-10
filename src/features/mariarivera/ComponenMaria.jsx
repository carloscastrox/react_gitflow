import React from 'react'
import fotomaria from '../../assets/imgmariapaula.jpeg'

export const Componentmarria = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={fotomaria}
        alt="Foto de María"
        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <h2>María</h2>
      <p>Salón: 703</p>
      <p>Programa: Desarrollo de Software</p>
    </div>
  )
}
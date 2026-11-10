import React from 'react'
import FotoLuna from 'src/assets/imglunaa.jpg'

export const ComponentLuna = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={FotoLuna}
        alt="Foto de Luna"
        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <h2>Luna Aguas Mejia</h2>
      <p>Salón: 703</p>
      <p>Programa: Desarrollo de Software</p>
    </div>
  )
}
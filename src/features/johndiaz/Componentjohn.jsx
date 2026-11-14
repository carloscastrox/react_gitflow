import React from 'react'
import Imgjohn from '../../assets/Imgjohn.jpg'


export const Componentjohn = () => {
  return (
    <div>
      <h1>Mi perfil</h1>

      <img
        src={Imgjohn}
        alt="Foto de John"
        width="200"
      />

      <p>Ambiente: 703</p>
      <p>Programa de formación: ADSO</p>
    </div>
  )
}
import React from 'react'
import heroImg from '../../assets/hero.png'
import miFotoImg from '../../assets/mi-foto.jpg'

export const Componentkevin = () => {
    return (
        <>
            <div>ComponentKevin</div>
            {/* Puedes usar cualquiera de las dos imágenes cargadas */}
            <img src={miFotoImg} alt="Img Kevin" />
            <p>Kevin Osorio</p>
            <p>703</p>
            <p>ADSO</p>
        </>
    )
}


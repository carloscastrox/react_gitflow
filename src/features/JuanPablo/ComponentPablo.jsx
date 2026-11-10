import React from "react";
import "./ComponentPablo.css";
export const ComponentPablo = ({ foto, nombre, ambiente, formacion }) => {
  return (
    <article className="tarjeta">
      <img className="tarjeta-foto" src={foto} alt={`Foto de ${nombre}`} />
      <h2 className="tarjeta-nombre">{nombre}Juan Pablo Zapata Gonzalez</h2>
      <p className="tarjeta-dato">
        <span>Ambiente:703</span> {ambiente}
      </p>
      <p className="tarjeta-dato">
        <span>Formación:Analisis y Desarrollo de Software</span> {formacion}
      </p>
    </article>
  );
};

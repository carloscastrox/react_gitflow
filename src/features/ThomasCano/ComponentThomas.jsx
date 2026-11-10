
import React from "react";
import "../../App.css"
import perfil from "../../assets/perfil.jpg";

export default function ComponentThomas() {
  const technologies = [
    "React",
    "JavaScript",
    "Python",
    "FastAPI",
    "Django",
    "MongoDB",
    "MySQL",
    "CSS"
  ];

  return (
    <section className="profile-section">
      <article className="profile-card">

        <div className="profile-image-container">
          <img
            src={perfil}
            alt="Fotografía de Thomas Cano Zapata"
            className="profile-image"
          />
          <span className="profile-status"></span>
        </div>

        <span className="profile-label">
          DESARROLLADOR DE SOFTWARE
        </span>

        <h1 className="profile-name">
          Thomas Cano Zapata
        </h1>

        <p className="profile-description">
          Soy desarrollador de software apasionado por la
          tecnología y la programación. Me gusta crear
          soluciones digitales modernas, funcionales y
          atractivas, siempre buscando aprender nuevas
          tecnologías y mejorar mis habilidades.
        </p>

        <div className="profile-technologies">
          {technologies.map((tech, index) => (
            <span className="tech-tag" key={index}>
              {tech}
            </span>
          ))}
        </div>

        <div className="profile-divider"></div>

        <div className="profile-footer">
          <div className="profile-location">
            <span>Medellín, Colombia</span>
          </div>

          <a
            href="https://github.com/ThomasDev199"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-button"
          >
            Ver GitHub
            <span>↗</span>
          </a>
        </div>

      </article>
    </section>
  );
}


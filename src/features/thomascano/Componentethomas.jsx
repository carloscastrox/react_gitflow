
import fotoperfil from '../../assets/fotoperfilthomas.jpeg';

const styles = `
  
.thomas-card,
.thomas-card * {
  box-sizing: border-box;
}

.thomas-card {
  --accent: #dc2626;

  display: grid;
  grid-template-columns: 45% 55%;

  width: 100%;
  max-width: none;
  min-height: 430px;
  margin: 0;

  background: #fff;
  color: #171717;
  border: 1px solid #e5e5e5;
  border-radius: 14px;
  overflow: hidden;

  box-shadow: 0 8px 25px rgba(0, 0, 0, .07);
}

/* Fotografía: ocupa toda la mitad izquierda */

.thomas-card__visual {
  position: relative;
  width: 100%;
  min-height: 430px;
  padding: 0;
  overflow: hidden;
  background: #171717;
}

.thomas-card__visual::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  background: var(--accent);
}

.thomas-card__photo {
  display: block;
  width: 100% !important;
  height: 100% !important;
  min-height: 430px;
  object-fit: cover;
  object-position: center 25%;
  border: none;
  border-radius: 0;
}

/* Contenido */

.thomas-card__content {
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-width: 0;
  padding: 35px 32px;
}

.thomas-card__eyebrow {
  margin: 0 0 14px;
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.thomas-card__name {
  margin: 0;
  color: #171717;
  font-size: clamp(23px, 3vw, 32px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -1px;
}

.thomas-card__description {
  margin: 12px 0 25px;
  color: #777;
  font-size: 14px;
  line-height: 1.6;
}

.thomas-card__divider {
  width: 100%;
  height: 1px;
  margin-bottom: 22px;
  background: #e5e5e5;
}

.thomas-card__label {
  margin: 0 0 9px;
  color: #888;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.thomas-card__program {
  margin: 0;
  color: #292929;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.6;
}

.thomas-card__footer {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 22px;
  color: #666;
  font-size: 12px;
  font-weight: 600;
}

.thomas-card__dot {
  width: 9px;
  height: 9px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--accent);
}

/* Modo oscuro */

[data-bs-theme='dark'] .thomas-card {
  background: #202020;
  color: #fff;
  border-color: #383838;
}

[data-bs-theme='dark'] .thomas-card__name,
[data-bs-theme='dark'] .thomas-card__program {
  color: #fff;
}

[data-bs-theme='dark'] .thomas-card__divider {
  background: #393939;
}

/* Responsive */

@media (max-width: 575px) {
  .thomas-card {
    grid-template-columns: 1fr;
  }

  .thomas-card__visual {
    min-height: 270px;
    height: 270px;
  }

  .thomas-card__photo {
    min-height: 270px;
    height: 270px !important;
    object-position: center 25%;
  }

  .thomas-card__visual::after {
    top: auto;
    bottom: 0;
    width: 100%;
    height: 4px;
  }

  .thomas-card__content {
    padding: 28px 22px;
  }
}

`;

export const ComponentThomas = () => {
  return (
    <>
      <style>{styles}</style>

      <article
        className="thomas-card"
        aria-label="Perfil de Thomas Cano Zapata"
      >
        <div className="thomas-card__visual">
          <img
            className="thomas-card__photo"
            src={fotoperfil}
            alt="Fotografía de Thomas Cano Zapata"
            width="145"
            height="185"
            loading="lazy"
          />
        </div>

        <div className="thomas-card__content">
          <p className="thomas-card__eyebrow">
            Perfil personal
          </p>

          <h2 className="thomas-card__name">
            Thomas Cano Zapata
          </h2>

          <p className="thomas-card__description">
            Aprendiz SENA · Desarrollo de software
          </p>

          <div className="thomas-card__divider" />

          <div>
            <p className="thomas-card__label">
              Programa de formación
            </p>

            <p className="thomas-card__program">
              Tecnología en Análisis y Desarrollo de Software
            </p>
          </div>

          <div className="thomas-card__footer">
            <span className="thomas-card__dot" />
            Servicio Nacional de Aprendizaje · SENA
          </div>
        </div>
      </article>
    </>
  );
};

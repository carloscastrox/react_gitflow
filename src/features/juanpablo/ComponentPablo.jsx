import "./ComponentPablo.css";

export const ComponentPablo = ({
  foto,
  nombre = "Juan Pablo Zapata Gonzalez",
  ambiente = "703",
  formacion = "Análisis y Desarrollo de Software",
}) => {
  const iniciales = nombre
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();

  return (
    <article className="pablo-card" aria-label={`Perfil de ${nombre}`}>
      <div className="pablo-card__accent" aria-hidden="true" />
      {foto ? (
        <img
          className="pablo-card__photo"
          src={foto}
          alt={`Foto de ${nombre}`}
        />
      ) : (
        <div className="pablo-card__avatar" aria-hidden="true">
          {iniciales}
        </div>
      )}

      <div className="pablo-card__content">
        <p className="pablo-card__eyebrow">Perfil del estudiante</p>
        <h2 className="pablo-card__name">{nombre}</h2>
        <p className="pablo-card__description">
          En formación para construir soluciones de software.
        </p>

        <dl className="pablo-card__details">
          <div className="pablo-card__detail">
            <dt>Ambiente</dt>
            <dd>{ambiente}</dd>
          </div>
          <div className="pablo-card__detail">
            <dt>Formación</dt>
            <dd>{formacion}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

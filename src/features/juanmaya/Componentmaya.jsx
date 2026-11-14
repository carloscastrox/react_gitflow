import fotoperfilmaya from '../../assets/fotoperfilmaya.jpg';

const styles = `
  .maya-profile {
    --maya-accent: #26705b;
    display: grid;
    grid-template-columns: 190px minmax(0, 1fr);
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    border: 1px solid var(--bs-border-color);
    border-top: 4px solid var(--maya-accent);
    border-radius: 1rem;
    background: var(--bs-tertiary-bg);
    color: var(--bs-body-color);
  }

  .maya-profile .maya-profile__photo {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 0.75rem;
    border: 1px solid var(--bs-border-color);
  }

  .maya-profile .maya-profile__eyebrow {
    margin: 0 0 0.75rem;
    color: var(--maya-accent);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .maya-profile .maya-profile__name {
    margin: 0;
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.035em;
    text-wrap: balance;
  }

  .maya-profile .maya-profile__education {
    margin: 1.5rem 0 0;
    padding-top: 1.25rem;
    border-top: 1px solid var(--bs-border-color);
  }

  .maya-profile .maya-profile__label {
    margin-bottom: 0.4rem;
    color: var(--bs-secondary-color);
    font-size: 0.8rem;
    font-weight: 500;
  }

  .maya-profile .maya-profile__program {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    text-wrap: pretty;
  }

  [data-bs-theme='dark'] .maya-profile {
    --maya-accent: #88cfb3;
  }

  @media (max-width: 575.98px) {
    .maya-profile {
      grid-template-columns: minmax(0, 1fr);
      justify-items: center;
      gap: 1.5rem;
      padding: 1.5rem 1.25rem;
      text-align: center;
    }

    .maya-profile .maya-profile__photo {
      width: 144px;
    }
  }
`;

export const Componentmaya = () => {
  return (
    <>
      <style>{styles}</style>
      <article className="maya-profile" aria-label="Perfil de Juan Esteban Maya Rodríguez">
        <img
          className="maya-profile__photo"
          src={fotoperfilmaya}
          alt="Juan Esteban Maya Rodríguez"
          width="960"
          height="947"
        />
        <div>
          <p className="maya-profile__eyebrow">Perfil</p>
          <h2 className="maya-profile__name">Juan Esteban Maya Rodríguez</h2>
          <dl className="maya-profile__education">
            <dt className="maya-profile__label">Programa de formación:</dt>
            <dd className="maya-profile__program">
              Tecnología en Análisis y Desarrollo de Software
            </dd>
          </dl>
        </div>
      </article>
    </>
  );
};
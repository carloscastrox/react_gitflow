import fotoperfilronald from "../../assets/imgronald.jpeg";

const styles = `
  .ronald-profile {
    --ronald-ink: #0f1b33;
    --ronald-accent: #2563eb;
    --ronald-navy: #0b2a5b;
    --ronald-mint: #e0ebff;
    --ronald-paper: #f6f9ff;

    display: grid;
    grid-template-columns: minmax(200px, 300px) 1fr;
    max-width: 760px;
    margin: 2rem auto;
    background: var(--ronald-paper);
    color: var(--ronald-ink);
    border: 2px solid var(--ronald-navy);
    border-radius: 18px;
    overflow: hidden;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    box-shadow: 8px 8px 0 var(--ronald-navy);
  }

  .ronald-profile__figure {
    margin: 0;
    background: var(--ronald-navy);
    padding: 1.25rem;
    display: flex;
    align-items: stretch;
  }

  .ronald-profile__photo {
    width: 100%;
    height: 100%;
    min-height: 280px;
    object-fit: cover;
    object-position: center top;
    border-radius: 10px;
    border: 3px solid var(--ronald-accent);
    display: block;
  }

  .ronald-profile__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.25rem;
    padding: 2rem 2.25rem;
  }

  .ronald-profile__eyebrow {
    align-self: flex-start;
    margin: 0;
    padding: 0.25rem 0.75rem;
    background: var(--ronald-mint);
    color: var(--ronald-navy);
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .ronald-profile__name {
    margin: 0;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.9rem, 4.5vw, 2.8rem);
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.01em;
    color: var(--ronald-navy);
  }

  .ronald-profile__education {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .ronald-profile__item {
    padding-left: 1rem;
    border-left: 4px solid var(--ronald-accent);
  }

  .ronald-profile__label {
    margin: 0 0 0.2rem;
    font-size: 0.9rem;
    color: #51607a;
  }

  .ronald-profile__program {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 600;
    line-height: 1.35;
  }

  @media (max-width: 600px) {
    .ronald-profile {
      grid-template-columns: 1fr;
      margin: 1rem;
      box-shadow: 5px 5px 0 var(--ronald-navy);
    }

    .ronald-profile__photo {
      min-height: 0;
      aspect-ratio: 1 / 1;
    }

    .ronald-profile__body {
      padding: 1.5rem;
    }
  }
`;

export const Ronaldlunacom = () => {
  return (
    <>
      <style>{styles}</style>
      <article
        className="ronald-profile"
        aria-label="Perfil de Ronald Fernando Luna Vidarte"
      >
        <figure className="ronald-profile__figure">
          <img
            className="ronald-profile__photo"
            src={fotoperfilronald}
            alt="Ronald Fernando Luna Vidarte"
          />
        </figure>
        <div className="ronald-profile__body">
          <p className="ronald-profile__eyebrow">Perfil</p>
          <h2 className="ronald-profile__name">Ronald Fernando Luna Vidarte</h2>
          <dl className="ronald-profile__education">
            <div className="ronald-profile__item">
              <dt className="ronald-profile__label">Programa de formación:</dt>
              <dd className="ronald-profile__program">
                Tecnología en Análisis y Desarrollo de Software
              </dd>
            </div>
            <div className="ronald-profile__item">
              <dt className="ronald-profile__label">Ficha:</dt>
              <dd className="ronald-profile__program">3494620</dd>
            </div>
          </dl>
        </div>
      </article>
    </>
  );
};

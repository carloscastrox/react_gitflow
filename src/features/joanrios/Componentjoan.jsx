import React from 'react'
import joanFoto from '../../assets/imgjoanrios.jpeg'

export const Componentjoan = () => {
  return (
    <main className="joan-page">
      <style>{`
        .joan-page {
          --tg-ink: #171918;
          --tg-muted: #687079;
          --tg-paper: #f4f5f6;
          --tg-line: transparent;
          min-height: 100vh;
          box-sizing: border-box;
          padding: clamp(20px, 5vw, 64px) 20px;
          color: var(--tg-ink);
          background:
            radial-gradient(ellipse at 75% 12%, rgba(219, 222, 225, .72), transparent 34%),
            linear-gradient(180deg, #eef0f2 0%, #f8f9fa 62%, #fff 100%);
          font-family: system-ui, sans-serif;
        }
        .modal-body .joan-page {
          min-height: 0;
          padding: 0;
          background: transparent;
        }
        .profile-eyebrow, .profile-info-label {
          font-size: .67rem;
          font-weight: 700;
          letter-spacing: .11em;
          text-transform: uppercase;
        }
        .profile-layout {
          display: grid;
          grid-template-columns: minmax(360px, .85fr) minmax(0, 1fr);
          align-items: stretch;
          column-gap: clamp(16px, 2vw, 24px);
          row-gap: 0;
          width: min(1060px, 100%);
          box-sizing: border-box;
          padding: clamp(24px, 5vw, 54px);
          margin: 0 auto;
          border-radius: 24px;
          background: rgba(255, 255, 255, .96);
          box-shadow: 0 24px 64px rgba(23, 25, 24, .09), 0 3px 10px rgba(23, 25, 24, .03);
        }
        .modal-body .profile-layout {
          grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);
          width: 100%;
          max-width: none;
          gap: 20px;
          padding: 24px;
          margin: 0;
        }
        .profile-card {
          position: relative;
          box-sizing: border-box;
          min-width: 0;
          padding: 0;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
        }
        .profile-main, .profile-info-list { position: relative; }
        .profile-main {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          padding: 0;
        }
        .profile-avatar-container {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          width: min(360px, 100%);
          border-radius: 24px;
          background: transparent;
        }
        .profile-avatar { display: block; width: 100%; height: 100%; object-fit: cover; border-radius: 24px; box-shadow: none; }
        .avatar-crosshair { display: none; }
        .profile-heading { display: flex; flex-direction: column; align-items: flex-start; gap: 12px; width: 100%; text-align: left; }
        .profile-eyebrow { color: #6c7379; }
        .profile-name { margin: 0; padding: 0; border-radius: 0; background: transparent; color: var(--tg-ink); font-size: clamp(2rem, 3vw, 2.7rem); font-weight: 700; letter-spacing: -.045em; line-height: 1.08; }
        .profile-info-card { display: flex; flex-direction: column; justify-content: flex-start; gap: 14px; padding: 0; }
        .profile-info-title { margin: 0; color: #30363a; font-size: 1.15rem; font-weight: 700; letter-spacing: -.02em; text-align: left; }
        .profile-info-list { display: flex; flex-direction: column; gap: 12px; }
        .profile-info-item { display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 7px; box-sizing: border-box; width: 100%; min-height: 110px; padding: 16px 18px; border-radius: 16px; background: #f4f5f6; text-align: left; }
        .profile-info-label { color: #737a80; letter-spacing: .06em; }
        .profile-ambiente-item { flex-direction: row; align-items: center; justify-content: space-between; gap: 16px; min-height: 80px; }
        .profile-ambiente-item .profile-info-label { letter-spacing: .08em; }
        .profile-ambiente-item .profile-info-value { font-size: 1.15rem; font-weight: 700; line-height: 1.2; }
        .profile-info-value { margin: 0; padding: 0; border-radius: 0; background: transparent; color: #202322; font-size: 1rem; font-weight: 650; line-height: 1.5; }
        .profile-ficha-card { display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 16px; min-height: 80px; box-sizing: border-box; padding: 16px 18px; border-radius: 16px; background: #f4f5f6; }
        .profile-ficha-label { margin: 0; color: #737a80; font-size: .67rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
        .profile-ficha-value { margin: 0; color: #202322; font-size: 1.15rem; font-weight: 700; line-height: 1.2; overflow-wrap: anywhere; }
        .profile-info-arrow { display: none; }
        .profile-footer-quote { margin: 22px 0 0; color: #737a80; font-size: .9rem; line-height: 1.5; text-align: center; }
        @media (max-width: 650px) {
          .joan-page { padding-inline: 14px; }
          .profile-layout { grid-template-columns: 1fr; row-gap: 28px; padding: 24px; }
          .profile-avatar-container { width: min(340px, 100%); }
          .profile-info-card { justify-content: flex-start; gap: 14px; padding: 0; }
          .profile-info-list { gap: 12px; }
          .profile-ficha-card { min-height: 78px; }
          .modal-body .profile-layout { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="profile-layout">
        <section className="profile-card profile-person-card" id="perfil" aria-labelledby="profile-name">
          <div className="profile-main">
            <div className="profile-avatar-container">
              <img
                src={joanFoto}
                alt="Foto de Joan Stiven Rios Valderrama"
                className="profile-avatar"
              />
            </div>

            <div className="profile-heading">
              <h1 className="profile-name" id="profile-name">Joan Stiven Rios Valderrama</h1>
            </div>
          </div>
        </section>

        <section className="profile-card profile-info-card" aria-label="Información académica">
          <h2 className="profile-info-title">Información académica</h2>
          <div className="profile-info-list">
            <div className="profile-info-item">
              <span className="profile-info-label">Programa de formación</span>
              <p className="profile-info-value">Tecnólogo en Análisis y Desarrollo de Software</p>
            </div>
            <div className="profile-info-item profile-ambiente-item">
              <span className="profile-info-label">Ambiente</span>
              <p className="profile-info-value">703</p>
            </div>
          </div>
          <div className="profile-ficha-card" aria-label="Ficha 3494620">
            <h3 className="profile-ficha-label">Ficha</h3>
            <p className="profile-ficha-value">3494620</p>
          </div>
          <p className="profile-footer-quote">«En GitFlow todo fluye… hasta que alguien pregunta quién hizo el último merge»</p>
        </section>
      </div>
    </main>
  )
}

export const Componentjoa = Componentjoan

export default Componentjoan
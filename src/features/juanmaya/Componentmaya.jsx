import profilePhoto from '../../assets/imgmaya.jpg'
import './Componentmaya.css'

export default function Componentmaya() {
  return (
    <section className="maya-profile" lang="es" aria-labelledby="maya-profile-name">
      <article className="maya-profile__card">
        <div className="maya-profile__portrait-panel">
          <div className="maya-profile__identity" aria-hidden="true">
            <span className="maya-profile__monogram">JM</span>
            <span>Perfil académico</span>
          </div>
          <img
            className="maya-profile__photo"
            src={profilePhoto}
            alt="Foto de perfil de Juan Esteban Maya Rodríguez"
            width="960"
            height="947"
          />
          <p className="maya-profile__portrait-caption">Análisis y desarrollo de software</p>
        </div>

        <div className="maya-profile__content">
          <p className="maya-profile__eyebrow">
            <span className="maya-profile__accent" aria-hidden="true" />
            Perfil de formación
          </p>
          <h1 className="maya-profile__name" id="maya-profile-name">
            Juan Esteban <span>Maya Rodríguez</span>
          </h1>
          <div className="maya-profile__education">
            <p className="maya-profile__label">Programa de formación</p>
            <p className="maya-profile__program">
              Tecnología en Análisis y Desarrollo de Software
            </p>
          </div>
          <div className="maya-profile__footer">
            <span className="maya-profile__program-code">ADSO</span>
            <span className="maya-profile__footer-label">Formación tecnológica</span>
          </div>
        </div>
      </article>
    </section>
  )
}

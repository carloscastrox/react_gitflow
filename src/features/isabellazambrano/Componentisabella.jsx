import imgisabela from '../../assets/imgisabela.jpg'

const student = {
  name: 'Isabella Zambrano',
  room: 'Ambiente 703',
  program: 'Analisis y Desarrollo de Software',
  image: imgisabela,
}

export const Componentisabella = () => {
  return (
    <main className="student-card-page">
      <article className="student-card">
        <div className="student-card__photo-wrap">
          <img
            className="student-card__photo"
            src={student.image}
            alt="Retrato de Isabella"
          />
        </div>

        <div className="student-card__content">
          <p className="student-card__eyebrow">Estudiante</p>
          <h1>{student.name}</h1>

          <ul className="student-card__details">
            <li>
              <span>Nombre completo</span>
              <strong>{student.name}</strong>
            </li>
            <li>
              <span>Número del ambiente</span>
              <strong>{student.room}</strong>
            </li>
            <li>
              <span>Programa</span>
              <strong>{student.program}</strong>
            </li>
          </ul>
        </div>
      </article>
    </main>
  )
}
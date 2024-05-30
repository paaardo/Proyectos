import { datosCV } from '/datos'

const generarCV = (datos) => {
  const app = document.getElementById('app')

  const header = document.createElement('header')
  header.innerHTML = `
    <h1>${datos.nombre}</h1>
    <nav>
      <ul>
        <li><a href="#sobremi">Sobre mi</a></li>
        <li><a href="#educacion">Educación</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li>
          <button id="cambiarTema">
            <span id="iconoLuna">🌙</span>
            <span id="iconoSol" style="display:none;">☀️</span>
          </button>
        </li>
      </ul>
    </nav>
  `
  app.appendChild(header)

  const botonTema = document.getElementById('cambiarTema')
  const iconoLuna = document.getElementById('iconoLuna')
  const iconoSol = document.getElementById('iconoSol')

  botonTema.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
      iconoLuna.style.display = 'none'
      iconoSol.style.display = 'inline'
    } else {
      iconoLuna.style.display = 'inline'
      iconoSol.style.display = 'none'
    }
  })
  const secciones = document.createElement('div')
  secciones.id = 'secciones'

  const sobremiSeccion = document.createElement('section')
  sobremiSeccion.id = 'sobremi'
  sobremiSeccion.classList.add('sobremi')
  sobremiSeccion.innerHTML = `
    <h2>Sobre mi</h2>
    <div class="sobremi">
      <img src="${datos.foto}" alt="Foto de ${datos.nombre}">
      <p>${datos.biografia}</p>
      <ul>
        ${datos.competencias
          .map((competencia) => `<li>${competencia}</li>`)
          .join('')}
      </ul>
    </div>
  `
  secciones.appendChild(sobremiSeccion)

  const educacionSeccion = document.createElement('section')
  educacionSeccion.id = 'educacion'
  educacionSeccion.classList.add('educacion')
  educacionSeccion.innerHTML = `
    <h2>Educación</h2>
    <div class="educacion">
      <ul>
        ${datos.educacion
          .map(
            (edu) => `
          <li>
            <h3>${edu.grado}</h3>
            <p>${edu.centro} - ${edu.fechaFin}</p>
          </li>
        `
          )
          .join('')}
      </ul>
    </div>
  `
  secciones.appendChild(educacionSeccion)

  const experienciaSeccion = document.createElement('section')
  experienciaSeccion.id = 'experiencia'
  experienciaSeccion.classList.add('experiencia')
  experienciaSeccion.innerHTML = `
    <h2>Experiencia</h2>
    <div class="experiencia">
      <ul>
        ${datos.experiencia
          .map(
            (exp) => `
          <li>
            <h3>${exp.puesto}</h3>
            <p>${exp.empresa}</p>
            <p>${exp.fechaInicio} - ${exp.fechaFin}</p>
          </li>
        `
          )
          .join('')}
      </ul>
    </div>
  `
  secciones.appendChild(experienciaSeccion)

  const proyectosSeccion = document.createElement('section')
  proyectosSeccion.id = 'proyectos'
  proyectosSeccion.classList.add('proyectos')
  proyectosSeccion.innerHTML = `
    <h2>Proyectos</h2>
    <div class="proyectos">
      <ul>
        ${datos.proyectos
          .map(
            (proyecto) => `
          <li>
            <h3>${proyecto.titulo}</h3>
            <p>${proyecto.descripcion}</p>
            <a href="${proyecto.link}" target="_blank">Ver proyecto</a>
          </li>
        `
          )
          .join('')}
      </ul>
    </div>
  `
  secciones.appendChild(proyectosSeccion)

  app.appendChild(secciones)

  const footer = document.createElement('footer')
  footer.innerHTML = `<p>CV ${datos.nombre} 2024</p>`
  app.appendChild(footer)
}

generarCV(datosCV)

const datosCV = {
  nombre: 'Iker Pardo',
  puesto: 'Desarrollador Full Stack',
  email: 'ikerpardo53@gmail.com',
  linkedin: 'www.linkedin.com/in/iker-pardo-masache',
  foto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQUzNq4pcWb3OS95q1_vvui0zuA4YZqQQaMCVljbpeMerkNPO0w',
  lugarResidencia: 'Madrid, España',
  biografia:
    'Soy un desarrollador back-end comprometido, con un sólido dominio del diseño de código y una habilidad destacada en la resolución de problemas complejos en el sector informático. Mi pasión por la informática se refleja en mi enfoque organizado y en mi constante búsqueda de la excelencia en cada tarea que emprendo. Estoy entusiasmado por unirme a un equipo de trabajo donde pueda contribuir con mis conocimientos y experiencia, y seguir creciendo profesionalmente.',
  educacion: [
    {
      grado: 'Desarrollo de Aplicaciones Multiplataforma',
      centro: 'IES El Cañaveral',
      fechaFin: 2021
    },
    {
      grado: 'Animacion 3D, Juegos y Entornos Interactivos',
      centro: 'CIFD Ignacio Ellacuria',
      fechaFin: 2024
    },
    {
      grado: 'Desarrollador Full Stack',
      centro: 'ThePower MBA',
      fechaFin: 'Actualidad'
    }
  ],
  experiencia: [
    {
      puesto: 'Desarrollador Front-End',
      empresa: 'NBS Spain',
      fechaInicio: '2021',
      fechaFin: '2021'
    },
    {
      puesto: 'Desarrollador Back-End',
      empresa: 'Mixreal',
      fechaInicio: '2023',
      fechaFin: '2024'
    }
  ],
  competencias: [
    'C#',
    'HTML5',
    'CSS3',
    'JavaScript',
    'AWS',
    'MySQL',
    'Node.js',
    'MongoDB',
    'Git'
  ],
  proyectos: [
    {
      titulo: 'Desarrollo de un Videojuego en 3D',
      descripcion:
        'Creé un videojuego en 3D de disparos en primera persona utilizando la plataforma Unity. El desarrollo incluyó la construcción de entornos de juego detallados, la planificación y diseño de niveles, la programación de la inteligencia artificial para los enemigos y la implementación de mecánicas de juego como el manejo de armas y la detección de colisiones. Utilicé C# para escribir los scripts y optimicé el rendimiento del juego para asegurar una experiencia fluida y envolvente para los jugadores',
      link: 'http://github.com/#'
    },
    {
      titulo: 'Modelado 3D de una Vivienda con Autodesk Maya',
      descripcion:
        'Llevé a cabo el modelado 3D de una vivienda de dos pisos utilizando Autodesk Maya. Este proyecto abarcó desde la fase de diseño y conceptualización arquitectónica hasta la creación de texturas y la configuración de la iluminación. Me enfoqué en los detalles tanto del interior como del exterior, incluyendo mobiliario y paisajismo. El modelo final fue renderizado para presentaciones arquitectónicas, ofreciendo una visualización precisa y realista del diseño',
      link: 'http://github.com/#'
    }
  ]
}

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
    <div class="aboutme">
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
  `
  secciones.appendChild(educacionSeccion)

  const experienciaSeccion = document.createElement('section')
  experienciaSeccion.id = 'experiencia'
  experienciaSeccion.classList.add('experiencia')
  experienciaSeccion.innerHTML = `
    <h2>Experiencia</h2>
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
  `
  secciones.appendChild(experienciaSeccion)

  const proyectosSeccion = document.createElement('section')
  proyectosSeccion.id = 'proyectos'
  proyectosSeccion.classList.add('proyectos')
  proyectosSeccion.innerHTML = `
    <h2>Proyectos</h2>
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
  `
  secciones.appendChild(proyectosSeccion)

  app.appendChild(secciones)

  const footer = document.createElement('footer')
  footer.innerHTML = `<p>CV ${datos.nombre} 2024</p>`
  app.appendChild(footer)
}

generarCV(datosCV)

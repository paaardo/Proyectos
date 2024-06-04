export function crearHeader(datos) {
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
  return header
}

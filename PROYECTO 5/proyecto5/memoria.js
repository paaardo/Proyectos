export function crearMemoria(container) {
  const panelMemoria = document.createElement('div')
  panelMemoria.className = 'memoria-board'
  panelMemoria.innerHTML =
    '<p>Esta es la estructura inicial del juego de Memoria</p>'
  container.appendChild(panelMemoria)

  // Aquí puedes añadir más lógica para generar el juego de Memoria
}

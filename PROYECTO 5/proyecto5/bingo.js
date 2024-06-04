export function crearBingo(container) {
  const panelBingo = document.createElement('div')
  panelBingo.className = 'bingo-board'
  panelBingo.innerHTML = '<p>Esta es la estructura inicial del Bingo</p>'
  container.appendChild(panelBingo)

  // Aquí puedes añadir más lógica para generar el juego de Bingo
}

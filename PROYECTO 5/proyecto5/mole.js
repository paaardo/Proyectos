export function crearWhacAMole(juegoContenedor) {
  const tablero = document.createElement('div')
  tablero.id = 'tablero'

  for (let i = 0; i < 9; i++) {
    const agujero = document.createElement('div')
    agujero.className = 'agujero'

    const mole = document.createElement('div')
    mole.className = 'mole'
    mole.addEventListener('click', () => golpearMole(mole))

    agujero.appendChild(mole)
    tablero.appendChild(agujero)

    if ((i + 1) % 3 === 0) {
      tablero.appendChild(document.createElement('br'))
    }
  }

  const iniciarBoton = document.createElement('button')
  iniciarBoton.id = 'iniciarBoton'
  iniciarBoton.textContent = 'Iniciar Juego'
  iniciarBoton.addEventListener('click', iniciarJuego)

  const puntos = document.createElement('div')
  puntos.id = 'puntos'
  puntos.textContent = 'Puntos: 0'

  const contador = document.createElement('div')
  contador.id = 'contador'
  contador.textContent = 'Tiempo: 60'

  juegoContenedor.appendChild(tablero)
  juegoContenedor.appendChild(puntos)
  juegoContenedor.appendChild(contador)
  juegoContenedor.appendChild(iniciarBoton)

  let score = 0
  let tiempoRestante = 60
  let intervalo

  function mostrarMole() {
    const agujeros = document.querySelectorAll('.agujero')
    const randomAgujero = agujeros[Math.floor(Math.random() * agujeros.length)]
    const mole = randomAgujero.querySelector('.mole')
    mole.style.display = 'block'

    setTimeout(() => {
      mole.style.display = 'none'
      if (tiempoRestante > 0) {
        mostrarMole()
      }
    }, 625)
  }

  function golpearMole(mole) {
    if (mole.style.display === 'block') {
      mole.style.display = 'none'
      score += 1
      puntos.textContent = `Puntos: ${score}`
    }
  }

  function actualizarContador() {
    tiempoRestante -= 1
    contador.textContent = `Tiempo: ${tiempoRestante}`

    if (tiempoRestante <= 0) {
      clearInterval(intervalo)
      alert(
        score >= 20
          ? 'Ganaste, llegaste a la puntuacion!'
          : 'Perdiste, intentalo de nuevo!.'
      )
      reiniciarJuego()
    }
  }

  function iniciarJuego() {
    iniciarBoton.style.display = 'none'
    score = 0
    tiempoRestante = 60
    puntos.textContent = 'Puntos: 0'
    contador.textContent = 'Tiempo: 60'
    intervalo = setInterval(actualizarContador, 1000)
    mostrarMole()
  }

  function reiniciarJuego() {
    iniciarBoton.style.display = 'inline-block'
    clearInterval(intervalo)
    const moles = document.querySelectorAll('.mole')
    moles.forEach((mole) => {
      mole.style.display = 'none'
    })
  }
}

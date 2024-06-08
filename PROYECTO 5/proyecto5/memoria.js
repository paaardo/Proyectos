export function crearMemoria(juegoContenedor) {
  const panelMemoria = document.createElement('div')
  panelMemoria.className = 'memoria-board'

  const colores = [
    'yellow',
    'pink',
    'purple',
    'red',
    'orange',
    'green',
    'blue',
    'cyan'
  ]

  const cartas = colores.concat(colores)

  function barajarCartas(cartas) {
    const cartasBarajadas = []
    while (cartas.length > 0) {
      const index = Math.floor(Math.random() * cartas.length)
      cartasBarajadas.push(cartas.splice(index, 1)[0])
    }
    return cartasBarajadas
  }

  const cartasAleatorias = barajarCartas(cartas)
  let comparando = false

  cartasAleatorias.forEach((color, index) => {
    const carta = document.createElement('div')
    carta.className = 'carta'
    carta.dataset.color = color
    carta.style.backgroundColor = 'gray'
    carta.addEventListener('click', () => {
      if (!comparando) {
        seleccionarCarta(carta)
      }
    })
    panelMemoria.appendChild(carta)

    if ((index + 1) % 4 === 0) {
      panelMemoria.appendChild(document.createElement('br'))
    }
  })

  let carta1 = null
  let carta2 = null
  let cartasGiradas = 0
  let primeraParejaEncontrada = false
  let puntuacion = 0

  function seleccionarCarta(carta) {
    if (
      carta.classList.contains('girada') ||
      carta.classList.contains('match')
    ) {
      return
    }

    carta.classList.add('girada')
    carta.style.backgroundColor = carta.dataset.color

    if (!carta1) {
      carta1 = carta
    } else {
      carta2 = carta
      comparando = true
      verificarPareja()
    }
  }

  function verificarPareja() {
    const colorCarta1 = carta1.dataset.color
    const colorCarta2 = carta2.dataset.color

    if (colorCarta1 === colorCarta2) {
      carta1.classList.add('match')
      carta2.classList.add('match')
      cartasGiradas += 2
      puntuacion += 7
      primeraParejaEncontrada = true

      reiniciarSeleccion()
      if (cartasGiradas === cartasAleatorias.length) {
        puntuacionTexto.style.display = 'none'
        mostrarFelicitaciones(
          `Felicidades has conseguido ${puntuacion} punto/s`
        )
      }
    } else {
      if (primeraParejaEncontrada) {
        puntuacion -= 2
      }
      setTimeout(() => {
        carta1.classList.remove('girada')
        carta2.classList.remove('girada')
        carta1.style.backgroundColor = 'gray'
        carta2.style.backgroundColor = 'gray'
        reiniciarSeleccion()
      }, 1000)
    }
    actualizarPuntuacion()
  }

  function reiniciarSeleccion() {
    carta1 = null
    carta2 = null
    comparando = false
  }

  function actualizarPuntuacion() {
    puntuacionTexto.textContent = `Puntuación: ${puntuacion}`
  }

  function reiniciarJuego() {
    panelMemoria.innerHTML = ''
    puntuacionTexto.style.display = 'block'
    cartasAleatorias.forEach((color, index) => {
      const carta = document.createElement('div')
      carta.className = 'carta'
      carta.dataset.color = color
      carta.style.backgroundColor = 'gray'
      carta.addEventListener('click', () => {
        if (!comparando) {
          seleccionarCarta(carta)
        }
      })
      panelMemoria.appendChild(carta)

      if ((index + 1) % 4 === 0) {
        panelMemoria.appendChild(document.createElement('br'))
      }
    })
    cartasGiradas = 0
    puntuacion = 0
    primeraParejaEncontrada = false
    actualizarPuntuacion()
    felicitacionesTexto.textContent = ''
  }

  function mostrarFelicitaciones(mensaje) {
    felicitacionesTexto.textContent = mensaje
  }

  const reiniciarBoton = document.createElement('button')
  reiniciarBoton.id = 'reiniciarBoton'
  reiniciarBoton.textContent = 'Reiniciar juego'
  reiniciarBoton.addEventListener('click', reiniciarJuego)

  const puntuacionTexto = document.createElement('p')
  puntuacionTexto.textContent = `Puntuación: ${puntuacion}`

  const felicitacionesTexto = document.createElement('p')
  felicitacionesTexto.id = 'mensaje-felicidades'
  felicitacionesTexto.textContent = ''

  juegoContenedor.appendChild(panelMemoria)
  juegoContenedor.appendChild(reiniciarBoton)
  juegoContenedor.appendChild(puntuacionTexto)
  juegoContenedor.appendChild(felicitacionesTexto)
}

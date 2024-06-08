export function crearBingo(juegoContenedor) {
  const bingoContenedor = document.createElement('div')
  const numeroActual = document.createElement('div')
  numeroActual.id = 'numero-actual'
  numeroActual.textContent = '0'

  const bingoCarton = document.createElement('div')
  bingoCarton.className = 'bingo-carton'

  for (let i = 1; i <= 90; i++) {
    const bola = document.createElement('div')
    bola.className = 'bingo-bola'
    bola.textContent = i
    bola.id = `bola-${i}`
    bingoCarton.appendChild(bola)
  }

  const controlBotones = document.createElement('div')
  controlBotones.id = 'control-botones'

  const iniciarBoton = document.createElement('button')
  iniciarBoton.textContent = 'Iniciar Bingo'
  iniciarBoton.id = 'iniciarBoton'

  const pausaBoton = document.createElement('button')
  pausaBoton.textContent = 'Pausar Bingo'
  pausaBoton.id = 'pausaBoton'
  pausaBoton.style.display = 'none'

  const reanudarBoton = document.createElement('button')
  reanudarBoton.textContent = 'Reanudar Bingo'
  reanudarBoton.id = 'reanudarBoton'
  reanudarBoton.style.display = 'none'

  const reiniciarBoton = document.createElement('button')
  reiniciarBoton.textContent = 'Reiniciar Bingo'
  reiniciarBoton.id = 'reiniciarBoton'
  reiniciarBoton.style.display = 'none'

  controlBotones.appendChild(iniciarBoton)
  controlBotones.appendChild(pausaBoton)
  controlBotones.appendChild(reanudarBoton)
  controlBotones.appendChild(reiniciarBoton)

  const mensajeFinal = document.createElement('div')
  mensajeFinal.id = 'mensaje-final'
  mensajeFinal.textContent = 'JUEGO TERMINADO'
  mensajeFinal.style.display = 'none'

  bingoContenedor.appendChild(numeroActual)
  bingoContenedor.appendChild(bingoCarton)
  bingoContenedor.appendChild(mensajeFinal)
  bingoContenedor.appendChild(controlBotones)
  juegoContenedor.appendChild(bingoContenedor)

  let intervaloNumeros
  let numerosSacados = []
  let estaPausado = false

  function limpiarEstado() {
    clearInterval(intervaloNumeros)
    numerosSacados = []
    numeroActual.textContent = '0'
    document.querySelectorAll('.bingo-bola').forEach((bola) => {
      bola.classList.remove('seleccionado')
    })
    iniciarBoton.style.display = 'inline-block'
    pausaBoton.style.display = 'none'
    reanudarBoton.style.display = 'none'
    reiniciarBoton.style.display = 'none'
    mensajeFinal.style.display = 'none'
    bingoCarton.style.display = 'grid'
    numeroActual.style.display = 'block'
    estaPausado = false
  }

  iniciarBoton.addEventListener('click', () => {
    iniciarBoton.style.display = 'none'
    pausaBoton.style.display = 'inline-block'
    numerosSacados = []
    drawNumber()
    intervaloNumeros = setInterval(drawNumber, 2000)
  })

  pausaBoton.addEventListener('click', () => {
    clearInterval(intervaloNumeros)
    estaPausado = true
    pausaBoton.style.display = 'none'
    reanudarBoton.style.display = 'inline-block'
    reiniciarBoton.style.display = 'inline-block'
  })

  reanudarBoton.addEventListener('click', () => {
    if (estaPausado) {
      estaPausado = false
      reanudarBoton.style.display = 'none'
      reiniciarBoton.style.display = 'none'
      pausaBoton.style.display = 'inline-block'
      intervaloNumeros = setInterval(drawNumber, 2000)
    }
  })

  reiniciarBoton.addEventListener('click', () => {
    limpiarEstado()
  })

  function drawNumber() {
    if (numerosSacados.length === 90) {
      clearInterval(intervaloNumeros)
      bingoCarton.style.display = 'none'
      numeroActual.style.display = 'none'
      pausaBoton.style.display = 'none'
      mensajeFinal.style.display = 'block'
      reiniciarBoton.style.display = 'inline-block'
      return
    }

    let numero
    do {
      numero = Math.floor(Math.random() * 90) + 1
    } while (numerosSacados.includes(numero))

    numerosSacados.push(numero)
    numeroActual.textContent = numero
    document.getElementById(`bola-${numero}`).classList.add('seleccionado')
  }

  juegoContenedor.addEventListener('DOMNodeRemoved', (event) => {
    if (event.target === bingoContenedor) {
      limpiarEstado()
    }
  })
}

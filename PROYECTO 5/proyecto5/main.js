import { crearBingo } from '/bingo.js'
import { crearMemoria } from '/memoria.js'

const bingoBoton = document.getElementById('bingoBoton')
const memoriaBoton = document.getElementById('memoriaBoton')
const juegoContenedor = document.getElementById('juegoContenedor')

bingoBoton.addEventListener('click', () => {
  juegoContenedor.innerHTML = ''
  bingoBoton.style.display = 'none'
  memoriaBoton.style.display = 'inline-block'
  crearBingo(juegoContenedor)
})

memoriaBoton.addEventListener('click', () => {
  juegoContenedor.innerHTML = ''
  memoriaBoton.style.display = 'none'
  bingoBoton.style.display = 'inline-block'
  crearMemoria(juegoContenedor)
})

import { crearBingo } from '/bingo.js'
import { crearMemoria } from '/memoria.js'
import { crearWhacAMole } from '/mole.js'

const bingoBoton = document.getElementById('bingoBoton')
const memoriaBoton = document.getElementById('memoriaBoton')
const moleBoton = document.getElementById('moleBoton')
const juegoContenedor = document.getElementById('juegoContenedor')

bingoBoton.addEventListener('click', () => {
  juegoContenedor.innerHTML = ''
  bingoBoton.style.display = 'none'
  memoriaBoton.style.display = 'inline-block'
  moleBoton.style.display = 'inline-block'
  crearBingo(juegoContenedor)
})

memoriaBoton.addEventListener('click', () => {
  juegoContenedor.innerHTML = ''
  memoriaBoton.style.display = 'none'
  bingoBoton.style.display = 'inline-block'
  moleBoton.style.display = 'inline-block'
  crearMemoria(juegoContenedor)
})

moleBoton.addEventListener('click', () => {
  juegoContenedor.innerHTML = ''
  moleBoton.style.display = 'none'
  bingoBoton.style.display = 'inline-block'
  memoriaBoton.style.display = 'inline-block'
  crearWhacAMole(juegoContenedor)
})

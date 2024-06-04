import { crearBingo } from '/bingo.js'
import { crearMemoria } from '/memoria.js'

document.addEventListener('DOMContentLoaded', () => {
  const bingoBoton = document.getElementById('bingoBoton')
  const memoriaBoton = document.getElementById('memoriaBoton')
  const juegoContenedor = document.getElementById('juegoContenedor')

  bingoBoton.addEventListener('click', () => {
    juegoContenedor.innerHTML = ''
    crearBingo(juegoContenedor)
  })

  memoriaBoton.addEventListener('click', () => {
    juegoContenedor.innerHTML = ''
    crearMemoria(juegoContenedor)
  })
})

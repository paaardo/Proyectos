import unsplash from './unsplash'

const formulario = document.querySelector('#busqueda')
const input = document.querySelector('#texto-busqueda')
const contenedorResultados = document.querySelector('#resultado')
const contenedorSugerencias = document.querySelector('#sugerencia')

formulario.addEventListener('submit', async (event) => {
  event.preventDefault()
  const textoInput = input.value
  if (!textoInput) {
    return
  }
  await llamadaImagenes(textoInput)
})

async function llamadaImagenes(textoInput) {
  try {
    const resultado = await unsplash.search.getPhotos({ query: textoInput })
    mostrarResultados(resultado.response.results, textoInput)
  } catch (error) {
    console.error('Error en la llamada a los resultados:', error)
    contenedorResultados.innerHTML =
      '<p>Error en la llamada a los resultados</p>'
  }
}

function mostrarResultados(fotos, textoInput) {
  contenedorResultados.innerHTML = ''
  contenedorSugerencias.innerHTML = ''

  if (fotos.length === 0) {
    contenedorResultados.innerHTML = '<p>No hay imagenes</p>'
    mostrarSugerencias(textoInput)
  } else {
    fotos.forEach((foto) => {
      const img = document.createElement('img')
      img.src = foto.urls.thumb
      img.alt = foto.description
      contenedorResultados.appendChild(img)
    })
  }
}

function mostrarSugerencias(textoInput) {
  const sugerencias = posiblesSugerencias(textoInput)
  sugerencias.forEach((sugerencia) => {
    const button = document.createElement('button')
    button.textContent = sugerencia
    button.addEventListener('click', () => {
      input.value = sugerencia
      llamadaImagenes(sugerencia)
    })
    contenedorSugerencias.appendChild(button)
  })
}

function posiblesSugerencias(textoInput) {
  return [
    textoInput + ' tecnologia',
    textoInput + ' arte',
    textoInput + ' fotografia'
  ]
}

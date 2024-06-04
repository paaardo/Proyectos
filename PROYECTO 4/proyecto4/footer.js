export function crearFooter(datos) {
  const footer = document.createElement('footer')
  footer.innerHTML = `<p>CV ${datos.nombre} 2024</p>`
  return footer
}

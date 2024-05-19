const products = [
  {
    name: ' HP 15-fd0013ns ',
    price: 329,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1079/10796163/1349-hp-15-fd0013ns-intel-core-i3-n305-8gb-256gb-ssd-156-foto.jpg'
  },
  {
    name: 'Acer Nitro V 15',
    price: 799,
    stars: 4,
    reviews: 300,
    seller: 'ManuelTecno',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1079/10798070/1534-acer-nitro-v-15-anv15-51-579p-intel-core-i5-13420h-16gb-512gb-ssd-rtx-4050-156.jpg'
  },
  {
    name: 'ASUS TUF Gaming F17',
    price: 1499,
    stars: 5,
    reviews: 275,
    seller: 'ManuelTecno',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1081/10811707/1635-asus-tuf-gaming-f17-fx707vi-hx040-intel-core-i7-13620h-32gb-1tb-ssd-rtx-4070-173.jpg'
  },
  {
    name: 'Lenovo IdeaPad Slim 3',
    price: 654,
    stars: 4,
    reviews: 288,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1080/10803445/1686-lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-1tb-ssd-156.jpg'
  },
  {
    name: 'Apple MacBook Air Apple M3',
    price: 1188,
    stars: 5,
    reviews: 400,
    seller: 'IkerTIC',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1081/10819854/1358-apple-macbook-air-apple-m3-8gb-256gb-ssd-gpu-8-nucleos-136-gris-espacial-f54b7775-85c2-46bf-9cb7-1de4f91cc83d.jpg'
  },
  {
    name: 'ASUS Chromebook Plus CX34',
    price: 369,
    stars: 4,
    reviews: 350,
    seller: 'RosaReparaciones',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1077/10771410/1664-asus-chromebook-plus-cx34-cx3402cba-eb0040-intel-core-i3-1215u-8gb-256gb-emmc-14.jpg'
  },
  {
    name: 'ASUS VivoBook 16X',
    price: 1099,
    stars: 4,
    reviews: 300,
    seller: 'IkerTIC',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1074/10743150/1953-asus-vivobook-16x-k3605zv-n1084-intel-core-i7-12650h-16gb-512gb-ssd-rtx-4060-16-0208a734-7e02-4ef3-babe-0214bfdb3595.jpg'
  },
  {
    name: 'Portátil LG Gram 14Z90R',
    price: 1499,
    stars: 4,
    reviews: 150,
    seller: 'RosaReparaciones',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1080/10809570/1807-lg-gram-14z90r-gad75b-intel-evo-core-i7-1360p-32gb-512gb-ssd-14.jpg'
  },
  {
    name: 'Alurin Go Start Intel Celeron',
    price: 229,
    stars: 4,
    reviews: 205,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1066/10663368/1710-alurin-go-start-intel-pentium-n4020-8gb-256gb-ssd-156-comprar.jpg'
  },
  {
    name: 'PcCom Revolt 4080',
    price: 2810,
    stars: 5,
    reviews: 500,
    seller: 'RosaReparaciones',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1079/10790390/184-pccom-revolt-4080-intel-core-i9-13900hx-32gb-2tb-ssd-rtx-4080-16-windows-11-comprar.jpg'
  }
]

function filtrosHTML() {
  return `
  <select id="selectorVendedor">
      <option value="">Todos los vendedores</option>
      <option value="PcComponentes">PcComponentes</option>
      <option value="ManuelTecno">ManuelTecno</option>
      <option value="IkerTIC">IkerTIC</option>
      <option value="RosaReparaciones">RosaReparaciones</option>
  </select>
  <div>
      <input type="number" id="precioFiltro" placeholder="Precio máximo">
      <br><button id="buscarFiltro">Buscar</button>
      <br><button id="limpiarFiltro">Limpiar Filtros</button>
  </div>
  `
}

function productosHTML(product) {
  return `
  <div class="espacio-producto">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Precio: ${product.price}€</p>
      <p>Valoración: ${product.stars} estrellas (${product.reviews} opiniones)</p>
      <p>Vendedor: ${product.seller}</p>
  </div>
  `
}

function iniciarFiltros() {
  const filtros = document.querySelector('.filtros')
  filtros.innerHTML = filtrosHTML()
}

function aplicarFiltros() {
  const selectorVendedor = document.getElementById('selectorVendedor')
  const precioFiltro = document.getElementById('precioFiltro').value

  const vendedorSeleccionado = selectorVendedor.value

  let productosFiltrados = products.slice()

  if (vendedorSeleccionado && vendedorSeleccionado !== '') {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.seller === vendedorSeleccionado
    )
  }

  if (precioFiltro) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.price <= precioFiltro
    )
  }

  return productosFiltrados
}

function limpiarFiltros() {
  document.getElementById('precioFiltro').value = ''
  document.getElementById('selectorVendedor').value = ''

  iniciarProductos(products)
}

function iniciarProductos(products) {
  const contenedorProductos = document.querySelector('.productos')
  contenedorProductos.innerHTML = ''

  let hayProducto = true

  const botonBuscar = document.getElementById('buscarFiltro')
  botonBuscar.addEventListener('click', function () {
    const productosFiltrados = aplicarFiltros()
    hayProducto = productosFiltrados.length > 0
    contenedorProductos.innerHTML = ''

    if (!hayProducto) {
      const noEncontrado = document.createElement('p')
      noEncontrado.textContent = 'Producto no encontrado'
      noEncontrado.classList.add('mensaje-no-encontrado')
      contenedorProductos.appendChild(noEncontrado)

      const labelProductosSugeridos = document.createElement('p')
      labelProductosSugeridos.textContent = 'Productos sugeridos'
      labelProductosSugeridos.classList.add('productos-sugeridos')
      contenedorProductos.appendChild(labelProductosSugeridos)

      const productosSugeridos = document.createElement('div')
      productosSugeridos.classList.add('productos-sugeridos-row')
      contenedorProductos.appendChild(productosSugeridos)

      const yaSeleccionados = []
      while (yaSeleccionados.length < 4) {
        const posicionRandom = Math.floor(Math.random() * products.length)
        if (!yaSeleccionados.includes(posicionRandom)) {
          yaSeleccionados.push(posicionRandom)
          const productoIndividual = productosHTML(products[posicionRandom])
          productosSugeridos.insertAdjacentHTML('beforeend', productoIndividual)
        }
      }
    } else {
      productosFiltrados.forEach((product) => {
        const productoIndividual = productosHTML(product)
        contenedorProductos.insertAdjacentHTML('beforeend', productoIndividual)
      })
    }
  })

  const botonLimpiar = document.getElementById('limpiarFiltro')
  botonLimpiar.addEventListener('click', limpiarFiltros)

  if (hayProducto) {
    products.forEach((product) => {
      const productoIndividual = productosHTML(product)
      contenedorProductos.insertAdjacentHTML('beforeend', productoIndividual)
    })
  }
}

iniciarFiltros()
iniciarProductos(products)

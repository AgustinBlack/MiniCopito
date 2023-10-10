const arrayDeCatalogo = [
    {
        id: 1,
        nombre: "Osito",
        imagen: [
            "./images/enteritos/enterito-ositos(1).jpeg",
            "./images/enteritos/enterito-ositos(2).jpeg"
        ],
        estilo: "Body",
        talle: "1-2-3-4",
        precio: 1950,
        estado: "STOCK"
    },
    {
        id: 2,
        nombre: "Camila",
        imagen: [
            "./images/conjuntos/conjunto-camila(1).jpeg",
            "./images/conjuntos/conjunto-camila(2).jpeg"
        ],
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2500,
        estado: "STOCK"
    },
    {
        id: 3,
        nombre: "Jazmín",
        imagen: [
            "./images/conjuntos/conjunto-jazmin.jpeg",
            "./images/conjuntos/conjunto-jazmin-2.jpeg",
            "./images/conjuntos/conjunto-jazmin-3.jpeg"
        ],
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2450,
        estado: "STOCK"
    },

    {
        id: 4,
        nombre: "Floricienta",
        imagen: [
            "./images/vestidos/vestido-floricienta(1).jpeg",
            "./images/vestidos/vestido-floricienta(2).jpeg"
        ],
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2700,
        estado: "STOCK"
    },
    {
        id: 5,
        nombre: "Morley",
        imagen: [
            "./images/vestidos/vestido-morley(1).jpeg",
            "./images/vestidos/vestido-morley(2).jpg",
            "./images/vestidos/vestido-morley(3).jpg",
            "./images/vestidos/vestido-morley(4).jpg"
        ],
        estilo: "Vestido",
        talle: "1-2-3-4",
        precio: 2600,
        estado: "STOCK"
    },
    {
        id: 6,
        nombre: "Short y Vincha",
        imagen: [
            "./images/enteritos/body-short-vincha(1).jpeg",
            "./images/enteritos/body-short-vincha(2).jpeg",
        ],
        estilo: "Body",
        talle: "1-2-3-4",
        precio: 2700,
        estado: "STOCK"
    },
    {
        id: 7,
        nombre: "Mara",
        imagen: [
            "./images/conjuntos/conjunto-mara(1).jpeg",
            "./images/conjuntos/conjunto-mara(2).jpeg",
            "./images/conjuntos/conjunto-mara(3).jpeg",
            "./images/conjuntos/conjunto-mara(4).jpeg"
        ] ,
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2500,
        estado: "STOCK"
    },
    {
        id: 8,
        nombre: "Agustina",
        imagen: [
            "./images/enteritos/body-jazmin(1).jpeg",
            "./images/enteritos/body-jazmin(2).jpeg",
            "./images/enteritos/body-jazmin(3).jpeg",
            "./images/enteritos/body-jazmin(4).jpeg"
        ],
        estilo: "Body",
        talle: "1-2-3-4",
        precio: 3500,
        estado: "AGOTADO"
    },
    {
        id: 9,
        nombre: "Print",
        imagen: [
            "./images/vestidos/vestido-print(1).jpeg",
            "./images/vestidos/vestido-print(2).jpeg",
            "./images/vestidos/vestido-print(3).jpeg"
        ],
        estilo: "Vestido",
        talle: "1-2-3-4",
        precio: 2600,
        estado: "STOCK"
    },
    {
        id: 10,
        nombre: "Conejo",
        imagen: [
            "./images/enteritos/campera-conejo(1).jpeg",
            "./images/enteritos/campera-conejo(2).jpeg"
        ],
        estilo: "Body",
        talle: "1-2-3-4",
        precio: 2500,
        estado: "STOCK"
    },
    {
        id: 11,
        nombre: "Gasa",
        imagen: [
            "./images/vestidos/vestido-gasa.jpeg"
        ],
        estilo: "Vestido",
        talle: "1-2-3-4",
        precio: 2700,
        estado: "STOCK"
    }
]

function mostrarProductos(arrayProductos) {
    let contenedor = document.getElementById("divProductos")
    contenedor.innerHTML = ""

    arrayProductos.forEach((producto) => {
        let card = document.createElement("div")
        card.innerHTML = `
            <div class="divCard">
                <div id="${producto.id}" class="carousel slide">
                    <div class="carousel-inner">

                        <div class="carousel-item active">
                            <img class="divImg" id="botonImg${producto.id}" onClick="agrandarImagen(this)" src="${producto.imagen[0]}" class="d-block w-100" alt="...">
                        </div>

                        ${producto.imagen.length > 1 ? `
                        <div class="carousel-item">
                            <img class="divImg" id="botonImg${producto.id}" onClick="agrandarImagen(this)" src="${producto.imagen[1]}" class="d-block w-100" alt="...">
                        </div>
                        `
                        :''}

                        ${producto.imagen.length > 2 ? `
                        <div class="carousel-item">
                            <img class="divImg" id="botonImg${producto.id}" onClick="agrandarImagen(this)" src="${producto.imagen[2]}" class="d-block w-100" alt="...">
                        </div>
                        ` : ''}

                        ${producto.imagen.length > 3 ? `
                        <div class="carousel-item">
                            <img class="divImg" id="botonImg${producto.id}" onClick="agrandarImagen(this)" src="${producto.imagen[3]}" class="d-block w-100" alt="...">
                        </div>
                        ` : ''}

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#${producto.id}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${producto.id}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="divInfo">
                    <h3 class="divInfoNombre">${producto.nombre}</h3>
                    <h6 class="divInfoEstilo">${producto.estilo}</h6>
                    <p class="divInfoTalle">Talle: ${producto.talle}</p>
                    <p class="divInfoPrecio">$${producto.precio}</p>
                    <p class="divInfoEstado">${producto.estado}</p>
                </div>

            </div>
        `;

        contenedor.appendChild(card);
    });
}

mostrarProductos(arrayDeCatalogo)
//                 // <div>
//                 //     <button><a></a></button>
//                 //     <button><a></a></button>
//                 //     <button><a></a></button>
//                 //     <button><a></a></button>
//                 // </div>
// arrayDeCatalogo.forEach((producto) => {
//     let imagenes = producto.imagen;
//     imagenes.forEach((imagen, index) => {
//       let img = document.querySelector(`img[src="${imagen}"]`);
//       img.src = imagen;
//       img.dataset.color = producto.colores[index];
//     });
// });

//FILTRAR POR ESTILO

let botones = document.querySelectorAll("#navA");

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", filtrar);
}

function filtrar() {
    let botonTocado = this.textContent.toLowerCase();
    let productosMostrados = [];

    for (let i = 0; i < arrayDeCatalogo.length; i++) {
        if (arrayDeCatalogo[i].estilo.toLowerCase().includes(botonTocado)) {
            productosMostrados.push(arrayDeCatalogo[i]);
        }
    }

    mostrarProductos(productosMostrados);
}

let botonInicio = document.getElementById("inicioProductos")
botonInicio.addEventListener("click", function() {
    mostrarProductos(arrayDeCatalogo)
})

//FUNCION QUE AGRANDA IMG

function agrandarImagen(img) {
    img.classList.toggle("divImgAgrandada")
}

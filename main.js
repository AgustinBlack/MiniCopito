const arrayDeCatalogo = [
    {            
        id: 1,
        nombre: "Dante",
        imagen: [
            "./images/enteritos/enterito-dante.jpeg",
            "./images/enteritos/enterito-dante-2.jpeg",
            "./images/enteritos/enterito-dante-3.jpeg",
            "./images/enteritos/enterito-dante-4.jpeg"
        ],
        estilo: "Enterito",
        talle: "1-2-3-4",
        precio: 1800
    },
    {
        id: 2,
        nombre: "Astor",
        imagen: [
            "./images/conjuntos/conjunto-jazmin-3.jpeg",
            "./images/vestidos/vestido-floreado.jpg"
        ],
        estilo: "Enterito",
        talle: "1-2-3-4",
        precio: 1900
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
        precio: 2450
    },

    {
        id: 4,
        nombre: "Pedro",
        imagen: [
            "./images/enteritos/enterito-dante-3.jpeg",
            "./images/vestidos/vestido-floreado.jpg"
        ],
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2300
    },
    {
        id: 5,
        nombre: "Franka",
        imagen: [
            "./images/enteritos/enterito-dante-4.jpeg",
            "./images/vestidos/vestido-floreado.jpg"
        ],
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2000
    },
    {
        id: 6,
        nombre: "Vestido floreado con puntilla",
        imagen: [
            "./images/vestidos/vestido-floreado-puntilla.jpeg",
            "./images/vestidos/vestido-floreado-puntilla-2.jpeg",
            "./images/vestidos/vestido-floreado-puntilla-3.jpeg",
            "./images/vestidos/vestido-floreado-puntilla-4.jpeg",
            "./images/vestidos/vestido-floreado-puntilla-5.jpeg",
            "./images/vestidos/vestido-floreado-puntilla-6.jpeg"
        ],
        estilo: "Vestido",
        talle: "1-2-3-4",
        precio: 2800
    },
    {
        id: 7,
        nombre: "Animal",
        imagen: [
            "./images/conjuntos/conjunto-animal.jpg",
            "./images/conjuntos/conjunto-animal-2.jpg",
            "./images/conjuntos/conjunto-animal-3.jpg"
        ] ,
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 3000
    },
    {        
        id: 8,
        nombre: "Cuadrille", 
        imagen: [
            "./images/conjuntos/conjunto-cuadrille.jpg",
            "./images/conjuntos/conjunto-cuadrille-2.jpg",
            "./images/conjuntos/conjunto-cuadrille-3.jpg"
        ],
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2500
    },
    {
        id: 9,
        nombre: "Guepardo",
        imagen: [
            "./images/conjuntos/conjunto-guepardo.jpg",
            "./images/conjuntos/conjunto-guepardo-2.jpg",
            "./images/conjuntos/conjunto-guepardo-3.jpg"
        ],
        estilo: "Conjuntos",
        talle: "1-2-3-4",
        precio: 2700
    },
    {
        id: 10,
        nombre: "Moño",
        imagen: [
            "./images/conjuntos/conjunto-moño.jpg",
            "./images/conjuntos/conjunto-moño-2.jpg",
            "./images/conjuntos/conjunto-moño-3.jpg"
        ],
        estilo: "Conjuntos",
        talle: "1-2-3-4",
        precio: 2600
    },
    {
        id: 11,
        nombre: "Enterito",
        imagen: [
            "./images/enteritos/enterito.jpg",
            "./images/enteritos/enterito-2.jpg"
        ],
        estilo: "Enterito",
        talle: "1-2-3-4",
        precio: 2000
    },
    {
        id: 12,
        nombre: "Conejo",
        imagen: [
            "./images/enteritos/enterito-conejo.jpg",
            "./images/enteritos/enterito-conejo-2.jpg",
            "./images/enteritos/enterito-conejo-3.jpg"
        ],
        estilo: "Enterito",
        talle: "1-2-3-4",
        precio: 2400
    },
    {
        id: 13,
        nombre: "Floreado",
        imagen: [
            "./images/vestidos/vestido-floreado.jpg",
            "./images/vestidos/vestido-floreado-2.jpg",
            "./images/vestidos/vestido-floreado-3.jpg",
            "./images/vestidos/vestido-floreado-4.jpg"
        ],
        estilo: "Vestido",
        talle: "1-2-3-4",
        precio: 2800
    },
    {
        id: 14,
        nombre: "Vestido Moño",
        imagen: [
            "./images/vestidos/vestido-moño.jpg",
            "./images/vestidos/vestido-moño-2.jpg"
        ],
        estilo: "Vestido",
        talle: "1-2-3-4",
        precio: 2900
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
                </div>
            </div>
        `;

        contenedor.appendChild(card);
    });
}

mostrarProductos(arrayDeCatalogo)

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
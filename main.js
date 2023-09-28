const arrayDeCatalogo = [
    {            
        id: 1,
        nombre: "Dante",
        imagen: [
            "./images/enterito-dante.jpeg",
            "./images/enterito-dante-2.jpeg",
            "./images/enterito-dante-3.jpeg",
            "./images/enterito-dante-4.jpeg"
        ],
        estilo: "Enterito",
        talle: "1-2-3-4",
        precio: 1800
    },
    {
        id: 2,
        nombre: "Astor",
        imagen: [
            "./images/conjunto-jazmin-3.jpeg",
            "./images/vestido.jpeg"
        ],
        estilo: "Enterito",
        talle: "1-2-3-4",
        precio: 1900
    },
    {
        id: 3,
        nombre: "Jazmín",
        imagen: [
            "./images/conjunto-jazmin.jpeg",
            "./images/conjunto-jazmin-2.jpeg",
            "./images/conjunto-jazmin-3.jpeg"
        ],
            
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2450
    },

    {
        id: 4,
        nombre: "Pedro",
        imagen: [
            "./images/enterito-dante-3.jpeg",
            "./images/vestido.jpeg"
        ],
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2300
    },
    {
        id: 5,
        nombre: "Franka",
        imagen: [
            "./images/enterito-dante-4.jpeg",
            "./images/vestido.jpeg"
        ],
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2000
    },
    {
        id: 6,
        nombre: "Vestido floreado con puntilla",
        imagen: [
            "./images/vestido.jpeg",
            "./images/vestido.jpeg"
        ],
        estilo: "Vestido",
        talle: "1-2-3-4",
        precio: 2800
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
                            <img class="divImg" id="divImg" src="${producto.imagen[0]}" class="d-block w-100" alt="...">
                        </div>

                        ${producto.imagen.length > 1 ? `
                        <div class="carousel-item">
                            <img class="divImg" id="divImg" src="${producto.imagen[1]}" class="d-block w-100" alt="...">
                        </div>
                        ` 
                        :''}

                        ${producto.imagen.length > 2 ? `
                        <div class="carousel-item">
                            <img class="divImg" id="divImg" src="${producto.imagen[2]}" class="d-block w-100" alt="...">
                        </div>
                        ` : ''}

                        ${producto.imagen.length > 3 ? `
                        <div class="carousel-item">
                            <img class="divImg" id="divImg" src="${producto.imagen[3]}" class="d-block w-100" alt="...">
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

//BOTONES VISTAS

function cambiarVistaProductos() {
    const botonOriginal = document.getElementById("material-symbols-outlined-1");
    const botonColumna = document.getElementById("material-symbols-outlined-2");
    let contenedor = document.getElementById("divProductos")

    botonOriginal.addEventListener("click", () => {
      contenedor.style.display = "flex";
      contenedor.style.flexDirection = "row";
      contenedor.style.flexWrap = "wrap";
    });
  
    botonColumna.addEventListener("click", () => {
      contenedor.style.display = "flex";
      contenedor.style.flexDirection = "column";
    });
  }
  
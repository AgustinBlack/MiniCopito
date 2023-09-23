const arrayDeCatalogo = [
    {            
        id: 1,
        nombre: "Dante",
        imagen: "",
        estilo: "Enterito",
        talle: "1-2-3-4",
        precio: 1800
    },
    {
        id: 2,
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
        id: 3,
        nombre: "Astor",
        imagen: "",
        estilo: "Enterito",
        talle: "1-2-3-4",
        precio: 1900
    },
    {
        id: 4,
        nombre: "Pedro",
        imagen: "",
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2300
    },
    {
        id: 5,
        nombre: "Franka",
        imagen: "",
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2000
    }
]

function mostrarProductos(arrayProductos) {
    let contenedor = document.getElementById("divProductos")
    contenedor.innerHTML = ""
    
    arrayProductos.forEach((producto) => {
        let card = document.createElement("div")
        card.innerHTML = `
            <div class="divCard">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${producto.imagen("./images/conjunto-jazmin.jpeg")}" alt="Foto 1">
                        </div>
                        <div class="carousel-item">
                            <img src="${producto.imagen("./images/conjunto-jazmin-2.jpeg")}" alt="Foto 2">
                        </div>
                        <div class="carousel-item">
                            <img src="${producto.imagen("./images/conjunto-jazmin-3.jpeg")}" alt="Foto 3">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="divInfo">
                    <h3 class="divInfoNombre">${producto.nombre}</h3>
                    <h5 class="divInfoEstilo">${producto.estilo}</h5>
                    <p class="divInfoTalle">Talle: ${producto.talle}</p>
                    <p class="divInfoPrecio">$${producto.precio}</p>
                </div>
            </div>
        `;

        contenedor.appendChild(card);
    });
}

mostrarProductos(arrayDeCatalogo)
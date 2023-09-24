const arrayDeCatalogo = [
    {            
        id: 1,
        nombre: "Dante",
        imagen: "./images/enterito-dante.jpeg",
        estilo: "Enterito",
        talle: "1-2-3-4",
        precio: 1800
    },
    {
        id: 2,
        nombre: "Jazmín",
        imagen: "./images/conjunto-jazmin.jpeg",
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2450
    },
    {
        id: 3,
        nombre: "Astor",
        imagen: "./images/conjunto-jazmin-3.jpeg",
        estilo: "Enterito",
        talle: "1-2-3-4",
        precio: 1900
    },
    {
        id: 4,
        nombre: "Pedro",
        imagen: "./images/enterito-dante-3.jpeg",
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2300
    },
    {
        id: 5,
        nombre: "Franka",
        imagen: "./images/enterito-dante-4.jpeg",
        estilo: "Conjunto",
        talle: "1-2-3-4",
        precio: 2000
    },
    {
        id: 6,
        nombre: "Vestido floreado con puntilla",
        imagen: "./images/vestido.jpeg",
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
                <img class="divImg" src="${producto.imagen}" alt="">
                <div class="divInfo">
                    <h3 class="divInfoNombre" onmouseover="startScroll(this)" onmouseout="stopScroll(this)">${producto.nombre}</h3>
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

function startScroll(card) {
    let productName = card.querySelector('.divInfoNombre');
    let scrollWidth = productName.scrollWidth;
    let clientWidth = productName.clientWidth;

    if (scrollWidth > clientWidth) {
        var animationDuration = (scrollWidth - clientWidth) * 20;
        productName.style.animation = `scroll-left ${animationDuration}ms linear infinite`;
    }
}
  
function stopScroll(card) {
    let productName = card.querySelector('.divInfoNombre');
    productName.style.animation = 'none';
}
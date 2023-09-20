const arrayDeCatalogo = [
    {            
        id: 1,
        nombre: "Dante",
        imagen: "",
        estilo: "enterito",
        talle: "1-2-3-4",
        precio: 1800
    },
    {
        id: 2,
        nombre: "Jazmín",
        imagen: "",
        estilo: "conjunto",
        talle: "1-2-3-4",
        precio: 2450
    }
]

function mostrarProductos (arrayProductos) {
    let contenedor = document.getElementById("divProductos")
    contenedor.innerHTML = ""
    
    arrayProductos.forEach((producto) => {
        let card = document.createElement("div")
        card.innerHTML = `
            <div class="divCard">
                <img class="divImg" src="${producto.imagen}" alt="">
                <div class="divInfo">
                    <h3 class="divInfoNombre">${producto.nombre}</h3>
                    <h5 class="divInfoEstilo">${producto.estilo}</h5>
                    <p class="divInfoTalle">${producto.talle}</p>
                    <p class="divInfoPrecio">${producto.precio}</p>
                </div>
            </div>
        `;

        contenedor.appendChild(card);
    });
}
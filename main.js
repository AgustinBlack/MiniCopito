const arrayDeCatalogo = "./json/data.json"

// function cargarYMostrarProductos(tipo) {
//     fetch('./data/data.json')
//         .then(response => response.json())
//         .then(data => {
//             mostrarProductos(data, tipo);
//         })
//         .catch(error => {
//             console.error('Error al cargar el archivo JSON:', error);
//         });
// }

// function mostrarProductos (arrayProductos) {
//     let contenedor = document.getElementById("divProductos")
//     contenedor.innerHTML = ""

//     arrayProductos.forEach((producto) => {
//         let card = document.createElement("div")
//         card.innerHTML = `
//             <div class="divCard">
//                 <img class="divImg" src="${producto.imagen}" alt="">
//                 <div class="divInfo">
//                     <h3 class="divInfoNombre">${producto.nombre}</h3>
//                     <h5 class="divInfoEstilo">${producto.estilo}</h5>
//                     <p class="divInfoTalle">${producto.talle}</p>
//                     <p class="divInfoPrecio">${producto.precio}</p>
//                 </div>
//             </div>
//         `;

//         contenedor.appendChild(card);
//     });
// }

function cargarYMostrarProductos() {
    fetch('./json/data.json')
        .then(response => response.json())
        .then(data => {
            mostrarProductos(data);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

function mostrarProductos(arrayProductos) {
    let contenedor = document.getElementById("divProducto");
    contenedor.innerHTML = "";

    for (let estilo in arrayProductos) {
        let productos = arrayProductos[estilo];

        productos.forEach(producto => {
            let card = document.createElement("div");
            card.classList.add("divCard");

            let imagen = document.createElement("img");
            imagen.classList.add("divImg");
            imagen.src = producto.imagen;
            imagen.alt = "";

            let divInfo = document.createElement("div");
            divInfo.classList.add("divInfo");

            let h3 = document.createElement("h3");
            h3.classList.add("divInfoNombre");
            h3.textContent = producto.nombre;

            let h5 = document.createElement("h5");
            h5.classList.add("divInfoEstilo");
            h5.textContent = producto.estilo;

            let p1 = document.createElement("p");
            p1.classList.add("divInfoTalle");
            p1.textContent = producto.talle;

            let p2 = document.createElement("p");
            p2.classList.add("divInfoPrecio");
            p2.textContent = producto.precio;

            divInfo.appendChild(h3);
            divInfo.appendChild(h5);
            divInfo.appendChild(p1);
            divInfo.appendChild(p2);

            card.appendChild(imagen);
            card.appendChild(divInfo);

            contenedor.appendChild(card);
        });
    }
}

cargarYMostrarProductos();

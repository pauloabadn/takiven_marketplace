let carrito = [];

const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito")
const precioTotal = document.querySelector("#precioTotal");
// const procesarCompra = document.querySelector("#procesarCompra");
// const activarFuncion = document.querySelector("#activarFuncion");

const swcontenedor = document.getElementById('swcontenido')

// if (activarFuncion) {
//     activarFuncion.addEventListener("click", procesarPedido);
//   }  

document.addEventListener('DOMContentLoaded',() =>{
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    mostrarCarrito();

    // document.querySelector('#activarFuncion').click(procesarPedido)
})

sneakers.forEach((prod) => {

    const {id, img, marca, nombre, precio, oferta,} = prod
    swcontenedor.innerHTML += `
                    <div class="swiper-slide">
                        <div class="cont">
                            <div class="img"><img src="${img}" alt=""></div>
                            <h3><span>${marca}</span> <br> ${nombre}</h3>
                            <div class="cont-text">
                                <div class="precio"><p>S/${precio}</p></div>
                                <div class="oferta"><p>S/${oferta}</p></div>
                            </div>
                            <button onclick="agregarProducto(${id})" class="btn btn-primary">Agregar</button>
                    </div>
    `;
})

//EVENTOS

if(procesarCompra){
procesarCompra.addEventListener('click', () => {
    if(carrito.length === 0){
        Swal.fire({
            title: "¡Tu carrito está vacio!",
            text: "Compra algo para continuar con la compra",
            icon: "error",
            confirmButtonText: "Aceptar",
          })
    } else{
        location.href = "pages/compra2.html";
    }
})
}

if(vaciarCarrito){
vaciarCarrito.addEventListener('click', () => {
    carrito.length = []
    mostrarCarrito()
})
}

//FUNCIONES

function agregarProducto(id){

    const existe = carrito.some(prod => prod.id === id)

    if(existe){
        const prod = carrito.map(prod =>{
            if(prod.id === id){
                prod.cantidad++
            }
        })
    }else{
        const item = sneakers.find((prod) => prod.id === id)
        carrito.push(item)
    }

    mostrarCarrito()
}

function eliminarProducto(id){
    const guardeId = id
    carrito = carrito.filter((guarde) => guarde.id !== guardeId)
    mostrarCarrito()
}

function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

// function procesarPedido(){
    
//     carrito.forEach((prod) => {
//         const listaCompra = document.querySelector('#lista-compra tbody')
//         const { id, nombre, oferta, img, cantidad } = prod;
//         if (listaCompra) {
//             const row = document.createElement("tr");
//             row.innerHTML += `
//                     <td>
//                     <img class="img-fluid img-carrito" src="${img}"/>
//                     </td>
//                     <td>${nombre}</td>
//                   <td>${precio}</td>
//                   <td>${cantidad}</td>
//                   <td>${oferta * cantidad}</td>
//                   `;
//             listaCompra.appendChild(row);
//           }
//     });
//     totalProceso.innerText = carrito.reduce(
//         (acc, prod) => acc + prod.cantidad * prod.precio,
//         0
//     );
// }

//METODOS 

const mostrarCarrito = () =>{
    const modalBody = document.querySelector('.modal .modal-body')
    if(modalBody){
    
    modalBody.innerHTML = '';
    carrito.forEach ((prod) => {
        const {id, img, marca, nombre, precio, oferta, cantidad} = prod
        modalBody.innerHTML += `
            <div class="modal-contenedor">
                <div>
                    <img class="img-fluid img-carrito" src="${img}"/>
                </div>
                <div>
                    <p>Producto: ${nombre}</p>
                    <p>Marca: ${marca}</p>
                    <p>Oferta: ${oferta}</p>
                    <p>Cantidad: ${cantidad}</p>
                </div>

                <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar Producto</button>
            </div>
        `;
    })
}
    if(carrito.length === 0){
        modalBody.innerHTML = `
        <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
        `;
    }

    carritoContenedor.textContent = carrito.length;

    if(precioTotal){
        precioTotal.textContent = carrito.reduce((acc,prod) => acc + prod.cantidad * prod.oferta, 0)
    }
    guardarStorage()
}


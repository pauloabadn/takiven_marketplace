const swcontenedor = document.getElementById('swcontenido')

sneakers.forEach( producto => {

    const div = document.createElement('div');
    div.classList.add('swiper-slide');

    div.innerHTML = `
                        <div class="cont">
                            <div class="img"><img src="${producto.img}" alt=""></div>
                            <h3><span>${producto.marca}</span> <br> ${producto.nombre}</h3>
                            <div class="cont-text">
                                <div class="precio"><p>S/${producto.precio}</p></div>
                                <div class="oferta"><p>S/${producto.oferta}</p></div>
                            </div>
                            <button id="agregar${producto.id} "class="btn btn-primary">Agregar</button>
    `;
    swcontenedor.appendChild(div);

    // const boton = document.getElementById(`agregar${producto.id}`)

    // boton.addEventListener('click', () => {
    //     agregarAlcarrito(producto.id)
    // })

});



const contgamer = document.getElementById('swgamer');
gamer.forEach( producto => {

    const div = document.createElement('div');
    div.classList.add('swiper-slide');

    div.innerHTML = `
                        <div class="cont">
                            <div class="img"><img src="${producto.img}" alt=""></div>
                            <h3><span>${producto.marca}</span> <br> ${producto.nombre}</h3>
                            <div class="cont-text">
                                <div class="precio"><p>S/${producto.precio}</p></div>
                                <div class="oferta"><p>S/${producto.oferta}</p></div>
                            </div>
                            <button class="btn btn-primary" onclick="agregarProducto(${producto.id})">Agregar</button>
    `;
    swgamer.appendChild(div);
});

const contsmart = document.getElementById('swsmart');
smartphone.forEach( producto => {

    const div = document.createElement('div');
    div.classList.add('swiper-slide');

    div.innerHTML = `
                        <div class="cont">
                            <div class="img"><img src="${producto.img}" alt=""></div>
                            <h3><span>${producto.marca}</span> <br> ${producto.nombre}</h3>
                            <div class="cont-text">
                                <div class="precio"><p>S/${producto.precio}</p></div>
                                <div class="oferta"><p>S/${producto.oferta}</p></div>
                            </div>
                            <button class="btn btn-primary" onclick="agregarProducto(${producto.id})">Agregar</button>
    `;
    swsmart.appendChild(div);
});

const contcomputacion = document.getElementById('swcomputacion');
computacion.forEach( producto => {

    const div = document.createElement('div');
    div.classList.add('swiper-slide');

    div.innerHTML = `
                        <div class="cont">
                            <div class="img"><img src="${producto.img}" alt=""></div>
                            <h3><span>${producto.marca}</span> <br> ${producto.nombre}</h3>
                            <div class="cont-text">
                                <div class="precio"><p>S/${producto.precio}</p></div>
                                <div class="oferta"><p>S/${producto.oferta}</p></div>
                            </div>
                            <button class="btn btn-primary" onclick="agregarProducto(${producto.id})">Agregar</button>
    `;
    swcomputacion.appendChild(div);
});

const contsupermercado = document.getElementById('swsupermercado');
supermercado.forEach( producto => {

    const div = document.createElement('div');
    div.classList.add('swiper-slide');

    div.innerHTML = `
                        <div class="cont">
                            <div class="img"><img src="${producto.img}" alt=""></div>
                            <h3><span>${producto.marca}</span> <br> ${producto.nombre}</h3>
                            <div class="cont-text">
                                <div class="precio"><p>S/${producto.precio}</p></div>
                                <div class="oferta"><p>S/${producto.oferta}</p></div>
                            </div>
                            <button id="agregar${producto.id}" class="btn btn-primary" onclick="agregarProducto(${producto.id})">Agregar</button>
    `;
    swsupermercado.appendChild(div);
});

// const contmascota = document.getElementById('swmascota');
// supermercado.forEach( producto => {

//     const div = document.createElement('div');
//     div.classList.add('swiper-slide');

//     div.innerHTML = `
//                         <div class="cont">
//                             <div class="img"><img src="${producto.img}" alt=""></div>
//                             <h3><span>${producto.marca}</span> <br> ${producto.nombre}</h3>
//                             <div class="cont-text">
//                                 <div class="precio"><p>S/${producto.precio}</p></div>
//                                 <div class="oferta"><p>S/${producto.oferta}</p></div>
//                             </div>
//                             <div class="agregar"><p>Agregar</p></div>
//     `;
//     swmascota.appendChild(div);
// });

let carrito = [];

const agregarAlcarrito = (prodId) => {
    const item1 = sneakers.find((prod) => prod.id === prodId)
    carrito.push(item1)
    console.log(carrito)
}


const burgerOpen = document.querySelector(".burgerOpen"),
      burgerClose = document.querySelector(".burgerClose"),
      menu = document.querySelector(".menu");

burgerOpen.addEventListener("click" , () =>{
    menu.classList.add("active");
});

burgerClose.addEventListener("click" , () =>{
    menu.classList.remove("active");
});

let userOpen = document.querySelector(".userOpen")
    userMenu = document.querySelector(".newsesion")

userOpen.addEventListener("click" , () =>{
    userMenu.classList.add("active");
});


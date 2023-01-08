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
                            <div class="agregar"><p>Agregar</p></div>
    `;
    swcontenedor.appendChild(div);
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
                            <div class="agregar"><p>Agregar</p></div>
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
                            <div class="agregar"><p>Agregar</p></div>
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
                            <div class="agregar"><p>Agregar</p></div>
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
                            <div class="agregar"><p>Agregar</p></div>
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

const burgerOpen = document.querySelector(".burgerOpen"),
      burgerClose = document.querySelector(".burgerClose"),
      menu = document.querySelector(".menu");

burgerOpen.addEventListener("click" , () =>{
    menu.classList.add("active");
});

burgerClose.addEventListener("click" , () =>{
    menu.classList.remove("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("burgerOpen") && clickedElm.classList.contains("menu")){
        menu.classList.remove("active");
    }
});



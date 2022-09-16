//const burgerOpen = document.querySelector(".burgerOpen"),
//      burgerClose = document.querySelector(".burgerClose"),
//      menu = document.querySelector(".menu");

//burgerOpen.addEventListener("click" , () =>{
//    menu.classList.add("active");
//});

//burgerClose.addEventListener("click" , () =>{
//    menu.classList.remove("active");
//});

//body.addEventListener("click" , e =>{
//    let clickedElm = e.target;

//    if(!clickedElm.classList.contains("burgerOpen") && clickedElm.classList.contains("menu")){
//        menu.classList.remove("active");
//    }
//});


const contenedor = document.getElementById('contenido');

sneakers.forEach( producto => {

    const div = document.createElement('div');
    div.classList.add('item');

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
    contenedor.appendChild(div);
});

const contgamer = document.getElementById('contgamer');
gamer.forEach( producto => {

    const div = document.createElement('div');
    div.classList.add('item');

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
    contgamer.appendChild(div);
});
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

    if(!clickedElm.classList.contains("burgerOpen") && !clickedElm.classList.contains("menu")){
        menu.classList.remove("active");
    }
});
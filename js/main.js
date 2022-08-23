const burgerOpen = document.querySelector(".burgerOpen"),
      menu = document.querySelector(".menu")
    
burgerOpen.addEventListener("click" , () =>{
    menu.classList.add(".active");
});
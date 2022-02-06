let burgerBox = document.getElementById("burger-menu")
let burger = document.getElementById("nav-icon");
let menu = document.getElementById("menu");
let logo = document.getElementById("logo")



let burgerMenu = () => {
 let menuOpen = menu.classList.toggle("open");
 let burgerAnimation =  burger.classList.toggle("close")

 if (menuOpen) {
    logo.style.display = "none"
 } else {
     logo.style.display = "flex"
 };
//   console.log("hello")

}
// button
burgerBox.addEventListener("click", burgerMenu);

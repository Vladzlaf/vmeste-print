const navbar = document.querySelector(".navbar-mobile");
const body = document.querySelector("body");
const overlayMenu = document.querySelector(".overlay")
const header = document.querySelector("header")
let menuOpen = false
console.log(header)


function burgerMenu () {
    if (menuOpen === false){
        navbar.classList.add("collapsed");
        body.classList.add("lock");
        overlayMenu.classList.add("overlay-active")
        menuOpen = true
        
    }
    else if (menuOpen === true) {
        navbar.classList.remove("collapsed");
        body.classList.remove("lock");
        overlayMenu.classList.remove("overlay-active")
        navbarInfo.classList.remove("collapsed-info");
        menuOpen = false
    }   
    
}

navbar.querySelector(".toggle").addEventListener("click", burgerMenu) 

// navbar.querySelector(".toggle-info").addEventListener("click", () => {
    
//         navbarInfo.classList.toggle("collapsed-info2");
//         navbar.classList.toggle("collapsed2");
    
// }) 

// header.querySelector(".overlay").addEventListener("click", burgerMenu)
// navbar.querySelector(".toggle").addEventListener("click", () => {
//   navbar.classList.toggle("collapsed");
//   body.classList.toggle("lock");
//   overlayMenu.classList.toggle("overlay-active")
//   navbarInfo.classList.remove("collapsed-info");
//   overlayMenu.classList.add("overlay-active")
//   body.classList.add("lock");
// });

// navbar.querySelector(".toggle").addEventListener("click", () => {
//     overlayMenu.classList.remove("overlay-active")
//     body.classList.remove("lock");
//   });

 header.querySelector(".overlay").addEventListener("click", () => {
    navbar.classList.remove("collapsed");
    body.classList.remove("lock");
    overlayMenu.classList.remove("overlay-active")
    });

// window.addEventListener("scroll", e => {
//   let windowY = window.pageYOffset;
//   let navbarHeight = document.querySelector(".navbar").offsetHeight;
//   if (windowY > navbarHeight) navbar.classList.add("sticky");
//   else navbar.classList.remove("sticky");
// });


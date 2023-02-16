const navbarInfo = document.querySelector(".navbar-mobile-info");
 console.log(123)

console.log(header)


function burgerMenuInfo () {
    if (menuOpen === false){
        navbarInfo.classList.add("collapsed-info");
        body.classList.add("lock");
        overlayMenu.classList.add("overlay-active")
        menuOpen = true
    }
    else if (menuOpen === true) {
        navbarInfo.classList.remove("collapsed-info");
        body.classList.remove("lock");
        overlayMenu.classList.remove("overlay-active")
        navbar.classList.remove("collapsed");
        menuOpen = false
    }   
}


navbar.querySelector(".toggle-info").addEventListener("click", burgerMenuInfo) 

// navbar.querySelector(".toggle").addEventListener("click", () => {
//   if (menuOpen === true) {
//       navbar.classList.toggle("collapsed2");
//       navbarInfo.classList.toggle("collapsed-info2");
//   }
// }) 
// header.querySelector(".overlay").addEventListener("click", burgerMenu)

//  navbar.querySelector(".toggle-info").addEventListener("click", () => {
//     navbarInfo.classList.toggle("collapsed-info");
//     body.classList.toggle("lock");
//     overlayMenu.classList.toggle("overlay-active")
//     navbar.classList.remove("collapsed");
//     overlayMenu.classList.add("overlay-active")
//     body.classList.add("lock");



//   });

  header.querySelector(".overlay").addEventListener("click", () => {
    navbarInfo.classList.remove("collapsed-info");
    body.classList.remove("lock");
    overlayMenu.classList.remove("overlay-active")
    menuOpen = false
    });
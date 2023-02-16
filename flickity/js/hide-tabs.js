const tabContent = document.querySelectorAll(".question-wrap-second");
const tab = document.querySelectorAll(".tab-content-hide");


function hideMobile () {
    tabContent.forEach((elem, index) => {
        if (elem.textContent == ""){
            tab[index].classList.add("hide-tab")
        }
    })
}

hideMobile()

const tabContentDesk = document.querySelectorAll(".tab-second-desk");
const tabDesk = document.querySelectorAll(".page-second-tab");

function hideDesk () {
    tabContentDesk.forEach((elem, index) => {
        if (elem.textContent == ""){
            tabDesk[index+1].classList.add("hide-tab")
        }
    })
}

hideDesk ()





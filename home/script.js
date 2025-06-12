const hamtop =  document.querySelector(".ham-top");
const navMenu =  document.querySelector(".nav-menu");

hamtop.addEventListener("click", () => {
    hamtop.classList.toggle("active");
    navMenu.classList.toggle("active");
})

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function (){
    nextImage();
}, 5000)

function netImage(){
    count++;
    if(count>4){
        count = 1;
}

document.getElementById("radio"+count).checked = true;
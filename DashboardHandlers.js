

function fun1() {
var x = document.querySelector(".dropdown-menu");
    if(x.style.display == 'none') {
        x.style.display = 'unset';
    } else {
        x.style.display = "none";
    }
}
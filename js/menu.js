const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click",hambHandler);
window.addEventListener('resize', renderPopup);

function hambHandler(e){
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    renderPopup();
}

function renderPopup(){
    if(  window.innerWidth < 991){
        popup.appendChild(menu);
    }
    else{
        popup.removeChild(menu);
        popup.classList.remove("open");
        hamb.classList.remove("active");
    }
}

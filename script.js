const menu=document.querySelector('.ion-md-menu');
const modal=document.querySelector('.menu-mobile');
const close=document.querySelector('.ion-md-close');

menu.addEventListener("click",()=>{
    modal.classList.toggle("menu-view");
    menu.classList.toggle("display-block");
    close.classList.toggle("display-block");
});

close.addEventListener("click",()=>{
    modal.classList.toggle("menu-view");
    menu.classList.toggle("display-block");
    close.classList.toggle("display-block");
});
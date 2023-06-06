const menuEl = document.querySelector('.toggle');

const divEl = document.querySelector('.barmenu');
menuEl.addEventListener('click', ()=>{
    divEl.classList.toggle('mobile-menu-holder');
})
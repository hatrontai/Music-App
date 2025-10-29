const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const sidebarPlus = $('.sidebar__plus');
sidebarPlus.onclick = function() {
    const sidebarPlusBtn = $('.sidebar__plus--btn');
    sidebarPlusBtn.classList.toggle('active');
}
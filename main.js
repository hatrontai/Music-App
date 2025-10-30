const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const sidebarPlus = $('.sidebar__plus');
sidebarPlus.onclick = function() {
    const sidebarPlusBtn = $('.sidebar__plus--btn');
    sidebarPlusBtn.classList.toggle('active');
}

const sections = $$('.main-content .section__content')
sections.forEach((section) => {
    section.addEventListener('mouseover', function() {
        const rightBtn = section.querySelector('.section__right')
        const leftBtn = section.querySelector('.section__left')
        rightBtn.classList.add('active');
        leftBtn.classList.add('active');
    })
    section.addEventListener('mouseout', function() {
        const rightBtn = section.querySelector('.section__right')
        const leftBtn = section.querySelector('.section__left')
        rightBtn.classList.remove('active');
        leftBtn.classList.remove('active');
    })
})

const sectionItems = $$('.main-content .section__content--item');
sectionItems.forEach((item) => {
    item.addEventListener('mouseover', function() {
        const playBtn = item.querySelector('.section__item--play');
        playBtn.classList.add('active');
    });
    item.addEventListener('mouseout', function() {
        const playBtn = item.querySelector('.section__item--play');
        playBtn.classList.remove('active');
    });
}) 
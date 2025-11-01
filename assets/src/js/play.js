const playBtns = $$('.fa-solid.fa-play')

playBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
        playBtns.forEach((btn) => {
            btn.classList.toggle('fa-play');
            btn.classList.toggle('fa-pause');
        })
    })
})
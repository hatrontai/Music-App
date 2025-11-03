const playBtns = $$('.fa-solid.fa-play')
const audio = document.getElementById('audio')

playBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
        playBtns.forEach((btn) => {
            btn.classList.toggle('fa-play');
            btn.classList.toggle('fa-pause');
        })
        if(audio.paused) {
            audio.play()
        }
        else {
            audio.pause()
        }
    })
})

audio.addEventListener('timeupdate', () => {
    const progressBar = $('.progress')
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    updateTimeDisplay();
});


const playBtns = $$('.fa-solid.fa-play')
const audio = document.getElementById('audio')
const volume = $('.player__volume--bar volume')

function updateTimeDisplay() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);
    $('.player__progress--current').textContent = `${currentMinutes}:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;
    $('.player__progress--duration').textContent = `${durationMinutes}:${durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds}`;
}

function updateVolume() {
    const volumeBar = $('.player__volume--bar');
    audio.volume = volume.style.width / volumeBar.offsetWidth;
    const volumeIcon = $('.player__tool--volume i');
    if (audio.volume < 0.5) {
        volumeIcon.classList.remove('fa-volume-high');
        volumeIcon.classList.add('fa-volume-low');
    } else {
        volumeIcon.classList.remove('fa-volume-low');
        volumeIcon.classList.add('fa-volume-high');
    }
}

playBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
        if(audio.paused) {
            audio.play()
            playBtns.forEach((btn) => {
                btn.classList.remove('fa-play')
                btn.classList.add('fa-pause')
            })
        }
        else {
            audio.pause()
            playBtns.forEach((btn) => {
                btn.classList.remove('fa-pause')
                btn.classList.add('fa-play')
            })
        }
    })
})

audio.addEventListener('timeupdate', () => {
    const progressBar = $('.player__play--progress .progress')
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    updateTimeDisplay();
    if(audio.currentTime === audio.duration) {
        playBtns.forEach((btn) => {
            btn.classList.remove('fa-pause')
            btn.classList.add('fa-play')
        })
    }
});

volume.addEventListener('input', updateVolume);
updateVolume();
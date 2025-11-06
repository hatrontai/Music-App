const playBtns = $$('.fa-solid.fa-play')
const audio = document.getElementById('audio')
const progressBar = $('.player__progress--bar')
const volumeBar = document.querySelector('.player__volume--bar');
const volumeFill = document.querySelector('.volume');

function updateTimeDisplay() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);
    $('.player__progress--current').textContent = `${currentMinutes}:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;
    $('.player__progress--duration').textContent = `${durationMinutes}:${durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds}`;
    
    const progressFill = $('.player__progress--bar .progress');
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = `${progressPercent}%`;
}

function adjustTimeDisplay(newTime) {
    audio.currentTime = newTime;
    updateTimeDisplay();
    console.log(audio.currentTime);
}

function updateVolume(newVolume) {
    const volumeIcon = $('.player__tool--volume i');
    audio.volume = newVolume;
    // console.log(audio.volume);
    if (audio.volume < 0.5) {
        volumeIcon.classList.remove('fa-volume-high');
        volumeIcon.classList.add('fa-volume-low');
    } else {
        volumeIcon.classList.remove('fa-volume-low');
        volumeIcon.classList.add('fa-volume-high');
    }
    volumeFill.style.width = `${newVolume * 100}%`;
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
    updateTimeDisplay();
    if(audio.currentTime === audio.duration) {
        playBtns.forEach((btn) => {
            btn.classList.remove('fa-pause')
            btn.classList.add('fa-play')
        })
    }
});

volumeBar.addEventListener('click', (e) => {
  const rect = volumeBar.getBoundingClientRect(); // vị trí thanh bar
  const clickX = e.clientX - rect.left;            // vị trí click
  const width = rect.width;
  const newVolume = clickX / width;                // tỉ lệ (0 -> 1)
  
  // Cập nhật âm lượng audio
  updateVolume(newVolume);
  audio.volume = newVolume;
  
  // Cập nhật chiều rộng thanh màu
  volumeFill.style.width = `${newVolume * 100}%`;
});

progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * audio.duration;
    adjustTimeDisplay(newTime);
})
// باز کردن پاکت نامه
function openEnvelope() {
    document.getElementById('envelope').classList.add('open');
    setTimeout(() => {
        document.getElementById('envelope').style.display = 'none';
        document.getElementById('card').classList.remove('hidden');
    }, 1000);
}

// کنترول موزیک
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('play-btn');
    if (music.paused) {
        music.play();
        btn.innerText = '⏸';
    } else {
        music.pause();
        btn.innerText = '▶';
    }
}

// تایمر معکوس برای تاریخ ۲۹ شهریور
const targetDate = new Date("Sep 20, 2026 20:00:00").getTime();

setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);

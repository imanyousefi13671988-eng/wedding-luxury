window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 1500);
});

const envelope = document.querySelector(".envelope");
const invitation = document.getElementById("invitation");


const targetDate = new Date("2026-09-20T20:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) return;

    document.getElementById("days").textContent =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").textContent =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").textContent =
        Math.floor((distance % (1000 * 60)) / 1000);
}

updateCountdown();
setInterval(updateCountdown, 1000);
if (envelope) {
    envelope.addEventListener("click", () => {
        envelope.classList.add("open");
        
envelope.classList.add("open");

setTimeout(() => {
    document.getElementById("envelope").style.display = "none";
    invitation.style.display = "block";
}, 1000);
    if (envelope) {
  envelope.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
      document.getElementById("envelope").style.display = "none";
      invitation.style.display = "block";

      const music = document.getElementById("music");
      music.currentTime = 4;
      music.play();

    }, 1000); // یک ثانیه بعد از باز شدن پاکت
  });
}
});
    });
}

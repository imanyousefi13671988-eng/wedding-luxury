// =========================
// LOADING
// =========================

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loading").style.display = "none";

},1500);

});

// =========================
// ELEMENTS
// =========================

const envelope=document.querySelector(".envelope");

const invitation=document.getElementById("invitation");

const playBtn=document.getElementById("playMusic");

const music=document.getElementById("music");

// =========================
// OPEN ENVELOPE
// =========================

envelope.addEventListener("click",()=>{

envelope.classList.add("open");

setTimeout(()=>{

document.getElementById("envelopePage").style.display="none";

invitation.style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

music.currentTime=4;

music.play();

},1400);

});

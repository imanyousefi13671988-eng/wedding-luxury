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
// =========================
// MUSIC BUTTON
// =========================

playBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

playBtn.innerHTML="⏸ توقف موزیک";

}else{

music.pause();

playBtn.innerHTML="🎵 پخش موزیک";

}

});

// =========================
// COUNTDOWN
// =========================

const weddingDate=new Date("September 18, 2026 18:00:00").getTime();

const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

function countdown(){

const now=new Date().getTime();

const distance=weddingDate-now;

if(distance<=0){

days.innerHTML="00";
hours.innerHTML="00";
minutes.innerHTML="00";
seconds.innerHTML="00";

return;

}

days.innerHTML=Math.floor(distance/(1000*60*60*24));

hours.innerHTML=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

minutes.innerHTML=Math.floor((distance%(1000*60*60))/(1000*60));

seconds.innerHTML=Math.floor((distance%(1000*60))/1000);

}

countdown();

setInterval(countdown,1000);


window.addEventListener("load", function () {

setTimeout(function () {

document.getElementById("loading").style.display = "none";

document.getElementById("envelope").style.display = "flex";

},1500);

});

document.getElementById("envelope").addEventListener("click",function(){

this.style.display="none";

document.getElementById("invitation").style.display="block";

});

const targetDate=new Date("September 20, 2026 20:00:00").getTime();

setInterval(function(){

const now=new Date().getTime();

const distance=targetDate-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

if(document.getElementById("days")){

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

}

},1000);

const btn=document.getElementById("playMusic");

const audio=document.getElementById("song");

if(btn){

btn.onclick=function(){

if(audio.paused){

audio.play();

btn.innerHTML="⏸ توقف موزیک";

}else{

audio.pause();

btn.innerHTML="🎵 پخش موزیک";

}

}

}

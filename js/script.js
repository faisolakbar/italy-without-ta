const content = document.getElementById("content");
const salam = document.getElementById("salam");
const button = document.getElementById("button");
const hati = document.getElementById("hati");
const tangan = document.getElementById("tangan");
const contentSatu = document.getElementById("contentSatu");
const contentKedua = document.getElementById("contentKedua");
const play = document.getElementById("play");
const playPauseIcon = document.getElementById("play-pause-icon")
const vinyl = document.getElementById("vinyl");
const song = document.getElementById("song");
const canvas = document.getElementById("canvas");

// setTimeout(()=>{
//   tangan.classList.add('-translate-y-[315px]')
// }, 500)


setTimeout(() => {
  content.classList.replace('opacity-0', 'opacity-100')
}, 1000);

setTimeout(() => {
  button.classList.replace('cursor-default', 'cursor-pointer')
  
  button.addEventListener("click", () => {
    button.classList.replace('cursor-pointer', 'cursor-default')
    button.classList.add('scale-[100]');
    button.classList.replace('duration-700', 'duration-1000')
    tangan.classList.add('hidden')
  
    setTimeout(() => {
      button.classList.add('opacity-0')
    }, 1000);
  
    setTimeout(() => {
      salam.classList.add('hidden')
    }, 600);
  
    setTimeout(() => {
      contentSatu.classList.add('hidden')
    }, 1700);
  
    setTimeout(() => {
      contentKedua.classList.replace('hidden', 'block')
    }, 600);
  
  });
}, 4000);

setTimeout(() => {
  tangan.classList.add('opacity-100')
  setInterval(() => {
    tangan.classList.toggle("scale-90");
  }, 700);
}, 4000);

function mDown(obj){
  obj.classList.add('shadow-inner', 'scale-95')
}

function mUp(obj) {
  obj.classList.remove('shadow-inner', 'scale-95')
}

// audio

play.addEventListener("click", ()=>{
  if (song.paused) {
    playPauseIcon.src = "src/pause-btn.png"
    vinyl.style.animation = "spin 6s linear infinite"
    song.play()
  } else {
    playPauseIcon.src = "src/play-btn.png"
    vinyl.style.animationPlayState = "paused"
    song.pause()
  }
})  


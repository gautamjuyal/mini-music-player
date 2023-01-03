const player = document.querySelector(".player");
const albumArt = document.querySelector(".img-container img");
const songTitle = document.querySelector(".song-title");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");

// data

const songTitles = [
  "Price of freedom",
  "Relaxed Vlog",
  "The Beat of Nature",
  "Ukulele Trip",
];

//default song

let songIndex = 0;

const loadSong = (n) => {
  let songName = songTitles[n];
  audio.src = `Music/${songName}.mp3`;
  albumArt.setAttribute("src", `./images/${songName}.jpg`);
  songTitle.innerText = songName;
};

loadSong(songIndex);

//functions

let playing;

const playBtnHandler = () => {
  if (playing === true) {
    player.classList.remove("play");
    audio.pause();
    playing = false;
    return;
  }
  player.classList.add("play");
  audio.play();
  playing = true;
};

const nextBtnHandler = () => {
  songIndex++;
  if (songIndex > songTitles.length - 1) songIndex = 0;
  loadSong(songIndex);
  audio.play();
  if (!player.classList.contains("play")) {
    player.classList.add("play");
    playing = true;
  }
};

const prevBtnHandler = () => {
  songIndex--;
  if (songIndex < 0) songIndex = songTitles.length - 1;
  loadSong(songIndex);
  audio.play();
  if (!player.classList.contains("play")) {
    player.classList.add("play");
    playing = true;
  }
};

// event listeners

playBtn.addEventListener("click", playBtnHandler);

nextBtn.addEventListener("click", nextBtnHandler);

prevBtn.addEventListener("click", prevBtnHandler);

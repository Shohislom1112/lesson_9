const audio = document.querySelector(".audio");
const playAlarm = document.querySelector(".play-alarm");
const stopAlarm = document.querySelector(".stop-alarm");
const number = document.getElementById("number");
setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString("it-IT");
  console.log(time);
  if (time === "number") {
    audio.play();
  }
}, 1000);

playAlarm.addEventListener("click", () => {
  audio.play();
});

stopAlarm.addEventListener("click", () => {
  audio.pause();
});

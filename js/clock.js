const stopBtn = document.querySelector(".stop");
const clock = document.getElementById("clock");

let stopTimeout = setTimeout(() => {
  console.log("3000");
}, 3000);

stopBtn.addEventListener("click", () => {
  clearTimeout(stopTimeout);
});

let stopInterval = setInterval(() => {
  // console.log(new Date().toLocaleTimeString('it-IT'));
  clock.innerHTML = new Date().toLocaleTimeString("it-IT");
}, 1000);

stopBtn.addEventListener("click", () => {
  clearInterval(stopInterval);
});

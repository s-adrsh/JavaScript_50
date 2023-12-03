const loading = document.querySelector(".loading");
const background = document.querySelector(".container");

let loadText = 0;
let interval = setInterval(blur, 30);

function blur() {
  loadText++;

  loadText > 99 && clearInterval(interval);
  
  loading.innerText = `${loadText}%`;
  loading.style.opacity = scale(loadText, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(loadText, 0, 100, 30, 0)}px)`;
}

// Maping a range of numbers to another range of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

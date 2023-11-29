const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let activeNow = 1;

next.addEventListener("click", () => {
  activeNow++;
  if (activeNow > circles.length) {
    activeNow = circles.length;
  }
  handleProgress();
});

prev.addEventListener("click", () => {
  activeNow--;
  if (activeNow < 1) {
    activeNow = 1;
  }
  handleProgress();
});

function handleProgress() {
  // adding active class to circles
  circles.forEach((circle, index) => {
    index < activeNow
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });

  // showing progress bar
  const currentActive = document.querySelectorAll(".active");
  progress.style.width =
    ((currentActive.length - 1) / (circles.length - 1)) * 100 + "%";

  //enabling and disabling buttons
  activeNow === 1
    ? (prev.disabled = true)
    : activeNow === circles.length
    ? (next.disabled = true)
    : (prev.disabled = false) & (next.disabled = false);
}

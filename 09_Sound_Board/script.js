const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const key = document.createElement("div");
  key.classList.add("key");
  key.textContent = sound;

  key.addEventListener("click", () => {
    stopSound();
    const audio = document.getElementById(sound);
    audio.play();
  });

  document.getElementById("container").appendChild(key);
});

function stopSound() {
  sounds.forEach((sound) => {
    const pauseSongs = document.getElementById(sound);
    pauseSongs.pause();

    pauseSongs.currentTime = 0;
  });
}

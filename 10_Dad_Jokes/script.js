const dadJoke = document.querySelector(".main");
const btn = document.querySelector(".btn");

btn.addEventListener("click", generateDadJoke);

generateDadJoke();

async function generateDadJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  dadJoke.textContent = data.joke;
}

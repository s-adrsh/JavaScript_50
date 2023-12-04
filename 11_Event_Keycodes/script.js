const codes = document.querySelectorAll(".codes");
const main = document.querySelector("#keypress");
const home = document.querySelector("#home");

document.addEventListener("keydown", (event) => {
  home.classList.add("hidden");
  main.classList.remove("hidden");

  codes.forEach((code) => {
    code.id === "div-key"
      ? event.key === " "
        ? (code.textContent = "Space")
        : (code.textContent = event.key)
      : code.id == "div-keycode"
      ? (code.textContent = event.which)
      : (code.textContent = event.code);
  });
});

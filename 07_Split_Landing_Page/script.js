const container = document.querySelector(".container");
const ps = document.querySelector(".ps");
const xbox = document.querySelector(".xbox");

ps.addEventListener("mouseenter", () => container.classList.add("hover-ps"));
ps.addEventListener("mouseleave", () => container.classList.remove("hover-ps"));

xbox.addEventListener("mouseenter", () =>
  container.classList.add("hover-xbox")
);
xbox.addEventListener("mouseleave", () =>
  container.classList.remove("hover-xbox")
);

const cards = document.querySelectorAll(".panel");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeClass();
    card.classList.add("active");
  });
});

function removeClass() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}

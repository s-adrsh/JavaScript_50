const faq = document.querySelectorAll(".faq-toggle");

faq.forEach((element) => {
  element.addEventListener("click", () =>
    element.parentNode.classList.toggle("active")
  );
});

const labels = document.querySelectorAll(".form-controls label");

labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms"> ${letter}</span>`
    )
    .join("");
});

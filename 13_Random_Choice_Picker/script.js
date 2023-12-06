const textarea = document.getElementById("textarea");
const parentDiv = document.querySelector(".suggestions");

textarea.addEventListener("keyup", (e) => {
  createChild(e.target.value);

  if (e.key == "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createChild(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  parentDiv.innerHTML = "";
  tags.forEach((element) => {
    const child = document.createElement("span");
    child.classList.add("child");
    child.innerText = element;
    child.textContent = element;

    parentDiv.appendChild(child);
  });
}

function randomSelect() {
  const times = 30;
  const interval = setTimeout(() => {
    const randomSuggestion = pickRandomSuggestion();
    if (randomSuggestion !== undefined) {
      highlightSuggestion(randomSuggestion);
      setTimeout(() => {
        unHighlightSuggestion(randomSuggestion);
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomSuggestion = pickRandomSuggestion(
        highlightSuggestion(randomSuggestion)
      );
    }, 100);
  }, times * 100);
}

function pickRandomSuggestion() {
  const suggestions = document.querySelectorAll(".child");
  return suggestions[Math.floor(Math.random() * suggestions.length)];
}

function highlightSuggestion(suggestions) {
  suggestions.classList.add("highlight");
}

function unHighlightSuggestion(suggestions) {
  suggestions.classList.remove("highlight");
}


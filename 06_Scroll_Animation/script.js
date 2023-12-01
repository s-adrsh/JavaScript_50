const contents = document.querySelectorAll(".content");

window.addEventListener("scroll", scrollEffect);

scrollEffect();

function scrollEffect() {
  const totalHeight = (window.innerHeight / 5) * 4; // ((win.height)/5) *4 --occupies 4 by 5 of the space

  contents.forEach((content) => {
    const contentHeight = content.getBoundingClientRect().top;
    contentHeight< totalHeight
      ? content.classList.add("show")
      : content.classList.remove("show");
  });
}

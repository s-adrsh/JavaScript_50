const followers = document.querySelectorAll(".followers");

followers.forEach((follower) => {
  follower.textContent = "0";

  const updateFollower = () => {
    const target = +follower.getAttribute("data-target");
    const count = +follower.textContent;
    const increment = target / 200;

    if (count < target) {
      follower.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateFollower, 1);
    } else {
      follower.innerText = target;
    }
  };

  updateFollower();
});

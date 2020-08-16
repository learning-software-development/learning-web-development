const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let siblings = button.parentNode.querySelectorAll("button");
    siblings.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
  });
});

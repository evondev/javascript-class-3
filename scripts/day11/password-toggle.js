const inputPassword = document.querySelector(".password-toggle input");
const buttonTogglePassword = document.querySelector(".password-toggle .icon");
const icons = buttonTogglePassword.querySelectorAll("svg");
buttonTogglePassword?.addEventListener("click", function () {
  const inputType = inputPassword?.getAttribute("type");
  const type = inputType === "text" ? "password" : "text";
  inputPassword?.setAttribute("type", type);
  [...icons]?.forEach((item) => item.classList.toggle("is-active"));
});

const dropdownButton = document.querySelector(".dropdown-button");
const dropdownList = document.querySelector(".dropdown-list");
dropdownButton &&
  dropdownButton.addEventListener("click", handleToggleDropdown);
function handleToggleDropdown() {
  if (!dropdownList) return;
  dropdownList.classList.toggle("is-show");
}

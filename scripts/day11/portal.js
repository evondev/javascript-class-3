const dropdownAction = document.querySelector(".dropdown-table button");
dropdownAction.addEventListener("click", function () {
  const dropdownListHTML = `<div class="dropdown-list-table">
  <div class="dropdown-item">title</div>
  <div class="dropdown-item">title</div>
  <div class="dropdown-item">title</div>
</div>`;
  document.body.insertAdjacentHTML("beforeend", dropdownListHTML);
  const dropdownList = document.querySelector(".dropdown-list-table");
  if (!dropdownList) return;
  const dropdownListWidth = window
    .getComputedStyle(dropdownList)
    .getPropertyValue("width");
  const { top, left } = this.getBoundingClientRect();
  dropdownList.setAttribute(
    "style",
    `top: ${top + 10 + window.scrollY}px; left: ${
      left - window.scrollX - dropdownListWidth.replace("px", "")
    }px;`
  );
  dropdownList.classList.toggle("is-show");
});

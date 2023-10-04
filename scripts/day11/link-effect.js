const menuItems = document.querySelectorAll(".menu-item");
const menuLine = document.querySelector(".menu-line");
const menu = document.querySelector(".menu");
menuItems.forEach((item) =>
  item.addEventListener("mouseover", handleMenuItemEffect)
);
menu?.addEventListener("mouseleave", function () {
  document.querySelector(".menu-line").style.width = "0px";
});
function handleMenuItemEffect(event) {
  const { width, top, left, height } = this.getBoundingClientRect();
  menuLine?.setAttribute(
    "style",
    `width: ${width}px; top: ${
      top + height + 5 + window.scrollY
    }px;left: ${left}px`
  );
}

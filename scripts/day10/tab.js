const tabItems = document.querySelectorAll(".tab-item"); // NodeList[]
const tabContents = document.querySelectorAll(".tab-content"); // NodeList[]
const activeClass = "is-active";
// console.log("file: tab.js:2 ~ tabItems:", tabItems[0]);
// console.log("file: tab.js:2 ~ tabContents:", tabContents[0]);
tabItems &&
  tabItems.forEach((item) => {
    // add event for item
    item.addEventListener("click", handleActiveTab);
  });
// for (let index = 0; index < tabItems.length; index++) {
//   const element = tabItems[index];
//   element.addEventListener("click", handleActiveTab);
// }
function handleActiveTab(event) {
  // if already active then return;
  if (this.classList.contains(activeClass)) return;
  // remove all active class from tab-item
  // tabItems &&
  //   tabItems.forEach((item) => {
  //     // remove all active class of item
  //     item.classList.remove(activeClass);
  //   });
  removeItemsClass(tabItems, activeClass);
  // add active for tab click
  this.classList.add(activeClass);
  const index = this.dataset.index * 1;
  if (index >= tabContents.length || index < 0) return;
  const tabContentItem = tabContents[index - 1];
  // tabContents &&
  //   tabContents.forEach((item) => {
  //     item.classList.remove(activeClass);
  //   });
  removeItemsClass(tabContents, activeClass);
  tabContentItem.classList.add(activeClass);
}
function removeItemsClass(items = [], className = "") {
  if (!items || items.length <= 0) return;
  items.forEach((item) => {
    item.classList.remove(className);
  });
}

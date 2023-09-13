// # Selectors: .header, #header, .list, p, div, h2, a[href^="https"]
{
  // 1. querySelector -> single element
  const body = document.querySelector("body");
  const inputWrapper = document.querySelector(".input-wrapper");
  const input = inputWrapper.querySelector("input");
  const root = document.documentElement;
  // 2. querySelectorAll -> multiple elements
  const dropItems1 = document.querySelectorAll(".dropdown-item");
  // 3. document.getElementsByClassName(className) -> multiple elements
  const dropItems2 = document.getElementsByClassName("dropdown-item");
  // 4. document.getElementById -> single element
  const dropdown1 = document.getElementById("dropdown");
  const dropdown2 = document.querySelector("#dropdown");
  // 5. document.getElementsByTagName("div") -> multiple elements
  const divItems1 = document.getElementsByTagName("div");
  const divItems2 = document.querySelectorAll("div");
}
// # Attributes: class, id, href, src, role, ...
{
  // 1. element.getAttribute("attribute") -> value of attribute
  const link = document.querySelector("a");
  const linkHref = link.getAttribute("href");
  // 2. element.setAttribute("attribute", "value") -> change value of attribute
  link.setAttribute("class", "is-active");
  // 3. element.removeAttribute("attribute") -> remove attribute from element
  link.removeAttribute("role");
  // 4. element.hasAttribute("attribute") -> boolean: true, false
  console.log(link.hasAttribute("href")); // true
}
// # Class attribute
{
  const dropdown = document.querySelector(".dropdown");
  if (dropdown) {
    dropdown.classList.add("is-show", "is-hide");
    dropdown.classList.remove("is-hide");
    console.log(dropdown.classList.contains("is-hide"));
    dropdown.className = `${dropdown.className} is-show`;
  }
}
// # Content
{
  const dropdown = document.querySelector(".dropdown");
  if (dropdown) {
    // dropdown.textContent = "hello";
    // console.log(dropdown.innerHTML);
    // dropdown.innerHTML = `<div>inside of div</div>`;
  }
}
// # CRUD element
{
  const link = document.querySelector("a");
  // 1. create button element
  const button = document.createElement("button");
  // 2. add class 'button'
  button.classList.add("button");
  // 3. add text 'Shopping now'
  // button.textContent = "Shopping now";
  button.textContent = `<span>Shopping now</span>
  <span>Icon</span>`;
  // 4. display into body tag
  link.appendChild(button);
  // console.log("file: dom.js:65 ~ link:", link);
  const linkClone = link.cloneNode(true);
  // console.log("file: dom.js:66 ~ linkClone:", linkClone);
  const dropdownList = document.querySelector(".dropdown-list");
  console.log("file: dom.js:70 ~ dropdownList:", dropdownList);
  console.log(link && link.hasChildNodes()); // contains text -> true
  // dropdownList.remove();
}
// # Insert
{
  // 1. element.insertAdjacentText("position", "text only");
  const emptySpan = document.querySelector("span.empty");
  emptySpan.insertAdjacentText("afterend", "My name is ");
  // 2. element.insertAdjacentElement(position, element)
  const time = document.createElement("time");
  time.textContent = "21h41s";
  emptySpan.insertAdjacentElement("afterbegin", time);
  // 3. element.insertAdjacentHTML(position, `html structure`)
  const tabWrapper = document.querySelector(".tab-wrapper");
  if (tabWrapper) {
    const structure = `<div class="tab">
    <div class="tab-header">
      <div class="tab-item">title</div>
      <div class="tab-item">title</div>
      <div class="tab-item">title</div>
    </div>
    <div class="tab-content">content</div>
  </div>`;
    tabWrapper.insertAdjacentHTML("afterbegin", structure);
  }
}
// # Traversing
{
  // 1. element.parentNode - element.parentElement
  const firstDropItem = document.querySelector(".dropdown-item");
  console.log(
    "file: dom.js:98 ~ firstDropItem:",
    firstDropItem.parentNode.parentNode
  );
  // 2. element.nextElementSibling, nextSibling, previousSibling, previousElementSibling
  const nextItem = firstDropItem.nextElementSibling;
  const nextItem2 = firstDropItem.nextSibling;
  console.log("file: dom.js:105 ~ nextItem2:", nextItem2);
  const prevItem = firstDropItem.previousElementSibling; // ignore text node
  const prevItem2 = firstDropItem.previousSibling; // get also text node
  console.log("file: dom.js:104 ~ nextItem:", prevItem2);
  // 3. element.firstElementChild
  const dropdown = document.querySelector(".dropdown");
  console.log(dropdown.firstElementChild); // dropdown-select
  console.log(dropdown.firstchild); // text: "\n"
  console.log(dropdown.lastElementChild); // dropdown-list
  console.log(dropdown.lastChild); // text: "\n"
  // 4. children
  console.log(dropdown.children); // HTMLCollections
  console.log(dropdown.childNodes); // All nodes includes text node
}

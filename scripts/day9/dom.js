// # Offset
{
  const boxed = document.querySelector(".boxed");
  console.log("file: dom.js:123 ~ boxed.offsetHeight:", boxed.offsetHeight);
  console.log("file: dom.js:123 ~ boxed.offsetWidth:", boxed.offsetWidth);
  console.log("file: dom.js:123 ~ boxed.offsetTop:", boxed.offsetTop);
  console.log("file: dom.js:123 ~ boxed.offsetLeft:", boxed.offsetLeft);
}
// # Client
{
  const boxed = document.querySelector(".boxed");
  console.log("file: dom.js:123 ~ boxed.clientHeight:", boxed.clientHeight);
  console.log("file: dom.js:123 ~ boxed.clientWidth:", boxed.clientWidth);
  console.log("file: dom.js:123 ~ boxed.clientTop:", boxed.clientTop);
  console.log("file: dom.js:123 ~ boxed.clientLeft:", boxed.clientLeft);
}
// # Window
{
  console.log("file: dom.js:20 ~ window.scrollX:", window.scrollX);
  console.log("file: dom.js:20 ~ window.scrollY:", window.scrollY);
  console.log("file: dom.js:20 ~ window.innerWidth:", window.innerWidth);
}
// # getBoundingClientRect
{
  const boxed = document.querySelector(".boxed");
  console.log(
    "file: dom.js:26 ~ boxed bounding:",
    boxed.getBoundingClientRect()
  );
}

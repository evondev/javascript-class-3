// # progressbar scroll
{
  const bodyHeight = document.body.scrollHeight;
  const progressbar = document.querySelector(".progress-bar");
  function handleProgressBar() {
    const scrollTop = window.scrollY;
    const height = bodyHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / height) * 100;
    progressbar &&
      progressbar.setAttribute("style", `width: ${Math.floor(scrolled)}%`);
  }
  window.addEventListener("scroll", handleProgressBar);
}

let count = document.querySelector(".count p");
let span = document.querySelector("span");
window.onload = function () {
  let cou = setInterval(() => {
    count.innerHTML++;
    span.style.width = `${count.innerHTML}%`;
    if (count.innerHTML >= 100) {
      clearInterval(cou);
    }
  }, 100);
};

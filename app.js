let span = document.getElementsByTagName("span")[0];
let count = 0;

let button = document.querySelectorAll(".btn");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let current = e.currentTarget.classList;
    if (current.contains("inc")) {
      count++;
    } else if (current.contains("dec")) {
      count--;
    } else {
      count = 0;
    }

    count < 0
      ? (span.style.color = "red")
      : count > 0
      ? (span.style.color = "orange")
      : (span.style.color = "blue");

    span.textContent = count;
  });
});

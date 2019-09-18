const buttons = document.querySelectorAll("button");
const data = ["let", "const", "var"];
let count = 0;
createUi();
buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    count = i;
    createUi();
  });
});
function createUi() {
  document.querySelector("div").innerText = data[count];
}

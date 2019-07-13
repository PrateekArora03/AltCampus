var body = document.querySelector("body");
console.log(body);
body.addEventListener("keyup", onBody);
var oneCLick = 0;
var title = document.querySelector("title");
var main = document.querySelector("main");
var msg = document.querySelector(".msg");
const p1 = document.querySelector(".box1 p");
const p2 = document.querySelector(".box2 p");
const p3 = document.querySelector(".box3 p");
var head, box;
function onBody(e) {
  if (oneCLick < 1) {
    msg.remove();
    oneCLick++;
    head = main.appendChild(document.createElement("div"));
    head.classList.add("head");
    head.innerText = e.keyCode;
    title.innerText = `${e.keyCode} | KEYCODE`;
    main.style.height = "50vh";
  }
  title.innerText = `${e.keyCode} | KEYCODE`;
  head.innerText = e.keyCode;
  p2.innerText = e.which;
  p1.innerText = e.key;
  p3.innerText = e.code;
  document.querySelector(".box").style.display = "grid";
}

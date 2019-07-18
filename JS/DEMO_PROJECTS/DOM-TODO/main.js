var ins = document.querySelector(".ins");
var ul = document.querySelector("ul");
var li, div, check, label, remove;
ins.addEventListener("keyup", createEle);
function createEle(e) {
  if (e.code == "Enter") {
    li = document.createElement("li");
    div = document.createElement("div");
    check = document.createElement("input");
    label = document.createElement("label");
    remove = document.createElement("button");
    remove.innerText = "✖️";
    remove.className = "remove";
    remove.addEventListener("click", deleteListItem);
    label.innerText = ins.value;
    check.type = "checkbox";
    div.appendChild(check);
    div.appendChild(label);
    div.appendChild(remove);
    li.appendChild(div);
    ul.appendChild(li);
  }
}
function deleteListItem(e) {
  console.log(e);
  console.log(e.path[1]);
  e.target.parentElement.parentElement.style.display = "none";
}

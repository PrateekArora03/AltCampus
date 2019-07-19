var ul = document.querySelector("ul");
var input = document.querySelector(".ins");
var act = document.querySelector(".active");
var com = document.querySelector(".complete");
var all = document.querySelector(".all");

var todoAll = [];
function addTodo(evt) {
  if (evt.code == "Enter") {
    const todoData = {
      text: input.value,
      isDone: false
    };
    input.value = "";
    todoAll.push(todoData);
    createUI(todoAll);
  }
}

function deleteTodo(evt) {
  todoAll.splice(evt.target.dataset.id, 1);
  createUI(todoAll);
}

function checked(evt) {
  const id = evt.target.dataset.id;
  todoAll[id].isDone = !todoAll[id].isDone;
  createUI(todoAll);
}

function showAll() {
  createUI(todoAll);
}
function isCompleted() {
  const done = todoAll.filter(i => i.isDone);
  createUI(done);
}
function isActive() {
  const active = todoAll.filter(i => !i.isDone);
  createUI(active);
}

function edit(evt) {
  evt.target.innerHTML = "<input class='change'/>";
}

function createUI(data = {}) {
  ul.innerHTML = "";
  data.forEach((SingleTodo, i) => {
    const li = document.createElement("li");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.setAttribute("data-id", i);
    check.checked = SingleTodo.isDone;
    check.addEventListener("click", checked);
    const p = document.createElement("p");
    p.innerText = SingleTodo.text;
    p.addEventListener("dblclick", edit);
    const remove = document.createElement("span");
    remove.innerText = "X";
    remove.setAttribute("data-id", i);
    remove.addEventListener("click", deleteTodo);

    li.appendChild(check);
    li.appendChild(p);
    li.appendChild(remove);
    ul.appendChild(li);
  });
}

input.addEventListener("keyup", addTodo);
act.addEventListener("click", isActive);
com.addEventListener("click", isCompleted);
all.addEventListener("click", showAll);

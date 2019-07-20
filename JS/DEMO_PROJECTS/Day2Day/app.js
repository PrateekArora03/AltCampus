var quote = document.querySelector("#quote");
var body = document.querySelector("body");
var search = document.querySelector("#search");
var weather = document.querySelector("#weather");
var time = document.querySelector(".time");
var focusText = document.querySelector("#focus-text");
var focusShow = document.querySelector("#focusShow");
if (localStorage.length > 0) {
  focusShow.innerText = localStorage.text;
  console.log("heelo");
  focusText.style.display = "none";
}
var footer = document.querySelector("footer");
var author = document.querySelector("#author");
var inputtt = localStorage.getItem("text");
function doSomething() {
  fetch("https://api.quotable.io/random")
    .then(res => {
      return res.json();
    })
    .then(data => {
      quote.innerText = data.content;
      author.innerText = data.author;
      console.log(data);
      //   //body.style.backgroundImage = `url(${data.contents.quotes[0].background})`;
      //   body.style.backgroundSize = `cover`;
    });
}

doSomething();

function initGeolocation() {
  if (navigator.geolocation) {
    // Call getCurrentPosition with success and failure callbacks
    navigator.geolocation.getCurrentPosition(success);
  }
}

function success(position) {
  const lon = position.coords.longitude;
  const lat = position.coords.latitude;
  const proxy = "https://cors-anywhere.herokuapp.com/";
  fetch(
    `${proxy}https://api.darksky.net/forecast/2ee6676e41b1d4b1aa5a47451c73c786/${lat},${lon}`
  )
    .then(resa => {
      return resa.json();
    })
    .then(map => {
      weather.innerHTML =
        '<i class="fas fa-cloud"></i>' +
        " " +
        Math.round(((map.currently.temperature - 32) * 5) / 9);
    });
}

setInterval(initGeolocation(), 1000 * 120);

function onSearch(evt) {
  if (evt.code == "Enter") {
    const link = `https://www.google.com/search?q=${evt.target.value}`;
    evt.target.value = "";
    window.location.href = link;
  }
}
setInterval(() => {
  const tim = new Date();
  time.innerText = `${tim.getHours()} : ${tim.getMinutes()}`;
}, 1000);

function onFocusText(evt) {
  if (evt.code == "Enter") {
    localStorage.setItem("text", evt.target.value);
    focusShow.innerText = evt.target.value;
    focusText.style.display = "none";
  }
}
function onChangeFocus(evt) {
  focusText.style.display = "inline-block";
  focusShow.innerText = "";
}
function mouses(evt) {
  author.style.display = "block";
}
footer.addEventListener("mouseleave", e => {
  author.style.display = "none";
});

// () => {
//   localStorage.getItem(JSON.parse("text"));
// };

focusText.addEventListener("keyup", onFocusText);
search.addEventListener("keyup", onSearch);
focusShow.addEventListener("dblclick", onChangeFocus);
footer.addEventListener("mousemove", mouses);

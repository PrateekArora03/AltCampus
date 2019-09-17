import React from "react";
import ReactDOM from "react-dom";

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }
// const getGreeting = user => {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   } else return <h1>Hello, Stranger.</h1>;
// };
// const user = {
//   firstName: "Prateek",
//   lastName: "Arora"
// };

// const element = getGreeting(user);

function tick() {
  const element = (
    <div>
      <h1>Hello, World</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}
setInterval(tick, 1000);

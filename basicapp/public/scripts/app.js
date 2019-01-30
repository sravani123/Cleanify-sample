"use strict";

console.log("App.js is running");

// JSX - javascript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Added Paranthesis this changed"
  ),
  React.createElement(
    "p",
    null,
    "This is sibling tag"
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

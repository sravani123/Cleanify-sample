console.log("App.js is running");

// JSX - javascript XML
var template =(<div>
 <h1>Added Paranthesis this changed</h1>
 <p>This is sibling tag</p>
</div>);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
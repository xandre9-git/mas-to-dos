// DOM elements

// main container for the app
const body = document.getElementById("content");

// top bar
const topBar = document.createElement("div");
topBar.id = "top-bar";

const topBarTitle = document.createElement("h1");
topBarTitle.textContent = "Mas To Do's";

topBar.appendChild(topBarTitle);
body.appendChild(topBar);


export { body };

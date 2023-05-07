// DOM elements

// main container for the app
const body = document.getElementById("content");

// top bar
const topBar = document.createElement("div");
topBar.id = "top-bar";

// top bar title
const topBarTitle = document.createElement("h1");
topBarTitle.textContent = "Mas To Do's";
topBarTitle.id = "title-bar"
topBar.appendChild(topBarTitle);

// left side bar
const leftSideBar = document.createElement("div");
leftSideBar.id = "left-side-bar";

// to do board
const todoBoardsContainer = document.createElement("div");
todoBoardsContainer.id = "to-dos-container";

// dom appends
body.appendChild(topBar);
body.appendChild(leftSideBar);
body.appendChild(todoBoardsContainer);


export { body };

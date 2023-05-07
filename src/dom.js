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

// project section (goes in left side bar)
const projectsContainer = document.createElement("div");
projectsContainer.id = "projects-container";
leftSideBar.appendChild(projectsContainer);

// projects list
const projectsList = document.createElement("ul");
projectsList.id = "projects-ul";
projectsContainer.appendChild(projectsList);

// my tasks (default project)
const myTasks = document.createElement("li");
myTasks.className = "add-projects";
myTasks.textContent = "My Tasks";
projectsList.appendChild(myTasks);

// add project button
const addProjectButton = document.createElement("li");
addProjectButton.className = "add-projects";
addProjectButton.textContent = "+ Add Project";
projectsList.appendChild(addProjectButton);


// dom appends
body.appendChild(topBar);
body.appendChild(leftSideBar);
body.appendChild(todoBoardsContainer);




export { body };
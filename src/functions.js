// --- APP FUNCTIONS ---
import { projectsAndTasks } from "./data";

// creates projects in database
function projectCreator() {
  // prompt user for project name
  const projectName = prompt("Enter project name:");
  // take project name and check if project name is empty string or an existing project
  // .some() is used on array to search if projectName already exists
  console.log(projectsAndTasks);
  if (
    projectName != null &&
    !projectsAndTasks.some((e) => e.projectName === projectName)
  ) {
    console.log("Criteria met.");
    // now create a new object in the database with the new project name
    projectsAndTasks.push({
      projectName: projectName,
      currentTasks: [],
      completedTasks: [],
    });
    console.log(projectsAndTasks);
  } else {
    console.log("Criteria not met.");
    return;
  }
}

// variable to select specific project
let prevProject = null;

// function to switch which project is active
const projectClicked = (e) => {
  // check to see if element clicked is a <li> (list item)
  if (e.target.nodeName === 'LI'){
    // add .active class to element clicked
    e.target.classList.add("active");
    // check to see if there is a previous project that was active
    if (prevProject !== null) {
      // removes active class from the element
      prevProject.classList.remove("active");
    }
    // set prevProject as the clicked HTMLIElement
    prevProject = e.target;
  }  
}

// displays projects onto the DOM
function displayProjects(database, parentNode) {
  for (let i = 0; i < database.length; i++) {
    const addProject = document.createElement("li");
    addProject.className = "added-projects";
    addProject.textContent = database[i].projectName;
    if (database[i].projectName === "My Tasks"){
      addProject.classList.add("active");
      prevProject = addProject;
    }
    parentNode.appendChild(addProject);
  }
}

// creates tasks
function taskCreator(task, database){
  // find out which database task is to be created in based on project selected, if no project name is clicked, set to 'My Tasks' as default

  let newTask = {
    id: newId,
    title: title,
    projectName: database[projectIndex].projectName,
    dateDue: new Date(),
    timeDue: "",
    priority: "None",
    desc: "",
  };
}

function displayTasks(database) {

  for (let i = 0; i < database.length; i++) {
    const taskContainer = document.createElement("div");
    taskContainer.className = "task-list-item-container";
  
    const listItem = document.createElement("li");
    listItem.className = "task-list-item";
    listItem.textContent = database[i].currentTasks;
    taskContainer.appendChild(listItem);
  
    const editBtn = document.createElement("div");
    editBtn.className = "task-edit-btn";
    taskContainer.appendChild(editBtn);
  
    const completeBtn = document.createElement("div");
    completeBtn.className = "task-complete-btn";
    taskContainer.appendChild(completeBtn);
  }
  
}

export { projectCreator };
export { displayProjects };
export { projectClicked };

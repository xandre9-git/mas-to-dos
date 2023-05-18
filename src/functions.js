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
function displayProjects(arr, parentNode) {
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    // create list item for project
    const addProject = document.createElement("li");
    // give it class used for added projects
    addProject.className = "added-projects";
    // set the text content to the project name found in this iteration
    addProject.textContent = arr[i].projectName;
    // create conditional to check if default task is matched
    if (arr[i].projectName === "My Tasks"){
      // set default project to active 
      addProject.classList.add("active");
      // set variable that monitors active projects to default project
      prevProject = addProject;
    }
    // append newly added project to specified node
    parentNode.appendChild(addProject);
  }
}

// creates tasks
function taskCreator(task){
  // create variable to search database array for project that is currently active
  const projectExists = projectsAndTasks.some((e) => e.projectName === prevProject.textContent);
  // find index of project found in database
  const projectIndex = projectsAndTasks.findIndex((e) => e.projectName === prevProject.textContent);
  // create newTask object to later push to projectsAndTasks array
  let newTask = {
    // id: newId,
    task: task,
    dateCreated: new Date(),
    timeDue: "",
    priority: "None",
    desc: "",
  };
  // push newly created task to correct index of projectsAndTasks in the currentTasks property
  projectsAndTasks[projectIndex].currentTasks.push(newTask);
  // save to localStorage to keep data after page reloads
  return localStorage.setItem("projectsAndTasks", JSON.stringify(projectsAndTasks));
}

function displayTasks(arr, parentNode) {

  for (let i = 0; i < arr.length; i++) {
    console.log(arr.length);
    console.log(arr);
    const taskContainer = document.createElement("div");
    taskContainer.className = "task-list-item-container";
  
    const listItem = document.createElement("li");
    listItem.className = "task-list-item";
    listItem.textContent = arr[i].currentTasks;
    taskContainer.appendChild(listItem);
  
    const editBtn = document.createElement("div");
    editBtn.className = "task-edit-btn";
    taskContainer.appendChild(editBtn);
  
    const completeBtn = document.createElement("div");
    completeBtn.className = "task-complete-btn";
    taskContainer.appendChild(completeBtn);

    parentNode.appendChild(taskContainer);
  }
  
}

// exports
export { projectCreator };
export { displayProjects };
export { displayTasks };
export { projectClicked };
export { taskCreator };

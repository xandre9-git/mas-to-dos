// --- APP FUNCTIONS ---
import { projectsAndTasks } from "./data";
import { currentTaskList } from "./dom";

// creates projects in database
function projectCreator() {
  // prompt user for project name
  const projectName = prompt("Enter project name:");
  // take project name and check if project name is empty string or an existing project
  // .some() is used on array to search if projectName already exists
  console.log(`projectsAndTasks: ${projectsAndTasks}`);
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
    localStorage.setItem(
      "projectsAndTasks",
      JSON.stringify(projectsAndTasks)
    );
  } else {
    console.log("Criteria not met.");
    return;
  }

  location.reload();

}

// variable to select specific project
let prevProject = null;

// function to switch which project is active
const projectClicked = (e) => {
  // check to see if element clicked is a <li> (list item)
  if (e.target.nodeName === "LI") {
    // add .active class to element clicked
    e.target.classList.add("active-project");
    // check to see if there is a previous project that was active
    if (prevProject !== null) {
      // removes active class from the element
      prevProject.classList.remove("active-project");
    }
    // set prevProject as the clicked HTMLIElement
    prevProject = e.target;
  }
};

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
    if (arr[i].projectName === "My Tasks") {
      // set default project to active
      addProject.classList.add("active-project");
      // set variable that monitors active projects to default project
      prevProject = addProject;
    }
    // add event listener to include tasks for the project
    addProject.addEventListener("click", function (e) {
      console.log(e.target.textContent);
      let project = e.target.textContent;
      // currentTaskList.innerHTML = "";
      displayTasks(project, projectsAndTasks, currentTaskList);
    });
    // append newly added project to specified node
    parentNode.appendChild(addProject);
  }
}

// creates tasks
function taskCreator(task) {
  // create variable to search database array for project that is currently active
  const projectExists = projectsAndTasks.some(
    (e) => e.projectName === prevProject.textContent
  );
  // find index of project found in database
  const projectIndex = projectsAndTasks.findIndex(
    (e) => e.projectName === prevProject.textContent
  );
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
  // reload the document
  location.reload();
  // save to localStorage to keep data after page reloads
  return localStorage.setItem(
    "projectsAndTasks",
    JSON.stringify(projectsAndTasks)
  );
}

// variable to select specific project
let prevTask = null;

const taskClicked = (e) => {
  // check to see if element clicked is a <li> (list item)
  if (e.target.nodeName === "LI") {
    // add .active class to element clicked
    e.target.classList.add("active-task");
    // check to see if there is a previous project that was active
    if (prevTask !== null) {
      // removes active class from the element
      prevTask.classList.remove("active-task");
    }
    // set prevTask as the clicked HTMLIElement
    prevTask = e.target;
  }
};

function displayTasks(project, arr, parentNode) {
  // first find the project name in the array
  const projectIndex = projectsAndTasks.findIndex(
    (e) => e.projectName === project
  );

  const tasks = [];

  Object.values(arr[projectIndex].currentTasks).forEach((e) =>
    tasks.push(e.task)
  );

  console.log(tasks);
  parentNode.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const taskContainer = document.createElement("div");
    taskContainer.className = "task-list-item-container";


    const actionBtnContainer = document.createElement("div");
    actionBtnContainer.className = "task-action-btn-container";

    const listItem = document.createElement("li");
    listItem.className = "task-list-item";
    listItem.textContent = tasks[i];
    taskContainer.appendChild(listItem);

    const completeBtn = document.createElement("input");
    completeBtn.className = "task-complete-btn";
    completeBtn.type = "checkbox";
    completeBtn.title = "Complete Task";
    actionBtnContainer.appendChild(completeBtn);

    // const editBtn = document.createElement("div");
    // editBtn.className = "task-edit-btn";
    // editBtn.title = "Edit Task Details";
    // actionBtnContainer.appendChild(editBtn);
    // taskContainer.addEventListener("mouseover", function(){
    //   editBtn.classList.add("task-edit-btn-hover");
    // })
    // taskContainer.addEventListener("mouseout", function(){
    //   editBtn.classList.remove("task-edit-btn-hover");
    // })


    // const deleteBtn = document.createElement("div");
    // deleteBtn.className = "task-delete-btn";
    // deleteBtn.title = "Delete Task";
    // actionBtnContainer.appendChild(deleteBtn);
    // taskContainer.addEventListener("mouseover", function(){
    //   deleteBtn.classList.add("task-delete-btn-hover");
    // })
    // taskContainer.addEventListener("mouseout", function(){
    //   deleteBtn.classList.remove("task-delete-btn-hover");
    // })

    taskContainer.appendChild(actionBtnContainer);

    parentNode.appendChild(taskContainer);
  }
}

// exports
export { projectCreator };
export { displayProjects };
export { displayTasks };
export { projectClicked };
export { taskCreator };
export { taskClicked };

// --- APP FUNCTIONS ---
import { projectsAndTasks } from "./data";

function projectCreator() {
  // prompt user for project name
  const projectName = prompt("Enter project name:");
  // take project name and check if project name is empty string or an existing project
  // .some() is used on array to search if projectName already exists
  console.log(projectsAndTasks);
  if (
    projectName != "" &&
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

function displayProjects(database, parent) {
  for (let i = 0; i < database.length; i++) {
    const addProject = document.createElement("li");
    addProject.className = "add-projects";
    addProject.textContent = database[i].projectName;
    parent.appendChild(addProject);
  }
}

function taskCreator(task, database) {
  // add tasks to selected project
  database.push(task);

  const taskContainer = document.createElement("div");
  taskContainer.className = "task-list-item-container";

  const listItem = document.createElement("li");
  listItem.className = "task-list-item";
  listItem.textContent = task;
  taskContainer.appendChild(listItem);

  const editBtn = document.createElement("div");
  editBtn.className = "task-edit-btn";
  taskContainer.appendChild(editBtn);

  const completeBtn = document.createElement("div");
  completeBtn.className = "task-complete-btn";
  taskContainer.appendChild(completeBtn);
}

export { projectCreator };
export { displayProjects }

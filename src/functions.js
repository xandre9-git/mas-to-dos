// --- APP FUNCTIONS ---
import { projectsAndTasks } from "./data";

function projectCreator(){
  // prompt user for project name
  const projectName = prompt("Enter project name:");
  // take project name and check if project name is empty string or an existing project
  // .some() is used on array to search if projectName already exists
  console.log(projectsAndTasks);
  if (projectName != "" && !projectsAndTasks.some(e => e.projectName === projectName)) {
    console.log("Criteria met.");
    // now create a new object in the database with the new project name
    projectsAndTasks.push({"projectName": projectName, currentTasks: [], completedTasks: []})
    console.log(projectsAndTasks);
  } else {
    console.log("Criteria not met.");
    return;
  }

}

export { projectCreator }
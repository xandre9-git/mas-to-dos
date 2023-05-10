// --- APP FUNCTIONS ---
import { projectsAndTasks } from "./data";

function projectCreator(){
  // prompt user for project name
  const projectName = prompt("Enter project name:");
  // take project name and create new entry, if project name is empty string or an existing project, cancel creation
  if (projectName != "" && projectsAndTasks.includes(projectName)) {
    console.log("Criteria met.");
  } else {
    console.log("Criteria not met.");
  }

}

export { projectCreator }
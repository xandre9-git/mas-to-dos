// --- APP DATA ---

// PROJECTs AND TASKS STORAGE
const localStorage =  window.localStorage.getItem("projectsAndTasks");
const projectsAndTasks = (localStorage != null) ? JSON.parse(localStorage) : [
  { projectName: "My Tasks", currentTasks: [], completedTasks: [] }, { projectName: "Odin", currentTasks: [], completedTasks: [] }
];

// exports
export { projectsAndTasks };

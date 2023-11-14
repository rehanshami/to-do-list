import { updateProjectDOM } from "./dom";
const projectTitle = document.getElementById('title');
const projectCategory = document.getElementById('category');
const projectAdd = document.getElementById('add');

// create a function that will make project



export const projects = [];

export default class Project {
    constructor(title, category) {
        this.title = title;
        this.category = category;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task)
    }

    deleteTask(task) {
        const taskIndex = this.tasks.indexOf(task);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
        }
    }

    deleteProject(project) {
        const projectIndex = this.projects.indexOf(project);
        if (projectIndex !== -1) {
            this.projects.splice(project, 1)
        }
    }

    pushProject(project) {
        this.projects.push(project)
    }

}


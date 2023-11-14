import { titleValue } from "./project";
import Project from "./project";
import { projects } from "./project";

function toggleMenu() {
    const toggleMenu = document.querySelector('.toggle-menu');
    const nav = document.querySelector('.side-bar');
    toggleMenu.addEventListener('click', () => {
        toggleMenu.classList.toggle('active');
        nav.classList.toggle('show-side-bar');
    })
}

function responsiveMenu() {
    const main = document.querySelector('.main');
    if (window.innerWidth <= 1000) {
        main.classList.remove('contract-main');
    }
    else {
        main.classList.add('contract-main');
    }
}

function toggleProjectFormListener() {
    const toggleProjectsForm = document.querySelector('.projects-icon');
    toggleProjectsForm.addEventListener('click', () => {
        toggleProjectForm();
    })

}

function toggleProjectForm() {
    const projectForm = document.querySelector('.project-form');
    projectForm.classList.toggle('show-project-form');
}

function updateProjectDOM(titleValue) {
    const projectTitle = document.querySelector('.project-title');
    projectTitle.textContent = titleValue;

}

function cancelProjectListener() {
    const cancelProjectBtn = document.querySelector('#cancel');
    cancelProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleProjectForm();
    })

}

function addProjectListener() {
    const addProjectBtn = document.querySelector('#add');
    const titleInput = document.querySelector('#title')
    addProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectName = document.querySelector('#title').value;

        // create a new project
        const project = new Project(projectName, 'Gym')
        // push project to project array
        projects.push(project);
        // update DOM
        titleInput.value = "";
        toggleProjectForm();
        updateProjectDom(projectName);
        selectProjectListener();
        console.log(projects);
        

    })
}

function selectProjectListener() {
    const projectListItems = document.querySelectorAll('.project-list li');
    const projectHeading = document.querySelector('.project-title');
    projectListItems.forEach(item => {
        item.addEventListener('click', (e)=> {
            projectListItems.forEach(i => {
                i.classList.remove('selected');
            })
            item.classList.add('selected');
            const selectedItemName = e.target.textContent;
            projectHeading.textContent = "";
            projectHeading.textContent = selectedItemName;
            
        })

    })

}

function createIcon(classes) {
    const icon = document.createElement('i');
    classes.forEach(cls => icon.classList.add(cls));
    return icon;
}

function updateProjectDom(projectName) {
    const projectHeading = document.querySelector('.project-title');
    
    projectHeading.textContent = "";
    projectHeading.textContent = projectName;

    const projectList = document.querySelector('.project-list');

    const projectListItems = document.querySelectorAll('.project-list li');

    projectListItems.forEach(item => {
        item.classList.remove('selected');
    })

    const listItem = document.createElement('li');
    listItem.textContent = projectName;
    listItem.classList.add('selected');
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icons');

    const updateIcon = createIcon(['fa-solid', 'fa-pen-to-square']);
    const deleteIcon = createIcon(['fa-solid', 'fa-trash-can']);

    iconContainer.appendChild(updateIcon);
    iconContainer.appendChild(deleteIcon);
    
    listItem.appendChild(iconContainer);
    
    projectList.appendChild(listItem);
    
}

export {toggleMenu, toggleProjectFormListener, updateProjectDom, addProjectListener, cancelProjectListener, responsiveMenu, selectProjectListener};
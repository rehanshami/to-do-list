function toggleMenu() {
    const toggleMenu = document.querySelector('.toggle-menu');
    const nav = document.querySelector('.side-bar');
    toggleMenu.addEventListener('click', () => {
        toggleMenu.classList.toggle('active');
        nav.classList.toggle('show-side-bar');

    })

}

function toggleProjectForm() {
    const toggleProjectsForm = document.querySelector('.projects-icon');
    toggleProjectForm.addEventListener('click', () => {
        
    })
}


export default toggleMenu;
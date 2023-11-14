let tasks = [];

class Task {
    constructor(title, description, dueDate, priority, notes, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }

    deleteTask(tasksArray, taskToDelete) {
        const index = tasksArray.indexOf(taskToDelete);
        if (index !== -1) {
            tasksArray.splice(taskToDelete, 1);
        }
    }

    pushTask(tasksArray, taskToPush){
        tasksArray.push(taskToPush);
    }
}




export default Task;
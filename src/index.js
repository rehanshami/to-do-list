import 'normalize.css';
import './style.css';
import { toggleProjectForm, toggleMenu, toggleProjectFormListener} from './dom';
import Task from './todo';
import { updateProjectDOM } from './dom';
import { addProjectListener, cancelProjectListener, responsiveMenu, selectProjectListener } from './dom';

window.addEventListener('resize', responsiveMenu);


window.Task = Task;

toggleMenu();



toggleProjectFormListener();

addProjectListener();
selectProjectListener();
cancelProjectListener();

console.log('hello world');

const task1 = new Task(
    'hello world',
    'first task',
    '21/09/23',
    'High'
)

console.log(task1)

function test(a) {
    console.log(a);
}

test('test');
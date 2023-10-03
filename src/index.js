import 'normalize.css';
import './style.css';
import toggleMenu from './dom';
import Task from './todo';

toggleMenu();

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
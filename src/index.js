import './style.css';

console.log('hello world from webpack');

function generateHeader() {
    const element = document.createElement('h2');
    element.textContent = 'Hello from webpack';
    element.classList.add('hello');

    return element;
}

document.body.appendChild(generateHeader());
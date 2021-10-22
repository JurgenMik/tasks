const form = document.querySelector( 'form');
const taskInput = document.querySelector('#task');

form.addEventListener('submit', addTask);

// e - event, param -- so func can access information outside
function addTask (e) {
    // input value
    const task = taskInput.value;
    // create <li> element
    const li = document.createElement('li');
    // define <li> CSS class
    li.className = "collection-item";
    // create text value for <li>
    const text= document.createTextNode(task);
    // add text value <li>
    li.appendChild(text);
    // find <ul> DOM component
    const ul = document.querySelector( '.collection');
    // add value to <ul>
    ul.appendChild(li);
    // '' terminated
    taskInput.value = '';

    e.preventDefault();

}
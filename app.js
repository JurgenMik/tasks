const form = document.querySelector( 'form');
const taskInput = document.querySelector('#task');
const tasksList = document.querySelector( '.collection');
const delTasksBtn = document.querySelector( '#del-tasks');

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
delTasksBtn.addEventListener( 'click', deleteTasks);

function deleteTasks() {
    // tasksList.innerHTML = '';
    while(tasksList.firstChild) {
        tasksList.removeChild(tasksList.firstChild);
    }

}
function deleteTask(e) {

    if (e.target.textContent == 'X') {
        if(confirm("Are you sure?")) {
            e.target.parentElement.remove();

        }
    }

}
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

    // create link element
    const link = document.createElement( 'a');
    // link href attribute
    link.setAttribute( 'href', '#');
    // add css style
    link.className = 'secondary-content';
    // add X text to link
    link.appendChild(document.createTextNode( 'x'));
    // add link to <li>
    li.appendChild(link);

    // find <ul> DOM component
    const ul = document.querySelector( '.collection');
    // add value to <ul>
    ul.appendChild(li);
    // form submit event control
    taskInput.value = '';

    e.preventDefault();

}




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

    deleteAllTaskFromLocalStorage();
}

function deleteAllTaskFromLocalStorage(){
    //localStorage.clear();
    if(localStorage.getItem('tasks') === null){
        let tasks = [];
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    localStorage.removeItem('tasks')
}

function deleteTask(event){
    if (event.target.textContent === 'X'){
        if(confirm('Are you sure?')){
            event.target.parentElement.remove();
            task = event.target.parentElement.firstChild.textContent;
            deleteTaskFromLocalStorage(task);

        }
    }

}

function deleteTaskFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(tasksElement,index){
        if(tasksElement === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// e - event, param -- so func can access information outside
function addTask (event) {

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
    // add X 'text content' to link
    link.appendChild(document.createTextNode( 'X'));
    // add link <a> to <li>
    li.appendChild(link);

    // Add li to <ul>
    const ul = document.querySelector( '.collection');
    ul.appendChild(li);

    // Save Task
    addTaskToLocalStorage(task);
    taskInput.value = '';
    event.preventDefault();

}

function addTaskToLocalStorage(task) {
    let tasks; 
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}




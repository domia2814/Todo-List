const form = document.querySelector('.new-tasks-form')
const input = document.querySelector('.new-task-add')
const tasksList = document.querySelector('.tasks')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = input.value
    if(!taskName) {
        alert("Proszę wypełnić pole ")
    } else {
        console.log("Success")
        addTaskToList()
    }
})

function addTaskToList() {
    const taskContent = document.createElement("div")
    taskContent.classList.add("task-list-content")

    taskContent.appendChild(createTaskInput())

    taskContent.appendChild(createTaskButtonEdit())

    taskContent.appendChild(createTaskButtonRemove())

    tasksList.appendChild(taskContent)
}

function createTaskInput() {
    let input = document.createElement("input")
    input.classList.add("task-list-input")
    input.type = "text"
    input.value = task
    input.setAttribute("readonly", "readonly")
    return input;
}

function createTaskButtonEdit() {
    let button = document.createElement("button")
    button.classList.add("task-list-edit")
    button.innerHTML = "Edytuj"

    button.addEventListener('click', () => {
        if(taskButton.innerText == "Edytuj") {
         taskInput.removeAttribute("readonly")
         taskInput.focus()
         taskButton.innerText = "Save"
        } else {
         taskInput.setAttribute("readonly", "readonly")
         taskButton.innerText = "Edytuj"
        }
 
     })

     return button
}

function createTaskButtonRemove() {
    let button = document.createElement("button")
    button.classList.add("task-list-delete")
    button.innerHTML = "Usuń"

    button.addEventListener('click', () => {
        tasksList.removeChild(taskContent)
    })

    return button
}
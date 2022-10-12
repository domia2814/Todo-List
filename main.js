const form = document.querySelector('.new-tasks-form')
const inputUser = document.querySelector('.new-task-add')
const tasksList = document.querySelector('.tasks')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = inputUser.value
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

    const input = createTaskInput()

    taskContent.appendChild(input)

    taskContent.appendChild(createTaskButtonEdit(input))

    taskContent.appendChild(createTaskButtonRemove(taskContent))

    tasksList.appendChild(taskContent)
}

function createTaskInput() {
    let input = document.createElement("input")
    input.classList.add("task-list-input")
    input.type = "text"
    input.value = inputUser.value
    input.setAttribute("readonly", "readonly")
    return input;
}

function createTaskButtonEdit(input) {
    let button = document.createElement("button")
    button.classList.add("task-list-edit")
    button.innerHTML = "Edytuj"

    button.addEventListener('click', () => {
        if(button.innerText == "Edytuj") {
         input.removeAttribute("readonly")
         input.focus()
         button.innerText = "Save"
        } else {
         input.setAttribute("readonly", "readonly")
         button.innerText = "Edytuj"
        }
 
     })

     return button
}

function createTaskButtonRemove(taskContent) {
    let button = document.createElement("button")
    button.classList.add("task-list-delete")
    button.innerHTML = "Usuń"

    button.addEventListener('click', () => {
        tasksList.removeChild(taskContent)
    })

    return button
}
//komentarz próba
const form = document.querySelector('.new-tasks-form')
const inputByUser = document.querySelector('.new-task-add')
const tasksList = document.querySelector('.tasks')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = inputByUser.value
    if(!task) {
        alert("Proszę wypełnić pole ")
    } else {
        console.log("Success")
        createTasksInputs()
    }
})

    function createTasksInputs() {
    const tasksElements = document.createElement("div")
    tasksElements.classList.add("task-list-content")

    const input = createInput()

    tasksList.appendChild(tasksElements)
    tasksElements.appendChild(input)
    tasksElements.appendChild(createButton1(input))
    tasksElements.appendChild(createButton2(tasksElements))
    }

    function createInput() { 
    const taskInput = document.createElement("input")
    taskInput.classList.add("task-list-input")
    taskInput.type = "text"
    taskInput.value = inputByUser.value
    taskInput.setAttribute("readonly", "readonly")
    return taskInput
    }
    
    function createButton1(input) {
    const taskButton = document.createElement("button")
    taskButton.classList.add("task-list-edit")
    taskButton.innerHTML = "Edytuj"

    taskButton.addEventListener('click', () => {
        if(taskButton.innerText == "Edytuj") {
         input.removeAttribute("readonly")
         input.focus()
         taskButton.innerText = "Save"
        } else {
         input.setAttribute("readonly", "readonly")
         taskButton.innerText = "Edytuj"
        }
     })
     return taskButton
    }
   
    function createButton2(tasksElements){
    const taskButton2 = document.createElement("button")
    taskButton2.classList.add("task-list-delete")
    taskButton2.innerHTML = "Usuń"

    taskButton2.addEventListener('click', () => {
        tasksList.removeChild(tasksElements)
     })
     return taskButton2
}
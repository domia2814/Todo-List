const form = document.querySelector('.new-tasks-form')
const input = document.querySelector('.new-task-add')
const taskList = document.querySelector('.tasks')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value
    if(!task) {
        alert("Proszę wypełnić pole ")
    } else {
        console.log("Success")
    }

    const taskEl = document.createElement("div")
    taskEl.classList.add("task-list-content")

    taskList.appendChild(taskEl)

    const taskInput = document.createElement("input")
    taskInput.classList.add("task-list-input")
    taskInput.type = "text"
    taskInput.value = task
    taskInput.setAttribute("readonly", "readonly")

    taskEl.appendChild(taskInput)

    const taskButton = document.createElement("button")
    taskButton.classList.add("task-list-edit")
    taskButton.innerHTML = "Edytuj"
      
    taskEl.appendChild(taskButton)

    const taskButton2 = document.createElement("button")
    taskButton2.classList.add("task-list-delete")
    taskButton2.innerHTML = "Usuń"

    taskEl.appendChild(taskButton2)

    taskButton.addEventListener('click', () => {
       if(taskButton.innerText == "Edytuj") {
        taskInput.removeAttribute("readonly")
        taskInput.focus()
        taskButton.innerText = "Save"
       } else {
        taskInput.setAttribute("readonly", "readonly")
        taskButton.innerText = "Edytuj"
       }

    })

    taskButton2.addEventListener('click', () => {
        taskList.removeChild(taskEl)
     })

})



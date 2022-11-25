const btnAdd = document.querySelector(".addbtn")
const list = document.querySelector(".lista")


const task = JSON.parse(localStorage.getItem("tareas")) || []
const taskComplete = JSON.parse(localStorage.getItem("TareasComplete")) || []



const add = () => {
    btnAdd.addEventListener('click', () => {
        const input = document.querySelector("#entrada")
        const valor = input.value
        if (valor.length == 0 || valor.length < 3) {
            alert("Enter a Task to do.")
        }
        else {
            let datos = `<div class="item-list"><li class="data">${input.value}</li><span class="readybtn"><i class="fa-solid fa-check"></i></span><span class="deletebtn"><i class="fa-solid fa-trash"></i></span></div>`
            list.innerHTML += datos
            input.value = ""
            task.push(valor)
            localStorage.setItem("tareas", JSON.stringify(task))
            location.reload()
        }
    })
}


const loadTask = () => {
    task.forEach((e) => {
        let datos = `<div class="item-list"><li class="data">${e}</li><span class="readybtn"><i class="fa-solid fa-check"></i></span><span class="deletebtn"><i class="fa-solid fa-trash"></i></span></div>`
        list.innerHTML += datos
    })
    taskComplete.forEach((i) => {
        let datos = `<div class="ready"><li class="data">${i}</li><span class="readybtn"><i class="fa-solid fa-check"></i></span><span class="deletebtn"><i class="fa-solid fa-trash"></i></span></div>`
        list.innerHTML += datos
    })
}



const tasksComplete = () => {
    const btnComplete = document.querySelectorAll(".readybtn")
    btnComplete.forEach((e) => {
        e.addEventListener('click', () => {
            e.parentElement.className = "ready"
            const item = e.parentElement.innerText
            const validacion = taskComplete.includes(e.parentElement.innerText)
            if (validacion == true) {
                localStorage.setItem("tareas", JSON.stringify(task))
                localStorage.setItem("TareasComplete", JSON.stringify(taskComplete))

            }
            else {
                const busqueda = task.indexOf(e.parentElement.innerText)
                task.splice(busqueda, 1)
                taskComplete.push(item)
                localStorage.setItem("tareas", JSON.stringify(task))
                localStorage.setItem("TareasComplete", JSON.stringify(taskComplete))
            }

        })
    })
}

const removeTask = () => {
    const btnRemove = document.querySelectorAll(".deletebtn")
    btnRemove.forEach((e) => {
        e.addEventListener('click', () => {
            if (e.parentElement.className == "ready") {
                const divItem = e.parentElement
                const busqueda2 = taskComplete.indexOf(divItem.innerText)
                taskComplete.splice(busqueda2, 1)
                localStorage.setItem("TareasComplete", JSON.stringify(taskComplete))
                e.parentElement.remove()
            }
            else {
                const divItem = e.parentElement
                const busqueda = task.indexOf(divItem.innerText)
                task.splice(busqueda, 1)
                localStorage.setItem("tareas", JSON.stringify(task))
                e.parentElement.remove()
            }


        })
    })
}

loadTask()
tasksComplete()
removeTask()
add()




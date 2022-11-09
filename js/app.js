let addbnt = document.querySelector(".addbtn")

addbnt.onclick = function () {
    let input = document.querySelector("#entrada").value
    if (input.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        let datos = `
        <div class="item-list">
        <li>${input}</li>
        <span class="readybtn"><i class="fa-solid fa-check"></i></span>
        <span class="deletebtn"><i class="fa-solid fa-trash"></i></span>
        </div>`
        document.querySelector(".lista").innerHTML += datos
        document.querySelector("#entrada").value = ""

        if (document.querySelectorAll(".readybtn").length > 0) {
            let tareas = document.querySelectorAll(".readybtn")
            let borrar = document.querySelectorAll(".deletebtn")
            tareas.forEach((e)=>{
                e.addEventListener('click', ()=>{
                    e.parentElement.className= "ready"
                })
            })
            borrar.forEach((e)=>{
                e.addEventListener('click',()=>{
                    e.parentElement.remove()
                })
            })
        }












        // if (document.querySelectorAll(".readybtn").length > 0) {
        //     let tareas = document.querySelectorAll(".readybtn")
        //     let borrar = document.querySelectorAll(".deletebtn")
        //     for (let i = 0; i < tareas.length; i++) {
        //         tareas[i].onclick = function () {
        //             console.log(tareas[i].parentElement)
        //             tareas[i].parentElement.className = "ready"
        //         }
        //         borrar[i].onclick = function(){
        //             borrar[i].parentElement.remove()
        //         }
        //     }
        // }

    }
}

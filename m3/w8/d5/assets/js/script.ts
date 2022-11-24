class NewTask {
    title: string;
    task: string;
    completed: string;
    constructor(_title: string, _task: string, _completed: string) {
        this.title = _title;
        this.task = _task;
        this.completed = _completed
    }
}

let btn = document.getElementById('invia');
let active = true || false;

window.addEventListener('DOMContentLoaded', init);
function init() {
    raccoltaTask();
    btn?.addEventListener('click', (e) => {
        e.preventDefault();
        let titleInput = <HTMLInputElement>document.getElementById("titolo");
        let taskInput = <HTMLInputElement>document.getElementById("task");
        let nuovaTask = new NewTask(titleInput.value, taskInput.value, 'false')
        if (active == true) {
            addTask(nuovaTask);
        }
    });
}

function raccoltaTask() {
    fetch('http://localhost:3000/task').then((response) => {
        return response.json()
    }).then((data) => {
        data.forEach((element: any) => {
            stampaTask(element);
        });
    });
}

function stampaTask(todo: any) {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.id = todo.id


    let btnElimina = document.createElement("button");
    btnElimina.classList.add("btn", "btn-danger", "mx-1");
    btnElimina.innerText = "X";
    btnElimina.addEventListener("click", (e) => {
        deleteTask(todo.id).then((response: any) => {
            if (response) {
                li.remove()
            }
        })
    })

    let btnModifica = document.createElement("button");
    btnModifica.classList.add("btn", "btn-warning", "mx-1");
    btnModifica.innerHTML = "<i class='bi bi-pen'></i>";
    btnModifica.addEventListener("click", (e) => {
        impostaForm(todo)
    })

    let b = document.createElement("b");
    b.innerText = `${todo.title}:`;
    let span = document.createElement("span");
    span.innerText = `${todo.task}`;

    //aggiungere i pulsanti e il testo
    li.prepend(btnElimina, btnModifica);
    li.append(b, span)

    //aggiugnere li al docuemnto
    let list = document.getElementById("list");
    list!.appendChild(li);

}

function deleteTask(id: number): any {
    fetch('http://localhost:3000/task/' + id, {
        method: 'DELETE',
    });
}

function impostaForm(todo: any) {
    let titleInput = <HTMLInputElement>document.getElementById("titolo");
    btn!.classList.remove("btn-primary")
    titleInput!.value = todo.title;
    let taskInput = <HTMLInputElement>document.getElementById("task");
    taskInput!.value = todo.task;
    btn!.classList.add("btn-success")
    btn!.innerText = "MODIFICA";
    active = false;
    btn!.addEventListener('click', function () {
        let nuovaTask = new NewTask(titleInput.value, taskInput.value, 'false')
        fetch('http://localhost:3000/task/' + todo.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(nuovaTask),
        });
    });
}

function addTask(task: any) {
    fetch('http://localhost:3000/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(task),
    });
    clearForm();
}

function clearForm() {
    let titleInput = <HTMLInputElement>document.getElementById("titolo");
    let taskInput = <HTMLInputElement>document.getElementById("task");
    titleInput.value = '';
    taskInput.value = '';
}
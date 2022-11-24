var NewTask = /** @class */ (function () {
    function NewTask(_title, _task, _completed) {
        this.title = _title;
        this.task = _task;
        this.completed = _completed;
    }
    return NewTask;
}());
var btn = document.getElementById('invia');
var active = true || false;
window.addEventListener('DOMContentLoaded', init);
function init() {
    raccoltaTask();
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function (e) {
        e.preventDefault();
        var titleInput = document.getElementById("titolo");
        var taskInput = document.getElementById("task");
        var nuovaTask = new NewTask(titleInput.value, taskInput.value, 'false');
        if (active == true) {
            addTask(nuovaTask);
        }
    });
}
function raccoltaTask() {
    fetch('http://localhost:3000/task').then(function (response) {
        return response.json();
    }).then(function (data) {
        data.forEach(function (element) {
            stampaTask(element);
        });
    });
}
function stampaTask(todo) {
    var li = document.createElement("li");
    li.classList.add("list-group-item");
    li.id = todo.id;
    var btnElimina = document.createElement("button");
    btnElimina.classList.add("btn", "btn-danger", "mx-1");
    btnElimina.innerText = "X";
    btnElimina.addEventListener("click", function (e) {
        deleteTask(todo.id).then(function (response) {
            if (response) {
                li.remove();
            }
        });
    });
    var btnModifica = document.createElement("button");
    btnModifica.classList.add("btn", "btn-warning", "mx-1");
    btnModifica.innerHTML = "<i class='bi bi-pen'></i>";
    btnModifica.addEventListener("click", function (e) {
        impostaForm(todo);
    });
    var b = document.createElement("b");
    b.innerText = "".concat(todo.title, ":");
    var span = document.createElement("span");
    span.innerText = "".concat(todo.task);
    //aggiungere i pulsanti e il testo
    li.prepend(btnElimina, btnModifica);
    li.append(b, span);
    //aggiugnere li al docuemnto
    var list = document.getElementById("list");
    list.appendChild(li);
}
function deleteTask(id) {
    fetch('http://localhost:3000/task/' + id, {
        method: 'DELETE'
    });
}
function impostaForm(todo) {
    var titleInput = document.getElementById("titolo");
    btn.classList.remove("btn-primary");
    titleInput.value = todo.title;
    var taskInput = document.getElementById("task");
    taskInput.value = todo.task;
    btn.classList.add("btn-success");
    btn.innerText = "MODIFICA";
    active = false;
    btn.addEventListener('click', function () {
        var nuovaTask = new NewTask(titleInput.value, taskInput.value, 'false');
        fetch('http://localhost:3000/task/' + todo.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(nuovaTask)
        });
    });
}
function addTask(task) {
    fetch('http://localhost:3000/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(task)
    });
    clearForm();
}
function clearForm() {
    var titleInput = document.getElementById("titolo");
    var taskInput = document.getElementById("task");
    titleInput.value = '';
    taskInput.value = '';
}

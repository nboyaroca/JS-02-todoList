import { todoList } from "./todoList.js";



document.getElementById('add-button').addEventListener('click', () => {
    todoList.addTodo(todoInput.value);
    todoInput.value = "";
});

/*document.querySelectorAll('.deleteButton').addEventListener('click', (e) => {
    todoList.deleteByIndex(e.target.id)
});

/*let delBbutton = document.querySelectorAll(".deleteButton")
    delBbutton.forEach(button => {
    button.addEventListener('click', (e) => this.deleteByIndex(e.target.id))
    });

let edBbutton = document.querySelectorAll(".editButton")
    edBbutton.forEach(button => {
    button.addEventListener('click', (e) => this.editByIndex(e.target.id))
    });*/



todoList.render();



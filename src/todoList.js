export const todoList = {
    state: [
        {
            id: 1,
            task: 'Estudiar TDD ',
        },
        {
            id: 2,
            task: 'practicat katas ',
        },
        {
            id: 3,
            task: 'Estudiar bases de dades relacionals',
        }
    ],
       
    addTodo(newTodo) {
        this.state.push({id: 4, task: newTodo});
        this.render();
    },

    deleteByIndex(index) {
        this.state.splice(index, 1);
        this.render();
    },

    render() {
        let html = "";
    
        for (const todo of this.state) { 
            html += `<li>${todo.task} - <button id=${this.state.indexOf(todo)} class="deleteButton">delete</button></li>`;  
        }
        let DOMlist = document.getElementById("App") 
        DOMlist.innerHTML = html;
        
        let buttons = document.querySelectorAll(".deleteButton")
        buttons.forEach(button => {
        button.addEventListener('click', (e) => this.deleteByIndex(e.target.id));
        });
    }

    
    
}
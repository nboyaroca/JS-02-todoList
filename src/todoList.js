export const todoList = {
    state: [
        'Estudiar TDD ',
        'practicat katas ',
        'Estudiar bases de dades relacionals',
    ],
    
    addTodo(newTodo) {
        this.state.push(newTodo);
        this.render();
    },

    deleteByIndex(index) {
        this.state.splice(index, 1);
        this.render();
    },

    render() {
        let html = "";
    
        for (const todo of this.state) { 
            html += `<li>${todo} - <button id=${this.state.indexOf(todo)} class="deleteButton">delete</button></li>`;  
        }
        let DOMlist = document.getElementById("App") 
        DOMlist.innerHTML = html;
        
        let buttons = document.querySelectorAll(".deleteButton")
        //console.log(buttons);
        buttons.forEach(button => {
            console.log(button);
            button.addEventListener('click', (e) => this.deleteByIndex(e.target.id));
        });
    }

    
    
}
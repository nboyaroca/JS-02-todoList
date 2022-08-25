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
        this.state.push({id: Math.floor(Math.random()*100), task: newTodo}); //floor per num enters, random aleatoris entre 0 i 1, *100 entre 0 i 100
        this.render();
        console.log(this.state)
    },

    deleteByIndex(index) {
        this.state.splice(index, 1);
        this.render();
    },

    inputCharge(contentText) {
        document.getElementById("todoInput").value = contentText

    },

    editByIndex(index) {
        //cargar la task en el input con el inputCharge
        //editar el contenido
        //enviar la nueva task
        // const edit = document.querySelector("button");
        // edit.textContent = `${todo.task}`;
        this.inputCharge(this.state[index].task)
        // alert(index)
        this.render();
    },



    render() {
        let html = "";
    
        for (const todo of this.state) { 
            html += `<li>${todo.task}
             - <button id=${this.state.indexOf(todo)} class="deleteButton">delete</button>
             - <button id=${this.state.indexOf(todo)} class="editButton">edit</button></li>`;  
        }
        let DOMlist = document.getElementById("App") 
        DOMlist.innerHTML = html;
            
        let delBbutton = document.querySelectorAll(".deleteButton")
        delBbutton.forEach(button => {
            button.addEventListener('click', (e) => this.deleteByIndex(e.target.id))

        let editButton = document.querySelectorAll(".editButton")
        editButton.forEach(button => {
            button.addEventListener('click', (e) => this.editByIndex(e.target.id))
        })
    });
    }
       
} 
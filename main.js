
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
const app = new Vue({
    el: "#app",
    data: {
        todos: [
            // text, una stringa che indica il testo del todo
            // done, (true/false) che indica se il todo è stato fatto oppure no
            {
                text: "Fare la spesa",
                done: false,
            },
            {
                text: "Pagare le bollette",
                done: false,
            },
            {
                text: "Andare in palestra",
                done: false,
            },
            {
                text: "Chiamare il dentista",
                done: false
            }
            // Stampare all'interno di una lista, un item per ogni todo.
        ],
        newTodo: " ",
    },
    methods: {
        addTodo() {
            if( this.newTodo !== " ") {
                const newTodo = {
                    text:this.newTodo,
                    done: false,
                }
                this.todos.push(newTodo);
                this.newTodo= " ";
            }
        },
        isDone(index) {
            return this.todos[index].done = !this.todos[index].done
        },
        isDelete(index) {
            this.todos.splice(index, 1);
        },
    },
});
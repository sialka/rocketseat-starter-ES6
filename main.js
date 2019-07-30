// Class TodoList
class TodoList{
 constructor(){
   this.todos = [];
 } 

 // Método addTodo
 addTodo(){
   this.todos.push('item');
   console.log(this.todos);
 }

}

const MinhaLista = new TodoList();

document.getElementById('adicionar').onclick = function() {
  MinhaLista.addTodo();
}
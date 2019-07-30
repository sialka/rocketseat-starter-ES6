// Exemplo de Herança

class List {
  constructor(){
    this.data = [];    
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List{
}

const MinhaLista = new TodoList();

document.getElementById('adicionar').onclick = function() {
  MinhaLista.add('Item');  
}
const prompt = require('prompt-sync')();

class Pilha {
    constructor() {
      this.items = [];
    }
  
    // Adiciona um elemento à pilha
    push(element) {
      this.items.push(element);
    }
  
    // Remove o elemento do topo da pilha e o retorna
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Retorna o elemento do topo da pilha sem removê-lo
    peek() {
      if (this.isEmpty()) {
        return "A pilha está vazia";
      }
      return this.items[this.items.length - 1];
    }
  
    // Verifica se a pilha está vazia
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Retorna o tamanho da pilha
    size() {
      return this.items.length;
    }
  
    // Limpa a pilha
    clear() {
      this.items = [];
    }
  }
  
  // Exemplo de uso da pilha
  let pilha = new Pilha();
  let valor;


  valor = prompt("Digite um valor para ser adicionado a pilha:");
  pilha.push(valor);
  
  console.log("Elemento no topo:", pilha.peek()); 
  console.log("Tamanho da pilha:", pilha.size()); 
  
  console.log("Removendo elemento do topo:", pilha.pop()); 
  console.log("Tamanho da pilha após remoção:", pilha.size());
  
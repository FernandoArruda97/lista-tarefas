// Criação de variáveis //




const input = document.getElementById("inputElement");

const listaTarefas = document.getElementById("listaElement");

const listaZerada = document.getElementById("limparLista")
 

  //Criando um Array
  
  // Tiro o array vazio para colocar a lista salva no local storage e utilizo
  //json parse para transformar a string de volta em uma lista//
let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

const mensagem = document.getElementById("mensagem");

//Chama a função//

   renderizarTarefas();

function adicionarTarefas(event){

   event.preventDefault();
    
    let tarefa = input.value.trim()

  
    // Event.preventdefault para não atualizar a página //

   

    // If e Else para dar uma condição caso não preencha o input e caso preencha //
    
    if(tarefa == ""){
     
      mensagem.textContent = "Digite alguma coisa..."
    }else{
    
    mensagem.textContent = "Tarefa adicionada com sucesso!!"
    
    tarefas.push(tarefa)
      input.value = ""

    renderizarTarefas(event)
    salvarDados(event);
  

    
    }

 
      
}
function renderizarTarefas(event){
    
    

    //para limpar todos elementos li antes de executar o for//

    listaTarefas.innerHTML = ""
    //Fazer um for para ir andando na lista e add itens

    
    
    for(let i = 0;  i < tarefas.length; i++){
        
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefas[i]

    
    
    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover"
    botaoRemover.textContent = "Remover"
    botaoRemover.onclick = () => removerTarefa(i)
  
    let botaoEditar = document.createElement("button")
    botaoEditar.className = "editar"
    botaoEditar.textContent = "Editar"
    botaoEditar.onclick = () => editarTarefa(i) 
    
    novaTarefa.appendChild(botaoRemover)
    novaTarefa.appendChild(botaoEditar)
    listaTarefas.appendChild(novaTarefa);
    }

    if(i = tarefas[0]){
      document.getElementById("limparLista").style.display = "block";
    }

    

  function removerTarefa(i){
    tarefas.splice(i, 1)
    renderizarTarefas();
    salvarDados();
  }

}

function editarTarefa(i){
let tarefaEditada = prompt("Edite sua tarefa:")
if(tarefaEditada.trim() !== ""){
  tarefas[i] = tarefaEditada
  renderizarTarefas()
}
if(tarefas[i] = tarefas[1]){
  document.getElementById("")
}

}
function limparLista(event){
   event.preventDefault();

  tarefas.length = 0
  localStorage.clear("@listaTarefas")
  renderizarTarefas()
   
  
}

//função para salvar no localstorage//

//json.stringify servi para converter uma lista em uma string

function salvarDados(){
  localStorage.setItem("@listaTarefas",JSON.stringify(tarefas) )
}
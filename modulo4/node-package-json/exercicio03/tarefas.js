const tarefas = ["lavar","pintar","comprar",]

const adicionar = process.argv[2] 
const novaTarefa = tarefas.filter((tarefa) => tarefa.includes(adicionar)) 
tarefas.push(adicionar )
console.log(`Tarefa adicionada com suceso! ${tarefas}`)
console.log("Tarefa adicionada com sucesso!",tarefas)














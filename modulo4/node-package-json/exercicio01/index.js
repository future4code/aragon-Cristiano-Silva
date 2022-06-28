// EXERCICIO1
//resp.a) Para passar parâmetros na linha de comando com o node utilizamos o process.argv[]

//resp b).
const nome = process.argv[2]
const idade = Number(process.argv[3])
console.log(`Olá, ${nome}! Você tem ${idade} anos!`)

//resp c).
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7} anos.`)

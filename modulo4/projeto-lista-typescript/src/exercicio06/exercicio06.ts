/* Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes,
 o saldo total e uma lista contendo todas os débitos realizados pelo cliente. 

 */
type DadosClientes = {
    cliente:string,
    saldoTotal: number,
    debitos:number[] 
}

const clienteBanco : DadosClientes[] =
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const buscaDebito =(clienteBanco: DadosClientes[]):DadosClientes[] =>{
    const debitos = clienteBanco.map(
        (cliente) =>{ 
            let somaValores = cliente.debitos.reduce((total, valor) => total + valor, 0 )
/*             cliente.debitos = [somaValores]
 */            cliente.saldoTotal = cliente.saldoTotal - somaValores // o mesmo que cliente.saldoTotal -= somaValores
            cliente.debitos = []
            return cliente
        }
    ).filter(
        (listaCliente) =>{
            return listaCliente.saldoTotal < 0
        }
    )
    return debitos
}
console.log(buscaDebito(clienteBanco))

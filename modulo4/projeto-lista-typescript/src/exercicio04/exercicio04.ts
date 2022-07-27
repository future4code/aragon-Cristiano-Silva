/* O array abaixo traz as pessoas colaboradoras de uma empresa,
 com seus salários, setores e se trabalham presencialmente ou home office: */

enum  SETORES {
    MARKETING  = "marketing",
    VENDAS     = "vendas",
    FINANCEIRO = "financeiro"
}
type Funcionario ={
    nome:string,
    salário:number,
    setor: SETORES,
    presencial: boolean
}

const pessoas: Funcionario[] =
[
	{ nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETORES.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETORES.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETORES.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETORES.MARKETING, presencial: true }
]
const buscarPorSetor =(pessoas: Funcionario[], setorInformado:string): Funcionario[] =>{
    return pessoas.filter(
        (pessoa) =>{
            return pessoa.setor === setorInformado
        }
    )
}
console.log(buscarPorSetor(pessoas,SETORES.VENDAS))
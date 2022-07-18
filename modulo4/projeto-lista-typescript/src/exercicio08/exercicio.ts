type DadosUsuario = {
    dataNascimento :  string
    dataRg: string,
    prazoCarteira:boolean,
    dataAtual: number,
}

const informacoesUsuario: DadosUsuario[]= [
    {
    dataNascimento : "16/07/1987",
    dataRg     : "02/02/2022",
    prazoCarteira:true
    }
]

const criterio1 : DadosUsuario[][
    {
    dataAtual.newDate()
    }
]
const avaliacao = (informacoesUsuario: DadosUsuario[]) :string | number => {
    const criterio1 = 2022 - informacoesUsuario.dataNascimento
    return 
}
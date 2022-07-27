/* Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes.
Cada filme possui 3 informações essenciais: nome do filme; ano de lançamento e gênero do filme.
Os gêneros da plataforma se limitam àqueles encontrados no ENUM abaixo: */

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror",
    AVENTURA="aventura"
}
type Filmes ={
    nome: string,
    ano: number,
    genero:string,
    pontuacao?:number
}

const meusFilmes: Filmes[] =[
    {
        nome:"The Batman",
        ano:2022,
        genero: GENERO.ACAO,
        pontuacao: 95
    },
    {
        nome:"Doutor Estranho",
        ano:2022,
        genero:GENERO.ACAO,
        pontuacao: 82
    },
    {
        nome:"Animais Fantasticos",
        ano:2022,
        genero: GENERO.AVENTURA
        
    },
    {
        nome:"Duna",
        ano:2022,
        genero: GENERO.ACAO,
    },
]
const buscarFilmes =(meusFilmes: Filmes[]):Filmes[] =>{
    return meusFilmes
}
console.log(buscarFilmes(meusFilmes))


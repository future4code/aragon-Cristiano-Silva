export type AccountPay ={
    valueAccount:number,
    description:string,
    datePgto:string
}

export type List ={
    id:number,
    name:string,
    cpf:string,
    birthDate:string,
    totalBalance:any,
    list:AccountPay[]
    
}

export let account: List[] =[ 
    {
        id: 1,
        name: "Criz",
        cpf: "111111111-11",
        birthDate: "16/07/87",
        totalBalance: 3000,
        list:[
            {
                valueAccount:100,
                description:"lojasRenner",
                datePgto:"02/06/2022"
            }
        ]
    },
    {
        id: 2,
        name: "Astrodev",
        cpf: "222222222-11",
        birthDate: "15/09/88",
        totalBalance:2300,
        list:[
            {
                valueAccount:200,
                description:"Magalu",
                datePgto:"12/03/2022"
            }
        ]
       
    },
    {
        id: 3,
        name: "Laura",
        cpf: "333.333.333-11",
        birthDate: "25/12/92",
        totalBalance:1360,
        list:[
            {
                valueAccount:19.99,
                description:"Riachuello",
                datePgto:"02/06/2022"
            }
        ]
    }

]
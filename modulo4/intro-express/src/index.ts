import express, {Request, Response} from 'express'
import cors from 'cors'

type Dados ={
    id: number 
    nome: string,
    phone: string,
    email: string
}

let usuarios: Dados[] = [
    {
        id:   1,
        nome: "Cristiano",
        phone: "819999-9998",
        email: "email@email.com"
    },
    {
        id:   2,
        nome: "Davi",
        phone: "813333-9998",
        email: "davi@email.com"
    },
    {
        id:   3,
        nome: "paolo",
        phone: "813333-0000",
        email: "paolo@email.com"
    }
]

const app = express()

app.use(cors())
app.use(express.json())

//Exercise 01 - BaseUrl
app.get('/',(req: Request, res: Response) =>{
    const resultado = "Servidor Funcionando"

    res.status(200).send(resultado)
    console.log(resultado)
})

//get users
app.get('/users', (req: Request, res: Response) =>{
    res.status(200).send(usuarios)
    console.log(usuarios)
})

//get users by id
app.get('/users/:id', (req: Request, res: Response) =>{
    const id = Number(req.params.id)
    const user = usuarios.filter(user => user.id === id)
    res.status(200).send(user)
    console.log(user)
})
//change phone
app.put('/users/:id', (req: Request, res: Response) =>{
    const {id,nome} = req.body

     usuarios.forEach(item =>{
        item.phone = "815552-3332"
     })

     console.log(usuarios)
     res.status(200).send(usuarios[0])

})


//delete user
app.delete('/users/:id', (req: Request, res: Response) =>{
    const id = Number(req.params.id)
    const use = usuarios.findIndex(user => user.id ===id)
    usuarios.splice(use, 3)
    res.status(200).send(usuarios)
    console.log(usuarios)

})



app.listen(3004, () => console.log("O servidor está rodando na porta 3004."))



/* res.status(201).send({mensagem:"Telefone alterado com sucesso :)", usuario:atualizaUsuario[0]}) */
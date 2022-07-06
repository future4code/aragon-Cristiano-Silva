import express, { Request, Response } from "express"
import cors from "cors"
import { send } from "process"

type Lista = {
    id:number,
    userId: string,
    title: string,
    complemeted:boolean
}

let afazeres: Lista[] = [
    {
        id: 1,
        userId: "v1",
        title: "compar materiais",
        complemeted: true
    },
    {
        id: 2,
        userId: "v2",
        title: "arrumar deposito",
        complemeted: true
    },
    {
        id: 3,
        userId: "v3",
        title: "vender peças",
        complemeted: true
    },
    {
        id: 4,
        userId: "v1",
        title: "limpar janela",
        complemeted: false
    },
    {
        id: 5,
        userId: "v2",
        title: "fechar caixa",
        complemeted: true
    },
    {
        id: 6,
        userId: "v3",
        title: "limpar galpão",
        complemeted: false
    },
]

const app = express()

app.use(cors())
app.use(express.json())

//Get - Retornar todos afazeres
app.get("/afazeres", (req:Request, res:Response) =>{
    res.status(200)
    .send(afazeres)
})


// Get - Retorna mensagem pong!
app.get("/ping", (req: Request, res: Response) =>{
    res.send({message: "Pong!"})
})

// Get - Retorna afazer por Id
app.get("/afazeres/:userId", (req: Request, res: Response) =>{
    const userId = req.params.userId

    const result = afazeres.filter((afazer) =>{
        return afazer.userId === userId
    })
    res.send({afazeres: result})
})

//Post - Criar um novo afazer
app.post("/afazer", (req: Request, res: Response) =>{
    const {userId, title} = req.body

    const toDo = afazeres[afazeres.length -1]

    const newToDo: Lista ={
        id: toDo.id +1,
        userId: userId,
        title: title,
        complemeted: false
    }

    afazeres.push(newToDo)

    res.send({
        mensage:"Um novo afazer criado com sucesso!",
        todo: newToDo

    })
})


//Delete - Deleta um afazer pela id selecionada.
app.delete("/afazer/:id", (req:Request, res:Response) =>{
    const id = Number(req.params.id)

    const index = afazeres.findIndex(afazeres => afazeres.id ===id)
    afazeres.splice(index,1)

    res.status(200).send({
        message:"A fazer deletado com sucesso!",
        afazeres:afazeres
    
    })

})

//Put- Editar status do endpoint
app.put("/afazer/:id",(req:Request, res:Response) =>{
    const id = Number(req.params.id)
    const {complemeted} = req.body

  /*   if(!id) res.status(400).send({message:`Insert a valid ID`})
    else {
      const updateUserList = afazeres.map(element => {
        if (element.id === id) return {...element, complemeted:!complemeted}
      })
      afazeres = updateUserList
  
      const updateUser = afazeres.filter(element => element.id === id)
      res.status(200).send({message:`User changed with success!`, user:updateUser})
    }
  }) */

   /*  .send({
        message:"Status alterado com sucesso!"
    }) */


     const resultado = afazeres.map((afazer) =>{
        if(afazer.complemeted === true){
            return afazer.complemeted 
        }else if (afazer.complemeted === false){
            return afazer.complemeted
        }
        res.send({
            mensage: "Status alterado com sucesso!",
            afazers: resultado
            
        })
    }) 
})


//Get - Retorna lista de afazeres especificos.

app.get("/afazeresLista",(req: Request, res:Response) =>{
    const search = req.query.search

    if(search !== "true" && search !=="false"){
        return res.send({
            search:search,
            afazeres:afazeres
        })
    }
    if (search ==="true"){
        const result = afazeres.filter((afazer) =>{
            return afazer.complemeted === true
        })
        return res.send({
            afazeres: result,
            search:search
        })
    } else {
        const result = afazeres.filter((afazer) =>{
            return afazer.complemeted === false
        })
        return res.send({afazeres: result, search:search})
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

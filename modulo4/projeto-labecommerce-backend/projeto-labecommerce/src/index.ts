import { addPurchase } from './endpoints/addPurchase';
import { getPurchases } from './endpoints/getPurchases';
import { getProducts } from './endpoints/getProducts';
import { createProducts } from './endpoints/createProducts';
import { getUser } from './endpoints/getUser';
import { createUser } from './endpoints/createUser';
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)

app.post("/users",createUser)

app.get("/users", getUser)

app.post("/products", createProducts)

app.get("/products", getProducts)

app.get( "/users/:user_id/purchases",getPurchases)

app.post("/purchases",addPurchase)
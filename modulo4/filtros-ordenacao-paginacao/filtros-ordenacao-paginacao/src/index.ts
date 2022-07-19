import { putProduct } from './endpoints/putProducts';
import { delProduct } from './endpoints/delProduct';
import { newProduct } from './endpoints/newProduct';
import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUsers } from "./endpoints/getUsers";
import { getProducts } from "./endpoints/getProducts";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Get users
app.get("/users", getUsers)

// Get products
app.get("/products", getProducts)

// Post new product
app.post("/products", newProduct)

// Delete product
app.delete("/products/:id", delProduct)

//Put product
app.put("/products/:id", putProduct)

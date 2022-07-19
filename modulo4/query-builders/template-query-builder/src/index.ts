import { delPerfume } from './endpoints/delPerfume';
import { editPerfume } from './endpoints/editPerfume';
import { listPerfumes } from './endpoints/listPerfumes';
import { addPerfumes } from './endpoints/addPerfume';
import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Implemente seus endpoints abaixo

//post add new perfume
app.post("/perfumes", addPerfumes)
//get list perfumes
app.get("/perfumes",listPerfumes)
//Put edit price perfume
app.put("/perfumes/:id", editPerfume)
//Delete perfume
app.delete("/perfumes/:id", delPerfume)
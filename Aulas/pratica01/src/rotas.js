import { Router } from "express"
import alunoController from "./app/controller/alunoController"
import idValido from "./app/middlewares/idValido"

const routes = new Router();

routes.get("/teste", (req, res) => {
    console.log("Cliente acessou a rota teste");
    return res.send("Olá Turma");
});

routes.get("/testeHTML", (req, res) => {
    return res.send("<h1>Teste</h1>");
});

routes.get("/aluno", alunoController.get);

routes.get("/busca", alunoController.busca);

routes.get("/buscaId", idValido, alunoController.buscaId);


routes.post("/aluno", alunoController.store);







routes.put("/aluno/:id", alunoController.update);

export default routes;
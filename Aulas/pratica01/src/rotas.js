import { Router } from "express"
import alunos from "./database";
import alunoController from "./app/controller/alunoController"

const routes = new Router();


routes.get("/teste", (req, res) => {
    console.log("Cliente acessou a rota teste");
    return res.send("Olá Turma");
});

routes.get("/testeHTML", (req, res) => {
    return res.send("<h1>Teste</h1>");
});

routes.get("/aluno", (req, res) => {
    return res.json(alunos);
});

routes.get("/busca", (req, res) => {
    const { nome } = req.query;

    const aluno = alunos.find(aluno => {
        aluno == nome
    });

    return res.json(aluno);
});




routes.post("/aluno", alunoController);







routes.put("/aluno/:id", (req, res) => {
    const { nome } = req.body;
    const { id } = req.params;
    alunos[id] = nome;
    return res.json(alunos);
})

export default routes;
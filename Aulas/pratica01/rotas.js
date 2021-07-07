import { Router } from "express"
import alunos from "./alunos";
import vetorDeAlunos from "./database";

const routes = new Router();

routes.get("/teste", (req, res) => {

    const aluno1 = new alunos("Alexandre", 15, [10, 5, 7]);
    vetorDeAlunos.push(aluno1);

    console.log(`A media ${aluno1.calcularMedia()}`);

    console.log("Cliente acessou a rota teste");

    return res.json(vetorDeAlunos);
});

routes.get("/testeHTML", (req, res) => {
    return res.send("<h1>Teste</h1>");
});

export default routes;
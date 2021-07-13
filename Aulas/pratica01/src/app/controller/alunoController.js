import aluno from "../models/aluno";
import alunos from "../../database";

function store(req, res) {
    const { nome, matricula, notas } = req.body;
    alunos.push(new aluno(nome, matricula, notas));
    return res.json(alunos);
}

export default store;
import Aluno from "../models/aluno";
import alunos from "../../database";

class AlunoController {
    store(req, res) {
        const { nome, notas } = req.body;

        alunos.push(new Aluno(nome, notas));

        return res.json(alunos);
    }

    get(req, res) {
        return res.json(alunos);
    }

    busca(req, res) {
        const { nome } = req.query;

        const aluno = alunos.find((Aluno) => Aluno.nome === nome);

        return res.json(aluno);
    }

    buscaId(req, res) {
        const { id } = req.query;

        const aluno = alunos.find((Aluno) => Aluno.matricula === id);

        return res.json(aluno);
    }

    update(req, res) {
        const { nome } = req.body;
        const { id } = req.params;
        alunos[id].nome = nome;
        return res.json(alunos);
    }
}

export default new AlunoController();
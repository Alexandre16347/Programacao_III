import { uuid } from "uuidv4"

class Aluno {
    constructor(nome, notas) {
        this.nome = nome;
        this.matricula = uuid();
        this.notas = notas;
        this.media = this.calcularMedia();
    }
    calcularMedia() {
        var sum = 0;
        for (var i = 0; i < 3; i++) {
            sum = sum + this.notas[i];
        }
        return sum / 3;
    }

}

export default Aluno;
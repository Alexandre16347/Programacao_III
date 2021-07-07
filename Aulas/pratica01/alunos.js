// const alunos = {
//     nome: "fabbio",
//     matricula: 12,
//     nota: [10, 10, 10],
//     calcularMedia: function (notas) {
//         var sum = 0;
//         for (var i = 0; i < 3; i++) {
//             sum = notas[i] + sum;
//         }
//         alunos.media = sum / 3;
//         return alunos.media;
//     },
// };

// export default alunos;

class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
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
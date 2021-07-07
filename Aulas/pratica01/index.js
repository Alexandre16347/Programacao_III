import express from "express"
import minhasRotas from "./rotas"

const server = express();
server.use(minhasRotas);


server.listen(3333, (port = 3333) => {
    // console.log("Servidor executado com sucesso", port);
    console.log(`Servidor executado com sucesso na porta ${port} ${5555}`);
});


// function mensagemServidor(port){
//     // console.log("Servidor executado com sucesso", port);
//     console.log(`Servidor executado com sucess ${port} ${2222}`);
// }
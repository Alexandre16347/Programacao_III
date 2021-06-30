const express = require("express"); //import express

const server = express();


// function mensagemServidor(port){
//     // console.log("Servidor executado com sucesso", port);
//     console.log(`Servidor executado com sucess ${port} ${2222}`);
// }

server.get("/teste", (req, res) => {
    console.log("Cliente acessou a rota teste");
    return res.send("Olá Turma !");
});


server.listen(3333, (port = 3333) => {
    // console.log("Servidor executado com sucesso", port);
    console.log(`Servidor executado com sucess ${port} ${5555}`);
});
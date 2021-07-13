import app from './app'

app.listen(3000, (port = 3000) => {
    console.log(`Servidor executado com sucesso na porta ${port}`);
});

/* import express from "express"
import minhasRotas from "./rotas"

const server = express();
server.use(minhasRotas);


server.listen(3333, (port = 3333) => {
    // console.log("Servidor executado com sucesso", port);
    console.log(`Servidor executado com sucesso na porta ${port}`);
}); */
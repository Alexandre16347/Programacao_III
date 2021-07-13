import express from 'express';
import routes from "./rotas";

class App {
    constructor() {
        this.server = express();
        this.server.use(express.json());
        this.routes();
    }
    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
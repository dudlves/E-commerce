import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

import cors from "cors";

const  opitions = {
    origin: ["*"]
};

app.use(cors(opitions));

import usuariosController from './src/controllers/UsuariosController.js';
import ProdutosController from './src/controllers/ProdutosController.js';
import CarrinhoController from './src/controllers/CarrinhoController.js';

app.use(usuariosController);
app.use(ProdutosController);
app.use(CarrinhoController);

app.listen(port);
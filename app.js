// import {openDb} from './configDB.js';
import express from 'express';
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

import usuariosController from './src/controllers/UsuariosController.js';
import ProdutosController from './src/controllers/ProdutosController.js';
import CarrinhoController from './src/controllers/CarrinhoController.js';

app.use(usuariosController);
app.use(ProdutosController);
app.use(CarrinhoController);

app.listen(port);
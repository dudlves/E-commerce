// import {openDb} from './configDB.js';
import express from 'express';
const app = express();
app.use(express.json());



import usuariosController from './src/controllers/UsuariosController.js';
import ProdutosController from './src/controllers/ProdutosController.js';
app.use(usuariosController);
app.use(ProdutosController);

app.listen(3000);
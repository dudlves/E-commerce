// import {openDb} from './configDB.js';
import express from 'express';
const app = express();


const port = process.env.PORT || 3000;



import cors from "cors";

const  opitions = {
    origin: ["*"]
};

app.use(cors(opitions));

import UsuariosRouter from './src/router/UsuariosRouter.js';
import ProdutosRouter from './src/router/ProdutosRouter.js';
import CarrinhoRouter from './src/router/CarrinhoRouter.js';

app.use(UsuariosRouter);
app.use(ProdutosRouter);
app.use(CarrinhoRouter);

app.listen(port);
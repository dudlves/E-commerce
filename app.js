// import {openDb} from './configDB.js';
import express from 'express';
const app = express();
app.use(express.json());



import usuariosRouter from './src/routers/UsuariosRouters.js';
import produtoRouter from './src/routers/ProdutosRouters.js';
app.use(usuariosRouter);
app.use(produtoRouter);

app.listen(3000);
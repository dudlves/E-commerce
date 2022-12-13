import { Router } from "express";
import { createTable, insertProduto } from '../dao/produtosDAO.js';

const produtoRouter = Router();

createTable()
produtoRouter.get('/', (req, res) => {
    res.send('Hello Word')
})

produtoRouter.post('/produto', (req, res) => {
    insertProduto(req.body);
    res.json({
        "statucCode": 200
    })
})

export default produtoRouter;
import { Router } from "express";
import {createTable, insertProduto ,selectProduto, selectProdutoId, updateProduto, deleteProduto} from '../dao/produtosDAO.js'

const ProdutosController = Router();

createTable()
ProdutosController.get('/produto', selectProduto)

ProdutosController.get('/produto:id',selectProdutoId)

ProdutosController.post('/produto',insertProduto)

ProdutosController.put('/produto',updateProduto)

ProdutosController.delete('/produto', deleteProduto)




export default ProdutosController;
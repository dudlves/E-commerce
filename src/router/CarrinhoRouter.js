import { Router } from "express";
import {createTable, selectCarrinho, selectCarrinhoId, insertCarrinho, updateCarrinho, deleteCarrinho} from '../controller/carrinhoController.js'

const CarrinhoController = Router();

createTable()

CarrinhoController.get('/carrinho',selectCarrinho )
CarrinhoController.get('/carrinho:id',selectCarrinhoId )
CarrinhoController.post('/carrinho', insertCarrinho )
CarrinhoController.put('/carrinho', updateCarrinho)
CarrinhoController.delete('/carrinho', deleteCarrinho)






export default CarrinhoController;
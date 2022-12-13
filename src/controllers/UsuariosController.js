import { Router } from "express";
import { createTable, selectUsuarios, insertUsuario, updateUsuario, deleteUsuario, logado } from '../dao/usuarioDAO.js';

const usuariosController = Router();
createTable()

usuariosController.get('/usuario',selectUsuarios);
usuariosController.post('/usuario', insertUsuario);
usuariosController.put('/usuario', updateUsuario);
usuariosController.delete('/usuario', deleteUsuario);
usuariosController.post('/login',logado);


export default usuariosController;
import { Router } from "express";
import { createTable, selectUsuarios, insertUsuario, updateUsuario, deleteUsuario} from '../controller/usuarioController.js';

const usuariosController = Router();
createTable()

usuariosController.get('/usuario',selectUsuarios);
usuariosController.post('/usuario', insertUsuario);
usuariosController.put('/usuario', updateUsuario);
usuariosController.delete('/usuario', deleteUsuario);



export default usuariosController;
import { Router } from "express";
import { createTable, selectUsuarios, insertUsuario, updateUsuario, deleteUsuario, logado } from '../controllers/usuario.js';

const usuariosRouter = Router();

createTable()
// usuariosRouter.get('/usuario', (req, res) => {
//     res.send('Hello Word')
// })

// usuariosRouter.post('/usuario', (req, res) => {
//     insertUsuario(req.body);
//     res.json({
//         "statucCode": 200
//     })
// })

// usuariosRouter.put('/usuario', (req, res) => {

// })

// usuariosRouter.delete('/usuario', (req, res) => {
// })

// usuariosRouter.post('/Login', (req, res) => {
// })



usuariosRouter.get('/usuarios',selectUsuarios);
usuariosRouter.post('/usuario', insertUsuario);
usuariosRouter.put('/usuario', updateUsuario);
usuariosRouter.delete('/usuario', deleteUsuario);
usuariosRouter.post('/login',logado);


export default usuariosRouter;
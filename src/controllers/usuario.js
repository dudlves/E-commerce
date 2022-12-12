import {openDb} from '../database/configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Usuario (id INTEGER PRIMARY KEY, nome TEXT, email TEXT, senha TEXT)')
        
    }) 
}

export async function selectUsuarios(req, res) {
    openDb()
        .then(db => {
            db.all('SELECT * FROM Usuarios')
                .then(usuarios => res.json(usuarios))
        })
}

export async function insertUsuario(usuario){
    openDb().then(db=>{
        db.run('INSERT INTO Usuario (nome, email, senha) VALUES (?,?,?)',[usuario.nome, usuario.email, usuario.senha])
    }) 
}

export async function updateUsuario(req, res) {
    let usuarios = req.body;
    openDb()
        .then(db => {
            db.run('UPDATE Usuarios SET nome=?, email=?, senha=? WHERE id=?', [usuarios.nome, usuarios.email, usuarios.senha, usuarios.id])
        });
    res.json({
        "statuscode": 200
    })
}

export async function deleteUsuario(req, res) {
    let id = req.body.id;
    openDb()
        .then(db => {
            db.get('DELETE FROM Usuarios WHERE id=?', [id])
                .then(res => res)
        })
    res.json({
        "statuscode": 200
    })
}

export async function logado(req, res) {
    let email = req.body.email;
    let senha = req.body.senha;
    openDb()
        .then(db => {
            db.get('SELECT * FROM Usuarios WHERE email=? AND senha=?', [email, senha])
            .then(usuarios => usuarios?res.json(usuarios):res.json({"Error":"não possui o usuário buscado"}))
        })
}


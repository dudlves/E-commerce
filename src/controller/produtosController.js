import {openDb} from '../database/configDB.js';

export async function createTable() {
    openDb().then(db => {
        db.exec(
            'CREATE TABLE IF NOT EXISTS Produtos (id INTEGER PRIMARY KEY, titulo TEXT, descricao TEXT, valor REAL)'
        )
    })
}

export async function selectProduto(req, res) {
    openDb()
        .then(db => {
            db.all('SELECT * FROM Produtos')
                .then(produto => res.json(produto))
        })
}

export async function selectProdutoId(req, res) {
    let id = req.body.id;
    openDb()
        .then(db => {
            db.get('SELECT * FROM Produtos WHERE id=?', [id])
                .then(produto => res.json(produto))
        })
}

export async function insertProduto(req, res) {
    let produto = req.body;
    openDb()
        .then(db => {
            db.run('INSERT INTO Produtos (titulo, descricao, valor) VALUES (?,?,?)', [produto.titulo, produto.descricao, produto.valor])
    
        })
    res.json({
            "statuscode": 200
    })    
}

export async function updateProduto(req, res) {
    let produto = req.body;
    openDb()
        .then(db => {
            db.run('UPDATE Produtos SET titulo=?, descricao=?, valor=? WHERE id=?', [produto.titulo, produto.descricao, produto.valor, produto.id])
        });
    res.json({
        "statuscode": 200
    })
}

export async function deleteProduto(req, res) {
    let id = req.body.id;
    openDb()
        .then(db => {
            db.get('DELETE FROM Produtos WHERE id=?', [id])
                .then(res => res)
        })
    res.json({
        "statuscode": 200
    })
}
import {openDb} from '../database/configDB.js';

export async function createTable() {
    openDb().then(db => {
        db.exec(
            'CREATE TABLE IF NOT EXISTS Carrinho (id INTEGER PRIMARY KEY, usuario_id INTEGER,produto_id INTEGER,  status TEXT, FOREIGN KEY(usuario_id) REFERENCES Usuario(id),FOREIGN KEY(produto_id) REFERENCES Produtos(id))'
        )
    })
}

export async function selectCarrinho(req,res) {
    openDb().then(db => {
        db.all(
            'SELECT * FROM Carrinho'
        ).then(carrinho=>res.json(carrinho))
    });
}

export async function selectCarrinhoId(req,res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get(
            'SELECT * FROM Carrinho WHERE id=?',[id]
        ).then(carrinho=>res.json(carrinho))
    });
}

export async function insertCarrinho(req,res) {
    let carrinho = req.body;
    openDb().then(db => {
        db.run(
            'INSERT INTO Carrinho ( usuario_id, produto_id,status) VALUES (?,?,?)', [carrinho.usuario_id, carrinho.produto_id, carrinho.status]
        )
    });
    res.json({
        "statuscode": 200
    })
}

export async function updateCarrinho(req,res) {
    let carrinho = req.body;
    openDb().then(db => {
        db.run(
            'UPDATE Carrinho SET usuario_id=?, produto_id=?,status=? WHERE id=?', [carrinho.usuario_id,carrinho.produto_id,carrinho.status,carrinho.id]
        )
    });
    res.json({
        "statuscode": 200
    })
}

export async function deleteCarrinho(req,res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get(
            'DELETE FROM Carrinho WHERE id=?',[id]
        ).then(res=>res)
    });
    res.json({
        "statuscode": 200
    })
}
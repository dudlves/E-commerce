import {openDb} from '../database/configDB.js';

export async function createTable() {
    openDb().then(db => {
        db.exec(
            'CREATE TABLE IF NOT EXISTS Produtos (id INTEGER PRIMARY KEY, titulo TEXT, descricao TEXT, valor REAL)'
        )
    })
}


export async function insertProduto(produto) {
    openDb().then(db => {
        db.run(
            'INSERT INTO Produtos (titulo, descricao, valor) VALUES (?,?,?)', [produto.titulo, produto.descricao, produto.valor]
        )
    })
  
}
const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Word')
})

// app.post('/usuario', (req, res) => {
//     insertUsuario(req.body);
//     res.json({
//         "statucCode": 200
//     })
// })

app.listen(3000);
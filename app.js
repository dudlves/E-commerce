const express = require('express')
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Word')
})

app.post('/usuario', (req, res) => {
   console.log(req.body)
    res.json({
        "statucCode": 200
    })
})

app.listen(3000);
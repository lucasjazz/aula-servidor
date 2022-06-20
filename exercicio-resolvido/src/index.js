const express = require('express');
const app = express();

const usuarios = [
    { id: 11, nome: 'lucas', idade: 22 },
    { id: 8, nome: 'neyde', idade: 56 },
    { id: 15, nome: 'adriano', idade: 55 },
    { id: 3, nome: 'alana', idade: 26 },
    { id: 1, nome: 'edilio', idade: 31 }
];

app.get('/', (req, res) => {
    res.send('Olá!')
})
app.get('/usuarios', (req, res) => {
    res.send(usuarios)
})

app.listen(3000)
const http = require('http');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());


server.get('/products', (req, res) => {
    const productList = JSON.parse(fs.readFileSync('./products.json'));
    res.json({ productList });
    res.end();
})

server.listen(8888);


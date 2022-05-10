const http = require('http');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const path = require('path');
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.static('public'));
server.use('/img', express.static('img'));
server.use('/img/gallery', express.static('img'));

const images = [];


server.get('/products', (req, res) => {
    const productList = JSON.parse(fs.readFileSync('./products.json'));
    res.json(productList);
    res.end();
});
server.get('/gallery', (req, res) => {
    const galleryDir = fs.readdirSync('./public/img/gallery');
    if (images.length) {
        images.splice(0, images.length);
    }
    galleryDir.map(item => {
        images.push(`http://localhost:8888/img/gallery/${item}`);
    });
    res.json(images);
})



server.listen(8888);


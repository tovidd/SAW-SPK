const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 7777;

app.post('/getRecomendation', controller.getRecomendation);

app.listen(port, () => {
	console.log('server runing on port ' + port);
});

    // http://localhost:7777/getRecomendation
    // [
    //     {
    //         "nama": "Produk A", 
    //         "kadaluarsa": 1, 
    //         "harga": 2, 
    //         "jenis": 1, 
    //         "stok": 2, 
    //         "penjualan": 2
    //     }, 
    //     {
    //         "nama": "Produk B", 
    //         "kadaluarsa": 2, 
    //         "harga": 2, 
    //         "jenis": 2, 
    //         "stok": 2, 
    //         "penjualan": 1
    //     }, 
    //     {
    //         "nama": "Produk C", 
    //         "kadaluarsa": 2, 
    //         "harga": 2, 
    //         "jenis": 3, 
    //         "stok": 2, 
    //         "penjualan": 3
    //     }
    // ]
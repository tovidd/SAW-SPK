# sistem pengambilan keputusan

sistem pengambilan keputusan dalam menentukan letak produk di depan atau dibelakang
produk diletakkan paling belakang jika memiliki value paling kecil (paling laris)
karena pembeli akan berjalan melewati produk tidak laris menuju produk laris
sehingga membuat kesempatan pembeli untuk melihat-lihat produk tidak laris tersebut

run: node app.js
open postman: localhost:7777/getRecomendation
post: [{kadaluarsa, harga, jenis, stok, penjualan}]
# sistem pengambilan keputusan
##### Decision Support System - Simple Additive Weighting

<div style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sistem pengambilan keputusan dalam menentukan letak produk di depan atau dibelakang
produk diletakkan paling belakang jika memiliki value paling kecil (paling laris)
karena pembeli akan berjalan melewati produk tidak laris menuju produk laris
sehingga membuat kesempatan pembeli untuk melihat-lihat produk tidak laris tersebut. 
</div>
<br>
<br>


run: 
```
node app.js
```
<br>
open postman: 
```
localhost:7777/getRecomendation
```
<br>
post: 
```
[{kadaluarsa, harga, jenis, stok, penjualan}]
```



##### EXAMPLE

![STEP 1](https://github.com/tovidd/SAW-SPK/blob/master/example/01-run-server.png)

![STEP 2](https://github.com/tovidd/SAW-SPK/master/02-set-header?raw=true)

![STEP 3](https://github.com/tovidd/SAW-SPK/master/03-set-body-and-post-request?raw=true)

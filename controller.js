const _ = require('lodash');
const criteria = require('./criteria');

const Controller = {};

function getMinMax(value) {
	const kadaluarsaMin = _.minBy(value, 'kadaluarsa');
	const hargaMin = _.minBy(value, 'harga');
	const jenisMin = _.minBy(value, 'jenis');
	const stokMax = _.maxBy(value, 'stok');
    const penjualanMin = _.minBy(value, 'penjualan');
	return {
		kadaluarsa: kadaluarsaMin.kadaluarsa,
		harga: hargaMin.harga,
		jenis: jenisMin.jenis,
		stok: stokMax.stok,
		penjualan: penjualanMin.penjualan
	}
}

function normalisasi(matrix, maxmin) {
    // min= maxmin/matrix, max= matrix/maxmin
	matrix.kadaluarsa = maxmin.kadaluarsa / matrix.kadaluarsa; 
	matrix.harga = maxmin.harga / matrix.harga;
	matrix.jenis = maxmin.jenis / matrix.jenis;
	matrix.stok = matrix.stok / maxmin.stok;
	matrix.penjualan = maxmin.penjualan / matrix.penjualan;

	return matrix;
}

function hitungPeringkat(nilai) {
	const total = (nilai.kadaluarsa * criteria.kadaluarsa) + (nilai.harga * criteria.harga) + (nilai.jenis * criteria.jenis) + (nilai.stok * criteria.stok) + (nilai.penjualan * criteria.penjualan); 
	const result = {
		nama: nilai.nama,
		total: total
	}
	return result;
}

Controller.getRecomendation = (req, res) => {
	const post = req.body;
	const getNilaiBobot = post;
	const getMaxMin = getMinMax(getNilaiBobot);
	const normalisasiNilai = _.map(getNilaiBobot, nilai => normalisasi(nilai, getMaxMin));
	const hitungBobotPeringkat = _.map(normalisasiNilai, nilai => hitungPeringkat(nilai));
	res.json(hitungBobotPeringkat)
};

module.exports = Controller;
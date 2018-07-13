const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
	return new Promise((resolve,reject) => {
		if( !Number(base)){
			reject(`El valor de base introducido ${base} no es un numero`);
			return;
		}
		else if ( !Number(limite)){
			reject(`El valor de limite introducido ${limite} no es un numero`);
			return;
		}

		let data = '';

		for (let i = 0; i <= limite; i++) {
			data += `${base} * ${i} = ${base*i}\n`;
		}

		resolve(data);
	})
}

let crearArchivo = (base,limite) => {
	return new Promise((resolve,reject) => {
		
		if( !Number(base)){
			reject(`El valor de base introducido ${base} no es un numero`);
			return;
		}

		let data = ''

		for (let i = 0; i <= limite; i++) {
			data += `${base} * ${i} = ${base*i}\n`;
		}

		fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
			if (err) 
				reject(err);
			else
				resolve(`tabla-${base}.txt`);
		});
	})
}

module.exports = { 	listarTabla, crearArchivo }
const fs = require('fs');

let tablaMultiplica = (numero, maximo) => {

    let data = '';
    for (let i = 0; i <= maximo; i++) {
        data += `${numero} * ${i} = ${numero * i}\n`;
    }
    return data;
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`Los valores base: ${base} y limite: ${limite} deben ser numericos diferentes de null.`);
            return;
        }

        resolve(tablaMultiplica(base, limite));
    });
};

// module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor: ${base} no es un numero`);
            return;
        }
        let data = tablaMultiplica(base, limite);

        fs.writeFile(`tablas/TablaMultiplica_${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else {
                console.log(`El archivo TablaMultiplica${base}.txt creado`);
                resolve(`TablaMultiplica_${base}.txt`);

            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla: listarTabla
};
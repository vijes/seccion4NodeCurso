const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
    // requireds
    // ya uno definido que viene en node
    // const fs = require('express');// no viene propia de node , esta no esta en las librerias
    // const fs = require('./path');// estas son los que nosotros creamos en el proyecto. puede ser ./ o ../

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(response => {
                console.log('******'.rainbow);
                console.log(colors.green(`Tabla de multiplicar: ${argv.base}`));
                console.log(colors.magenta(response))
                console.log('******'.red);
            })
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then((result) => console.log(colors.rainbow(`Nombre arhcivo creado: ${result}`)))
            .catch((err) => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');



}


// let base;



// console.log(process.argv);
// let argv2 = process.argv;

// let parametro = argv[2];
// base = parametro.split('=');

// console.log(argv.base);
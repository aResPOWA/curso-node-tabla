const { crearTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

//son los argumentos de globales de la aplicación
// console.log(process.argv);


console.log(argv);
// console.log('base: yargs', argv.base);



// let base = 1;

crearTabla(argv.b, argv.i, argv.l)
    .then((e)=> {
        console.log(e, 'archivo creado');
    }).catch((e)=> {
        console.log(e);
    });

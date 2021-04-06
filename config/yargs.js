const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true
                    },
                    'i': {
                        alias: 'imprimir',
                        type: 'boolean',
                        default: false
                    },
                    'l': {
                        alias: 'limite',
                        type: 'number',
                        default: 10
                    }
                }).check((argv, options) => {
                    if(isNaN(argv.b)) {
                        throw 'La base tiene que ser un número';
                    } 

                    if(isNaN(argv.l)) {
                        throw 'El limite debe ser un número';
                    }

                    return true;
                })
                .argv;
module.exports = argv;
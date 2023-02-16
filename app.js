const {tableGenerator} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors');

console.clear()

tableGenerator(argv.b, argv.h, argv.l, argv.t)
    .then(nombreDelArchivo => console.log(nombreDelArchivo, 'creado'))
    .catch(err => console.log(err))

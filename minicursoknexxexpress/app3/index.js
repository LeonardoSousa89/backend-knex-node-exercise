let insertDados = require('./config/insert')
console.log(insertDados.post())
let getDados    = require('./config/get')
console.log(getDados.getNotWhere())
let getDadosComWhere = require('./config/getWithWhere')
console.log(getDadosComWhere.getUsingWhere())
const environment = process.env.ENV.trim(); 

console.log('Ambiente selecionado: ' + environment);

const env = require(`./environments/${environment}`);

module.exports = env;
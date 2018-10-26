const { argv } = require('yargs').options({
  address: {
    alias: 'd',
    desc: 'Address of the city for get weather',
    demand: true
  }
});

console.log(argv.address)
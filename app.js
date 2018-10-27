const { getPlaceLatLng } = require('./place/place');

const { argv } = require('yargs').options({
  address: {
    alias: 'd',
    desc: 'Address of the city for get weather',
    demand: true
  }
});

console.log(argv.address);

getPlaceLatLng(argv.address)
  .then(response => response)
  .catch(error => console.error(error));
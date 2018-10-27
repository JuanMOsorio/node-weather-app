const { getPlaceLatLng } = require('./place/place');
const { getWeather } = require('./weather/weather');

const { argv } = require('yargs').options({
  address: {
    alias: 'd',
    desc: 'Address of the city for get weather',
    demand: true
  }
});

console.log(argv.address);

getPlaceLatLng(argv.address)
  .then(({ lat, lng }) => {
    getWeather(lat, lng).then(e => console.log(e));
  })
  .catch(error => console.error(error));
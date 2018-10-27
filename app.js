const { getPlaceLatLng } = require('./place/place');
const { getWeather } = require('./weather/weather');

const { argv } = require('yargs').options({
  address: {
    alias: 'd',
    desc: 'Address of the city for get weather',
    demand: true
  }
});

let getData = async address => {
  try {
    let { lat, lng } = await getPlaceLatLng(address);
    let temp = await getWeather(lat, lng);
  
    return `The weather in ${ address } is: ${ temp }`;    
  } catch (error) {
    return `Weather no determinated in ${ address }`
  }
}

getData(argv.address)
  .then(message => console.log(message))
  .catch(error => console.log(error));


// getPlaceLatLng(argv.address)
//   .then(({ lat, lng }) => {
//     getWeather(lat, lng).
//       then(e => console.log(e));
//   })
//   .catch(error => console.error(error));
const axios = require('axios');

const { argv } = require('yargs').options({
  address: {
    alias: 'd',
    desc: 'Address of the city for get weather',
    demand: true
  }
});

console.log(argv.address);

let encodeUrl = encodeURI(argv.address);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
  .then(response => {

    const { formatted_address, geometry } = response.data.results[0];
    const { lat, lng } = geometry.location;
    console.log(JSON.stringify(formatted_address, undefined, 2));
    console.log(`Latitude: ${ lat }`);
    console.log(`Longitude: ${ lng }`);
    console.log(response.status);
  })
  .catch(err => console.log(`Error: ${ err }`));
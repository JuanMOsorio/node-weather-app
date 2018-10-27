const axios = require('axios');

const getPlaceLatLng = async address => {

  let encodeUrl = encodeURI(address);
  let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error(`No results for the city: ${ address }`);
  }

  const { formatted_address, geometry } = response.data.results[0];
  const { lat, lng } = geometry.location;

  console.log(JSON.stringify(formatted_address, undefined, 2));
  console.log(`Latitude: ${ lat }`);
  console.log(`Longitude: ${ lng }`);

  return {
    address: formatted_address,
    lat,
    lng
  }
};

module.exports = { getPlaceLatLng };

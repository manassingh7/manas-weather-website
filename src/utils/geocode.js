const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibWFuYXNzaW5naDciLCJhIjoiY2wwMDI1OGo1MDMwNDNqcnRkbGJzc3h4bCJ9.3Z9QZ8RlXl2pt55wE-Atlg&limit=1";
  
    request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unabel to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        Longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;

const mapDataBaseUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
const apiKey = "AIzaSyDxyl56_sTUDJJ1UQoztW668OEGNHjTRHo";
const address = "3288 N Genesee Rd, Flint, MI 48506";

const router = require('express').Router();

router.get('/', (req, res) => {
    getLatLngFromAddress(address)
        .then(({ latitude, longitude }) => {
            const result = fetchNearbyPlaces(latitude, longitude);
            console.log('result:', result)
            res.status(200).send(JSON.stringify(result, null, 2))
        });
})

function fetchNearbyPlaces(latitude, longitude, radius = 5000, type = "park") {
    const searchUrl = `${mapDataBaseUrl}location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${apiKey}`;
    fetch(searchUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(jsonData => {
            console.log(jsonData.results);
            return jsonData.results;
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error);
        });
}

function getLatLngFromAddress(address) {
    const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

    return fetch(geoCodeUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(jsonData => {
            const location = jsonData.results[0].geometry.location;
            const latitude = location.lat;
            const longitude = location.lng;
            return { latitude, longitude };
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error);
        });
}


module.exports = router;
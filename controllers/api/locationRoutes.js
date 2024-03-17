const mapDataBaseUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
const apiKey = "AIzaSyB-XiaRLsDxx2m_nfqQxoq4FNxhv7ggH44";

const router = require('express').Router();

router.get('/', async (req, res) => {
    const address = req.query.search;
    console.log(address);
    try {
        const { latitude, longitude } = await getLatLngFromAddress(address);
        const result = await fetchNearbyPlaces(latitude, longitude);
        console.log('Result:', result);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch nearby places' });
    }
});

async function fetchNearbyPlaces(latitude, longitude, radius = 5000, type = "park") {
    const searchUrl = `${mapDataBaseUrl}location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${apiKey}`;
    const response = await fetch(searchUrl);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const jsonData = await response.json();
    console.log(jsonData.results);
    return jsonData.results;
}

async function getLatLngFromAddress(address) {
    const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
    const response = await fetch(geoCodeUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch geocoding data');
    }
    const jsonData = await response.json();
    if (!jsonData.results || jsonData.results.length === 0) {
        throw new Error('No results found for the given address');
    }
    const location = jsonData.results[0].geometry.location;
    const latitude = location.lat;
    const longitude = location.lng;
    return { latitude, longitude };
}

module.exports = router;

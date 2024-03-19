const express = require('express');
const router = express.Router();
const {Places} = require('../../../models')

const fetch = require('node-fetch');
require('dotenv').config();
const apiKey = process.env.API_KEY;

// Middleware function for searching nearby places based on address
async function search(req, res) {
    const { address } = req.query;
 

    try {
        // Make a request to Google Maps Geocoding API
        const geocodeResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);
        const geocodeData = await geocodeResponse.json();

        // Extract latitude and longitude from geocoding response
        const { lat, lng } = geocodeData.results[0].geometry.location;

        // Make a request to Google Maps Places API for nearby places
        await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=park&key=${apiKey}`)
        .then(
            places => places.json()
        ).then(
            data => {
                data.results.forEach(object => {
                    Places.create({
                    destination: address,
                    name: object.name,
                    vicinity: object.vicinity
                    })
                })
            })
        // const placesData = await placesResponse.json()
        // .then(data => {
        //     data.results.forEach(object => {
        //     Places.create({
        //     destination: address,
        //     name: object.name,
        //     vicinity: object.vicinity
        //     })});
        // })
        .then(res.redirect(`/results/${address}`));
        // const results = placesData.results.forEach(object => {
        //    return {
        //     name: object.name,
        //     vicinity: object.vicinity
        //    };
        // });
        // Send the combined geocoding and nearby places data to the client
        // res.json({ results: placesData.results});
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
}

// Define routes
router.get('/search', search);
router.post('/search', search);

module.exports = router;

//  // Make a request to Google Maps Places API for nearby places
//  const placesResponse = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=park&key=${apiKey}`);
//  const placesData = await placesResponse.json();
//  const results = placesData.results.forEach(object => {
//     return {
//      name: object.name,
//      vicinity: object.vicinity
//     };
//  });
//  // Send the combined geocoding and nearby places data to the client
//  res.json({ results: placesData.results});
// } catch (error) {
//  console.error('Error fetching data:', error);
//  res.status(500).send('Error fetching data');
// }
// }
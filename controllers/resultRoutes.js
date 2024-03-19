const express = require('express');
const router = express.Router();
const {Places} = require('../models')

 
// app.post('/data', (req, res) => {
//     const userData = req.body;
//     console.log(userData);
//     // Passing data to a Handlebars template
//     res.render('userProfile', { user: userData });
// });

// Route handler for rendering the results page
router.get('/:address', (req, res) => {
  // Retrieve the search results data from the request query or session
  const address = req.params.address; // Assuming results are passed in the query string
    console.log("hi")
    Places.findAll({
        where:{
            destination: address
        }}).then(data => {
            console.log(data)
            res.render("results", data)}
        )
  // Render the results page and pass the search results data to the view
//   res.render('results', { results });
});
module.exports = router;
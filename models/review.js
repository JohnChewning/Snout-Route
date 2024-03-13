const express = require('express');
const router = express.Router();
const { Review } = require('../models');

// POST route to handle review submission
router.post('/reviews', async (req, res) => {
  try {
    const { content } = req.body;

    // Create a new review in the database
    const newReview = await Review.create({ content });

    // Redirect the user to the location details page or any other desired page after successfully submitting the review
    res.redirect('/location/' + newReview.location_id); // Assuming '/location/:id' is the route for displaying location details

  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { Review } = require('../models');

// GET route to render the form for editing a review
router.get('/reviews/:id/edit', async (req, res) => {
  try {
    const reviewId = req.params.id;

    // Find the review by ID in the database
    const review = await Review.findByPk(reviewId);

    if (!review) {
      return res.status(404).send('Review not found');
    }

    // Render the edit review form with the review data
    res.render('edit-review', { review });

  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// POST route to handle form submission for editing a review
router.post('/reviews/:id/edit', async (req, res) => {
  try {
    const reviewId = req.params.id;
    const { content } = req.body;

    // Find the review by ID in the database
    const review = await Review.findByPk(reviewId);

    if (!review) {
      return res.status(404).send('Review not found');
    }

    // Update the review content
    review.content = content;
    await review.save();

    // Redirect the user to the location details page or any other desired page after successfully editing the review
    res.redirect('/location/' + review.location_id); // Assuming '/location/:id' is the route for displaying location details

  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;

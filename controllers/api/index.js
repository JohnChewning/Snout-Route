const express = require('express');
const router = express.Router();
const searchMiddleware = require('./middleware/searchMiddleware');


// Import locationRoutes and reviewRoutes
const locationRoutes = require('./locationRoutes');
// const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');

// Mount locationRoutes and reviewRoutes
// router.use('/locations', locationRoutes);
// router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);

// Route handler for GET /search
router.get('/search', async (req, res, next) => {
    try {
        await searchMiddleware(req, res);
    } catch (error) {
        next(error);
    }
});

module.exports = router;

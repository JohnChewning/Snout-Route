const express = require('express');
const router = express.Router();

// Import locationRoutes and reviewRoutes
const locationRoutes = require('./locationRoutes');
// const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');

// Mount locationRoutes and reviewRoutes
router.use('/locations', locationRoutes);
// router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);

module.exports = router;

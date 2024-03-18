const express = require('express');
const router = express.Router();

// Import locationRoutes and reviewRoutes
const locationRoutes = require('./locationRoutes');
// const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');

router.get('/', (req, res) => {
    res.json({ message: 'API endpoint is working!' });
  });
  
// Mount locationRoutes and reviewRoutes
router.use('/locations', locationRoutes);
// router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);

module.exports = router;

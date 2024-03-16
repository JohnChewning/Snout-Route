const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');

// Dashboard route
router.get('/', withAuth, (req, res) => {
    // Check if the user is logged in
    if (req.session.logged_in) {
        // Render the dashboard page
        res.render('dashboard', { logged_in: true, username: req.session.username });
    } else {
        // Redirect to login page if the user is not logged in
        res.redirect('/login');
    }
});

module.exports = router;

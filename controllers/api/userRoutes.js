const router = require('express').Router();
const { User, Review, Location } = require('../../models');

// Get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: {
            exclude: ['password']
        },
        where: {
            id: req.params.id
        },
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get specific user
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            id: req.params.id
        },
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({
                    message: 'No user found with this id'
                });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
        .then(dbUserData => {

            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.logged_in = true;

            req.session.save(() => {
                res.json(dbUserData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.email
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(400).json({
                    message: 'No user with that username!'
                });
                return;
            }

            const validPassword = dbUserData.checkPassword(req.body.password);

            if (!validPassword) {
                res.status(400).json({
                    message: 'Incorrect password!'
                });
                return;
            }

            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.logged_in = true;

            req.session.save(() => {
                res.json({
                    user: dbUserData,
                    message: 'You are now logged in!'
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }

});

module.exports = router;
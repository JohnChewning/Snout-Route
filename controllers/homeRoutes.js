const sequelize = require('../config/connection');
const { User, Location, Review } = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    // Location.findAll({

    //         attributes: [
    //             'name',
    //             'address',
    //             'description'
    //         ],
    //         include: [{
    //                 model: Review,
    //                 attributes: ['content'],
    //                 include: {
    //                     model: User,
    //                     attributes: ['username']
    //                 }
    //             },

    //         ]
    //     })
    //     .then(dbPostData => {
    //         const posts = dbPostData.map(post => post.get({ plain: true }));
    //         res.render('dashboard', { posts, logged_in: req.session.logged_in });
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json(err);
    //     });
    res.render('dashboard', { logged_in: req.session.logged_in });
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/location/:id', (req, res) => {
    Location.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'name',
            'address',
            'description'
        ],
        include: [{
            model: Review,
            attributes: ['content'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            const post = dbPostData.get({ plain: true });
            console.log(post);
            res.render('single-post', { post, logged_in: req.session.logged_in });


        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
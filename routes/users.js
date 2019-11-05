const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    User.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    User.findOne({ _id: id })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post('/', (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const phone = req.body.phone;

    const user = new User({
        first_name,
        last_name,
        email,
        phone
    });

    user.save()
        .then(data => {
            console.log(`Success! ${data}`)
            res.json(data);
        })
        .catch(err => {
            console.log(`Error! ${err}`)
            res.json(err);
        });
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const phone = req.body.phone;
    User.updateOne(
        { _id: id },
        {
            $set: {
                first_name,
                last_name,
                email,
                phone
            }
        }
    )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    User.remove({ _id: id })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;
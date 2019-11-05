const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    Post.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Post.findOne({_id: id})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    
    post.save()
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
    const title = req.body.title;
    const description = req.body.description;
    Post.updateOne(
        { _id: id },
        {
            $set: {
                title,
                description
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
    Post.remove({ _id: id })
    .then(data => {
        res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;
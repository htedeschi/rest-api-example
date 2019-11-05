require('dotenv').config();
const PORT = process.env.PORT || 5000

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const mongo_options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/post', postsRoute);
app.use('/user', usersRoute);

// Listen to port {PORT}
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, mongo_options)
    .then(() => {
        console.log(`Connected to DB!`);
    })
    .catch(err => {
        console.log(`Error occurred! ${err}`);
    });

// Routes
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the example API home page! Try using the CRUD operations on the endpoints defined",
        endpoints: [
            {
                '/post': [
                    {
                        route: '/',
                        method: 'GET',
                        definition: 'Returns all posts'
                    },
                    {
                        route: '/:id',
                        method: 'GET',
                        definition: 'Returns a specific post'
                    },
                    {
                        route: '/',
                        method: 'POST',
                        definition: 'Inserts a new post',
                        body: {
                            title: {
                                'type': 'String',
                                'required': true
                            },
                            description: {
                                'type': 'String',
                                'required': true
                            },
                            date: {
                                'type': 'Date'
                            }
                        }
                    },
                    {
                        route: '/:id',
                        method: 'PATCH',
                        definition: 'Updates an existing post',
                        body: {
                            title: {
                                'type': 'String',
                                'required': true
                            },
                            description: {
                                'type': 'String',
                                'required': true
                            }
                        }
                    },
                    {
                        route: '/:id',
                        method: 'DELETE',
                        definition: 'Deletes a post',
                    }
                ]
            },
            {
                '/user': [
                    {
                        route: '/',
                        method: 'GET',
                        definition: 'Returns all users'
                    },
                    {
                        route: '/:id',
                        method: 'GET',
                        definition: 'Returns a specific user'
                    },
                    {
                        route: '/',
                        method: 'POST',
                        definition: 'Inserts a new user',
                        body: {
                            first_name: {
                                'type': 'String',
                                'required': true
                            },
                            last_name: {
                                'type': 'String',
                                'required': true
                            },
                            email: {
                                'type': 'String',
                                'required': true
                            },
                            phone: {
                                'type': 'String'
                            }
                        }
                    },
                    {
                        route: '/:id',
                        method: 'PATCH',
                        definition: 'Updates an existing user',
                        body: {
                            first_name: {
                                'type': 'String',
                                'required': true
                            },
                            last_name: {
                                'type': 'String',
                                'required': true
                            },
                            email: {
                                'type': 'String',
                                'required': true
                            },
                            phone: {
                                'type': 'String',
                                'required': true
                            }
                        }
                    },
                    {
                        route: '/:id',
                        method: 'DELETE',
                        definition: 'Deletes an user',
                    }
                ]
            }
        ]
    });
})
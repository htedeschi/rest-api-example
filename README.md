# rest-api-example

[View and use this project in heroku](https://rest-api-example-node.herokuapp.com/)


```json

{
  "message": "Welcome to the example API home page! Try using the CRUD operations on the endpoints defined",
  "endpoints": [
    {
      "/post": [
        {
          "route": "/",
          "method": "GET",
          "definition": "Returns all posts"
        },
        {
          "route": "/:id",
          "method": "GET",
          "definition": "Returns a specific post"
        },
        {
          "route": "/",
          "method": "POST",
          "definition": "Inserts a new post",
          "body": {
            "title": {
              "type": "String",
              "required": true
            },
            "description": {
              "type": "String",
              "required": true
            },
            "date": {
              "type": "Date"
            }
          }
        },
        {
          "route": "/:id",
          "method": "PATCH",
          "definition": "Updates an existing post",
          "body": {
            "title": {
              "type": "String",
              "required": true
            },
            "description": {
              "type": "String",
              "required": true
            }
          }
        },
        {
          "route": "/:id",
          "method": "DELETE",
          "definition": "Deletes a post"
        }
      ]
    },
    {
      "/user": [
        {
          "route": "/",
          "method": "GET",
          "definition": "Returns all users"
        },
        {
          "route": "/:id",
          "method": "GET",
          "definition": "Returns a specific user"
        },
        {
          "route": "/",
          "method": "POST",
          "definition": "Inserts a new user",
          "body": {
            "first_name": {
              "type": "String",
              "required": true
            },
            "last_name": {
              "type": "String",
              "required": true
            },
            "email": {
              "type": "String",
              "required": true
            },
            "phone": {
              "type": "String"
            }
          }
        },
        {
          "route": "/:id",
          "method": "PATCH",
          "definition": "Updates an existing user",
          "body": {
            "first_name": {
              "type": "String",
              "required": true
            },
            "last_name": {
              "type": "String",
              "required": true
            },
            "email": {
              "type": "String",
              "required": true
            },
            "phone": {
              "type": "String",
              "required": true
            }
          }
        },
        {
          "route": "/:id",
          "method": "DELETE",
          "definition": "Deletes an user"
        }
      ]
    }
  ]
}
```

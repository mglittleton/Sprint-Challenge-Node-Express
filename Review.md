# Review Questions

## What is Node.js?
Node.js is a runtime environment to run javascript applications without using a browser. It allows us to think of javascript as more than just a web app language.

## What is Express?
Express runs on top of Node.js, similarly to React to give us added functionality and allow us to have middleware and routing capabilities.

## Mention two parts of Express that you learned about this week.
Middleware, which allows us to do useful things with the incoming requests to our server before we respond to it, and routing, which allows us to organize our handlers into requests made to certain sites.

## What is Middleware?
Answered above in general, the middleware allows us to perform certain actions with the requests before we need to respond. We can adapt the strings to best fit the form we want the data to take, we can monitor the types or methods of the requests, or we can add security to the data before the requests are made.

## What is a Resource?
Everything that can be given back to the user after a request is considered a resource. 

## What can the API return to help clients know if a request was successful?
This is a weird question, but I think you're looking for the phrase "status codes". A status code can provide the information that the server can use to direct the user. 200 = OK, 201 = added, 500 = error, 404, not found, etc.

## How can we partition our application into sub-applications?
The apps should have components that are modular and are exported from their files using module.exports and imported to the main app via require.

## What is express.json() and why do we need it?
That is the middleware provided by Express that allows us to read the data presented to us in the request.
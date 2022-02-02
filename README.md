### Express Route Code Challenges

### General information

*metalArray.js* - Using app.get() we created the route that sends back the array of metal building materials.

*battlefieldObject.js* - Using app.get() and req.params.name we created a route that sends back the battlefield object.

*currencies.js* - Using app.put(), req.params.name and req.query we updated array of countries that use certain currency. The :name param represents the currency name in the currencies object. The route handler replaces the countries array of the correct single-currency object with an updated array from the query. It sends the updated array as a response.

*soups.js*  - Using app.post(), we created a route that adds a new soup name to the soups array from the name property of the req.query object. It also set a status code  201 for ‘Created’.

*puddingFlavors.js* - Using app.delete(), we deleted the correct pudding and send a 204 response if the pudding name exists and send a 404 response if it does not.

*sauceRouter* - Using express.Router(), we mounted the sauceRouter with app.use so that a GET /sauces request sends back the sauces array.

*mountainsRouter.js* - Using express.Router(), we created two routers that send back the array in response to GET request. app.use() mounts the routers at their specific base paths, and .get() handlers were created for each router at their base path, '/'.

### Tools used 

+ JavaScript
+ VS
+ Express
+ Node
+ Command line

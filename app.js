const express = require('express');
const graphqlHTTP = require('express-graphql'); //middleware single route
const GraphQLSchema = require('./schema/schema');

const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema: GraphQLSchema,
	})
);

app.listen(4000, () => console.log('server running on port 4000'));

const express = require('express');
const graphqlHTTP = require('express-graphql'); //middleware single route
const GraphQLSchema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://test:test@cluster0-1y3yt.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
	console.log('Conectado ao banco');
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema: GraphQLSchema,
		graphiql: true,
	})
);

app.listen(4000, () => console.log('server running on port 4000'));

const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;

const BookType = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		author: {
			type: Author,
			resolve(parent, args) {
				//busca para achar no banco
			},
		},
	}),
});

const Author = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				//busca no banco
			},
		},
	}),
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// Código para pegar dado vindo do banco
			},
		},
		author: {
			type: Author,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				//busca no banco
			},
		},
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				// return books;
			},
		},
		authors: {
			type: new GraphQLList(Author),
			resolve(parent, args) {
				// return authors;
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});

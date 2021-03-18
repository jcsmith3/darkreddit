const { gql } = require('apollo-server-express');
const typeDefs = gql `
type Book {
		title: String
		author: String
		}
`;
module.exports = typeDefs;
//# sourceMappingURL=schema.js.map
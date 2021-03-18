const { gql } = require('apollo-server-express')

  module.exports = {
    typeDefs: gql`
      type Query {
        post(id: ID): Post!
      }

      type Post {
        id: ID!
        title: String!
        body: String!
        author: Int!
      }

      type Mutation {
        addPost( data: NewPostInput! ): Post! 
        update( data: UpdatePostInput! ): Post!
        delete( id: Int! ): Post!
      }

      input NewPostInput {
        title: String!
        body: String!
        author: Int!
      }

      input UpdatePostInput {
        title: String
        body: String
      }
  `
}

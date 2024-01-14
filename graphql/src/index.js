const { graphqlHTTP } = require('express-graphql')
const express = require('express')
const { GraphQLSchema } = require('graphql')

const app = express()

// Imports GraphQL schema endpoints and types.
const QueryType = require('./graphql/query')
const MutationType = require('./graphql/mutation')

// Creates GraphQL schema.
const graphQLSchema = new GraphQLSchema({ query: QueryType, mutation: MutationType })

// GraphQL middleware/route set.
app.use('/graphql', graphqlHTTP(
    {
        schema: graphQLSchema, // Sets GraphQL schema.
        graphiql: true // Starts GraphiQL.
    }
))

// Simple HTTP root route.
app.get('/', (req, res) => {
    res.sendFile(require("path").join(__dirname + "/index.html"))
})

// Server start.
const PORT = 6000
app.listen(PORT, () => {
    console.log(`GraphQL test server running on localhost:${PORT}/graphql`)
})

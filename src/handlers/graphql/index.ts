import fs from 'fs';
import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from "@graphql-tools/schema"

/** QUERIES */

/** MUTATIONS */

import Query from './queries'
import Mutation from './mutations'

const typeDefs = fs.readFileSync(`${__dirname}/schema.graphql`, {
  encoding: 'utf-8'
});
const resolvers = {
  Query,
  Mutation,
}
const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefs],
});

export default createYoga({ schema })
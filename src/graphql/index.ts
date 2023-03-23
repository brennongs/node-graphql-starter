import fs from 'fs';
import { createServer } from '@graphql-yoga/node';
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

export default createServer({ schema })
import fs from 'fs';
import { createServer } from '@graphql-yoga/node';
import { makeExecutableSchema } from "@graphql-tools/schema"

import Link from '~/lib/links/model.d'

import Query from './queries'
import Mutation from './mutations'

const typeDefs = fs.readFileSync(`${__dirname}/schema.graphql`, {
  encoding: 'utf-8'
});
const resolvers = {
  Query,
  Mutation,
  Link: {
    id: (parent: Link) => parent.id,
    description: (parent: Link) => parent.description,
    url: (parent: Link) => parent.url,
  },
}
const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefs],
});

export default createServer({ schema })
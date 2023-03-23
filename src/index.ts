import 'module-alias/register'
import express from 'express';

import graphql from './graphql';

const server = express();

server.use('/graphql', graphql);

server.get('/health', (_, response) => {
  response.status(200).send('🤙');
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`[READY]: http://localhost:${PORT}`)
})
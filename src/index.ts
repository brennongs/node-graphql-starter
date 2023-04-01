import { createServer } from 'http';

import 'module-alias/register'

import handlers from './handlers';

const server = createServer();

server.on('request', (request, response) => {
  if (
    request.url &&
    Object.keys(handlers).includes(request.url)
  ) {
    handlers[request.url](request, response)
  } else {
    response.writeHead(404)
    response.end(`cannot ${request.method} ${request.url}`)
  }
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`[READY]: http://localhost:${PORT}`)
})
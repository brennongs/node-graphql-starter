import { IncomingMessage, ServerResponse } from 'http';

export default function main(
  _: IncomingMessage,
  response: ServerResponse
): void {
  response.writeHead(200)
  response.end('okay!')
}
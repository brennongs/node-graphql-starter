import { RequestListener } from 'http';

import health from './health'
import graphql from './graphql';

export default {
  '/health': health,
  '/graphql': graphql
} as { [key: string]: RequestListener }
import LinkProxy from '~/adapters/data/proxies/Link/.d';

import Link from '../model.d'

import Contract from './.d'

export default class CreateLink implements Contract {
  constructor(
    private LinkProxy: LinkProxy
  ) { }

  execute(payload: Omit<Link, 'id'>): Promise<Link> {
    if (!(payload.url)) {
      throw new Error('[422] invalid payload; missing url');
    }

    return this.LinkProxy.create(payload);
  }
}
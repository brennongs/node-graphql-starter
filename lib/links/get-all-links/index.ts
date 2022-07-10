import LinkProxy from '~/adapters/data/proxies/Link/.d'

import Link from '../model.d'

import Contract from './.d'

export default class GetAllLinks implements Contract {
  constructor(
    private LinkProxy: LinkProxy
  ) { }

  execute(): Promise<Link[]> {
    return this.LinkProxy.getAll()
  }
}

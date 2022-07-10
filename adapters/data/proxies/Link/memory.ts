import Link from '~/lib/links/model.d'

import Contract from './.d'


const DEFAULT_LINK: Link = {
  id: 0,
  description: 'The easiest way of setting up a GraphQL server',
  url: 'https://graphql-yoga.com'
}
const ALL_LINKS = [DEFAULT_LINK]

export default class MemoryLinkProxy implements Contract {
  async getAll(): Promise<Link[]> {
    return ALL_LINKS
  }

  async getById(id: number): Promise<Link>  {
    if (!id) throw new Error('[422] invalid inputs');

    const thisLink = ALL_LINKS.find(link => link.id === id);

    if (!thisLink) throw new Error('[404] link not found');

    return thisLink;
  }

  async create(link: Omit<Link, 'id'>): Promise<Link> {
    if (!(link.description && link.url))
      throw new Error('[422] invalid inputs');

    const newLink = Object.assign({}, link, { id: ALL_LINKS.length })

    ALL_LINKS.push(newLink);

    return newLink;
  }

  async update(id: number, changes: Partial<Link>): Promise<Link> {
    if (!id && !(
      changes.id ||
      changes.description ||
      changes.url
    )) throw new Error('[422] invalid inputs');

    const thisLinkIndex = ALL_LINKS.findIndex(link => link.id === id)

    if (thisLinkIndex < 0) throw new Error('[404] link not found');

    const newLink = Object.assign({}, ALL_LINKS[thisLinkIndex], changes)

    ALL_LINKS[thisLinkIndex] = newLink;

    return newLink;
  }

  async delete(id: number): Promise<Link> {
    if (!id) throw new Error('[422] invalid inputs');

    const thisLinkIndex = ALL_LINKS.findIndex(link => link.id === id);

    if (thisLinkIndex < 0) throw new Error('[404] link not found')

    const deleted = ALL_LINKS.splice(thisLinkIndex, 1).pop();

    return deleted!;
  }
}
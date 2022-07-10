import Link from '~/lib/links/model.d'


export default interface LinkProxy {
  getById(id: number): Promise<Link>
  getAll(): Promise<Link[]>
  create(link: Omit<Link, 'id'>): Promise<Link>
  delete(id: number): Promise<Link>
  update(id: number, changes: Partial<Link>): Promise<Link>
}
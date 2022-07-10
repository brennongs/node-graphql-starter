import Link from '~/models/Link';

export default interface GetAllLinks {
  execute(): Promise<Link[]>
}
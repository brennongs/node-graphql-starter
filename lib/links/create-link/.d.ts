import Link from "~/models/Link.d";

export default interface CreateLink {
  execute(payload: Omit<Link, 'id'>): Promise<Link>
}
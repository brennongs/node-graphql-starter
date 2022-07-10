import GetAllLinks from "~/lib/links/get-all-links";
import PrismaLinkProxy from "~/adapters/data/proxies/Link/prisma";

export default function() {
  return new GetAllLinks(new PrismaLinkProxy())
}
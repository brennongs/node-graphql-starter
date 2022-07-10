import PrismaLinkProxy from "~/adapters/data/proxies/Link/prisma";

import CreateLink from "~/lib/links/create-link";

export default function() {
  return new CreateLink(new PrismaLinkProxy());
}
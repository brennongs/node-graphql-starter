import makeCreateLink from '~/adapters/factories/links/create-link-factory'

interface Args {
  url: string;
  description: string | null;
}

export default function(
  _: unknown,
  {
    url,
    description = null
  }: Args
) {
  return makeCreateLink().execute({ url, description })
}
import makeGetAllLinks from '~/adapters/factories/links/get-all-links-factory'

export default function(
  parent: unknown,
  args: {}
) {
  return makeGetAllLinks().execute() 
}
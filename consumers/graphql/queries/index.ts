import getAllLinks from './links/get-all-links'

const Query = {
  info: () => 'This is the API of a Hackernews Clone',
  feed: getAllLinks
}

export default Query

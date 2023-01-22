type Link = {
  id: string
  url: string
  description: string
}

// 2
const links: Link[] = [
  {
    id: 'link-0',
    url: 'https://graphql-yoga.com',
    description: 'The easiest way of setting up a GraphQL server',
  },
]

export const resolver = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  Mutation: {
    postLink: (parent: unknown, args: { description: string; url: string }) => {
      // 1
      const idCount = links.length

      // 2
      const link: Link = {
        id: `link-${idCount}`,
        description: args.description,
        url: args.url,
      }

      links.push(link)

      return link
    },
  },
}

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const redirectTemplate = path.resolve('src/templates/redirect.js')
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allMarkdownRemark(limit: $limit) {
          edges {
            node {
              frontmatter {
                slug
                title
                description
                private
              }
              html
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges
      .filter(edge => !edge.node.frontmatter.private)
      .forEach(edge => {
        createPage({
          // Path for this page — required
          path: `post/${edge.node.frontmatter.slug}`,
          component: blogPostTemplate,
          context: {
            html: edge.node.html,
            title: edge.node.frontmatter.title,
            description: edge.node.frontmatter.description,
          },
        })
      })
  })
}

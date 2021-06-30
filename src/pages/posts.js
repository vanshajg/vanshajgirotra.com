
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Wrapper from '../components/wrapper'
import { Postpreview } from '../components/postpreview'

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
              tags
              description
              title
              private
            }
            timeToRead
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <h1 className="pt-24 text-2xl underline">Posts</h1>
      <div className="mt-12">
        {data.allMarkdownRemark.edges.filter(edge => !edge.node.frontmatter.private).map(({ node }, id) => <Postpreview node={node} key={id} />)}
      </div>
    </Wrapper>
  )
}

export default Posts

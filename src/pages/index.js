import React from "react"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
import Intro from "../components/home/intro"
// import About from '../components/home/about'
import { Navbar } from "../components/navbar"
import { Skills } from '../components/home/skills'
import Wrapper from '../components/wrapper'
// import Skills from '../components/home/skills'
// import { Helmet } from 'react-helmet'
import { Postpreview } from '../components/postpreview'
import { graphql, Link, useStaticQuery } from "gatsby"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 5) {
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
      <Intro />
      {/* <About /> */}
      {/* <Skills /> */}
      <div className="mt-12">
        {data.allMarkdownRemark.edges.filter(edge => !edge.node.frontmatter.private).map(({ node }, id) => <Postpreview node={node} key={id} />)}
      </div>
      <div className="mt-8">
        {/* <Link to="/posts" className="underline text-indigo-500">All posts</Link> */}
      </div>
    </Wrapper>
  )
}

export default IndexPage

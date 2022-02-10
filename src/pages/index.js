import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

// import Layout from "../components/layout"
import SEO from '../components/seo'
import Intro from '../components/home/intro'
// import About from '../components/home/about'
import { Navbar } from '../components/navbar'
import Wrapper from '../components/wrapper'
// import { Helmet } from 'react-helmet'
import { Postpreview } from '../components/postpreview'
import { graphql, Link, useStaticQuery } from 'gatsby'
import contacts_data from '../components/home/intro/contacts_data'

const IndexPage = () => {
  return (
    <Wrapper>
      <Intro />
      {/* <SEO /> */}
      <div className="md:text-4xl text-center flex justify-center items-center pt-4">
        Find me on: &nbsp;
        {contacts_data.map(({ icon: Icon, index, url }) => (
          <OutboundLink
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            key={index}
            className="md:pl-4 pl-2"
          >
            <Icon />
          </OutboundLink>
        ))}
      </div>
    </Wrapper>
  )
}

export default IndexPage

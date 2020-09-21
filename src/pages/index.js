import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/home/intro"
import Skills from '../components/home/skills'
import { Helmet } from 'react-helmet'

const IndexPage = () => (
  <Layout route="~">
    <SEO title="~" />
    <Intro />
    <Skills />
    {/* <InterestCarousel /> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    <Helmet>
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" as="style" onLoad="this.onload=null;this.rel='stylesheet'" ></link>
    </Helmet>
  </Layout>
)

export default IndexPage

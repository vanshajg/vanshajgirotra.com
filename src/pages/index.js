import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/home/intro"
import InterestCarousel from "../components/home/interest-carousel"
import Skills from '../components/home/skills'

const IndexPage = () => (
  <Layout route="~">
    <SEO title="~" />
    <Intro />
    <Skills />
    {/* <InterestCarousel /> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage

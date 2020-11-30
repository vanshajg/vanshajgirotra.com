import React from "react"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
import Intro from "../components/home/intro"
import { Navbar } from "../components/navbar"
import Wrapper from '../components/wrapper'
// import Skills from '../components/home/skills'
// import { Helmet } from 'react-helmet'

const IndexPage = () => (
  <Wrapper>
    <Navbar />
    <Intro />
  </Wrapper>

)

export default IndexPage

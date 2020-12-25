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

const IndexPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Intro />
      {/* <About /> */}
      {/* <Skills /> */}
    </Wrapper>
  )
}

export default IndexPage

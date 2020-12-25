import React from 'react'
import Wrapper from '../components/wrapper'
import { Navbar } from "../components/navbar"
import './blog.styles.css'

const BlogPost = ({ pathContext: { html, title, description } }) => {

  return (
    <Wrapper>
      <Navbar />
      <div className="min-h-screen pt-8 md:pt-12 px-5 md:px-32">
        <h1 className="text-4xl pt-20 mb-2">{title}</h1>
        <p className="mb-12"> {description}</p>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Wrapper>
  )

}

export default BlogPost
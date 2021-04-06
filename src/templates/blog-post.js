import React from 'react'
import Wrapper from '../components/wrapper'
import './blog.styles.css'

const BlogPost = ({ pathContext: { html, title, description } }) => {

  return (
    <Wrapper>
      <div className="pt-8 px-5">
        <h1 className="text-4xl pt-20 mb-2">{title}</h1>
        <p className="mb-12"> {description}</p>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Wrapper>
  )

}

export default BlogPost
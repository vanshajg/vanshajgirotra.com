import React from "react"
import { PageProps, Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import "./styles/intro.scss";

const Intro = (props: PageProps) => {

  const data = useStaticQuery(graphql`
    query {
      profilePicture: file(relativePath: { eq: "profile_photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <h1>
        Hey, I'm Vanshaj Girotra
      </h1>
      <div className="intro grid">
        <div className="intro__image" >
          <Img fluid={data.profilePicture.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
          <figcaption className="intro__image__text">This isn't me</figcaption>
        </div>
        <div className="intro__text">
          <p>I'm a <b>software developer</b> working at <a href="https://practo.com" rel="noreferrer noopener" target="_blank">Practo</a> from <b>Delhi, India.</b></p>
          <p>
            I work with React.js and javascript primarily, but you can find more about my toolbox <Link to="/page-2">here</Link>.</p>
        </div>
      </div>
    </>
  );
}

export default Intro;
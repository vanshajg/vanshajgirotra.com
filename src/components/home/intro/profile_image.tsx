import React, { useState } from "react"
import { PageProps, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const ProfileImage = (props: PageProps) => {
  const [is_image_leaning_left, toggleImageLean] = useState(true);

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

  const onPhotoClick = (): void => {
    toggleImageLean(!is_image_leaning_left);
  }

  const image_class = `intro__image ${is_image_leaning_left ? '' : 'clicked'}`

  return (
    <div className={image_class} onClick={onPhotoClick} >
      <Img fluid={data.profilePicture.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
      <figcaption className="intro__image__text">This is me</figcaption>
    </div>
  );
}

export default ProfileImage
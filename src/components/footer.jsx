import React from "react"
import { PageProps, useStaticQuery, graphql } from "gatsby"

const getFormattedImages = (images, images_meta) => {
  const formatted_image_obj = {}
  images.forEach(image => {
    formatted_image_obj[image.node.name] = {
      src: image.node.src,
      id: image.node.id,
      name: image.node.name
    }
  })
  images_meta.forEach(image_meta => {
    formatted_image_obj[image_meta.node.name]['url'] = image_meta.node.url
  })

  const formatted_image_array = []
  for (let key in formatted_image_obj)
    formatted_image_array.push({ ...formatted_image_obj[key] })

  return formatted_image_array
}

const Footer = (props) => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
         allFile(filter: {
          relativeDirectory: {
            eq: "social",
          }
        }) {
          images: edges {
            node {
              id
              src: publicURL
              name
            }
          }
        }
        allSocialJson {
          images_meta: edges {
            node {
              name
              url
            }
          }
        }
      }
    `
  )

  const { allFile: { images }, allSocialJson: { images_meta } } = data

  const formatted_images = getFormattedImages(images, images_meta)

  return (
    <footer className="footer">
      {
        formatted_images.map((image) => (
          <a href={image.url} target="_blank" rel="nofollow noopener" key={image.id}>
            <img key={image.id} src={image.src} alt={image.name} />
          </a>
        ))
      }
      <div>
        © {new Date().getFullYear()} {}, Built with
      {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  );
}

export default Footer

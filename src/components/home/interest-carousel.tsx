import React from "react"
import { useStaticQuery, graphql, PageProps } from "gatsby"

import './styles/interest-carousel.scss'

const InterestCarousel = (props: PageProps) => {
  const data = useStaticQuery(graphql`
    query {
      allInterestsJson {
        nodes {
          value
        }
      }
    }
  `);

  const interest_array: Array<String> = data.allInterestsJson.nodes.map((val_obj: { value: String; }) => val_obj.value)
  console.log(interest_array);

  return (
    <div className="interest-carousel__container">
      <span><span className="interest-carousel__text">I like </span><ul className="interest-carousel__list">{interest_array.map((value, idx) => <li className="interest-carousel__list__item" key={idx}>{value}</li>)}</ul></span>
    </div>
  )

}

export default InterestCarousel
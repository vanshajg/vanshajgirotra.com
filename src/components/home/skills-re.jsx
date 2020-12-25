// import React from 'react'
// import { useStaticQuery, graphql } from "gatsby"

// import './styles/skills.scss'

// const Skills = () => {
//   const data = useStaticQuery(
//     graphql`
//     query {
//       allFile(filter:{relativeDirectory:{eq:"skill-assets"}}) {
//         edges {
//           node {
//             publicURL
//             name
//           }
//         }
//       }
//      allSkillsJson {
//        edges {
//          node {
//            name
//          }
//        }
//      } 
//     }
//   `);

//   const skill_img_obj = {}
//   data.allFile.edges.forEach(img_node => {
//     skill_img_obj[img_node.node.name] = img_node.node.publicURL
//   });

//   const skill_order = data.allSkillsJson.edges.map(skill_node => {
//     if (!skill_img_obj[skill_node.node.name])
//       return null

//     return {
//       name: skill_node.node.name,
//       url: skill_img_obj[skill_node.node.name]
//     }

//   }).filter(data => !!data)


//   return (
//     <div className="interest">
//       <h2> My toolbox of skills </h2>
//       <p>A set of tools and technologies I am comfortable with and competent in:</p>
//       <div className="interest__carousel">
//         {
//           skill_order.map((skill, idx) => <div key={idx} className="text-align--center">
//             <img src={skill.url} className="interest__carousel__img" alt={skill.name} /><p className="u-t--capitalize">{skill.name}</p>
//           </div>
//           )
//         }
//       </div>
//     </div>
//   )
// }

// export default Skills

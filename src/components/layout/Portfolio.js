import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Components
import SectionContainer from "../UI/SectionContainer"
import SectionTitle from "../UI/SectionTitle"
import SectionDescription from "../UI/SectionDescription"
import Bold from "../UI/Bold"
import Project from "../layout/Project"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            technologies
            repoUrl
            siteUrl
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <SectionContainer centerText id="portfolio">
      <SectionTitle>Portfolio</SectionTitle>
      <SectionDescription>
        Some of my recent <Bold>work</Bold>
        {projects.map((project, i) => (
          <Project data={project} index={i} key={i} />
        ))}
      </SectionDescription>
    </SectionContainer>
  )
}

export default Portfolio

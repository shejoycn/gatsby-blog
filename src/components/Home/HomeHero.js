import React from "react"
import { useStaticQuery, graphql, Link, Image } from "gatsby"
import Img from "gatsby-image"

export default function HomeHero() {
  const query = graphql`
    {
      contentfulHomeHero {
        heroImage {
          fixed {
            src
          }
        }
        heroHeading
        heroSubheading
        heroButtonText
        heroButtonSubtext
        heroSubheading2 {
          heroSubheading2
        }
      }
    }
  `

  const data = useStaticQuery(query)

  console.log(data)
  const {
    contentfulHomeHero: {
      heroImage: {
        fixed: { src },
      },
      heroHeading,
      heroSubheading,
      heroButtonText,
      heroButtonSubtext,
      heroSubheading2: { heroSubheading2 },
    },
  } = data

  console.log(src)
  return (
    <div id="adbox">
      <div className="clearfix">
        {/* <Image fluid={fluid}></Image> */}
        <img src={src} alt="Img" height="342" width="368" />
        <div>
          <h1>{heroHeading}</h1>
          <h2>{heroSubheading}</h2>
          <p>
            {heroSubheading2}{" "}
            <span>
              <Link to="/" className="btn">
                {heroButtonText}
              </Link>
              <b>{heroButtonSubtext}</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

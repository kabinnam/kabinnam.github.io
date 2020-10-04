import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Nothing to see here, yet 😃</p>
    {/* <p>{data.site.siteMetadata.description}</p>
    <ul>
      {data.allFile.edges.map(({ node }) => (
        <li key={node.name}>
          <Link to={node.name}>
            {node.childMarkdownRemark.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul> 
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
export const query=graphql`
{
  site {
    siteMetadata {
      title
      description
    }
  }

  allFile(filter: {
    sourceInstanceName: {
      eq: "blog"
    }
  }){
    edges {
        node{
            relativePath
            sourceInstanceName
            name
            childMarkdownRemark{
              frontmatter{
                title
              }
            }
        }
    }
  }
}
`

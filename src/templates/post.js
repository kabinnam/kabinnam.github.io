import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"

const Post = ({ data }) => {
    const title = data.file.childMarkdownRemark ? data.file.childMarkdownRemark.frontmatter.title : "No Title"
    const html = data.file.childMarkdownRemark ? data.file.childMarkdownRemark.html : null

    return (
        <Layout>
            <SEO title={title} />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: html}} />
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export const query=graphql`
query($relativePath:String)
{
    file(relativePath: {eq: $relativePath}) {
        childMarkdownRemark {
            frontmatter{
                title
            }
            html
        }
    }
}
`
export default Post
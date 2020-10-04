/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(`
        {
            allFile{
                edges {
                    node{
                        relativePath
                        sourceInstanceName
                        name
                    }
                }
            }
        }
    `)

    result.data.allFile.edges.forEach(({ node }) => {
        actions.createPage({
            path: node.name,
            component: require.resolve('./src/templates/post.js'),
            context: {
                relativePath: node.relativePath
            }
        })
    })
}
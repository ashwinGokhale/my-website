module.exports = {
    siteMetadata: {
        title: `Ashwin Gokhale`,
        url: `https://www.ashwingokhale.me`,
        description: `Ashwin Gokhale's personal website`,
        language: `en`,
        author: `Ashwin Gokhale`,
        basePath: `/`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `sections`,
                path: `${__dirname}/src/sections`
            }
        },
        `gatsby-plugin-mdx`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-theme-ui`
    ]
};

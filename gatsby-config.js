module.exports = {
    siteMetadata: {
        title: 'Ashwin Gokhale',
        siteUrl: 'https://www.ashwingokhale.me',
        description: "Ashwin Gokhale's personal website",
        language: 'en',
        author: 'Ashwin Gokhale',
        basePath: '/'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-typescript',
        'gatsby-plugin-emotion',
        'gatsby-plugin-theme-ui',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-robots-txt',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-145422100-1'
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Ashwin Gokhale Personal Website`,
                short_name: `Ashwin Gokhale`,
                start_url: `/`,
                background_color: `#141821`,
                theme_color: `#ed64a6`,
                display: `standalone`,
                icon: './static/favicon.ico'
            }
        }
    ]
};

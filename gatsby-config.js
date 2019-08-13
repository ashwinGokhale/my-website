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
        },
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                runtimeCaching: [
                    {
                        // Use cacheFirst since these don't need to be revalidated (same RegExp
                        // and same reason as above)
                        urlPattern: /(\.js$|\.css$|static\/)/,
                        handler: `networkFirst`
                    },
                    {
                        // Add runtime caching of various other page resources
                        urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
                        handler: `staleWhileRevalidate`
                    },
                    {
                        // Google Fonts CSS (doesn't end in .css so we need to specify it)
                        urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
                        handler: `staleWhileRevalidate`
                    }
                ]
            }
        }
    ]
};

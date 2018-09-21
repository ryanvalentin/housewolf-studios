module.exports = {
    siteMetadata: {
        title: 'Housewolf Studio',
    },
    plugins: [
        // Gatsby React Helmet Plugin
        'gatsby-plugin-react-helmet',

        // Gatsby Manifest Plugin
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/housewolf-icon.png', // This path is relative to the root of the site.
            },
        },

        // Gatsby Offline Plugin
        'gatsby-plugin-offline',

        // Gatsby Filesystem Source
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: 'posts',
            },
        },

        // Gatsby Markdown Transformer
        'gatsby-transformer-remark',
    ],
};

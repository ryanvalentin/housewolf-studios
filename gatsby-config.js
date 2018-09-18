module.exports = {
    siteMetadata: {
        title: 'Housewolf Studio',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
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
        'gatsby-plugin-offline',
    ],
};

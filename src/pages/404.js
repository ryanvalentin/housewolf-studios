import React from 'react';
import Layout from '../components/layout';
import GatsbyLink from 'gatsby-link';

const NotFoundPage = () => (
    <Layout>
        <h1>Nothing found</h1>
        <p>This page doesn&#39;t exist. Maybe try <GatsbyLink>Home</GatsbyLink>?</p>
    </Layout>
);

export default NotFoundPage;

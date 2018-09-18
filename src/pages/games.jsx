import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Games = ({ location }) => (
    <Layout location={location}>
        <h1>Games</h1>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default Games;

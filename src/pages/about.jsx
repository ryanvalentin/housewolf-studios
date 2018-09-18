import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const About = ({ location }) => (
    <Layout location={location}>
        <h1>About</h1>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default About;

import React from 'react';
import { Link } from 'gatsby';
import { Segment } from 'semantic-ui-react';
import Layout from '../components/Layout';

const About = ({ location }) => (
    <Layout location={location}>
        <Segment
            basic={true}
            style={{
                margin: '7em 0',
            }}
        >
            <h1>About</h1>
            <Link to="/">Go back to the homepage</Link>
        </Segment>
    </Layout>
);

export default About;

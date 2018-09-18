import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import { Header, Segment, Container, Button } from 'semantic-ui-react';

import KnightsSkyHeroImage from '../images/knights-sky-hero.jpg';

const IndexPage = ({ location }) => (
    <Layout location={location} secondaryHeader={true}>
        <Segment
            inverted={true}
            vertical={true}
            textAlign="center"
            style={{
                minHeight: 700,
                padding: '20rem 0',
                backgroundImage: `url(${KnightsSkyHeroImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}

        >
            <Container
                text={true}
            >
                <Header
                    as="h1"
                    content="Knight's Sky"
                    inverted={true}
                />
                <Header
                    as="h3"
                    content="Survive the deadly skies of Western Europe in the Luftwaffe."
                    inverted={true}
                />
                <Button
                    as={Link}
                    primary={true}
                    size="huge"
                    to="/games"
                >
                    Learn More
                </Button>
            </Container>

        </Segment>

    </Layout>
);

export default IndexPage;

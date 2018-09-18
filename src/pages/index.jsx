import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import { Header, Segment, Container, Button } from 'semantic-ui-react';

const IndexPage = ({ location }) => (
    <Layout location={location}>
        <Segment
            inverted={true}
            textAlign="center"
            style={{ minHeight: 700, padding: '20rem 0' }}
            vertical={true}
        >
            <Container text={true}>
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

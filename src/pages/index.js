import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { Header, Segment, Container } from 'semantic-ui-react';

import KnightsSkyHeroImage from '../images/knights-sky-hero.jpg';
import NewsFeed from '../components/newsfeed';
import Social from '../components/social';

const IndexPage = ({ data, location }) => (
    <Layout location={location} secondaryHeader={true}>

        {/* Hero Image */}
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
                    content="Survive the deadly skies of Europe in the Luftwaffe."
                    inverted={true}
                />
            </Container>

        </Segment>

        {/* News */}
        <Segment
            padded="very"
            vertical={true}
        >
            <Container text={true}>
                <Header
                    as="h2"
                    content="Latest News"
                />
                <NewsFeed data={data} />
            </Container>
        </Segment>

        {/* Follow Development */}
        <Segment
            color='orange'
            secondary={true}
            inverted={true}
            padded="very"
            vertical={true}
        >
            <Container textAlign="center">
                <Header
                    as="h2"
                    content="Follow Us"
                    inverted={true}
                />
                <Social inverted={true} />
            </Container>
        </Segment>
    </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`;

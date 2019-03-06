import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import { Header, Segment, Container, Item } from 'semantic-ui-react';

import KnightsSkyHeroImage from '../images/knights-sky-hero.jpg';
import NewsFeed from '../components/NewsFeed';

const IndexPage = ({ data, location }) => (
    <Layout location={location}>
        <Segment
            padded="very"
            vertical={true}
        >
            <Container text={true}>
                <Header
                    as="h2"
                    content="Current Projects"
                />
                <Item.Group link={true}>
                    <Item
                        as={Link}
                        to="/knights-sky"
                        image={KnightsSkyHeroImage}
                        header="Knight's Sky"
                        description="Survive the deadly skies above Europe in the Luftwaffe"
                        meta="Coming soon for PC VR"
                    />
                </Item.Group>
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
    </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 300)
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

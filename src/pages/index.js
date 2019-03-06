import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { Header, Segment, Container, Image } from 'semantic-ui-react';

import KnightsSkyHeroImage from '../images/knights-sky-hero.jpg';
import KnightsSkyIcon from '../images/knights-sky-icon.png';
import NewsFeed from '../components/NewsFeed';

const IndexPage = ({ data, location }) => (
    <Layout location={location}>
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
                border: 0,
                margin: 0,
            }}
        >
            <Container
                text={true}
            >
                <Image
                    src={KnightsSkyIcon}
                    circular={true}
                    centered={true}
                    size="small"
                    style={{
                        border: '.3rem solid black',
                    }}
                />
                <Header
                    as="h1"
                    content="Knight's Sky"
                    inverted={true}
                />
                <Header
                    as="h3"
                    content="Survive the deadly skies above Europe in the Luftwaffe"
                    inverted={true}
                />
                <p>Coming soon to PC VR</p>
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

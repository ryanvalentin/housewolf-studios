import React from 'react';
import { graphql } from 'gatsby';
import { Container, Header, Divider, Segment } from 'semantic-ui-react';
import Layout from '../components/layout';

export default function Template({ data }) {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout location={frontmatter.path}>
            <Segment
                basic={true}
                style={{
                    margin: '7em 0',
                }}
            >
                <Container text={true}>
                    <Header as="h1">
                        {frontmatter.title}
                        <Header.Subheader>{frontmatter.date}</Header.Subheader>
                    </Header>
                    <Divider />
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </Container>
            </Segment>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;

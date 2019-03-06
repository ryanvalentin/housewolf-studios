import React from 'react';
import { Link } from 'gatsby';
import { Item } from 'semantic-ui-react';

const Post = ({ post }) => (
    <Item>
        <Item.Content>
            <Item.Header
                as={Link}
                to={post.frontmatter.path}
            >
                {post.frontmatter.title}
            </Item.Header>
            <Item.Meta>
                {post.frontmatter.date}
            </Item.Meta>
            <Item.Description>
                {post.excerpt}
                <br />
                <Link to={post.frontmatter.path}>Read More</Link>
            </Item.Description>
        </Item.Content>
    </Item>
);

const NewsFeed = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => (
        <Item.Group divided={true} relaxed={true}>
            {edges
                .filter((edge) => Boolean(edge.node.frontmatter.date)) // Filter using any criteria
                .map((edge) => <Post key={edge.node.id} post={edge.node} />)
            }
        </Item.Group>
    );

export default NewsFeed;

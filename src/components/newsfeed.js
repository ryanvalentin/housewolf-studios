import React from 'react';
import { Item } from 'semantic-ui-react';

const Post = ({ title, date, content }) => (
    <Item>
        <Item.Content>
            <Item.Header
                as="a"
            >
                {title}
            </Item.Header>
            <Item.Meta>
                {date}
            </Item.Meta>
            <Item.Description>
                {content}
            </Item.Description>
        </Item.Content>
    </Item>
);

const NewsFeed = ({ items }) => (
    <Item.Group divided={true} relaxed={true}>
        {items.map((item) => <Post key={item.id} {...item} />)}
    </Item.Group>
);

export default NewsFeed;

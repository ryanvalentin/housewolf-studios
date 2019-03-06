
import React from 'react';
import { Header, Segment, Container } from 'semantic-ui-react';
import SocialIconGrid from './SocialIconGrid';

const FollowSegment = () => (
    <Segment
        as="section"
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
            <SocialIconGrid inverted={true} />
        </Container>
    </Segment>
);

export default FollowSegment;


import React from 'react';
import { Segment, Container } from 'semantic-ui-react';

const YEAR = new Date().getFullYear();

const FooterSegment = ({ title }) => (
    <Segment
        vertical={true}
        style={{
            width: '100%',
        }}
    >
        <Container textAlign='center'>
            <p>Copyright {YEAR} {title}</p>
        </Container>
    </Segment>
);

export default FooterSegment;

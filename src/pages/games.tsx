import * as React from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';

export default () => {
    return (
        <Container>
            <Segment vertical>
                <Header as='h2'>
                    <Icon name='gamepad' />
                    <Header.Content>
                        Games
          </Header.Content>
                </Header>
            </Segment>
            <Segment vertical>
                <p>
                    Games go here.
                </p>
            </Segment>
        </Container>
    );
};

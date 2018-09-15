import * as React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

export default () => {
    return (
        <Segment vertical>
            <Header as='h2'>
                <Icon name='newspaper' />
                <Header.Content>
                    Development Blog
                <Header.Subheader>
                    The day-to-day grind.
                </Header.Subheader>
                </Header.Content>
            </Header>
        </Segment>
    );
};

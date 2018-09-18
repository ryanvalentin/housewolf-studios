import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

const SOCIAL_NETWORKS = [
    {
        id: 'youtube',
        name: 'YouTube',
        link: '',
    },
    {
        id: 'twitter',
        name: 'Twitter',
        link: 'https://twitter.com/KnightsSkyGame',
    },
    {
        id: 'facebook',
        name: 'Facebook',
        link: '',
    },
];

const Social = ({ inverted }) => (
    <Grid columns={3} divided={true} padded="vertically">
        <Grid.Row>
            {SOCIAL_NETWORKS.map((network) => (
                <Grid.Column key={network.id}>
                    <Button
                        as="a"
                        href={network.link}
                        target="_blank"
                        basic={true}
                        circular={true}
                        icon={network.id}
                        inverted={inverted}
                        size="massive"
                    />
                </Grid.Column>
            ))}
        </Grid.Row>
    </Grid>
);

export default Social;

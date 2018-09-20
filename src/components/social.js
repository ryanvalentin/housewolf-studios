import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

const SOCIAL_NETWORKS = [
    {
        id: 'youtube',
        name: 'YouTube',
        link: 'https://www.youtube.com/channel/UC9VnSVWra_Z1t0hmGI6Jokg',
    },
    {
        id: 'twitter',
        name: 'Twitter',
        link: 'https://twitter.com/KnightsSkyGame',
    },
    {
        id: 'facebook',
        name: 'Facebook',
        link: 'https://www.facebook.com/Knights-Sky-312713625945576/',
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

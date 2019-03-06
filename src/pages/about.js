import React from 'react';
import {
    Container,
    List,
    Header,
    Segment,
    Icon,
    Image,
    Item,
    Grid,
} from 'semantic-ui-react';
import Layout from '../components/Layout';
import AboutFrescaImage from '../images/about-fresca.jpg';
import AboutRyanValentinImage from '../images/about-ryanvalentin.jpg';
import KnightsSkyHeroImage from '../images/knights-sky-hero.jpg';

const About = ({ location }) => (
    <Layout location={location}>
        <Segment padded="very" vertical={true}>
            <Container text={true}>
                <Header
                    as="h2"
                    content="About Housewolf Studios"
                />
                <p>{`Housewolf Studios was started in 2018 to explore and develop immersive games and applications for emerging technologies (AR, VR, etc.).`}</p>
                <p>{`Our current project, Knight's Sky, is a game which puts you in the shoes of a German fighter pilot during WWII. More than a simple flight simulator, you'll experience first-hand the rise of the Nazis, the mounting pressures of a losing war, and its immediate aftermath`}</p>
                <p>The studio is run by <a href="http://ryanvalentin.com" target="_blank" rel="noopener noreferrer">Ryan Valentin</a> and his housewolf Fresca.</p>
                <Grid columns={3} relaxed={true}>
                    <Grid.Column width={4}>
                        <Image src={AboutRyanValentinImage} circular={true} size="small" />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Image src={AboutFrescaImage} circular={true} size="small" />
                    </Grid.Column>
                    <Grid.Column width={8} />
                </Grid>
            </Container>
        </Segment>
        <Segment
            padded="very"
            vertical={true}
        >
            <Container text={true}>
                <Header
                    as="h2"
                    content="Games"
                />
                <Item.Group>
                    <Item
                        image={KnightsSkyHeroImage}
                        header="Knight's Sky"
                        description="Survive the deadly skies above Europe in the Luftwaffe"
                        meta="Coming soon to PC VR"
                    />
                </Item.Group>
            </Container>
        </Segment>
        <Segment padded="very" vertical={true}>
            <Container text={true}>
                <Header as="h3"><Icon name="mail" /> Email us</Header>
                <List relaxed={true}>
                    <List.Item>
                        <List.Content>
                            {'General Inquiries: '}
                            <a href="mailto:info@housewolf.dev">info@housewolf.dev</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            {'Support: '}
                            <a href="mailto:support@housewolf.dev">support@housewolf.dev</a>
                        </List.Content>
                    </List.Item>
                </List>
            </Container>
        </Segment>
    </Layout>
);

export default About;

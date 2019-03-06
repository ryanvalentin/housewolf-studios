import React from 'react';
import { Link } from 'gatsby';
import { Menu, Container, Image } from 'semantic-ui-react';
import HousewolfLogo from '../images/housewolf-logo.svg';
import { GERMAN_RED } from '../constants/colors';

const Header = ({ title, pathname }) => {
    const menuLinks = [
        {
            pathname: `/`,
            label: `Home`,
        },
        {
            pathname: '/about',
            label: 'About',
        },
    ];

    return (
        <Menu
            fixed="top"
            inverted={true}
            pointing={true}
            secondary={true}
            size="large"
            style={{
                background: GERMAN_RED,
            }}
        >
            <Container>
                <Menu.Item as={Link} to="/">
                    <Image src={HousewolfLogo} avatar={true} alt={title} />
                    <strong>Housewolf Studios</strong>
                </Menu.Item>
                {menuLinks.map((item) => (
                    <Menu.Item
                        key={item.pathname}
                        as={Link}
                        to={item.pathname}
                        active={item.pathname === pathname}
                        style={{
                            alignSelf: 'stretch',
                        }}
                    >
                        {item.label}
                    </Menu.Item>
                ))}
            </Container>
        </Menu>
    );
};

export default Header;

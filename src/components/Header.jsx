import React from 'react';
import { Link } from 'gatsby';
import { Menu, Container, Image } from 'semantic-ui-react';
import HousewolfLogo from '../images/housewolf-logo.svg';

const Header = ({ title, pathname, transparent }) => {
    const menuLinks = [
        {
            pathname: `/`,
            label: `Home`,
        },
        {
            pathname: `/knights-sky`,
            label: `Knight's Sky`,
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
                background: transparent ? null : '#a63629',
            }}
        >
            <Container>
                <Menu.Item>
                    <Image src={HousewolfLogo} avatar={true} alt={title} />
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

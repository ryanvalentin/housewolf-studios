import React from 'react';
import { Link } from 'gatsby';
import { Menu, Container } from 'semantic-ui-react';

const MENU_LINKS = [
    {
        pathname: '/',
        label: 'Home',
    },
    {
        pathname: '/games',
        label: 'Games',
    },
    {
        pathname: '/about',
        label: 'About',
    },
];

const Header = ({ title, pathname }) => (
    <Menu
        fixed="top"
        inverted={true}
        pointing={true}
        secondary={true}
        size="large"
    >
        <Container>
            <Menu.Item>
                {title}
            </Menu.Item>
            {MENU_LINKS.map((item) => (
                <Menu.Item key={item.pathname} as={Link} to={item.pathname} active={item.pathname === pathname}>
                    {item.label}
                </Menu.Item>
            ))}
        </Container>
    </Menu>
);

export default Header;

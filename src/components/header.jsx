import React from 'react';
import { Link } from 'gatsby';
import { Menu, Container } from 'semantic-ui-react';
import HousewolfIcon from '../images/housewolf-icon.png';

const Header = ({ title, pathname, secondary }) => {
    const menuLinks = [
        {
            pathname: '/',
            label: title,
            icon: HousewolfIcon,
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

    return (
        <Menu
            fixed="top"
            inverted={secondary}
            pointing={true}
            secondary={true}
            size="large"
        >
            <Container>
                {menuLinks.map((item) => (
                    <Menu.Item key={item.pathname} as={Link} to={item.pathname} active={item.pathname === pathname}>
                        {/* item.icon ? <img src={item.icon} /> : null */}
                        {item.label}
                    </Menu.Item>
                ))}
            </Container>
        </Menu>
    );
};

export default Header;

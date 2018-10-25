import React from 'react';
import { Link } from 'gatsby';
import { Menu, Container, Image } from 'semantic-ui-react';
import HousewolfIcon from '../images/housewolf-icon.png';

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
                border: 0,
                background: transparent ? null : '#a63629',
            }}
        >
            <Container>
                <Menu.Item>
                    <Image src={HousewolfIcon} avatar={true} alt={title} />
                </Menu.Item>
                {menuLinks.map((item) => (
                    <Menu.Item
                        key={item.pathname}
                        as={Link}
                        to={item.pathname}
                        active={item.pathname === pathname}
                        style={{
                            alignSelf: 'center',
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

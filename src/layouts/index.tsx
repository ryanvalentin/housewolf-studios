import Link from 'gatsby-link';
import 'prismjs/themes/prism-okaidia.css';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Button, Container, Icon, Segment, Sidebar } from 'semantic-ui-react';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import '../css/responsive.css';
import '../css/semantic.min.css';
import '../css/styles.css';
import { store } from '../store';

const YEAR: number = new Date().getFullYear();

export const menuItems = [
    { name: 'Home', path: '/', exact: true, icon: 'home', inverted: true },
    { name: 'Games', path: '/games/', exact: true, icon: 'gamepad' },
    { name: 'About', path: '/about/', exact: true, icon: 'info circle' },
    { name: 'Blog', path: '/blog/', exact: false, icon: 'newspaper' },
];

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
    location: {
        pathname: string;
    };
    children: any;
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
    render() {
        const { pathname } = this.props.location;
        const isHome = pathname === '/';

        return (
            <Provider store={store}>
                <Sidebar.Pushable as={Segment}>

                    <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false} />

                    <Sidebar.Pusher style={{ minHeight: '100vh' }}>
                        {/* Header */}
                        <HeaderMenu
                            Link={Link}
                            pathname={pathname}
                            items={menuItems}
                        />

                        {/* Render children pages */}
                        <div style={{ paddingBottom: 60 }}>
                            {this.props.children()}
                        </div>

                        {/* Footer */}
                        <Segment inverted vertical style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                            <Container textAlign='center'>
                                <p>Copyright {YEAR} Housewolf Studios</p>
                            </Container>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Provider>
        );
    }
}

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Responsive } from 'semantic-ui-react';
import Header from './Header';
import FooterSegment from './FooterSegment';
import FollowSegment from './FollowSegment';

import 'semantic-ui-css/semantic.min.css';
import './overrides.css';

const Layout = ({ children, location }) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={(data) => (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        { name: 'description', content: 'Housewolf Studios makes games and other apps for AR, VR, and mobile.' },
                        { name: 'keywords', content: 'AR, XR, VR, Virtual Reality, Mixed Reality, Game Developers' },
                    ]}
                >
                    <html lang="en" />
                </Helmet>

                <Header
                    title={data.site.siteMetadata.title}
                    pathname={location ? location.pathname : null}
                />

                {/* Content */}
                <div style={{ marginTop: '50px' }}>
                    {children}
                </div>

                <FollowSegment />
                <FooterSegment title={data.site.siteMetadata.title} />
            </Responsive>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

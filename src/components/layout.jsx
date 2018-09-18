import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Segment, Container, Responsive } from 'semantic-ui-react';

import Header from './header';

import 'semantic-ui-css/semantic.min.css';
import './overrides.css';

const YEAR = new Date().getFullYear();

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
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                    <html lang="en" />
                </Helmet>

                <Header title={data.site.siteMetadata.title} pathname={location ? location.pathname : null} />

                {/* Content Wrapper */}
                <Segment
                    inverted={true}
                    textAlign="center"
                    style={{ minHeight: 700 }}
                    vertical={true}
                >
                    {children}
                </Segment>

                {/* Footer */}
                <Segment inverted vertical style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <Container textAlign='center'>
                        <p>Copyright {YEAR} Housewolf Studios</p>
                    </Container>
                </Segment>
            </Responsive>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

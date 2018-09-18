import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Segment, Container, Responsive } from 'semantic-ui-react';

import Header from './header';

import 'semantic-ui-css/semantic.min.css';
import './overrides.css';

const YEAR = new Date().getFullYear();

const Layout = ({ children, location, secondaryHeader }) => (
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

                <Header
                    title={data.site.siteMetadata.title}
                    pathname={location ? location.pathname : null}
                    secondary={secondaryHeader}
                />

                {/* Content Wrapper */}
                <Segment
                    style={{
                        border: 0,
                        padding: 0,
                        margin: 0,
                    }}
                >
                    {children}
                </Segment>

                {/* Footer */}
                <Segment
                    inverted={true}
                    vertical={true}
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                    }}
                >
                    <Container textAlign='center'>
                        <p>Copyright {YEAR} {data.site.siteMetadata.title}</p>
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

import * as React from 'react';

import withRoot from '../utils/withRoot';
import LandingPage from '../components/LandingPage';

interface Props {
  children: any
  location: {
    pathname: string
  }
  data: {
    site: {
      siteMetadata: {
        title: {
          es: string
        }
      }
    }
    background: any
    navYaml: {
      nav: any
    }
  }
}

class DefaultLayoutEs extends React.Component<Props, {}> {
  render () {
    const {children, data, location} = this.props;
    return (
      <LandingPage
        title={data.site.siteMetadata.title.es}
        nav={data.navYaml.nav}
      >
        {children()}
      </LandingPage>
    );
  }
}

export default withRoot(DefaultLayoutEs);

export const query = graphql`
  query DefaultLayoutEsQuery {
    site {
      siteMetadata {
        title {
         es
        }
      }
    }
    background: imageSharp(id: {regex: "/welcome.jpg/"}) {
      sizes(maxWidth: 1920, quality: 50) {
        ...GatsbyImageSharpSizes
      }
    }
    navYaml(id: {regex: "/nav-baple-es.yml/"}) {
      nav {
        home
        title
        logo {
          childImageSharp {
            sizes(maxWidth: 200) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        items {
          to
          label
        }
      }
    }
  }
`;

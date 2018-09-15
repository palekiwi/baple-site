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
          zh: string
        }
      }
    }
    background: any
    navYaml: {
      nav: any
    }
  }
}

class DefaultLayoutZh extends React.Component<Props, {}> {
  render () {
    const {children, data, location} = this.props;
    return (
      <LandingPage
        title={data.site.siteMetadata.title.zh}
        nav={data.navYaml.nav}
      >
        {children()}
      </LandingPage>
    );
  }
}

export default withRoot(DefaultLayoutZh);

export const query = graphql`
  query DefaultLayoutZhQuery {
    site {
      siteMetadata {
        title {
         zh
        }
      }
    }
    background: imageSharp(id: {regex: "/welcome.jpg/"}) {
      sizes(maxWidth: 1920, quality: 50) {
        ...GatsbyImageSharpSizes
      }
    }
    navYaml(id: {regex: "/nav-baple-zh.yml/"}) {
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

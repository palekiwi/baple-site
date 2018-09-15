import * as React from 'react';
import DivisionPage from '../../../components/pages/DivisionPage';

interface Props {
}

class PlasticsIndexEn extends React.Component<Props, {}> {
  render () {
    return (
      <div></div>
    );
  }
}

export default PlasticsIndexEn;

export const query = graphql`
  query PlasticsIndexEnQuery {
    plasticsYaml(id: {regex: "/index-en.yml/"}) {
      welcome {
        title
        subtitle1
        subtitle2
        img {
          childImageSharp {
            sizes (maxWidth: 600) {
              src
            }
          }
        }
        logo {
          childImageSharp {
            sizes (maxWidth: 200) {
              src
            }
          }
        }
      }
      icons {
        title
        items {
          title
          to
          img {
            childImageSharp {
              sizes (maxWidth: 100) {
                src
              }
            }
          }
        }
      }
    }
  }
`;

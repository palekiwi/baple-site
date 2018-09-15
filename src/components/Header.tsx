import * as React from 'react';
import HeaderBar from './HeaderBar';

interface Props {
  nav: {
    title: string
    logo: any
    home: string
    items: Array<any>
  }
}

interface State {
  menu: boolean
}

class Header extends React.Component<Props, State> {
  state:State = {
    menu: false
  }

  toggleMenu = () => {
    this.setState({menu: !this.state.menu});
  }

  handleClose = () => {
    this.setState({menu: false});
  }

  render () {
    const { nav } = this.props;

    return (
      <HeaderBar
        nav={nav}
        toggleMenu={this.toggleMenu}
        handleClose={this.handleClose}
        open={this.state.menu}
      />
    );
  }
};

export default Header;

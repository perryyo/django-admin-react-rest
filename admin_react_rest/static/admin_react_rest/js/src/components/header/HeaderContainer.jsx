import React from 'react';
import {Container} from 'flux/utils';

import UserStore from '../../stores/UserStore';
import Header from './Header';


class HeaderContainer extends React.Component {
  static getStores() {
    return [UserStore];
  }

  static calculateState(prevState) {
    return {
      user: UserStore.getState(),
    };
  }

  render() {
    return (
      <Header user={ this.state.user } />
    );
  }
}

export default Container.create(HeaderContainer, {withProps: true});

import React from 'react';
import {Container} from 'flux/utils';

import GeneralStore from '../../stores/GeneralStore';
import UserStore from '../../stores/UserStore';
import Header from './Header';


class HeaderContainer extends React.Component {
  static getStores() {
    return [
      UserStore,
      GeneralStore,
    ];
  }

  static calculateState(prevState) {
    return {
      user: UserStore.getState(),
      general: GeneralStore.getState(),
    };
  }

  render() {
    let header = null;
    if (this.state.general.is_popup === false) {
      header = <Header user={ this.state.user } general={ this.state.general } />
    }
    return (
      <div>{ header }</div>
    );
  }
}

export default Container.create(HeaderContainer, {withProps: true});

import React from 'react';
import {Container} from 'flux/utils';

import GeneralStore from '../../stores/GeneralStore';
import ChangeForm from './ChangeForm';


class ChangeFormContainer extends React.Component {
  static getStores() {
    return [GeneralStore];
  }

  static calculateState(prevState) {
    return {
      general: GeneralStore.getState(),
    };
  }

  render() {
    return (
      <ChangeForm general={ this.state.general } />
    );
  }
}

export default Container.create(ChangeFormContainer, {withProps: true});

import React from 'react';
import {Container} from 'flux/utils';

import SubmitRowStore from '../../stores/SubmitRowStore';
import SubmitRow from './SubmitRow';


class SubmitRowContainer extends React.Component {
  static getStores() {
    return [SubmitRowStore];
  }

  static calculateState(prevState) {
    return {
      submitRow: SubmitRowStore.getState(),
    };
  }

  render() {
    return (
      <SubmitRow submitRow={ this.state.submitRow } />
    );
  }
}

export default Container.create(SubmitRowContainer, { withProps: true });

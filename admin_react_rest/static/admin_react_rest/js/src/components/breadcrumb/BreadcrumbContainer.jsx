import React from 'react';
import {Container} from 'flux/utils';

import GeneralStore from '../../stores/GeneralStore';
import Breadcrumb from './Breadcrumb';


class BreadcrumbContainer extends React.Component {
  static getStores() {
    return [GeneralStore];
  }

  static calculateState(prevState) {
    return {
      general: GeneralStore.getState(),
    };
  }

  render() {
    let breadcrumb = null;
    if (this.state.general.is_popup === false) {
      breadcrumb = <Breadcrumb general={ this.state.general }  />
    }
    return (
      <div>{ breadcrumb }</div>
    );
  }
}

export default Container.create(BreadcrumbContainer, {withProps: true});

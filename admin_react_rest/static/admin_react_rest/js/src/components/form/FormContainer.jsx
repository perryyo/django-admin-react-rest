import React from 'react';
import {Container} from 'flux/utils';

import FormStore from '../../stores/FormStore';
import Form from './Form';


class FormContainer extends React.Component {
  static getStores() {
    return [FormStore];
  }

  static calculateState(prevState) {
    return {
      form: FormStore.getState(),
    };
  }

  render() {
    return (
      <Form form={ this.state.form } />
    );
  }
}

export default Container.create(FormContainer, {withProps: true});

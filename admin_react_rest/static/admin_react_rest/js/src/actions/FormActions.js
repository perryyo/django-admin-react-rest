'use strict';

import FormConstants from '../utils/constants/FormConstants';
import Dispatcher from '../dispatcher/Dispatcher';

const FormActions = {

  add(form) {
    Dispatcher.dispatch({
      type: FormConstants.ADD,
      form,
    });
  },

};

export default FormActions;

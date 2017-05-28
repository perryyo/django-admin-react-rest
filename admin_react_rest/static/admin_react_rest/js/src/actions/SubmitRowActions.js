'use strict';

import SubmitRowConstants from '../utils/constants/SubmitRowConstants';
import Dispatcher from '../dispatcher/Dispatcher';

const SubmitRowActions = {

  add(submitRow) {
    Dispatcher.dispatch({
      type: SubmitRowConstants.ADD,
      submitRow,
    });
  },

};

export default SubmitRowActions;

'use strict';

import GeneralConstants from '../utils/constants/GeneralConstants';
import Dispatcher from '../dispatcher/Dispatcher';

const GeneralActions = {

  add(general) {
    Dispatcher.dispatch({
      type: GeneralConstants.ADD,
      general,
    });
  },

};

export default GeneralActions;

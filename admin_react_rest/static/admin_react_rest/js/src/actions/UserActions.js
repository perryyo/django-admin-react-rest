'use strict';

import UserConstants from '../utils/constants/UserConstants';
import Dispatcher from '../dispatcher/Dispatcher';

const UserActions = {

  add(user) {
    Dispatcher.dispatch({
      type: UserConstants.ADD,
      user,
    });
  },

};

export default UserActions;

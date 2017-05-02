'use strict';

import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import Dispatcher from '../dispatcher/Dispatcher';
import UserConstants from '../utils/constants/UserConstants';
import UserModel from '../utils/data/UserModel';


class UserStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case UserConstants.ADD:
        return new UserModel({
          username: action.user.username,
          userlinks: action.user.userlinks,
        });

      default:
        return state;
    }
  }
}

export default new UserStore();

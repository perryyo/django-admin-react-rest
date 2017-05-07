'use strict';

import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import Dispatcher from '../dispatcher/Dispatcher';
import GeneralConstants from '../utils/constants/GeneralConstants';
import GeneralModel from '../utils/data/GeneralModel';


class GeneralStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case GeneralConstants.ADD:
        return new GeneralModel({
          is_popup: action.general.is_popup,
          opts: action.general.opts,
        });

      default:
        return state;
    }
  }
}

export default new GeneralStore();

'use strict';

import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import Dispatcher from '../dispatcher/Dispatcher';
import SubmitRowConstants from '../utils/constants/SubmitRowConstants';
import SubmitRowModel from '../utils/data/SubmitRowModel';


class SubmitRowStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case SubmitRowConstants.ADD:
        return new SubmitRowModel({
          show_save: action.submitRow.show_save,
          show_delete_link: action.submitRow.show_delete_link,
          show_save_as_new: action.submitRow.show_save_as_new,
          show_save_and_add_another: action.submitRow.show_save_and_add_another,
          show_save_and_continue: action.submitRow.show_save_and_continue,
          delete_url: action.submitRow.delete_url,
        });

      default:
        return state;
    }
  }
}

export default new SubmitRowStore();

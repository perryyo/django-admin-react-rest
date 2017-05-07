'use strict';

import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import Dispatcher from '../dispatcher/Dispatcher';
import FormConstants from '../utils/constants/FormConstants';
import FormModel from '../utils/data/FormModel';


class FormStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case FormConstants.ADD:
        return new FormModel({
          fieldsets: action.form.adminform.fieldsets,
          form: action.form.adminform.form,
          readonly_fields: action.form.adminform.readonly_fields,
        });

      default:
        return state;
    }
  }
}

export default new FormStore();

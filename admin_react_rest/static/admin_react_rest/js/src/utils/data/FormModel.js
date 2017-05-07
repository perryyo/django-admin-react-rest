'use strict';

import Immutable from 'immutable';

const FormModel = Immutable.Record({
  fieldsets: {},
  form: {},
  readonly_fields: {},
});

export default FormModel;

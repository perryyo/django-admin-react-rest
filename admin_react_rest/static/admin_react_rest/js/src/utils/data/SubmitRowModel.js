'use strict';

import Immutable from 'immutable';

const SubmitRowModel = Immutable.Record({
  show_save: false,
  show_delete_link: false,
  show_save_as_new: false,
  show_save_and_add_another: false,
  show_save_and_continue: false,
  delete_url: '',
});

export default SubmitRowModel;

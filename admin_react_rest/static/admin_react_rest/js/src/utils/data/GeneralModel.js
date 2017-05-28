'use strict';

import Immutable from 'immutable';

const GeneralModel = Immutable.Record({
  is_popup: '',
  site_header: '',
  site_url: '',
  title: '',
  opts: {},
});

export default GeneralModel;

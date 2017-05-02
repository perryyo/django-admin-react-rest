'use strict';

import Immutable from 'immutable';

const UserModel = Immutable.Record({
  username: '',
  userlinks : {},
});

export default UserModel;

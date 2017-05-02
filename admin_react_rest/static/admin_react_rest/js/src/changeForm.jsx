'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ChangeForm from './components/ChangeForm';
import HeaderContainer from './components/header/HeaderContainer';

ReactDOM.render(
  <ChangeForm />,
  document.getElementById('change-form-content')
);

ReactDOM.render(
  <HeaderContainer />,
  document.getElementById('header')
);

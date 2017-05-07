'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ChangeFormContainer from './components/changeForm/ChangeFormContainer';
import HeaderContainer from './components/header/HeaderContainer';
import BreadcrumbContainer from './components/breadcrumb/BreadcrumbContainer';

ReactDOM.render(
  <ChangeFormContainer />,
  document.getElementById('change-form-content')
);

ReactDOM.render(
  <HeaderContainer />,
  document.getElementById('header')
);

ReactDOM.render(
  <BreadcrumbContainer />,
  document.getElementById('breadcrumb')
);

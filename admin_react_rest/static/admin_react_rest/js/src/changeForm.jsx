'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ChangeFormContainer from './components/changeForm/ChangeFormContainer';
import SubmitRowContainer from './components/submitRow/SubmitRowContainer';
import HeaderContainer from './components/header/HeaderContainer';
import BreadcrumbContainer from './components/breadcrumb/BreadcrumbContainer';

ReactDOM.render(
  <ChangeFormContainer />,
  document.getElementById('change-form-content')
);

ReactDOM.render(
  <SubmitRowContainer/>,
  document.getElementById('change-form-bottom-submit-row')
)

ReactDOM.render(
  <HeaderContainer />,
  document.getElementById('header')
);

ReactDOM.render(
  <BreadcrumbContainer />,
  document.getElementById('breadcrumb')
);

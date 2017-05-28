'use strict';

import React from 'react';
import styles from '../css/App.css';
import UserActions from '../../actions/UserActions';
import GeneralActions from '../../actions/GeneralActions';
import FormActions from '../../actions/FormActions';
import SubmitRowActions from '../../actions/SubmitRowActions';
import FormContainer from '../form/FormContainer';


class ChangeForm extends React.Component {

  componentDidMount() {
    fetch(window.location.href, {
        credentials: "same-origin",
        method: "get",
        headers: new Headers({
		    'Content-Type': 'application/json'
	    }),
    }).then(response => response.json().then(data => {
      console.debug(data);
      UserActions.add({
        username: data.user.username,
        userlinks: data.user.userlinks,
      });
      GeneralActions.add(data);
      FormActions.add(data);
      SubmitRowActions.add(data);
    }))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12">
              <h3>{ this.props.general.title }</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <FormContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ChangeForm;

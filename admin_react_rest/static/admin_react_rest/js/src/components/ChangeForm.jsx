import React from 'react';
import styles from './css/App.css'
import UserActions from '../actions/UserActions';


class ChangeForm extends React.Component {

  componentDidMount() {
    fetch(window.location.href, {
        credentials: "same-origin",
        method: "get",
        headers: new Headers({
		    'Content-Type': 'application/json'
	    }),
    }).then(response => response.json().then(data => {
      UserActions.add({
        username: data.user.username,
        userlinks: data.user.userlinks,
      });
    }))
  }

  render() {
    return (
      <div className="{ styles.App }">
        <div className="{ styles.App-header }">
          <img src="/static/admin_react_rest/img/logo.svg" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="{ styles.App-intro }">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default ChangeForm;

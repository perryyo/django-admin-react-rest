'use strict';

import React from 'react';
import {Button} from 'react-bootstrap';

class SubmitRow extends React.Component {

  render() {

    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="pull-left">
            {this.props.submitRow.show_delete_link && <Button bsStyle="danger" href={ this.props.submitRow.delete_url } type="link">Delete</Button>}
          </div>
          <div className="pull-right">
            {this.props.submitRow.show_save && <Button className="pull-right" bsStyle="primary" type="submit" name="_save">Save</Button>}
            {this.props.submitRow.show_save_as_new && <Button bsStyle="default" type="submit" name="_saveasnew">Save as new</Button>}
            {this.props.submitRow.show_save_and_add_another && <Button bsStyle="default" type="submit" name="_addanother">Save and add another</Button>}
            {this.props.submitRow.show_save_and_continue && <Button bsStyle="default" type="submit" name="_continue">Save and continue editing</Button>}
          </div>
        </div>
      </div>
    );
  }
}


export default SubmitRow;

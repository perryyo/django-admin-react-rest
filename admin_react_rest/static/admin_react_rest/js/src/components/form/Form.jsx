import React from 'react';
import {Button, Col, Form as BootstrapForm, FieldGroup, Checkbox, Radio, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

class Form extends React.Component {

  render() {
    let formgroups = [];
    let counter = 1;

    if (this.props.form.has('form')) {
      Object.keys(this.props.form.form.fields).map(key => {
        let tag = null;
        if (this.props.form.form.fields[key].widget.tag === 'textarea') {
          tag = <FormControl
            componentClass="textarea"
            defaultValue={ this.props.form.form.initial[key] }
          />
        } else if (this.props.form.form.fields[key].widget.tag === 'input') {
          tag = <FormControl
            type={ this.props.form.form.fields[key].widget.input_type }
            defaultValue={ this.props.form.form.initial[key] }
            max={ this.props.form.form.fields[key].max_length }
          />
        }

        formgroups.push(
          <FormGroup key={ counter} controlId={`formHorizontal${this.props.form.form.fields[key].label}`}>
            <Col componentClass={ControlLabel} sm={2}>
              { this.props.form.form.fields[key].label }:
            </Col>
            <Col sm={10}>
              { tag }
            </Col>
          </FormGroup>
        )

        counter += 1;
      })
    }

    return (
      <BootstrapForm horizontal>
        { formgroups }
      </BootstrapForm>
    );
  }
}


export default Form;

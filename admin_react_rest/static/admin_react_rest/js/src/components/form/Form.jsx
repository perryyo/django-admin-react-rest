import React from 'react';
import {Button, Col, Form as BootstrapForm, FieldGroup, Checkbox, Radio, ControlLabel, FormControl, FormGroup, Panel} from 'react-bootstrap';

class Form extends React.Component {

  render() {
    let formgroups = [];
    let counter = 1;

    if (this.props.form.has('form')) {
      this.props.form.fieldsets.map(row => {
        let fields = row[1].fields;
        let title = row[0];

        Object.keys(fields).map(key => {
          let fieldName = fields[key];
          let tag = null;
          let label = fieldName.replace(/\b\w/g, l => l.toUpperCase());

          if (fieldName in this.props.form.form.fields) {
            label = this.props.form.form.fields[fieldName].label;
            if (this.props.form.form.fields[fieldName].widget.tag === 'textarea') {
              tag = <FormControl
                componentClass="textarea"
                defaultValue={ this.props.form.form.initial[fieldName] }
              />
            } else if (this.props.form.form.fields[fieldName].widget.tag === 'input') {
              tag = <FormControl
                type={ this.props.form.form.fields[fieldName].widget.input_type }
                defaultValue={ this.props.form.form.initial[fieldName] }
                max={ this.props.form.form.fields[fieldName].max_length }
              />
            }
          } else if (this.props.form.readonly_fields.indexOf(fieldName) > -1) {
            tag = <FormControl.Static>
              { this.props.form.form.instance[fieldName]}
            </FormControl.Static>
          }

          formgroups.push(
            <FormGroup key={ counter } controlId={`formHorizontal${fieldName}`}>
              <Col componentClass={ControlLabel} sm={2}>
                { label }:
              </Col>
              <Col sm={10}>
                { tag }
              </Col>
            </FormGroup>
          )

          counter += 1;
        });

        if (title !== null) {
          formgroups = <Panel header={row[0]}>
            { formgroups }
          </Panel>
        }
      });
    }

    return (
      <BootstrapForm horizontal>
        { formgroups }
      </BootstrapForm>
    );
  }
}


export default Form;

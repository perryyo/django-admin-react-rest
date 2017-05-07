import React from 'react';
import {Breadcrumb as BoostrapBreadcrumb} from 'react-bootstrap';

class Breadcrumb extends React.Component {

  render() {
    let breadcrumbs = [];
    let counter = 1;

    Object.keys(this.props.general.opts.breadcrumb).map(key => {
      if (this.props.general.opts.breadcrumb[key] !== null) {
        breadcrumbs.push(<BoostrapBreadcrumb.Item key={ counter } href={ this.props.general.opts.breadcrumb[key] }>{ key }</BoostrapBreadcrumb.Item>)
      } else {
        breadcrumbs.push(<BoostrapBreadcrumb.Item key={ counter } active>{ key }</BoostrapBreadcrumb.Item>)
      }
      counter += 1;
    })

    return (
      <BoostrapBreadcrumb>
        { breadcrumbs }
      </BoostrapBreadcrumb>
    );
  }
}


export default Breadcrumb;

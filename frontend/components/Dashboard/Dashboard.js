import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  ButtonToolbar,
  ButtonGroup
} from 'react-bootstrap';

import {
  getRoutePath
} from 'CommonUtil/CommonUtil.js';

import JSTable, {generateRandomTableData} from 'CompareTables/JSTable.js';

export class Dashboard extends React.Component {
  componentDidMount() {
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderCSSTable() {
    return null;
  }

  renderJSTable() {
    return null;
  }

  render() {
    const {rows, columns,} = generateRandomTableData();
    return (
      <div>
        <h1>Dashboard</h1>
        <ButtonToolbar>
          <ButtonGroup>
            <Button onClick={() => this.context.router.push(getRoutePath('sample')) } >Go to sample page</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <p style={{marginTop:32}}>Place your sample below this line (Dashboard/Dashboard.js):</p>
        <hr style={{border: '1px solid black'}} />
        <div>
          <JSTable
            numOfFirstFixedColumns={3}
            rows={rows}
            rowKey="id"
            columns={columns}
            maxWidth={800}
            maxHeight={500}
          />
        </div>
      </div>
    );
  }
}

// latest way to dispatch
Dashboard.contextTypes = {
  // @see https://github.com/grommet/grommet/issues/441
  router: React.PropTypes.object.isRequired
};

export default connect(
  function (storeState) {
    // store state to props
    return {
    };
  }
)(Dashboard);
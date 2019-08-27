import React from 'react';
import * as Table from 'reactabular-table';

const rows = [
  {id: 100, name: 'John', tools: {hammer: true}, country: 'fi'},
  {id: 101, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 102, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 103, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 104, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 105, name: 'Jack', tools: {hammer: false}, country: 'dk'}
];
const countries = {
  fi: 'Finland',
  dk: 'Denmark'
};

const columns = [
  {
    property: 'id',
    header: {
      label: 'ID'
    }
  },
  {
    property: 'name',
    header: {
      label: 'Name',
    }
  },
  {
    property: 'tools',
    header: {
      label: 'Active'
    }
  },
  {
    property: 'country',
    header: {
      label: 'Country'
    }
  }
];

export default class MyTable extends React.Component {
  componentDidMount() {
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Table.Provider
         className="table table-striped table-bordered"
         columns={columns} >
        <Table.Header />
        <Table.Body rows={rows} rowKey="id" />
      </Table.Provider>
    );
  }
}
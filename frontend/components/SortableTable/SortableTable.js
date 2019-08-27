import React from 'react';
import {
    connect
} from 'react-redux';
import { tableData } from './mockData';
import { columns } from './mockData';
import * as Table from 'reactabular-table';
import MSGlyphicon from '../MSGlyphicon/MSGlyphicon';
import '../../styles/HeaderStyle.css';

export class SortableTable extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            keydown: false,
            columns: [],
            sortingColumns: {},
            tableData: [],
            sortList: []
        };
    }

    componentDidMount(){
        let columnsData = columns.map(column => {
            return {
                ...column,
                header: {
                    ...column.header,
                    transforms: [
                        this.sortData.bind(this)
                    ]
                }
            }
        });
        this.setState({columns: columnsData})
        this.setState({tableData});
    }

    sortData(label, props) {
        let currentColumn = this.state.columns.filter(column => column.property == label);
        
        return {
            onClick: (e) => props.column.sort ? this.sortDataByColumn(props.column.property, e): null,
            children: (
              <div className="header-container">
                {label} 
                {currentColumn[0].priorityValue > 0 ? <span className="priority-color">{currentColumn[0].priorityValue}</span>: null}
                {currentColumn[0].sort == true ?
                <span className="gylph-container">
                    {currentColumn[0].sortingState == 'none' || currentColumn[0].sortingState == 'asc'?
                        <MSGlyphicon className="fa-sort-up" glyph="1x" />: null}
                    {currentColumn[0].sortingState == 'none' || currentColumn[0].sortingState == 'dsc'?
                        <MSGlyphicon className="fa-sort-down" glyph="1x" />: null }
                </span>
                : null}
              </div>
            )
          };
    }

    sortDataByColumn(columnName, event) {
        let data = this.state.tableData;
        let updatedColumns = this.updateColumnsInfo(columnName)
        let newData = this.getSortedData(data, columnName, updatedColumns);
        this.setState({ tableData: newData })
    }

    updateColumnsInfo(columnName) {
        let columnsData = this.state.columns;
        let currentColumn = columnsData.filter(column => column.property == columnName);
        if(currentColumn[0].property == columnName){
            columnsData = this.updateNextDirection(columnsData, columnName);
        }
        else{
            columnsData = columnsData.map(column => {
                if(column.property !== columnName){
                    column.sortingState = 'none';
                    column.currentSorting = false;
                }
                else{
                    column.currentSorting = true;
    
                }
            })
        }
        return columnsData;
        
    }

    updateNextDirection(columnsData, columnName){
        columnsData.forEach(column => {
            if(column.property == columnName){
                if(column.sortingState == 'none'){
                    column.sortingState = 'asc';
                }
                else if(column.sortingState == 'asc'){   
                    column.sortingState = 'dsc';
                }
                else if(column.sortingState == 'dsc'){
                    column.sortingState = 'none';
                }
            }
        });
        return columnsData;
    }

    getSortedData(data, columnName, columnsData) {
        let currentColumn = columnsData.filter(column => column.property == columnName)
        return data.sort((a, b) => {
            if(currentColumn[0].sortingState == 'none'){
                return (a['id'] < b['id'] ? -1 : 1)
            }
            else{
                return (a[columnName] < b[columnName] ? -1 : 1) * (currentColumn[0].sortingState == 'asc' ? 1 : -1)
            }
        });
    }

    render(){
        return ( 
            <div>
                <Table.Provider
                    className="table table-striped table-bordered"
                    columns={this.state.columns} 
                    renderers={{
                        body: {
                          wrapper: BodyWrapper,
                          row: RowWrapper
                        }
                      }}>
                    <Table.Header />
                    <Table.Body rows={this.state.tableData} rowKey="id" />
                </Table.Provider>
            </div>
        );
    };

}

const BodyWrapper = props => <tbody {...props} />;
BodyWrapper.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
  return true;
};

const RowWrapper = props => <tr {...props} />;
RowWrapper.shouldComponentUpdate = function (nextProps) {
  return true;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortableTable);

function mapDispatchToProps(dispatch) {
    return({
      showMyModal: function() {
        return dispatch({
          type: 'EVT_SHOW_MY_MODAL',
          showMyModal: true
        });
      }
    });
}

function mapStateToProps(state, ownProps) {
   return {
        
    };
}
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { render } from "react-dom";
//import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import "ag-grid-enterprise";
import {getRequest,postRequest,deleteRequest} from '../../../services/ServerRequest';
import { Card, CardBody, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
//import usersData from './UsersData'

class ChildMessageRenderer extends Component {
    constructor(props) {
		super(props);
		this.state = {
			id:props.value
		}
		this.invokeParentMethod = this.invokeParentMethod.bind(this);
    }
    invokeParentMethod(e) {
		window.location.href="#/module/workpack";
    }
    render() {
        return (
			<NavLink href="#/module/workpack" data-id={this.state.id} className="btn btn-info">View</NavLink>            
        );
    }
}

class Mcc extends Component {
  constructor(props) {
    super(props);
    var responseJson='';
    this.state = {
      columnDefs: [
        {
          field: "ICAO",
          headerName: "Aircraft Type",
          rowGroup: true,
          hide: true
        },
        {
          headerName: "Client",
          field: "COMP_NAME",
          width: 267,
          editable: true,
          filter: "agSetColumnFilter",
          tooltipField: "Client",
          checkboxSelection: function(params) {
            return params.columnApi.getRowGroupColumns().length === 0;
          },
          cellClass: function() {
            return "alphabet";
          }
        },
        {
          headerName: "Tail",
          field: "TAIL",
          width: 200,
          editable: true,
          cellEditor: "agRichSelectCellEditor",
          floatCell: true,
          filterParams: {
            cellHeight: 20,
            newRowsAction: "keep"
          }
        },
        {
          headerName: "MSN Number",
          field: "tailMSNO",
          width: 200,
          editable: true,
          filter: "agSetColumnFilter",
          cellEditor: "agSelectCellEditor",
		},
		{
			headerName: "Manufacturer",
			field: "MANUFACTURER",
			width: 200,
			editable: true,
			filter: "agSetColumnFilter",
			cellEditor: "agSelectCellEditor",
		  },
		  {
			headerName: "Date of Manufacture",
			field: "MANDATE",
			width: 200,
			editable: true,
			filter: "agSetColumnFilter",
			cellEditor: "agSelectCellEditor",
		  },
		  {
			headerName: "Date of Registration",
			field: "REGDATE",
			width: 200,
			editable: true,
			filter: "agSetColumnFilter",
			cellEditor: "agSelectCellEditor",
		  },
		  {
			headerName: "Country of Registration",
			field: "REGCOUNTRY",
			width: 200,
			editable: true,
			filter: "agSetColumnFilter",
			cellEditor: "agSelectCellEditor",
		  },
		  {
			headerName: "Owner",
			field: "OWNER",
			width: 200,
			editable: true,
			filter: "agSetColumnFilter",
			cellEditor: "agSelectCellEditor",
		  },
		  {
			headerName: "Lessor",
			field: "lessor",
			width: 200,
			editable: true,
			filter: "agSetColumnFilter",
			cellEditor: "agSelectCellEditor",
		  },
		  {
			headerName: "Operator",
			field: "operators",
			width: 200,
			editable: true,
			filter: "agSetColumnFilter",
			cellEditor: "agSelectCellEditor",
		  },
        {
          headerName: "View",
          field: "value",
          cellRenderer: "childMessageRenderer",
          colId: "params",
          width: 180
        }
      ],
      groupDefaultExpanded: -1,
      /*autoGroupColumnDef: {
        headerName: "Name",
        field: "name",
        width: 250,
        editable: true,
        cellRendererParams: { checkbox: true }
      },*/
      defaultColDef: {
        checkboxSelection: function(params) {
          var isGrouping = params.columnApi.getRowGroupColumns().length > 0;
          return params.colIndex === 0 && !isGrouping;
        }
      },
      rowData: createData(),
      frameworkComponents: {
        childMessageRenderer: ChildMessageRenderer
      },
	  rowSelection: "multiple",
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  };

  render() {
    return (
      <div 
        className="ag-theme-material"
        style={{ 
        height: '750px', 
        width: '100%' }} 
      >
        <AgGridReact
            columnDefs={this.state.columnDefs}
            groupSelectsChildren={true}
            groupDefaultExpanded={this.state.groupDefaultExpanded}
            autoGroupColumnDef={this.state.autoGroupColumnDef}
            defaultColDef={this.state.defaultColDef}
            rowData={this.state.rowData}
            rowSelection={this.state.rowSelection}
            pagination={true}
            paginationAutoPageSize={false}
            frameworkComponents={this.state.frameworkComponents}
            onGridReady={this.onGridReady}
          />
      </div>
    );
  }
}

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

function createData() {
	var rowCount = 20;
	var row = 0;
	var finalRes = [];
	var resData = sessionStorage.getItem('responseJson');
  resData = JSON.parse(resData);
  if(!isEmpty(resData)){
    for (var i = 0; i < Object.keys(resData.data).length; i++) {
      var rowItem = createRowItem(row,resData.data[i]);
      finalRes.push(rowItem);
      row++;
    }
  }
	return finalRes;
}
function createRowItem(row,resData) {
	var rowItem = {};
	var ICAO = ["1111","231-123","737-800","747-400"];
	var dumy = ["", "", "", ""];
	var aircraft_type = ICAO[row % ICAO.length];
	var blankf = dumy[row % dumy.length];
	rowItem.ICAO = aircraft_type + " " + blankf;
	rowItem.COMP_NAME = resData.COMP_NAME;
	rowItem.TAIL = resData.tailName;
	rowItem.tailMSNO = resData.tailMSNO;
	rowItem.MANUFACTURER = resData.MANUFACTURER;
	rowItem.MANDATE = resData.MANDATE;
	rowItem.REGDATE = resData.REGDATE;
	rowItem.REGCOUNTRY = resData.REGCOUNTRY;
	rowItem.OWNER = resData.OWNER;
	rowItem.lessor = resData.lessor;
	rowItem.operators = resData.operators;
	rowItem.value = resData.tailId;
	return rowItem;
}
export default Mcc;

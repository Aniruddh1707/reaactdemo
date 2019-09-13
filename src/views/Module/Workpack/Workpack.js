import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col } from 'reactstrap'
//import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class ChildMessageRenderer extends Component {
    constructor(props) {
        super(props);

        this.invokeParentMethod = this.invokeParentMethod.bind(this);
    }

    invokeParentMethod() {
		window.location.href="#/module/mccdocs";
    }

    render() {
        return (
            <span><button style={{height: 20, lineHeight: 0.5}} onClick={this.invokeParentMethod} className="btn btn-info">View</button></span>
        );
    }
}

const products = [
	{
		'id':'1',
		'year':'2019',
		'msn':'1474',
		'check_type':'CHK001',
		'check_name':'CHECK 001',
		'received_date':'10-06-2010',
		'is_listing':'No',
		'work_status':'Approved',
		'defect':'1'
	},
	{
		'id':'2',
		'year':'2019',
		'msn':'1474',
		'check_type':'CHK001',
		'check_name':'CHECK 001',
		'received_date':'10-06-2010',
		'is_listing':'No',
		'work_status':'Approved',
		'defect':'1'
	},
	{
		'id':'3',
		'year':'2019',
		'msn':'1474',
		'check_type':'CHK001',
		'check_name':'CHECK 001',
		'received_date':'10-06-2010',
		'is_listing':'No',
		'work_status':'Approved',
		'defect':'1'
	},
	{
		'id':'4',
		'year':'2019',
		'msn':'1474',
		'check_type':'CHK001',
		'check_name':'CHECK 001',
		'received_date':'10-06-2010',
		'is_listing':'No',
		'work_status':'Approved',
		'defect':'1'
	},
	{
		'id':'5',
		'year':'2019',
		'msn':'1474',
		'check_type':'CHK001',
		'check_name':'CHECK 001',
		'received_date':'10-06-2010',
		'is_listing':'No',
		'work_status':'Approved',
		'defect':'1'
	},
];
const columns = [{
  dataField: 'id',
  text: 'Component Id',
  hidden:true
}, {
  dataField: 'year',
  text: 'Year',
  filter: textFilter()
}, {
  dataField: 'msn',
  text: 'MSN Number',
  filter: textFilter()
},{
  dataField: 'check_type',
  text: 'Check Type',
  filter: textFilter()
},{
  dataField: 'check_name',
  text: 'Check Name',
  filter: textFilter()
},{
  dataField: 'received_date',
  text: 'Received Date',
  filter: textFilter()
},{
  dataField: 'is_listing',
  text: 'Listing Attached',
  filter: textFilter()
},{
  dataField: 'work_status',
  text: 'Work Status',
  filter: textFilter()
},{
  dataField: 'defect',
  text: 'Defect',
  filter: textFilter()
}, {
	dataField: 'action',
	isDummyField: true,
	text: 'View',
	formatter: (cellContent, row) => {
	  return (
		  <h5>
			<ChildMessageRenderer/>
		  </h5>
		);
	}
}];

class Workpack extends Component {
  render() {
    return (
		<div className="animated fadeIn">
			<BootstrapTable keyField='id' data={ products } columns={ columns } striped hover condensed pagination={ paginationFactory() } filter={ filterFactory() } />
		</div>
    );
  }
}

export default Workpack;

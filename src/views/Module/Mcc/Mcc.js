import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col } from 'reactstrap'
//import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const products = [
	{
		'id':'1',
		'tail':'A6-AAP',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'2',
		'tail':'VT-AUS',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'3',
		'tail':'VT-VAZ',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'4',
		'tail':'G-NAI',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'5',
		'tail':'G-VAST',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'6',
		'tail':'G-NAJ',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'7',
		'tail':'G-FDOCS',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'8',
		'tail':'G-DSC',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'9',
		'tail':'G-VROM',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'10',
		'tail':'VT-MTI',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'11',
		'tail':'G-VROU',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'12',
		'tail':'A12-AAP',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'13',
		'tail':'A13-AAP',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'14',
		'tail':'A14-AAP',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'15',
		'tail':'A15-AAP',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'16',
		'tail':'A16-AAP',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'17',
		'tail':'A17-AAP',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	},
	{
		'id':'18',
		'tail':'A18-AAP',
		'msn':'1474',
		'manufacturer':'Boeing',
		'dom':'06-12-2016',
		'dor':'10-06-2010',
		'cor':'Canada',
		'owner':'SMBC',
		'lessor':'SMBC',
		'operator':'FLYdocs'
	}
];
const columns = [{
  dataField: 'id',
  text: 'Component Id',
  hidden:true
}, {
  dataField: 'tail',
  text: 'Tail',
  filter: textFilter()
}, {
  dataField: 'msn',
  text: 'MSN Number',
  filter: textFilter()
},{
  dataField: 'manufacturer',
  text: 'Manufacturer',
  filter: textFilter()
},{
  dataField: 'dom',
  text: 'Date of Manufacture',
  filter: textFilter()
},{
  dataField: 'dor',
  text: 'Date of Registration',
  filter: textFilter()
},{
  dataField: 'cor',
  text: 'Country of Registration',
  filter: textFilter()
},{
  dataField: 'owner',
  text: 'Owner',
  filter: textFilter()
},{
  dataField: 'lessor',
  text: 'Lessor',
  filter: textFilter()
},{
  dataField: 'operator',
  text: 'Operator',
  filter: textFilter()
}, {
	dataField: 'action',
	isDummyField: true,
	text: 'View',
	formatter: (cellContent, row) => {
	  return (
		  <h5>
			<span className="label label-success"> Available</span>
		  </h5>
		);
	}
}];

class Mcc extends Component {
  render() {
    return (
		<div className="animated fadeIn">
			<BootstrapTable keyField='id' data={ products } columns={ columns } striped hover condensed pagination={ paginationFactory() } filter={ filterFactory() } />
		</div>
    );
  }
}

export default Mcc;

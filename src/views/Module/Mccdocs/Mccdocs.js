import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col } from 'reactstrap'
//import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import imgdoc from './testdoc.gif';
class ChildMessageRenderer extends Component {
    constructor(props) {
        super(props);

        this.invokeParentMethod = this.invokeParentMethod.bind(this);
    }

    invokeParentMethod() {
		window.location.href="#/module/mcc";
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
	}
];
const columns = [{
  dataField: 'id',
  text: 'Component Id',
  hidden:true
}, {
  dataField: 'year',
  text: 'Year'
}, {
  dataField: 'msn',
  text: 'MSN Number'
},{
  dataField: 'check_type',
  text: 'Check Type'
},{
  dataField: 'check_name',
  text: 'Check Name'
},{
  dataField: 'received_date',
  text: 'Received Date'
},{
  dataField: 'is_listing',
  text: 'Listing Attached'
},{
  dataField: 'work_status',
  text: 'Work Status'
},{
  dataField: 'defect',
  text: 'Defect'
}];

class Mccdocs extends Component {
  render() {
    return (
		<div className="animated fadeIn">
			<BootstrapTable keyField='id' data={ products } columns={ columns } striped hover condensed />
			<FilePond allowMultiple={true} server="/uploads"/>
			<div className="row row row-cards">
				<div className="col col-sm-6 col-lg-4">
					<div className="card p-3">
						<a className="mb-3">
							<img src={imgdoc} alt="Photo by Nathan Guerrero" className="rounded" />
						</a>
						<div className="d-flex align-items-center px-2">
							<div>
								<div>Nathan Guerrero</div>
								<small className="d-block text-muted"> 12 days ago</small> 
							</div>
							<div className="ml-auto text-muted">
								<a className="icon"><i className="fe fe-eye mr-1" />112</a>
								<a className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" />42</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col col-sm-6 col-lg-4">
					<div className="card p-3">
						<a className="mb-3">
							<img src={imgdoc} alt="Photo by Nathan Guerrero" className="rounded" />
						</a>
						<div className="d-flex align-items-center px-2">
							<div>
								<div>Nathan Guerrero</div>
								<small className="d-block text-muted"> 12 days ago</small> 
							</div>
							<div className="ml-auto text-muted">
								<a className="icon"><i className="fe fe-eye mr-1" />112</a>
								<a className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" />42</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col col-sm-6 col-lg-4">
					<div className="card p-3">
						<a className="mb-3">
							<img src={imgdoc} alt="Photo by Nathan Guerrero" className="rounded" />
						</a>
						<div className="d-flex align-items-center px-2">
							<div>
								<div>Nathan Guerrero</div>
								<small className="d-block text-muted"> 12 days ago</small> 
							</div>
							<div className="ml-auto text-muted">
								<a className="icon"><i className="fe fe-eye mr-1" />112</a>
								<a className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" />42</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row row row-cards">
				<div className="col col-sm-6 col-lg-4">
					<div className="card p-3">
						<a className="mb-3">
							<img src={imgdoc} alt="Photo by Nathan Guerrero" className="rounded" />
						</a>
						<div className="d-flex align-items-center px-2">
							<div>
								<div>Nathan Guerrero</div>
								<small className="d-block text-muted"> 12 days ago</small> 
							</div>
							<div className="ml-auto text-muted">
								<a className="icon"><i className="fe fe-eye mr-1" />112</a>
								<a className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" />42</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col col-sm-6 col-lg-4">
					<div className="card p-3">
						<a className="mb-3">
							<img src={imgdoc} alt="Photo by Nathan Guerrero" className="rounded" />
						</a>
						<div className="d-flex align-items-center px-2">
							<div>
								<div>Nathan Guerrero</div>
								<small className="d-block text-muted"> 12 days ago</small> 
							</div>
							<div className="ml-auto text-muted">
								<a className="icon"><i className="fe fe-eye mr-1" />112</a>
								<a className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" />42</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col col-sm-6 col-lg-4">
					<div className="card p-3">
						<a className="mb-3">
							<img src={imgdoc} alt="Photo by Nathan Guerrero" className="rounded" />
						</a>
						<div className="d-flex align-items-center px-2">
							<div>
								<div>Nathan Guerrero</div>
								<small className="d-block text-muted"> 12 days ago</small> 
							</div>
							<div className="ml-auto text-muted">
								<a className="icon"><i className="fe fe-eye mr-1" />112</a>
								<a className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" />42</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row row row-cards">
				<div className="col col-sm-6 col-lg-4">
					<div className="card p-3">
						<a className="mb-3">
							<img src={imgdoc} alt="Photo by Nathan Guerrero" className="rounded" />
						</a>
						<div className="d-flex align-items-center px-2">
							<div>
								<div>Nathan Guerrero</div>
								<small className="d-block text-muted"> 12 days ago</small> 
							</div>
							<div className="ml-auto text-muted">
								<a className="icon"><i className="fe fe-eye mr-1" />112</a>
								<a className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" />42</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col col-sm-6 col-lg-4">
					<div className="card p-3">
						<a className="mb-3">
							<img src={imgdoc} alt="Photo by Nathan Guerrero" className="rounded" />
						</a>
						<div className="d-flex align-items-center px-2">
							<div>
								<div>Nathan Guerrero</div>
								<small className="d-block text-muted"> 12 days ago</small> 
							</div>
							<div className="ml-auto text-muted">
								<a className="icon"><i className="fe fe-eye mr-1" />112</a>
								<a className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" />42</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col col-sm-6 col-lg-4">
					<div className="card p-3">
						<a className="mb-3">
							<img src={imgdoc} alt="Photo by Nathan Guerrero" className="rounded" />
						</a>
						<div className="d-flex align-items-center px-2">
							<div>
								<div>Nathan Guerrero</div>
								<small className="d-block text-muted"> 12 days ago</small> 
							</div>
							<div className="ml-auto text-muted">
								<a className="icon"><i className="fe fe-eye mr-1" />112</a>
								<a className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" />42</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Mccdocs;

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
import docfile from './docs.png';
import excelfile from './excel.png';
import pptffile from './pptf.png';
import {getRequest,postRequest,deleteRequest} from '../../../services/ServerRequest';
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

function getFileExtension1(fileid,filename) {
	var extFile = filename.split('.').pop();
	var imgFile = '';
	if(extFile=='doc' || extFile=='docx'){
		imgFile = docfile;
	}else if(extFile=='xls' || extFile=='xlsx'){
		imgFile = excelfile;
	}else if(extFile=='ppt' || extFile=='pptx'){
		imgFile = pptffile;
	}else{
		imgFile = 'http://192.168.100.56/mcc2/uploads/'+fileid+'/'+filename;
	}
	return imgFile;
}

var resData = sessionStorage.getItem('filesdata');
resData = JSON.parse(resData);
var fileObj = resData.data;
const Test = ({fileObj}) => (
	<div className="row row row-cards">
    {fileObj.map(fileObj => (
				<div className="col col-sm-6 col-lg-3">
					<div className="card p-3">
						<a className="mb-3">
							<img src={getFileExtension1(fileObj.fileid,fileObj.filename)} alt="Photo by Nathan Guerrero" className="rounded imgSize" />
						</a>
						<div className="d-flex align-items-center px-2">
							<div>
								<div>{fileObj.filename}</div>
								<small className="d-block text-muted">{fileObj.UpdatedOn}</small> 
							</div>
						</div>
					</div>
				</div>
    ))}
  </div>
); 

class Mccdocs extends Component {
  render() {
    return (
		<div className="animated fadeIn">
			<BootstrapTable keyField='id' data={ products } columns={ columns } striped hover condensed />
			<FilePond allowMultiple={true} server=
			{
					{
							url: 'http://192.168.100.56/mcc2/api/uploadFiles',
							process: {
									headers: {
											'authorization': 'Bearer '+sessionStorage.getItem('accessToken')
									},
							}
					}
			}>
			</FilePond>
			<Test fileObj={fileObj}/>
		</div>
    );
  }
}

export default Mccdocs;

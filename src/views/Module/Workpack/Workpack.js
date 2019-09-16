import React, { Component , Fragment } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col } from 'reactstrap'
//import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import {getRequest,postRequest,deleteRequest} from '../../../services/ServerRequest';

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

class AddRowRenderer extends Component {
    constructor(props) {
        super(props);

        this.invokeParentMethod = this.invokeParentMethod.bind(this);
    }

    invokeParentMethod() {
		//http://192.168.100.15:88/dev/dev/slim/public/api/mcc/add
		//
		var dataRequest = { 'tail_id':1789 };
		postRequest('mcc/add',dataRequest).then((result) => {
			responseJson = result.data;
			alert("Record added successfully.");
		});

    }

    render() {
        return (
            <span><button style={{height: 20, lineHeight: 0.5}} onClick={this.invokeParentMethod} className="btn btn-info">Add</button></span>
        );
    }
}
var responseJson="";
var dataRequest = { 'view_type': 1, 'client_id':1,'tail_id':1789,'doc_type':5 };

 postRequest('MCC',dataRequest).then((result) => {
	responseJson = result.data;
	
	if(responseJson){ 
	//	console.log(JSON.stringify(responseJson));
		sessionStorage.setItem('workpackjson',JSON.stringify(responseJson));
	}
	
});
const buttonAdd = ({ onPress, onLongPress, children }) => {
    return (
		<h5>
		  <AddRowRenderer/>
		</h5>
	  );
};

const styles = {
    buttonStyle: {
       alignSelf: "stretch",
        backgroupColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF5693",
        marginLeft: 5,
        marginRight: 5,
        margin:10,
    },
    textStyle: {
        alignSelf: "center",
        color: "#FF5693",
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 10,
        paddingBottom: 10
    }
};


	let products =JSON.parse(sessionStorage.getItem('workpackjson'));
	//products = JSON.parse(products);

const columns = [{
  dataField: 'id',
  text: 'Component Id',
  hidden:true
}, {
  dataField: 'DateGroupID',
  text: 'Year',
  filter: textFilter(),
  editable: false
}, {
  dataField: 'TAIL',
  text: 'Tail',
  filter: textFilter(),
  editable: false
},{
	dataField: 'MSNNO',
	text: 'MSN Number',
	filter: textFilter(),
	editable: false
  },{
  dataField: 'check_id',
  text: 'Check Type',
  filter: textFilter(),
  editable: false
},{
  dataField: 'check_name',
  text: 'Check Name',
  filter: textFilter()
},{
  dataField: 'add_date',
  text: 'Received Date',
  filter: textFilter(),
  editable: false
},
{
	dataField: 'COL_2',
	text: 'Description 1',
	filter: textFilter()
	
  },
  {
	dataField: 'COL_3',
	text: 'Description 2',
	filter: textFilter()
	
  },{
  dataField: 'list_id',
  text: 'Listing Attached',
  filter: textFilter(),
  editor: {
    type: Type.SELECT,
    options: [{
      value: '1',
      label: 'Yes'
    }, {
      value: '2',
      label: 'No'
    }]
}
},{
  dataField: 'work_id',
  text: 'Work Status',
  filter: textFilter(),
  editable: false
},{
  dataField: 'defect_event_ref_id',
  text: 'Defect',
  filter: textFilter(),
  editable: false
}, {
	dataField: 'action',
	isDummyField: true,
	editable: false,
	text: 'View',
	formatter: (cellContent, row) => {
	  return (
		  <h5>
			<ChildMessageRenderer/>
		  </h5>
		);
	}
}];

const defaultSorted = [{
	dataField: 'name',
	order: 'desc'
  }];
  
  const cellEditProps = {
	mode: 'click'
  };
  
 
  const RemoteAll = ({ data, page, sizePerPage, onTableChange, totalSize }) => (
	<div>

		<AddRowRenderer/>	 
	  <BootstrapTable	 insertRow={ true }
		remote
		keyField="id"
		//options = { buttonAdd }
		data={ data }
		columns={ columns }
		defaultSorted={ defaultSorted }
		filter={ filterFactory() }
		pagination={ paginationFactory({ page, sizePerPage, totalSize }) }
		cellEdit={ cellEditFactory(cellEditProps) }
		onTableChange={ onTableChange }
	  >

</BootstrapTable>
	
	</div>
  );
  
  
class Workpack extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  page: 1,
		  data: products,
		  totalSize: products.length,
		  sizePerPage: 10
		};
		this.handleTableChange = this.handleTableChange.bind(this);
	  }
	
	  onPressButton() {
        alert('Pressed | Clicked')
	}
		
	  handleTableChange = (type, { page, sizePerPage, filters, sortField, sortOrder, cellEdit }) => {
		const currentIndex = (page - 1) * sizePerPage;
		setTimeout(() => {
		  // Handle cell editing
		  if (type === 'cellEdit') {
			const { rowId, dataField, newValue } = cellEdit;
			products = products.map((row) => {
			  if (row.id === rowId) {
				const newRow = { ...row };
				newRow[dataField] =  newValue;
				console.log(newRow);
				postRequest('mcc/update',newRow).then((result) => {
					alert("Record updated successfully.");
					
				});
				return newRow;
			  }
			  return row;
			});
		  }
		  let result = products;
	
		  // Handle column filters
		  result = result.filter((row) => {
			let valid = true;
			for (const dataField in filters) {
			  const { filterVal, filterType, comparator } = filters[dataField];
	
			  if (filterType === 'TEXT') {
				if (comparator === Comparator.LIKE) {
				  valid = row[dataField].toString().indexOf(filterVal) > -1;
				} else {
				  valid = row[dataField] === filterVal;
				}
			  }
			  if (!valid) break;
			}
			return valid;
		  });
		  // Handle column sort
		  if (sortOrder === 'asc') {
			result = result.sort((a, b) => {
			  if (a[sortField] > b[sortField]) {
				return 1;
			  } else if (b[sortField] > a[sortField]) {
				return -1;
			  }
			  return 0;
			});
		  } else {
			result = result.sort((a, b) => {
			  if (a[sortField] > b[sortField]) {
				return -1;
			  } else if (b[sortField] > a[sortField]) {
				return 1;
			  }
			  return 0;
			});
		  }
		  this.setState(() => ({
			page,
			data: result.slice(currentIndex, currentIndex + sizePerPage),
			totalSize: result.length,
			sizePerPage
		  }));
		}, 2000);
	  }
	
	  render() {
		const { data, sizePerPage, page } = this.state;
		return (
		  <RemoteAll
			data={ data }
			page={ page }
			sizePerPage={ sizePerPage }
			totalSize={ this.state.totalSize }
			onTableChange={ this.handleTableChange }
			
		  />
		
		);
	  }
	}
export default Workpack;

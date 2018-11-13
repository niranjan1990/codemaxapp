import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllCmodels, getAllMovies } from '../actions/index';
import { Link } from 'react-router';

class Inventory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ''
			//	response: ''
		};
	}

	componentWillMount() {
		this.props.getAllMovies();
	}

	renderList(cmodels) {
		if (cmodels) {
			let returnData = [];
			for (let key in cmodels) {
				let cmodel = cmodels[key];
				//	console.log('inventory view', cmodel.name);
				returnData.push(
					<tr key={cmodel.id} data-toggle="modal" data-target="#myModal">
						<td value={cmodel.manufacturer_id}>{cmodel.manufacturer_id}</td>
						<td value={cmodel.name}>{cmodel.name}</td>
						<td value={cmodel.color}>{cmodel.color}</td>
						<td value={cmodel.year}>{cmodel.year}</td>
					</tr>
				);
			}
			return returnData;
		}
	}

	manuList(manus) {
		if (manus) {
			let Data = [ <p>Manufacturer list</p> ];
			for (let key in manus) {
				let manu = manus[key];
				console.log('manlist', manu.name);
				Data.push(
					<p key={manu.id} value={manu.id}>
						{manu.id}:{manu.name}
					</p>
				);
			}
			return Data;
		}
	}

	detailDailog(manus) {
		if (manus) {
			let Data = [];
			Data.push();
			for (let key in manus) {
				let manu = manus[key];
				console.log('manlist', manu.name);
				Data.push(
					<div key={manu.id} className="modal fade" id="myModal" role="dialog" style={{ display: 'none' }}>
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close" data-dismiss="modal">
										&times;
									</button>
									<h4 className="modal-title">Modal Header</h4>
								</div>
								<div className="modal-body">
									<table className="table table-hover table-dark">
										<thead>
											<tr>
												<th scope="col">manufacturer_id</th>
												<th scope="col">name</th>
												<th scope="col">color</th>
												<th scope="col">year</th>
												<th scope="col">regno</th>
												<th scope="col">note</th>
												<th scope="col">pic1</th>
												<th scope="col">pic2</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>{manu.id}</td>
												<td>{manu.name}</td>
												<td>{manu.color}</td>
												<td>{manu.year}</td>
												<td>{manu.regno}</td>
												<td>{manu.note}</td>
												<td>{manu.pic1}</td>
												<td>{manu.pic2}</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-default" data-dismiss="modal">
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				);
			}
			return Data;
		}
	}

	componentWillMount() {
		this.props.getAllCmodels();
		this.props.getAllMovies();
	}

	render() {
		console.log('cmodels', this.props.cmodels);

		return (
			<div>
				Inventory
				{this.manuList(this.props.manus)}
				<table className="table table-hover table-dark">
					<thead>
						<tr>
							<th scope="col">manufacturer_id</th>
							<th scope="col">name</th>
							<th scope="col">color</th>
							<th scope="col">year</th>
						</tr>
					</thead>
					<tbody>{this.renderList(this.props.cmodels)}</tbody>
				</table>
				{this.detailDailog(this.props.manus)}
			</div>
		);
	}
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
	return {
		manus: state.users.movies,
		cmodels: state.users.getAllCmodels
	};
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser

function matchDispatchToProps(dispatch) {
	return {
		getAllMovies: () => {
			dispatch(getAllMovies());
		},
		getAllCmodels: () => {
			dispatch(getAllCmodels());
		}
	};
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Inventory);

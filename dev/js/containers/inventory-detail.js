import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { getAllMovies, createCmodel, getManuname } from '../actions/index';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			manufacturerid: '',
			color: '',
			year: '',
			regno: '',
			note: '',
			pic1: '',
			pic2: '',
			redirect: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.manufacturerid]: e.target.value,
			[e.target.name]: e.target.value,
			[e.target.color]: e.target.value,
			[e.target.year]: e.target.value,
			[e.target.regno]: e.target.value,
			[e.target.pic1]: e.target.value,
			[e.target.note]: e.target.value,
			[e.target.pic2]: e.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		var data = {
			manufacturer_id: this.state.manufacturerid,
			name: this.state.name,
			color: this.state.color,
			year: this.state.year,
			regno: this.state.regno,
			note: this.state.note,
			pic1: this.state.pic1,
			pic2: this.state.pic2
		};
		console.log('postdata', this.props.createCmodel(data));
		this.setState({ redirect: true });

		/* 	fetch('/api/form-submit-url', {
			method: 'POST',
			body: data
        }); */
	}

	componentWillMount() {
		this.props.getAllMovies();
	}

	renderList(users) {
		if (users) {
			let returnData = [ <option key="default">----</option> ];
			for (let key in users) {
				let user = users[key];
				console.log('manname', user.name);
				returnData.push(
					<option key={user.id} value={user.id}>
						{user.name}
					</option>
				);
			}
			return returnData;
		}
	}

	render() {
		//console.log('manus', this.props.users);
		console.log('cmodel', JSON.stringify(this.props.cmodel));
		const { redirect } = this.state;
		if (redirect && this.props.cmodel == 'Car model record is successfully updated') {
			return <Redirect to="/inventory" />;
		}
		return (
			<div>
				<div>
					<p>* marked as mandatory fields</p>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="manufacturerid">Select manufacturer *</label>
							<select id="manufacturerid" name="manufacturerid" onChange={(e) => this.handleChange(e)}>
								{this.renderList(this.props.users)}
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="name">Enter name *</label>
							<input
								id="name"
								value={this.state.name}
								name="name"
								type="name"
								onChange={(e) => this.handleChange(e)}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="color">Enter color *</label>
							<input
								id="color"
								value={this.state.color}
								name="color"
								type="text"
								onChange={(e) => this.handleChange(e)}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="year">Enter year *</label>
							<input
								id="year"
								value={this.state.year}
								name="year"
								type="text"
								onChange={(e) => this.handleChange(e)}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="regno">Enter regno *</label>
							<input
								id="regno"
								value={this.state.regno}
								name="regno"
								type="text"
								onChange={(e) => this.handleChange(e)}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="note">Enter note</label>
							<input
								id="note"
								value={this.state.note}
								name="note"
								type="text"
								onChange={(e) => this.handleChange(e)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="pic1">Enter pic1</label>
							<input
								id="pic1"
								name="pic1"
								value={this.state.pic1}
								type="text"
								onChange={(e) => this.handleChange(e)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="pic2">Enter pic2</label>
							<input
								id="pic2"
								name="pic2"
								value={this.state.pic2}
								type="text"
								onChange={(e) => this.handleChange(e)}
							/>
						</div>
						<button>Submit Details</button>
					</form>
				</div>
			</div>
		);
	}
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
	return {
		users: state.users.movies,
		cmodel: state.users.createCmodel
	};
}

function matchDispatchToProps(dispatch) {
	return {
		getAllMovies: () => {
			dispatch(getAllMovies());
		},
		createCmodel: (data) => {
			dispatch(createCmodel(data));
		},
		getManuname: (id) => {
			dispatch(getManuname(id));
		}
	};
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);

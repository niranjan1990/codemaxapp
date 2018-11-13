import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { selectUser } from '../actions/index'
import { searchMovie } from '../actions/index';
import { Link } from 'react-router';
import { Redirect } from 'react-router';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: '',
			redirect: true
			//	response: ''
		};
		this.updateState = this.updateState.bind(this);
		this.searchInput = this.searchInput.bind(this);
	}

	updateState(e) {
		this.setState({ data: e.target.value });
	}

	searchInput() {
		const searchData = this.state.data;
		console.log('inputdata', this.state.data);
		this.props.searchMovie(searchData);
	}

	/* renderList(users) {
		console.log('renderlist', users);
		this.setState({ data: users });
		return data;
	} */

	render() {
		console.log('user', this.props.users);
		/* if (!this.props.users) {
			this.setState({ response: this.props.users });
		} */
		const { redirect } = this.state;
		if (redirect && this.props.users == 'manufacturer record is successfully updated') {
			return <Redirect to="/detail" />;
		}
		const users = 'enter the manufacturer';

		//	let search = this.props.movie;
		return (
			<div>
				<div>{users}</div>
				<input
					type="text"
					className="searchText"
					style={{
						width: '50%',
						border: 'none',
						background: 'transparent',
						borderBottom: '1px solid #e3ddd9',
						outline: ' none'
					}}
					onChange={this.updateState}
				/>
				<button onClick={this.searchInput} className="fa fa-search" />
			</div>
		);
	}
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
	return {
		users: state.users.activeMovie
	};
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser

function matchDispatchToProps(dispatch) {
	return {
		searchMovie: (name) => {
			dispatch(searchMovie(name));
		}
	};
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Search);

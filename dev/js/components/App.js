import React from 'react';
import Search from '../containers/search';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';

//require('../../scss/style.scss');

const App = () => (
	<div>
		<div className="container">
			<div className="row">
				<div className="col-md-3" />
				<div className="col-md-6">
					<div className="row">
						<div className="col-md-12">
							<h2>Vehicle Inventory System</h2>
							<Search />
						</div>
					</div>
				</div>
				<div className="col-md-3" />
			</div>
		</div>
	</div>
);

export default App;

import React from 'react';

import InventoryDetails from '../containers/inventory-detail';
import { NavLink } from 'react-router-dom';
//require('../../scss/style.scss');

const Detail = () => (
	<div>
		<div className="container">
			<div className="row">
				<div className="col-md-3" />
				<div className="col-md-6">
					<hr />
					<h2>Enter Manufacturer InventoryDetails</h2>
					<InventoryDetails />
				</div>

				<div className="col-md-3" />
			</div>
		</div>
	</div>
);

export default Detail;

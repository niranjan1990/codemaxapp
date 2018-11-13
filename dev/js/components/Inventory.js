import React from 'react';

import Invent from '../containers/inventory';
//require('../../scss/style.scss');

const Inventory = () => (
	<div>
		<div className="container">
			<div className="row">
				<div className="col-md-3" />
				<div className="col-md-6">
					<hr />
					<h2>Inventory Details</h2>

					<Invent />
				</div>
				<div className="col-md-3" />
			</div>
		</div>
	</div>
);

export default Inventory;

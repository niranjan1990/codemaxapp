import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<p style={{ textAlign: 'center', margin: '10px' }}>
				<NavLink
					to="/"
					style={{ padding: '10px', margin: '10px' }}
					activeStyle={{ borderRadius: '4px', color: 'red', backgroundColor: 'black', padding: '10px' }}
				>
					Home
				</NavLink>
				<NavLink
					to="/detail"
					style={{ padding: '10px', margin: '10px' }}
					activeStyle={{ borderRadius: '4px', color: 'red', backgroundColor: 'blue', padding: '10px' }}
				>
					Fill the Details of Inventory
				</NavLink>
				<NavLink
					to="/inventory"
					style={{ padding: '10px', margin: '10px' }}
					activeStyle={{ borderRadius: '4px', color: 'red', backgroundColor: 'blue', padding: '10px' }}
				>
					Check Inventory
				</NavLink>
			</p>
		</div>
	);
};

export default Navigation;

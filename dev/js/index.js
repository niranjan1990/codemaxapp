import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import allReducers from './reducers';
import Navigation from './components/Navigation';
import Detail from './components/Detail';
import Inventory from './components/Inventory';

import App from './components/App';

const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(thunk, promise, logger));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Navigation />
				<Switch>
					<Route path="/" component={App} exact />
					<Route path="/detail" component={Detail} />
					<Route to="/inventory" component={Inventory} />
					<Route component={Error} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

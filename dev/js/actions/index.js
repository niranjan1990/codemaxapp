import axios from 'axios';

export const selectUser = (user) => {
	console.log('You clicked on user: ', user.first);
	return {
		type: 'USER_SELECTED',
		payload: user
	};
};

export const getManu = () => {
	//console.log(name);
	return function(dispatch) {
		//console.log('calling manu');
		axios({
			method: 'GET',
			url: 'http://localhost:8080/api/manufacturer/get-manufacturer'
			//params: { name: name }
		})
			.then((response) => {
				if (response.data.status) {
					dispatch({
						type: 'GET_MANU',
						payload: response.data
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const getAllMovies = () => {
	return function(dispatch) {
		console.log('calling');
		axios({
			method: 'GET',
			url: 'http://localhost:8080/api/manufacturer/get-manufacturer'
		})
			.then((response) => {
				if (response.data.status) {
					dispatch({
						type: 'GET_MOVIES',
						payload: response.data.data
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const searchMovie = (name) => {
	console.log('sending name', name);
	return function(dispatch) {
		var bodyFormData = new FormData();
		bodyFormData.set('name', name);
		console.log('creating manu');
		axios({
			method: 'POST',
			url: 'http://localhost:8080/api/manufacturer/create-manufacturer',
			config: { headers: { 'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*' } },
			data: bodyFormData
		})
			.then((response) => {
				if (response.data.status) {
					dispatch({
						type: 'GET_MOVIE',
						payload: response.data.data
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const createCmodel = (data) => {
	console.log('sending cmodel', data);
	return function(dispatch) {
		var bodyFormData = new FormData();
		for (var key in data) {
			bodyFormData.append(key, data[key]);
		}
		console.log('creating cmodel');
		axios({
			method: 'POST',
			url: 'http://localhost:8080/api/cmodel/create-cmodel',
			config: { headers: { 'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*' } },
			data: bodyFormData
		})
			.then((response) => {
				if (response.data.status) {
					dispatch({
						type: 'CREATE_CMODEL',
						payload: response.data.data
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const getAllCmodels = () => {
	return function(dispatch) {
		console.log('cmodels calling');
		axios({
			method: 'GET',
			url: 'http://localhost:8080/api/cmodel/get-cmodel'
		})
			.then((response) => {
				if (response.data.status) {
					dispatch({
						type: 'GET_CMODELS',
						payload: response.data.data
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const getManuname = (id) => {
	console.log(id);
	return function(dispatch) {
		console.log('searching movie');
		axios({
			method: 'GET',
			url: 'http://localhost:8080/api/movie/check-movie',
			params: { id: id }
		})
			.then((response) => {
				if (response.data.status) {
					dispatch({
						type: 'GET_MAUNAME',
						payload: response.data.data
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

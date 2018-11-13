export default function(
	state = { movies: {}, activeMovie: {}, searchMovie: {}, createCmodel: {}, getAllCmodels: {}, getManuname: {} },
	action
) {
	switch (action.type) {
		case 'GET_MOVIES':
			return Object.assign({}, state, { movies: action.payload });
			break;
		case 'GET_MOVIE':
			return Object.assign({}, state, { activeMovie: action.payload });
			break;
		case 'SEARCH_MOVIE':
			return Object.assign({}, state, { searchMovie: action.payload });
			break;
		case 'CREATE_CMODEL':
			return Object.assign({}, state, { createCmodel: action.payload });
			break;
		case 'GET_CMODELS':
			return Object.assign({}, state, { getAllCmodels: action.payload });
			break;
		case 'GET_MAUNAME':
			return Object.assign({}, state, { getManuname: action.payload });
	}
	return state;
}

const initialState = {
	visibilityFilter: null,
	todos: []
}

export default function (state = initialState, action){
	switch(action.type){
		case 'GET_TODOS':
			return {...state, todos: action.payload}
		default:
			return state
	}
}
const initialState = {
	visibilityFilter: 'ALL',
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
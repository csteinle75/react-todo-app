import store from 'services/store'
import axios from 'axios'

export function getTodos(){
	axios.get('http://localhost:3001/todos').then(response => {
		store.dispatch({
			type: 'GET_TODOS',
			payload: response.data
		})
	})
}

export function addTodo(todo){
	axios.post('http://localhost:3001/todos', {
			completed: false,
			content: todo
		}
	).then(response => {
		console.log('added todo')
		getTodos()
	})
}

export function deleteTodo(todoid){
	axios.delete('http://localhost:3001/todos/' + todoid).then( response => {
		console.log(response)
		getTodos()
	})
}
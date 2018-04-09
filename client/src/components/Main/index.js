import React, {Component} from 'react'
import {Container, Divider, Button, Input, Segment, Header, Checkbox} from 'semantic-ui-react'
import {connect} from 'react-redux'

//actions
import {addTodo, getTodos, deleteTodo, toggleCompleted} from 'actions/todoActions'

//styles
import './Main.css'

class Main extends Component{
	static defaultProps = {
		todos: []
	}

	componentDidMount(){
		getTodos()
	}
	componentWillReceiveProps(newProps){
		console.log(newProps)
		// BAD - KEEPS CALLING FUNC
		// if (this.props !== newProps) {
		// 	getTodos()
		// }
	}

	handleSubmit(e){
		e.preventDefault()
		const theTodo = document.getElementById('todoInput')
		addTodo(theTodo.value)
		theTodo.value = ''
	}
	handleComplete(e, id, completestatus){
		e.preventDefault()
		toggleCompleted(id, completestatus)
	}
	handleRemove(e,id){
		e.preventDefault()
		deleteTodo(id)
	}

	render(){
		return(
		<Container>
			<Segment id="todos">
				<Header as='h2' textAlign="center">
					To-Do's
				</Header>
				<Divider />
				<Input id="todoInput"  type="text" focus={false} fluid={true} placeholder="Write what you need to do">
					<input />
					<Button type="submit" onClick={this.handleSubmit}>Add Todo</Button>
				</Input>
				<Divider />
				<Segment.Group>
				{/*testing visiblity filter*/}
					{this.props.todos.map(todo =>{
						if (this.props.visiblity === 'COMPLETED'){
							if(todo.completed === true){
								return (
										<Segment.Group horizontal completed={`${todo.completed}`} todoid={todo.id} key={'todo-' + todo.id}>
												<Segment><Checkbox checked={todo.completed} onChange={ e => this.handleComplete(e, todo.id, todo.completed)}/>{todo.content}</Segment>
												<Button color="red" attached="right" icon="remove" onClick={ e => this.handleRemove(e, todo.id)}></Button>
										</Segment.Group>
									)
							} else{return ''}
							
						} else if(this.props.visiblity === 'ACTIVE'){
							if(todo.completed === false){
								return (
										<Segment.Group horizontal completed={`${todo.completed}`} todoid={todo.id} key={'todo-' + todo.id}>
											<Segment><Checkbox checked={todo.completed} onChange={ e => this.handleComplete(e, todo.id, todo.completed)}/>{todo.content}</Segment>
											<Button color="red" attached="right" icon="remove" onClick={ e => this.handleRemove(e, todo.id)}></Button>
										</Segment.Group>
									)
							} else{return ''}

						}else {
							return (
									<Segment.Group horizontal completed={`${todo.completed}`} todoid={todo.id} key={'todo-' + todo.id}>
											<Segment><Checkbox checked={todo.completed} onChange={ e => this.handleComplete(e, todo.id, todo.completed)}/>{todo.content}</Segment>
											<Button color="red" attached="right" icon="remove" onClick={ e => this.handleRemove(e, todo.id)}></Button>
									</Segment.Group>
								)
						}
					})}
						
				</Segment.Group>
			</Segment>
		</Container>
		)
	}
}

function mapStateToProps(state){
	return{
		todos: state.todoReducer.todos,
		visiblity: state.todoReducer.visibilityFilter
	}
}

export default connect(mapStateToProps)(Main)
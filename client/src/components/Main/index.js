import React, {Component} from 'react'
import {Container, Divider, Button, Input, Segment, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'

//actions
import {addTodo, getTodos, deleteTodo} from 'actions/todoActions'

//styles
import './Main.css'

class Main extends Component{
	static defaultProps = {
		todos: []
	}

	componentDidMount(){
		getTodos()
	}



	handleSubmit(e){
		e.preventDefault()
		const theTodo = document.getElementById('todoInput').value
		addTodo(theTodo)
	}

	removeTodo(e,id){
		e.preventDefault()
		console.log(id)
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
					{this.props.todos.map(todo =>  (
							<Segment.Group horizontal completed={`${todo.completed}`} todoid={todo.id} key={'todo-' + todo.id}>
								<Segment>{todo.content}</Segment>
								<Button color="red" attached="right" icon="remove" onClick={ e => this.removeTodo(e, todo.id)}></Button>
							</Segment.Group>
							)
						)}
				</Segment.Group>
			</Segment>
		</Container>
		)
	}
}

function mapStateToProps(state){
	return{
		todos: state.todo.todos
	}
}

export default connect(mapStateToProps)(Main)
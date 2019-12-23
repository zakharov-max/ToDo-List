import React from 'react';
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from '../store/actions';
import { bindActionCreators } from 'redux'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddTodoComponent from "./AddTodoComponent";
import TodoListComponent from "./TodoListComponent";

import imgUrl from '../../img/emptyList.jpg';

class MainComponent extends React.Component {
	render() {
		const { todos, addTodo, toggleTodo, deleteTodo } = this.props;
		return (
			<Grid container
				justify="center"
			>
				<Grid item
					xs={4}
				>
					<Paper>
						<AddTodoComponent addTodo={addTodo} />
						<div style={{
							background: `url(${imgUrl}) no-repeat left top`,
							backgroundSize: '100% auto',
							minHeight: '500px'
						}}
						>
							<TodoListComponent listTodo={todos}
								onCheckTodo={toggleTodo}
								removeTodo={deleteTodo}
							/>
						</div>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addTodo,
		deleteTodo,
		toggleTodo
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)

import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddTodoComponent from "./AddTodoComponent";
import TodoListComponent from "./TodoListComponent";

import imgUrl from '../../img/emptyList.jpg';


// ГЛАВНЫЙ КОМПОНЕНТ, В КОТОРОМ ХРАНИТСЯ СПИСОК ДЕЛ
// И ВСЕ ФУНКЦИИ РАБОТЫ С НИМ
class MainComponent extends React.Component {
	constructor(props) {
		super(props);
		//создаем хранилище
		this.state = {
			listTodo: []
			/*
			* id: string
			* title: string
			* checked: boolean
			* */
		};
		// определяем контекст вызова функций
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.onCheckTodo = this.onCheckTodo.bind(this);
	}

	// описываем работу функции по добавлению элементов в список
	addTodo(titleTodo) {
		// создаем новый элемент
		const todo = {
			id: `${this.state.listTodo.length}${titleTodo}`,
			title: titleTodo,
			checked: false
		};
		// изменяем хранилище
		// что передается в setState?
		this.setState({
			listTodo: this.state.listTodo.concat(todo)
		});
	}

	// описываем работу функции по удалению элементов из списока
	removeTodo(id) {
		this.setState({
			listTodo: this.state.listTodo.filter(todo => todo.id !== id)
		});
	}

	onCheckTodo(id, checked) {
		this.setState({
			listTodo: this.state.listTodo.map(todo => {
				if (todo.id === id) {
					return ({
						...todo,
						checked
					});
				}

				return todo;
			})
		});
	}

	render() {
		return (
			<Grid container
			      justify="center"
			>
				<Grid item
				      xs={4}
				>
					<Paper>
						<AddTodoComponent addTodo={this.addTodo}/>
						<div style={{
								background: `url(${imgUrl}) no-repeat left top`,
								backgroundSize: '100% auto',
								minHeight: '500px'
							 }}
						>
							<TodoListComponent listTodo={this.state.listTodo}
							                   onCheckTodo={this.onCheckTodo}
							                   removeTodo={this.removeTodo}
							/>
						</div>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}

export default MainComponent;

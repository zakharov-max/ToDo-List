import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../store/actions';
import { bindActionCreators } from 'redux'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todotext: ''
        }
    }

    handleChange(e) {
        this.setState({
            todotext: e.target.value
        })
    }

    render() {
        return (
            <div>
                {this.props.todos && this.props.todos.map(todo => (
                    <div>
                        {todo.id}
                        {todo.text}
                    </div>
                ))}
                <div>
                    <input type='text' onChange={(e) => this.handleChange(e)} value={this.state.todotext} />
                    <button onClick={() => { this.props.addTodo(this.state.todotext); this.setState({ todotext: '' }) }}>Add new Todo</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
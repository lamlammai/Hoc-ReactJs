import React from 'react';
import TodoitemsComponent from './TodoitemsComponent';
class TodosComponent extends React.Component {
    render() {
        return(
            <>
                <ul>
                    {this.props.todos.map(todo => (
                        <TodoitemsComponent key={todo.id} todo = {todo} handleChange = {this.props.handleChange} deleteTodo ={this.props.deleteTodo}/>
                    ))}
                </ul>
            </>
        )
    }
}
export default TodosComponent;
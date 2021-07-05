import React from 'react';
class TodoitemsComponent extends React.Component {
    render() {
        const{completed, id, title}= this.props.todo;
        return (
            <>
                <li className="todo-item" >
                    <input className="todo-item-input" type="checkbox" checked={completed} onChange={()=>{this.props.handleChange(id)}}
                    />
                    <span className={completed ? "completed" :null}>{title}</span>
                    <button className="btn-style" onClick={() =>{this.props.deleteTodo(id)}}> X </button>
                </li>
            </>
        )
    }
}
export default TodoitemsComponent;
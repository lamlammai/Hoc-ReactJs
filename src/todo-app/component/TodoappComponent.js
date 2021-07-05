import React from 'react';
import HeaderComponent from '../component/HeaderComponent';
import TodosComponent from '../component/TodosComponent';
import AddtodoComponent from '../component/AddtodoComponent';
import { v4 as uuidv4 } from 'uuid';
class Todoapp extends React.Component {
    state = {
        todos: [
        {
            id: 1,
            title: "Setup development environment",
            completed: true
        },
        {
            id: 2,
            title: "Develop website and add content",
            completed: false
        },
        {
            id: 3,
            title: "Deploy to live server",
            completed: false
        }
        ]
    };
     deleteTodo = id =>{
        // console.log("delêtd" + id);
        this.setState({
            todos  :[
                ...this.state.todos.filter(todo =>{
                    return todo.id !== id;
                })
            ]
        });
    };
    handleCheckboxChange = id =>{
        // console.log("clicked on checkbox with id = "+ id);
        this.setState({
                todos: this.state.todos.map(todo =>{
                    if(todo.id === id){
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
               
            })
    };
    addTodo = title =>{
        const newTodo ={
            id: uuidv4(),
            title:title,
            completed:false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    render() {
        return ( 
            <>
            <div className="container"> 
                <HeaderComponent/>
                <AddtodoComponent addTodo={this.addTodo}/>
                <TodosComponent todos = {this.state.todos} handleChange={this.handleCheckboxChange} deleteTodo = {this.deleteTodo}/>
            </div>
           
           </>
        )
    }
}
export default Todoapp;
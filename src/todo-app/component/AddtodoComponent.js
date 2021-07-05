import React from 'react';

class AddtodoComponent extends React.Component {
    state = {
        title: ""
    };
    onInputChange = e =>{
        this.setState({
            title: e.target.value
        });
    }
    addTodo = e =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        //khi submit xong thì để ô input về trống
        this.setState({
            title:""
        });
    }
    
    render() {
        return (
            <form className="from-container" onSubmit = {this.addTodo}>
                <input type="text" placeholder="Add Todo..." className="input-text"  value={this.state.title} onChange={this.onInputChange}/>
                <input type="submit" value="Submit" className="input-submit" />
            </form>

        );
    }
}
export default AddtodoComponent;

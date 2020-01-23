import uuid from "uuid";
import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = { todo: [], input: "" };
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  add = () => {
    this.setState({
      todo: this.state.todo.concat({
        text: this.state.input,
        complete: false,
        id: uuid()
      }),
      input: ""
    })
  }

  delete = id => {
    this.setState({
      todo: this.state.todo.filter(el => el.id !== id),
    })
  };
  complete= id =>{this.setState({
    todo:this.state.todo.map(el=> el.id== id?{...el, complete:!el.complete} :el )
  })};
  render() {
    return (<div>
      <div className="todoapp">
        <h1>TO DO APP</h1>
        <div className="section">
          <input
            className="input"
            type="text"
            placeholder="Enter new task"
            onChange={this.handleChange}
            value={this.state.input}
            name="name"
          />
          <button type="button" className="add" onClick={this.add}>
            Add
          </button>
        </div>
        </div>
        <div className="todolist">
        <h1 className="text">Let's get some work done!</h1>

        
          <ul className="bloc">
            {this.state.todo.map(el => (
              <li className="list">
                
                <button onClick={() => this.complete(el.id)}>
                  {el.complete ? "Undo" : "Complete"}
                </button>
                <button onClick={() => this.delete(el.id)}>Delete</button>
                <h4 className={!el.complete ? "item":"item2"}>{el.text}</h4>
           
              </li>
            ))}
          </ul>
          </div>
        </div>
    );
  }
}
export default Todo;

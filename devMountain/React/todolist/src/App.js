import React, { Component } from 'react';
import VibeTurtle from './VibeTurtle.jpg';
import './App.css';
import Todo from './components/Todo';
import Completed from './components/Completed';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      completed: ['Wake', 'Sleep']
    }
    this.addItem = this.addItem.bind(this)
    this.completeItem = this.completeItem.bind(this)
  }
  addItem(val) {
    let todoCopy = this.state.todo.slice();
    todoCopy.push(val);
    this.setState({
      todo: todoCopy
    })
  }
  completeItem(index, val){
    let todoCopy = this.state.todo.slice();
    todoCopy.splice(index, 1);
    
    let completedCopy = this.state.completed.slice();
    completedCopy.push(val);
    
    this.setState({
      todo: todoCopy,
      completed: completedCopy
    })

  }
  render() {
    return (
      <div className="App">
        
        <div className="App-header">
          <img src={VibeTurtle} className="App-logo" alt="logo" />
          <h2>Welcome to your cool todo list</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Todo todo_list={this.state.todo} addItem={this.addItem} completeItem={this.completeItem} />
        <Completed completedList={this.state.completed}/>
      </div>
    );
  }
}

export default App;

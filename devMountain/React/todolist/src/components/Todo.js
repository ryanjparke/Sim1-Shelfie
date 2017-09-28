import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state ={
            input: ''
        }
    }

    render() {
        console.log(this.props.todo);
        return (
            <div className='Todo'>
                <h1>Todo</h1>
                <ol className='todo_list'>
                    {
                        this.props.todo_list.map((item, i, arr) => {
                            return (
                                <li onClick={() => this.props.completeItem(i, item)}key={i}>{item}</li>
                            )
                        })
                    }
                </ol>

                <div className='input_container'>
                    <input type='text' value={this.state.input} onChange={(e) => {
                        this.setState({
                            input: e.target.value
                        })
                    }}/>
                    <button onClick={() => this.props.addItem(this.state.input)}>Click Me!!</button>
                </div>
            </div>






        )
    }
}


export default Todo
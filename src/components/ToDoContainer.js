// parent component
import { v4 as uuidv4 } from 'uuid';


import React from 'react';

import TodosList from './TodosList';

import Header from './Header';

import AddTodo from './AddTodo';




// we created a react class component by extending the Component class in the react lib
// inside it, we use render method where JSX is getting returned and being rendered on the screen

class ToDoContainer extends React.Component {
    state = {
        todos: [
        //   {
        //     id: uuidv4(),
        //     title: "Setup development environment",
        //     completed: true
        //   },
        //   {
        //     id: uuidv4(),
        //     title: "Develop website and add content",
        //     completed: false
        //   },
        //   {
        //     id: uuidv4(),
        //     title: "Deploy to live server",
        //     completed: false
        //   }
        ]
       };

    addTodo = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos : [...this.state.todos, newTodo]
        });
    };

    deleteTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
        console.log("deleted", id);
    };
    


    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };
    render() {
        // this render method is different than the ReactDOMl.render()
        return (
            

        // we can't return more than one jsx elements next to each other
        // except we wrap them in a single element. Here <div>

        <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <TodosList todos={this.state.todos}
            handleChange={this.handleChange}
            deleteTodo={this.deleteTodo} />
        </div>

        )
    }
}


export default ToDoContainer;
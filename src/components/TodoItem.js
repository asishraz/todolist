import React from 'react';

// First we will write as a class based component

// class TodoItem extends React.Component {
//     render() {
//         return (
            
//             <li  className="todo-item"> 
//             <input type="checkbox" 
//             checked={this.props.todo.completed}
//             onChange={() => console.log("clicked")} />{this.props.todo.title}
            
//             </li>
//            );
//     }
// }

class TodoItem extends React.Component {
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#c5e2d2",
            textDecoration: "line-through"
           };

           const { completed, id, title } = this.props.todo;
           
           return (
            <li className="todo-item">
            <input
            type="checkbox"
            checked={completed} 
            onChange={() =>
           this.props.handleChange(id)}
            />
            

            <span style={completed ? completedStyle :null}>
            {title}
            </span>
            <button className="btn-style" onClick={() => 
                this.props.deleteTodo(id)}> 
                <i class="fas fa-trash-alt"></i>
            </button>
            </li>
           );
           
    }
}


// Then we will change the class based component to function based component

// function TodoItem(props) {
//     return <li> {props.todo.title }</li>

// }


export default TodoItem;
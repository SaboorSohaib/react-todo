import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
    state = {
      todos: [],
    };

       addTodoItem = (title) => {
         const newTodo = {
           id: uuidv4(),
           title,
           completed: false,
         };
         this.setState({
           todos: [...this.state.todos, newTodo],
         });
       };

       deleteToDo = (id) => {
         this.setState({
           todos: [
             ...this.state.todos.filter((todo) => todo.id !== id),
           ],
         });
       };

       setUpdate = (updatedTitle, id) => {
         this.setState({
           todos: this.state.todos.map((todo) => {
             if (todo.id === id) {
               todo.title = updatedTitle;
             }
             return todo;
           }),
         });
       }

       handleChange = (id) => {
         this.setState((prevState) => ({
           todos: prevState.todos.map((todo) => {
             if (todo.id === id) {
               return {
                 ...todo,
                 completed: !todo.completed,
               };
             }
             return todo;
           }),
         }));
       };

       render() {
         return (
           <div className="container">
             <div className="inner">
               <Header />
               <InputTodo addTodoProps={this.addTodoItem} />
               <TodoList
                 todos={this.state.todos}
                 handleChangeProps={this.handleChange}
                 deleteTodoProps={this.deleteToDo}
                 setUpdate={this.setUpdate}
               />
             </div>
           </div>
         );
       }
}
export default TodoContainer;

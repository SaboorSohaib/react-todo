import React, { Component } from 'react';

class InputTodo extends Component {
    state = {
      title: '',
    };

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    handelSubmit = (e) => {
      e.preventDefault();
      if (this.state.title.trim()) {
        this.props.addTodoProps(this.state.title);
        this.setState({
          title: '',
        });
      } else {
        alert('Please Add Your List ');
      }
    };

    render() {
      return (
        <form onSubmit={this.handelSubmit} className="form-container">
          <input
            type="text"
            className="input-text"
            placeholder="Add Your Todo..."
            value={this.state.title}
            name="title"
            onChange={this.onChange}
          />
          <button className="submit-btn">Submit</button>
        </form>
      );
    }
}

export default InputTodo;

import React, { Component } from "react";

import "./ToDoList.scss";

import ToDoItems from "../ToDoItems";

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(event) {
    event.preventDefault(); //otherwise loads page new

    if (this.inputElement.value !== "") {
      const newItem = {
        text: this.inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    console.log("test", this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            ref={el => {
              this.inputElement = el;
            }}
          />
          <button type="submit">add</button>
        </form>
        <ToDoItems items={this.state.items} />
      </div>
    );
  }
}

export default ToDoList;

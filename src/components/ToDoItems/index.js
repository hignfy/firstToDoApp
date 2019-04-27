import React, { Component } from "react";
import PropTypes from "prop-types";

class ToDoItems extends Component {
  static Proptypes = {
    items: PropTypes.array
  };

  renderItem = item => {
    return <li key={item.key}>{item.text}</li>;
  };

  render() {
    const listItems = this.props.items.map(this.renderItem);
    return <ul>{listItems}</ul>;
  }
}

export default ToDoItems;

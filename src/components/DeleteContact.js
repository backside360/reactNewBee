import React, { Component } from 'react';

export default class Contact extends Component {
  constructor() {
    super();
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
  onDeleteClick = () => {
    alert(this.props.deleteClick);
  };
  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="enter id"
          ref={el => (this.idValue = el)}
        />
        <button onClick={this.onDeleteClick}>delete</button>
      </div>
    );
  }
}

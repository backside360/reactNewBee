import React, { Component } from 'react';

export default class Contact extends Component {
  state = {
    idContact: ''
  };
  onDeleteClick = () => {
    this.props.deleteClick(this.state.idContact);
  };

  handleChange = e => {
    this.setState({ idContact: e.target.value });
  };

  render() {
    return (
      <div className='form'>
        <input
          type='text'
          placeholder='enter id'
          value={this.state.idContact}
          onChange={this.handleChange}
        />
        <button onClick={this.onDeleteClick}>delete</button>
      </div>
    );
  }
}

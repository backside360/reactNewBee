import React, { Component } from 'react';

export default class ChangeName extends Component {
  state = {
    idContact: '',
    nameContact: ''
  };

  handleSubmit = () => {
    const { idContact, nameContact } = this.state;
    this.props.submitNewName(idContact, nameContact);
  };

  handleId = e => {
    this.setState({ idContact: e.target.value });
  };

  handleName = e => {
    this.setState({ nameContact: e.target.value });
  };

  render() {
    return (
      <div className="change">
        <h3>Change Name</h3>
        <input
          type="text"
          onChange={this.handleId}
          value={this.state.idContact}
        />
        <input
          type="text"
          onChange={this.handleName}
          value={this.state.nameContact}
        />
        <button onClick={this.handleSubmit}>Сменить</button>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class AddContact extends Component {
  state = {
    idContact: '',
    nameContact: '',
    jobContact: '',
    osContact: ''
  };

  handleSubmit = () => {
    const { idContact, nameContact, jobContact, osContact } = this.state;
    this.props.submitClick(idContact, nameContact, jobContact, osContact);
  };

  handleChangeId = e => {
    this.setState({ idContact: e.target.value });
  };

  handleChangeName = e => {
    this.setState({ nameContact: e.target.value });
  };

  handleChangeJob = e => {
    this.setState({ jobContact: e.target.value });
  };

  handleChangeOs = e => {
    this.setState({ osContact: e.target.value });
  };

  render() {
    return (
      <div className='form'>
        <input
          type='text'
          placeholder='enter id'
          value={this.state.idContact}
          onChange={this.handleChangeId}i
        />
        <input
          type='text'
          placeholder='enter name'
          value={this.state.nameContact}
          onChange={this.handleChangeName}
        />
        <input
          type='text'
          placeholder='enter job'
          value={this.state.jobContact}
          onChange={this.handleChangeJob}
        />
        <input
          type='text'
          placeholder='enter os'
          value={this.state.osContact}
          onChange={this.handleChangeOs}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

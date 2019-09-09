import React, { Component } from 'react';

export default class ChangeJob extends Component {
  state = {
    idContact: '',
    jobContact: ''
  };

  handleSubmitJob = () => {
      const {idContact, jobContact} = this.state;
      this.props.submitNewJob(idContact, jobContact);
  }

  handleId = e => {
      this.setState ({idContact: e.target.value})
  }

  handleNewJob = e => {
      this.setState ({jobContact: e.target.value})
  }

  render() {
    return (
      <div>
        <h3>Change Job</h3>
        <input
          type="text"
          placeholder="enter id"
          value={this.state.idContact}
          onChange={this.handleId}
        />
        <input
          type="text"
          placeholder="enter new job"
          value={this.state.jobContact}
          onChange={this.handleNewJob}
        />
        <button onClick={this.handleSubmitJob}>Сменить</button>
      </div>
    );
  }
}
